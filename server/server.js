const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const menuController = require("./module_menu/src/controllers/MenuController")

app.use(cors());
app.get("/list", menuController.getMenu);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
