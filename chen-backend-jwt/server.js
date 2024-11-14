// 引入 express 和 cors
const express = require('express');
const cors = require('cors');

// 創建 express 應用程式
const app = express();

// 啟用 CORS
app.use(cors());

// 設定 JSON 請求體解析
app.use(express.json());

// 設定簡單的路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 設定伺服器監聽的 port
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Local:-      http://localhost:${port}`)
});
