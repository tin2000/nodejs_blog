//gọi require("express") như này thì nó sẽ đi vào node_module nó tải rồi nạp ra ngoài rồi lưu vào biến express
const express = require("express");
//express chính là function giờ chỉ cần gọi thôi
//gọi xong trả về 1 cái instant (trả về đối tượng đại diện cho nodejs của bạn)
const app = express();
const port = 3000;
//get giống định nghĩa cái route
app.get("/tin-tuc", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
