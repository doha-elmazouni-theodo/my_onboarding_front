module.exports = {
  "**/*": (filename) => "yarn lint --file " + filename,
};
