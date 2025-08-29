import { cbc } from '@noble/ciphers/aes';
import { Input } from '@noble/hashes/utils';
import { randomBytes } from '@noble/ciphers/webcrypto';
import { pbkdf2 } from '@noble/hashes/pbkdf2';
import { base64, hex } from '@scure/base';
import { sha1 } from '@noble/hashes/sha1';
import { keySize, new_iterations } from './const';

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const encrypt = (msg: string, pass: Input, iterations?: number) => {
  const salt = randomBytes(128 / 8);

  const key = pbkdf2(sha1, pass, salt, { c: iterations ?? new_iterations, dkLen: keySize / 8 });
  const iv = randomBytes(128 / 8);
  const stream = cbc(key, iv);
  const encoder = new TextEncoder();
  const encrypted = stream.encrypt(encoder.encode(msg));
  const saltString = hex.encode(salt);
  const ivString = hex.encode(iv);
  const encryptedString = base64.encode(encrypted);
  return saltString + ivString + encryptedString;
};

export const decrypt = (transitmessage: string, pass: Input, iterations?: number): string => {
  const salt = hex.decode(transitmessage.substring(0, 32));
  const iv = hex.decode(transitmessage.substring(32, 64));
  const encrypted = base64.decode(transitmessage.substring(64));

  const key = pbkdf2(sha1, pass, salt, { c: iterations ?? new_iterations, dkLen: keySize / 8 });
  const stream = cbc(key, iv);
  const decrypted = stream.decrypt(encrypted);
  return new TextDecoder().decode(decrypted);
};
