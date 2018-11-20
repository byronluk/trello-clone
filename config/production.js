//
// this file is here to allow enabling the plugins inert and electrodestaticpaths, overriding the
// settings in production.json, in order to serve the static js and css bundle files from
// the dist directory so you can test your app server locally in production mode.
//
// when running in a real production environment where your static files are most likely served
// by a dedicated cdn server, you might want to turn these plugins off.
//

const servestaticfiles = () => {
  return process.env.static_files_off !== "true";
};

module.exports = {
  "plugins": {
    "inert": {
      "enable": servestaticfiles()
    },
    "electrodestaticpaths": {
      "enable": servestaticfiles()
    }
  }
};

