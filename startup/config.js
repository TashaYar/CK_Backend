const config = require("../config/default.json");

module.exports = function () {
  console.log(config);
  if (!config.jwtKey) {
    throw new Error("notes_vault_jwtKey is not set as environment variable");
  }
  if (!config.mongoDb) {
    throw new Error("notes_vault_mongoDb is not set as environment variable");
  }
};
