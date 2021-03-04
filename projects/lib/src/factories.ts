import { MemoryStorage, SessionStorage } from './types';

export function createDefaultLogger() {
  return console;
}

export function createDefaultStorage() {
  return typeof sessionStorage !== 'undefined'
    ? new SessionStorage()
    : new MemoryStorage();
}
