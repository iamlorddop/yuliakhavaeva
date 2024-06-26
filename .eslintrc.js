module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "google",
    "plugin:react/recommended",
  ],
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "quotes": [2, "double", {"avoidEscape": true}],
  },
};
