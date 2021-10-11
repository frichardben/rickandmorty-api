module.exports = {
  roots: ["src"],
  setupFilesAfterEnv: [
    "./jest.setup.ts"
  ],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  testPathIgnorePatterns: [
    "node_modules/"
  ],
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "ts-jest",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "ts-jest"
  },
  testMatch: [
    "**/*.(spec|test).[tj]s?(x)",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "\\.(css|sass|scss)$": "identity-obj-proxy"
  }
 };