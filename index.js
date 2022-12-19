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
  //   name 변수 값을 index.ejs 페이지에 전달한다는 의미다.
  res.render("pages/index.ejs", {
    // 아래는 위의 변수를 그대로 가져와서 페이지에 전달하는 방식이다. 반드시 위에서 변수를 만들어야 한다.
    title,
    name,
    // 아래의 왼쪽 이름은 객체의 이름이고 오른쪽 이름은 객체의 값이다. 자료형 객체의 형태로 변수를 index.ejs 문서에게 보내는 방법이다. 따로 const, let 으로 변수를 만들 필요가 없다.
    // title: title,
    // name: name,
  });
});

// about 라우팅
app.get("/about", function (req, res) {
  res.render("pages/about.ejs", {
    title: "About",
    name: "홍길동",
    age: 30,
    address: "안양",
  });
});

// 서버 주소
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
