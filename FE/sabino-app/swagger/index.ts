const fs = require("fs");

const url = "http://localhost:8000/swagger.json";
const response = fetch(url);
const apiDefinition = response.json();

fs.writeFileSync("./api-definitions.json", JSON.stringify(apiDefinition));
