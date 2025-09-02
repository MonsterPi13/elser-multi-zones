// @ts-check

/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 93], // GitHub squash merge adds 7 characters
    "body-max-line-length": [1, "always", 100],
  },
};

export default config;
