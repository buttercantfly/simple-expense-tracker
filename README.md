# Simple Expense Tracker

source: https://github.com/ivyhungtw/expense-tracker

## Install and Run

### Prerequisites
- Git
- Node.js v14.15.1
- Express
- mongoDB

### 安裝與執行指令

這邊要注意一下 npm 版本，有需要的話可以用 nvm 去做管理 （node 跟 npm 的版本要對應）

:bulb: `npm run seed` Is to have default users, categories, and records set up, run the following script

```bash!
$ git clone https://github.com/ivyhungtw/expense-tracker.git
$ cd expense-tracker
$ npm install
$ npm run seed # for default setup
$ npm install nodemon
$ npm run dev
```

### .env file setting

這邊會把 facebook 跟 google 的連結都關掉，並且 todo-list 改成 expense-tracker（其實沒差 反正 mongoDB 都會開一個 database 給 app）

```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb://localhost/expense-tracker
PORT=3000
GOOGLE_CLIENT_ID=SKIP
GOOGLE_CLIENT_SECRET=SKIP
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback
```

### app.js setting

底下的部分會把原本的 localhost 改成 0.0.0.0
要改 PORT 可以回去 .env 檔案修改

```
// Start and listen on the Express server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App is running on http://0.0.0.0:${PORT}`)
})
```

## Modification

for NCU SEP term project

### Remove Facebook and Google Connections

因為 Facebook 與 Google 帳號的連動不太適合做為測試的一部份，因此我們需要將他們的按鈕移除，並且將 Facebook 與 Google 的連動都 skip 掉

in `login.hbs` :
![image](https://hackmd.io/_uploads/Byy-riS2Je.png)

in `register.hbs` :
![image](https://hackmd.io/_uploads/ryHxBor3ye.png)

in `.env` we skip all account connections:
```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb://localhost/expense-tracker
PORT=3000
GOOGLE_CLIENT_ID=SKIP
GOOGLE_CLIENT_SECRET=SKIP
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback
```
