const fs = require("fs");

if (process.env.build === "true") {
  const data = JSON.parse(
    fs.readFileSync("./tsconfig.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  data.compilerOptions.noEmit = true;
  data.compilerOptions.module = "esnext";

  try {
    fs.writeFileSync("./tsconfig.json", JSON.stringify(data, null, 4));
  } catch (error) {
    console.log("Error writing tsconfig with build = true", error);
  }
} else {
  const data = JSON.parse(
    fs.readFileSync("./tsconfig.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  data.compilerOptions.noEmit = false;
  data.compilerOptions.module = "commonjs";

  try {
    fs.writeFileSync("./tsconfig.json", JSON.stringify(data, null, 4));
  } catch (error) {
    console.log("Error writing tsconfig with build = false", error);
  }
}
