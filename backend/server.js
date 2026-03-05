const app = require("./src/app.js");
const conectDB = require("./src/config/db.js");

conectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
