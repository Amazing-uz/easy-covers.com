const fs = require("fs")

const data = JSON.parse(fs.readFileSync("response.json", "utf8"))

const asins = data.bestSellersList.asinList

fs.writeFileSync(
  "asins.ts",
  "export const ASINS = " + JSON.stringify(asins) + ";"
)