const fs = require('fs-extra');
const path = require('path');

var dataObject = function() {
  var files = fs.readdirSync(path.join(__dirname, '../data')),
      obj = {};
  obj.posts = {};

  for (var i in files) {
    if (files[i].split("-")[0] === "post") {
      var key = files[i].substr(0, files[i].lastIndexOf('.')),
        val = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/' + files[i])));

      obj.posts[key.split("-")[1]] = val;
    } else {
      key = files[i].substr(0, files[i].lastIndexOf('.'));
      val = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/' + files[i])));

      obj[key] = val;
    }
  }

  fs.writeJSONSync(path.join(__dirname, '../src/data.json'), obj);

  return obj;
}();
