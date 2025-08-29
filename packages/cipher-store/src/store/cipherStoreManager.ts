import Container from 'typedi';

import { encrypt, generateUUID, decrypt } from './utils';
import { storageToken } from '../storage';

export const CYPHERSTORE = 'cypherstore';

export class CipherStoreManager {
  public static async addEntry({ data, password }: { data: any; password: string | Uint8Array }) {
    const entryID = generateUUID();
    const encryptedData = encrypt(data, password);
    const storage = Container.get(storageToken);

    // Retrieve existing entries
    const entries: Record<string, string> = (await storage.get<Record<string, string>>(CYPHERSTORE)) || {};

    // Add or update the entry
    const newEntries = { ...entries, [entryID]: encryptedData };

    // Persist updated entries
    await storage.set(CYPHERSTORE, newEntries);

    // Return the entry for reference
    return { entryID, encryptedData };
  }

  public static async getEntry({
    entryID,
    password,
  }: {
    entryID: string;
    password: string | Uint8Array;
  }): Promise<string | null> {
    const storage = Container.get(storageToken);

    // Retrieve existing entries
    const entries: Record<string, string> = (await storage.get<Record<string, string>>(CYPHERSTORE)) || {};

    const encryptedData = entries[entryID];
    if (!encryptedData) {
      return null;
    }

    try {
      return decrypt(encryptedData, password);
    } catch (error) {
      // If decryption fails, return null (could be wrong password)
      return null;
    }
  }

  public static async removeEntry(entryID: string): Promise<boolean> {
    const storage = Container.get(storageToken);

    // Retrieve existing entries
    const entries: Record<string, string> = (await storage.get<Record<string, string>>(CYPHERSTORE)) || {};

    if (!entries[entryID]) {
      return false; // Entry doesn't exist
    }

    // Remove the entry
    const { [entryID]: removed, ...remainingEntries } = entries;

    // Persist updated entries
    await storage.set(CYPHERSTORE, remainingEntries);

    return true;
  }

  public static async listEntries(): Promise<string[]> {
    const storage = Container.get(storageToken);

    // Retrieve existing entries
    const entries: Record<string, string> = (await storage.get<Record<string, string>>(CYPHERSTORE)) || {};

    return Object.keys(entries);
  }

  public static async hasEntry(entryID: string): Promise<boolean> {
    const storage = Container.get(storageToken);

    // Retrieve existing entries
    const entries: Record<string, string> = (await storage.get<Record<string, string>>(CYPHERSTORE)) || {};

    return entryID in entries;
  }
}
