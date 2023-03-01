const app = require("./index.js");

const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
