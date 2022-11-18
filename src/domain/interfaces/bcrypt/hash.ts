export interface Hash {
  createHash(key: string): Promise<string>;
  compareHash(key: string, hash: string): Promise<boolean>;
}
