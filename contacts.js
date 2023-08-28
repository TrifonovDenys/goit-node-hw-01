const fs = require("fs").promises;

fs.readFile("contacts.js").then((data) => console.log(data.toString()));
