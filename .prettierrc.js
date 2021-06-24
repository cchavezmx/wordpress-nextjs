module.exports = {
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
  "prettier/prettier": ["erro", {
    endOfLine: "auto"
  }]
};
