var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req: any, res: any, next: any): void {
  res.send("users", { title: "users" });
});

module.exports = router;
