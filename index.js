const express = require("express");
const app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// ejs 연결
app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

// 서버 주소
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
