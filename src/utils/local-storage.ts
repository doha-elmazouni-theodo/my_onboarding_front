/* eslint-disable @typescript-eslint/no-unused-vars */
export function setToLocalStorage<T>(key: string, value: T): void {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    throw new Error("An error occured");
  }
}
export function getFromLocalStorage<T>(key: string): T | null {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  } catch (err) {
    return null;
  }
}
export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    throw new Error("An error occured");
  }
}
export function clearLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (err) {
    throw new Error("An error occured");
  }
}
