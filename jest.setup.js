// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest
    .fn()
    .mockImplementation((query) => ({
      matches:
        query === "(min-width: 1024px)" ||
        query === "(max-width: 1024px)",
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
});
import "@testing-library/jest-dom/extend-expect";
