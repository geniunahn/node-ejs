const express = require("express");
const app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home 라우팅
app.get("/", (req, res) => {
  const title = "홈페이지";
  const name = "홍길동";
  //   name 변수 값을 index.ejs 문서에 전달한다는 의미다.
  res.render("pages/index.ejs", { title, name });
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
