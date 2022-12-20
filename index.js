const express = require("express");
const app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", (req, res) => {
  let name = req.query.name;
  // 아래와 같은 객체자료형 방식으로 변수를 적용할 때 이미 선언, 할당된 변수를 넣고 싶다면 값을 쓰지 말고 그냥 변수 이름만 적으면 된다.
  res.render("pages/index.ejs", {
    title: "home",
    name,
  });
});

// 요청
app.get("/create", (req, res) => {
  const title = "about";
  //form (클라이언트)에서 요청한 name 값과 변수 title을 어바웃페이지에게 랜더 한다. 이때 반드시 폼 화면이 새로고침되면서 랜더되는 페이지로 이동된다.
  let name = req.query.name;
  // console.log(name);
  res.render("pages/about.ejs", { title, name });
});

// 커피 제품 페이지 (coffee 주소로 받은 요청 정보를 커피페이지에 랜더한다.)
app.get("/coffee", function (req, res) {
  const title = "coffee";
  let name = req.query.name;
  // console.log(name);
  res.render("pages/coffee.ejs", {
    title: "coffee",
    name,
  });
});

// 서버 주소
const port = 3000;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
