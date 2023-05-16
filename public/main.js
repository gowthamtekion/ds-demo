const path = require("path");
const fs = require("fs");

const dirPathPages = path.join(__dirname, "../src/pages/content");
let pagelist = [];

const getPages = () => {
  fs.readdir(dirPathPages, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let page;
      fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
        page = {
          content: contents,
        };
        pagelist.push(page);
        let data = JSON.stringify(pagelist);
        fs.writeFileSync("src/test-data.json", data);
      });
    });
  });
  return;
};

getPages();
