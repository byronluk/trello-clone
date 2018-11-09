const config = require("./base");

module.exports = composer => {
  composer.addPartial("custom-config", config);

  const baseProf = composer.getProfile("_base");
  baseProf.setPartial("custom-config", { order: 35000 });
};
