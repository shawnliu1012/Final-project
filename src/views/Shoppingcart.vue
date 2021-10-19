<template>
  <div class="shoppingcart">
    <!-- navbar  -->
    <div class="navbar-part">
      <div class="logo-search-part">
        <a href="" class="navbar-logo">
          <div class="logo">
            <div class="logo-item"></div>
          </div>
          <img src="final project logo.JPG" alt="" />
        </a>
        <a href="" class="search-in-navbar">探索</a>
      </div>
      <div class="btn-signpart">
        <input type="button" value="登入" class="btn-sign" />
        <input type="button" value="註冊" class="btn-sign" />
      </div>
    </div>
    <!-- end of navbar -->
    <!-- product container -->
    <div class="container-line"></div>
    <div class="container">
      <div class="container-img">
        <!-- 圖片掛掉 -->
        <img src="https://i.imgur.com/bA2bEix.jpg" alt="" />
      </div>
      <div class="container-span">
        <a class="c-s-title" href="">
          <h4>
            BLUETTI EB55 野獸級戶外行動電源站｜用「電」解放你的 outdoor 魂！
          </h4>
        </a>
        <div class="c-s-s">
          <span class="proposer"
            >提案人 <a href="" class="proposer-name">蔚藍星球</a>
          </span>

          <!-- 預購式專案後續套入(或者沒有這部分) -->
          <span class="c-s-s-project">|</span> 預購式專案
          <div class="c-s-s-m">
            <span class="money">NT$6,902,200 </span>
            <span class="money-target">/目標 NT$500,000 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-line"></div>
    <!-- footer -->
    <footer>
      <div class="footer-part">
        <div class="footer-content">
          <div class="footer-title">社群</div>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
        <div class="footer-content">
          <div class="footer-title">幫助</div>
          <a href="">常見問答</a>
          <a href="">使用條款</a>
          <a href="">隱私權政策</a>
        </div>
        <div class="footer-content">
          <div class="footer-title">關於</div>
          <a href="">關於我們</a>
          <a href="">商標資源</a>
          <div class="trademark">©募思</div>
        </div>
      </div>
    </footer>
    <!-- end of footer -->
  </div>
</template>
<style lang="scss">
// * {
//   margin: 0%;
//   padding: 0%;
// }

// h4 {
//   color: #696969;
// }

/* navbar */

// .navbar-part {
//   background-color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #dcdcdc;
//   padding: 0 9rem;
// }

// .navbar-part a {
//   color: #000;
//   text-decoration: none;
//   padding: 6px 20px;
//   font-size: 12px;
//   background-color: #fff;
//   transition: 0.5s;
//   display: flex;
//   align-items: center;
// }

// .logo-search-part {
//   display: flex;
// }

// .logo {
//   width: 1.5rem;
//   height: 1.5rem;
//   background-color: #000;
//   border-radius: 50%;
// }

// .logo:hover {
//   animation: change 2s;
// }

// @keyframes change {
//   0% {
//     background: #000;
//   }
//   20% {
//     background: #0f1bcc;
//   }
//   60% {
//     background: #d87e2a;
//   }
//   80% {
//     background: #177a30;
//   }
//   100% {
//     background: #000;
//   }
// }

// .logo-item {
//   width: 1rem;
//   height: 1rem;
//   background-color: #fff;
//   border-radius: 50%;
// }

// .search-in-navbar {
//   border-left: 1px solid #dcdcdc;
// }

// .search-in-navbar:hover {
//   color: #00008b;
//   font-weight: bold;
//   text-decoration: none;
// }

// .navbar-logo img {
//   width: 60px;
// }

// .navbar-logo img:hover {
//   opacity: 0.5;
// }

// .btn-sign {
//   color: rgb(116, 111, 111);
//   font-weight: bold;
//   border: none;
//   border-radius: 10%;
//   padding: 0.1rem 1rem;
// }

// .btn-sign:hover {
//   color: #000;
// }

// /* end of navbar */

// /* product-container */
// .container-line {
//   width: 100%;
//   height: 1px;
//   background-color: #dcdcdc;
// }
// .container {
//   padding: 0 9rem;
//   display: flex;
// }

// .container-img img {
//   width: auto;
//   padding-left: 5rem;
// }

// .container-span {
//   padding-left: 1rem;
// }

// .c-s-title h4 {
//   color: #000;
//   line-height: 2em;
//   font-size: 1rem;
//   font-weight: bold;
// }

// .c-s-s {
//   font-size: 0.8rem;
// }

// .proposer-name {
//   color: #0f1bcc;
//   font-weight: bold;
// }

// .c-s-s-m {
//   margin-top: 5rem;
//   font-size: 1rem;
// }

// /* footer */

// footer {
//   background-color: #f5f5f5;
// }

// .footer-part {
//   width: 50%;
//   margin: auto;
//   display: flex;
//   text-align: center;
//   justify-content: space-between;
// }

// .footer-content {
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   padding: 20px 0px;
// }

// .footer-content a:hover {
//   text-decoration: none;
//   color: #000000;
// }

// .footer-title {
//   margin-bottom: 20px;
// }

// .trademark {
//   margin-top: 20px;
//   color: #696969;
// }

/* end of footer */
</style>