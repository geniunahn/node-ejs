const express = require("express");
const app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", (req, res) => {
  res.render("pages/index.ejs", {
    title: "About",
  });
});

// 요청
app.get("/create", (req, res) => {
  const title = "어바웃";
  //form (클라이언트)에서 요청한 name 값과 변수 title을 어바웃페이지에게 랜더 한다. 이때 반드시 폼 화면이 새로고침되면서 랜더되는 페이지로 이동된다.
  let name = req.query.name;
  console.log(name);
  res.render("pages/about.ejs", { title, name });
});

// 커피 제품 페이지 (coffee 주소로 받은 요청 정보를 커피페이지에 랜더한다.)
app.get("/coffee", function (req, res) {
  const title = "커피";
  let name = req.query.name;
  console.log(name);
  res.render("pages/coffee.ejs", { title, name });
});

// 서버 주소
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
