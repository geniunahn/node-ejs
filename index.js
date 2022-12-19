const express = require("express");
const app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// ejs 문서로 연결하는 경로, 라우팅
app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

// about 라우팅
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

// 서버 주소
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
