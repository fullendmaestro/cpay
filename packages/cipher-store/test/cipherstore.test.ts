import Container from 'typedi';
import expect from 'expect.js';

import { CipherStoreManager, CYPHERSTORE } from '../src/store/cipherStoreManager';
import { initCypherStorage, StorageLayer } from '../src/storage';

// Mock storage for testing
class MockStorage implements StorageLayer {
  private storage: Map<string, any> = new Map();

  async get<T = string>(key: string): Promise<T> {
    return this.storage.get(key) as T;
  }

  async set<T = string>(key: string, value: T): Promise<void> {
    this.storage.set(key, value);
  }

  async remove(key: string): Promise<void> {
    this.storage.delete(key);
  }

  // Helper method for testing
  clear() {
    this.storage.clear();
  }
}

describe('CipherStoreManager', () => {
  let mockStorage: MockStorage;

  beforeEach(() => {
    mockStorage = new MockStorage();
    initCypherStorage(mockStorage);
  });

  afterEach(() => {
    mockStorage.clear();
    Container.reset();
  });

  describe('addEntry', () => {
    it('should add a new entry to an empty cypherstore', async () => {
      const testData = { username: 'testuser', password: 'testpass' };
      const encryptionPassword = 'masterPassword123';

      const result = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password: encryptionPassword,
      });

      // Verify result structure
      expect(result).to.be.an('object');
      expect(result.entryID).to.be.a('string');
      expect(result.encryptedData).to.be.a('string');
      expect(result.entryID).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      expect(result.encryptedData).to.not.equal(JSON.stringify(testData)); // Should be encrypted

      // Verify entry was stored - properly type the stored entries
      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(storedEntries).to.be.an('object');
      expect(storedEntries[result.entryID]).to.be.a('string');
      expect(storedEntries[result.entryID]).to.equal(result.encryptedData);
    });

    it('should add multiple entries to the cypherstore', async () => {
      const testData1 = { username: 'user1', password: 'pass1' };
      const testData2 = { username: 'user2', password: 'pass2' };
      const encryptionPassword = 'masterPassword123';

      const result1 = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData1),
        password: encryptionPassword,
      });

      const result2 = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData2),
        password: encryptionPassword,
      });

      // Verify both entries are stored
      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(Object.keys(storedEntries)).to.have.length(2);
      expect(storedEntries[result1.entryID]).to.be.a('string');
      expect(storedEntries[result2.entryID]).to.be.a('string');
      expect(result1.entryID).to.not.equal(result2.entryID);
    });

    it('should handle different password types (string and Uint8Array)', async () => {
      const testData = { test: 'data' };

      // Test with string password
      const result1 = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password: 'stringPassword',
      });

      // Test with Uint8Array password
      const uint8Password = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
      const result2 = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password: uint8Password,
      });

      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(storedEntries[result1.entryID]).to.be.a('string');
      expect(storedEntries[result2.entryID]).to.be.a('string');
      expect(storedEntries[result1.entryID]).to.not.equal(storedEntries[result2.entryID]); // Different encryption
    });

    it('should handle empty data', async () => {
      const emptyData = '';
      const encryptionPassword = 'masterPassword123';

      const result = await CipherStoreManager.addEntry({
        data: emptyData,
        password: encryptionPassword,
      });

      expect(result.entryID).to.be.a('string');
      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(storedEntries[result.entryID]).to.be.a('string');
    });

    it('should preserve existing entries when adding new ones', async () => {
      // Pre-populate storage with existing entry
      const existingEntries: Record<string, string> = { 'existing-id': 'existing-encrypted-data' };
      await mockStorage.set(CYPHERSTORE, existingEntries);

      const testData = { new: 'entry' };
      const encryptionPassword = 'masterPassword123';

      const result = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password: encryptionPassword,
      });

      // Verify both old and new entries exist
      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(Object.keys(storedEntries)).to.have.length(2);
      expect(storedEntries['existing-id']).to.equal('existing-encrypted-data');
      expect(storedEntries[result.entryID]).to.be.a('string');
      expect(storedEntries[result.entryID]).to.not.equal(JSON.stringify(testData));
    });
  });

  describe('getEntry', () => {
    it('should decrypt and return the correct data', async () => {
      const testData = { username: 'testuser', password: 'testpass' };
      const encryptionPassword = 'masterPassword123';
      const dataString = JSON.stringify(testData);

      // Add an entry
      const { entryID } = await CipherStoreManager.addEntry({
        data: dataString,
        password: encryptionPassword,
      });

      // Retrieve and decrypt the entry
      const decryptedData = await CipherStoreManager.getEntry({
        entryID,
        password: encryptionPassword,
      });

      expect(decryptedData).to.equal(dataString);
      expect(JSON.parse(decryptedData!)).to.eql(testData);
    });

    it('should return null for non-existent entry', async () => {
      const result = await CipherStoreManager.getEntry({
        entryID: 'non-existent-id',
        password: 'somePassword',
      });

      expect(result).to.be(null);
    });

    it('should return null for wrong password', async () => {
      const testData = { test: 'data' };
      const correctPassword = 'correctPassword';
      const wrongPassword = 'wrongPassword';

      // Add an entry
      const { entryID } = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password: correctPassword,
      });

      // Try to decrypt with wrong password
      const result = await CipherStoreManager.getEntry({
        entryID,
        password: wrongPassword,
      });

      expect(result).to.be(null);
    });
  });

  describe('removeEntry', () => {
    it('should remove an existing entry', async () => {
      const testData = { test: 'data' };
      const password = 'testPassword';

      // Add an entry
      const { entryID } = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password,
      });

      // Verify entry exists
      expect(await CipherStoreManager.hasEntry(entryID)).to.be(true);

      // Remove the entry
      const removed = await CipherStoreManager.removeEntry(entryID);
      expect(removed).to.be(true);

      // Verify entry no longer exists
      expect(await CipherStoreManager.hasEntry(entryID)).to.be(false);
      const storedEntries = await mockStorage.get<Record<string, string>>(CYPHERSTORE);
      expect(storedEntries[entryID]).to.be(undefined);
    });

    it('should return false for non-existent entry', async () => {
      const removed = await CipherStoreManager.removeEntry('non-existent-id');
      expect(removed).to.be(false);
    });
  });

  describe('listEntries', () => {
    it('should return empty array for empty cypherstore', async () => {
      const entries = await CipherStoreManager.listEntries();
      expect(entries).to.be.an('array');
      expect(entries).to.have.length(0);
    });

    it('should return all entry IDs', async () => {
      const testData1 = { test: 'data1' };
      const testData2 = { test: 'data2' };
      const password = 'testPassword';

      // Add multiple entries
      const { entryID: id1 } = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData1),
        password,
      });
      const { entryID: id2 } = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData2),
        password,
      });

      const entries = await CipherStoreManager.listEntries();
      expect(entries).to.have.length(2);
      expect(entries).to.contain(id1);
      expect(entries).to.contain(id2);
    });
  });

  describe('hasEntry', () => {
    it('should return true for existing entry', async () => {
      const testData = { test: 'data' };
      const password = 'testPassword';

      // Add an entry
      const { entryID } = await CipherStoreManager.addEntry({
        data: JSON.stringify(testData),
        password,
      });

      expect(await CipherStoreManager.hasEntry(entryID)).to.be(true);
    });

    it('should return false for non-existent entry', async () => {
      expect(await CipherStoreManager.hasEntry('non-existent-id')).to.be(false);
    });
  });
});
