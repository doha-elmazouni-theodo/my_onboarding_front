import {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "~/utils/local-storage";

describe("Local Storage Utils", () => {
  const TEST_KEY = "test-theme";
  const TEST_VALUE = "dark";

  beforeEach(() => {
    localStorage.clear();
  });

  it("should set a value to localStorage", () => {
    setToLocalStorage(TEST_KEY, TEST_VALUE);

    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(TEST_VALUE));
  });

  it("should get a value from localStorage", () => {
    localStorage.setItem(TEST_KEY, JSON.stringify(TEST_VALUE));

    const storedValue = getFromLocalStorage<string>(TEST_KEY);
    expect(storedValue).toBe(TEST_VALUE);
  });

  it("should delete a value from localStorage", () => {
    localStorage.setItem(TEST_KEY, JSON.stringify(TEST_VALUE));

    removeFromLocalStorage(TEST_KEY);

    expect(localStorage.getItem(TEST_KEY)).toBe(null);
  });

  it("should clear all values from localStorage", () => {
    localStorage.setItem("key1", "value1");
    localStorage.setItem("key2", "value2");

    clearLocalStorage();

    expect(localStorage.length).toBe(0);
    expect(localStorage.getItem("key1")).toBe(null);
    expect(localStorage.getItem("key2")).toBe(null);
  });
});
