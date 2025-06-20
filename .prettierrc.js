module.exports = {
  overrides: [
    {
      files: "*.md",
      options: {
        parser: "mdx",
      },
    },
    {
      files: "*.mdx",
      options: {
        parser: "mdx",
        proseWrap: "always",
        printWidth: 80,
      },
    },
  ],
};
