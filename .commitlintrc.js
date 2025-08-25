module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style changes (formatting, missing semicolons, etc.)
        "refactor", // Code changes that neither fixes a bug nor adds a feature
        "test", // Adding tests or correcting existing tests
        "chore", // Changes to the build process or auxiliary tools
        "revert", // Revert a previous commit
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
  },
};
