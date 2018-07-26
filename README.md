# gulp_basic_-structure
## gulp基本開發架構
## 使用說明
先用 npm install 裝好模組即可服用
```
npm install
```
npm start 後就會開始執行watch的功能，但是沒有 hot reload 的功能，更新完後必須 reload 瀏覽器
```
npm start 
```
專案裡已建置 src 資料夾 ，裡面已分類好資料夾，各包含一隻 main.js 和 main.sass ， js檔會自動被打包成一支 main.js , sass則會被轉譯後存在dist/css
資料夾中，要如果引用js或css可以在外面的index.hmtl模板進行設定

資料夾叫構圖：
<img src="螢幕快照 2018-07-26 下午1.54.23.png" >
## 功能
- watch 所有 hmtl , sass , js , image 檔案 並且進行打包
- 有引入 babel 模組 , 所以可以解譯 ES6 語法 ，但是 Jsx 和 ES6 以上語法無法解譯  
