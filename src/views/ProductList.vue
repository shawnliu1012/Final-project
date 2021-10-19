<template>
  <div class="ProductList">
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
    <!-- product -->
    <!-- product-top -->
    <div class="product">
      <div class="product-top-page">
        <div class="product-img">
          <!-- 圖片掛掉 -->
          <img src="https://i.imgur.com/bA2bEix.jpg" alt="" />
        </div>
        <div class="product-introduce">
          <div class="product-classification">
            <a href="" class="p-c-p">預購式專案</a> \
            <a href="" class="p-c-c">科技</a>
          </div>
          <a class="pc-title" href="">
            <h3>
              BLUETTI EB55 野獸級戶外行動電源站｜用「電」解放你的 outdoor 魂！
            </h3>
          </a>
          <span class="proposer"
            >提案人 <a href="" class="proposer-name">蔚藍星球</a>
            <a href=""> <i class="fab fa-facebook"></i></a>
            <a href=""> <i class="fas fa-compass"></i></a>
            <a href=""> <i class="fab fa-instagram"></i></a>
          </span>
          <p class="introduce">
            海外儲能電源領導品牌 BLUETTI ，全台首發推出【 EB55
            野獸級戶外行動電源站】一機搞定你的戶外用電需求，537Wh / 700W 具備 AC
            市用插座及 DC 快充接孔
          </p>
          <div class="product-introduce-money">
            <div class="circle-out">
              <div class="circle-in"><span class="percentage">80%</span></div>
            </div>
            <div class="p-i-amount">
              <p class="pre-order">預購金額</p>
              <p class="order-amount">
                NT$ <span class="amount">3,66,000</span>
              </p>
              <p class="target">
                目標 NT$ <span class="target-amount">5,00,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- product middle -->
      <div class="product-middle">
        <div class="product-follow"></div>
        <div class="time">
          <div class="t-people">
            贊助人數 <span class="t-p-amount">247</span>
          </div>
          <div class="t-time">
            剩餘時間 <span class="t-t-amount">45</span>天
          </div>
          <div class="t-course">
            時程 <span class="t-c-amount">2021/09/30 12:00</span>~<span
              class="t-c-amount"
              >2021/11/16 02:00</span
            >
          </div>
          <div class="time-a">
            <a class="t-a-1" href=""
              ><i class="fas fa-comment-alt"></i> 聯絡提案人</a
            >
            <a class="t-a-2" href=""><i class="fas fa-share-alt"></i> 臉書</a>
            <a class="t-a-3" href=""><i class="fas fa-share-alt"></i> 推特</a>
          </div>
        </div>
      </div>
      <!-- product-bottom -->
      <div class="product-bottom">
        <div class="content-choose">
          <a href=""><div>專案內容</div></a>
          <a href=""
            ><div>專案更新</div>
            <span>1</span></a
          >
          <a href=""
            ><div>留言</div>
            <span>6</span></a
          >
          <a href=""
            ><div>常見問答</div>
            <span>10</span></a
          >
        </div>
        <div class="sponsor">
          <a href="">贊助專案</a>
        </div>
      </div>
      <div class="product-container">
        <div class="container-img">
          <img src="https://i.imgur.com/BA7hkCA.gif" alt="" />
          <img src="https://i.imgur.com/PLK1ANd.jpg" alt="" />
          <img src="https://i.imgur.com/PPMfOht.jpg" alt="" />
          <img src="https://i.imgur.com/zWDvc2h.jpg" alt="" />
          <img src="https://i.imgur.com/UTgga4v.jpg" alt="" />
          <img src="https://i.imgur.com/PbN2Wp9.gif" alt="" />
          <img src="https://i.imgur.com/pBVlEIm.gif" alt="" />
          <img src="https://i.imgur.com/Vclkyrm.gif" alt="" />
          <img src="https://i.imgur.com/UUlZ86b.jpg" alt="" />
        </div>
        <div class="container-projects">
          <a class="c-p-1" href=""></a>
          <a class="c-p-1" href=""></a>
          <a class="c-p-1" href=""></a>
        </div>
      </div>
    </div>
    <!-- end of product -->
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
//   /* 確定用字為微軟正黑體 */
//   font-family: "微軟正黑體", sans-serif, serif;
// }

// h3 {
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

/* end of navbar */

/* product */

/* product-top */
/* .product {
    width: 100%;

} */
/* .product {
    
} */
// .product-top-page {
//   margin-top: 2rem;
//   padding: 0 9rem;
//   display: flex;
//   /* flex-wrap: wrap; */
// }

/* 先鎖定圖片大小 之後再細條 */
// .product-img img {
//   width: 660px;
//   height: 370px;
//   border-radius: 1%;
//   /* flex: 2; */
// }

// .product-introduce {
//   margin-left: 2rem;
// }

// .product-classification {
//   margin-bottom: 1rem;
//   font-size: 0.8rem;
// }

// .product-classification a {
//   color: #696969;
//   font-weight: bold;
// }

// .product-classification a:hover {
//   text-decoration: none;
// }
// .pc-title {
//   text-decoration: none;
// }

// .pc-title h3 {
//   color: #000;
//   line-height: 2em;
// }

// .pc-title:hover {
//   text-decoration: none;
// }

// .proposer {
//   display: inline-block;
//   /* margin-bottom: 1rem; */
// }

// .proposer a {
//   text-decoration: none;
//   padding: 0 0.2rem;
// }

// .proposer a:not(:first-child) {
//   color: #696969;
// }

// .proposer a:hover {
//   text-decoration: none;
//   color: #000;
// }

// .proposer-name {
//   color: #0f1bcc;
//   font-weight: bold;
// }

// .introduce {
//   margin: 2rem 0;
// }

// /* 金額區 */

// .product-introduce-money {
//   display: flex;
//   padding-bottom: 2rem;
//   border-bottom: 1px solid #dcdcdc;
// }

// .circle-out {
//   width: 4rem;
//   height: 4rem;
//   background-color: #dcdcdc;
//   border-radius: 50%;
//   position: relative;
// }

// /* 需再加一個進度條 讓其可以轉動 */

// .circle-out:hover {
//   animation: percentage 1s;
// }

// @keyframes percentage {
//   0% {
//     background: #dcdcdc;
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
//     background: #e50030;
//   }
// }

// .circle-in {
//   width: 3.5rem;
//   height: 3.5rem;
//   background-color: #fff;
//   border-radius: 50%;
//   position: absolute;
//   top: 0.25rem;
//   right: 0.25rem;
// }

// .percentage {
//   position: absolute;
//   top: 0.85rem;
//   right: 0.85rem;
// }

// .p-i-amount {
//   margin-left: 1rem;
// }

// .order-amount {
//   font-size: 1.5rem;
//   font-weight: bold;
// }
// /* product-middle */
// .product-middle {
//   margin-top: 1rem;
//   padding: 0 9rem;
//   display: flex;
// }
// .product-follow {
//   /* 暫時設定 */
//   /* background-color:#00008B; */
//   width: 660px;
// }

// .time {
//   margin-left: 2rem;
//   line-height: 2rem;
//   font-size: 0.5rem;
//   font-weight: bold;
// }

// .t-a-1 {
//   border: 1px solid #696969;
//   border-radius: 0.2rem;
//   padding: 0.2rem 0.6rem;
//   color: #696969;
//   text-decoration: none;
//   margin-right: 0.2rem;
// }
// .t-a-2 {
//   border: 1px solid #00008b;
//   border-radius: 0.2rem;
//   padding: 0.2rem 0.6rem;
//   color: #00008b;
//   text-decoration: none;
//   margin-right: 0.2rem;
// }
// .t-a-3 {
//   border: 1px solid #1e90ff;
//   border-radius: 0.2rem;
//   padding: 0.2rem 0.6rem;
//   color: #1e90ff;
//   text-decoration: none;
// }
// /* product-bottom */
// .product-bottom {
//   background-color: #fff;
//   border-top: 1px solid #dcdcdc;
//   border-bottom: 1px solid #dcdcdc;
//   padding: 1.5rem 9rem;
//   margin: 3rem 0rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: sticky;
//   top: 0;
// }

// /* .content-choose {
//     padding-right: 1rem;
// } */
// .content-choose a {
//   text-decoration: none;
//   margin-right: 1.5rem;
//   color: #696969;
// }

// .content-choose a div {
//   display: inline-block;
//   margin-right: 0.8rem;
// }
// /* outline不同顏色 注意 */
// .sponsor {
//   border: 2px double #41aa5c;
//   border-radius: 0.2rem;
//   padding: 0.5rem 7rem;
//   transition: transform 1s ease;
// }

// .sponsor a {
//   color: #41aa5c;
//   text-decoration: none;
// }

// .sponsor:hover {
//   transform: scale(1.1);
//   cursor: pointer;
//   font-weight: bold;
// }
// /* product-container */
// .product-container {
//   padding: 0 9rem;
//   width: auto;
//   display: flex;
// }

// .container-img {
//   margin-right: 2rem;
//   width: auto;
//   overflow: hidden;
// }

// .c-p-1 {
//   display: inline-block;
//   width: 18rem;
//   height: 28rem;
//   border: 1px solid #696969;
//   margin: 1rem 0;
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

// .footer-content a {
//   text-decoration: none;
//   /* 此處看是否與首頁統一 */
//   color: #1e90ff;
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

// /* end of footer */

// /* RWD */

// @media screen and (max-width: 320px) {
//   /* .product-top-page {
//         width: 75%;
//     } */
//   .footer-part {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     text-align: start;
//   }
//   .footer-content {
//     width: 100%;
//   }
// }

// @media screen and (min-width: 320px) and (max-width: 840px) {
//   /* .product-top-page {
//         width: 75%;
//     } */
//   .footer-part {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     text-align: start;
//   }
// }

/* end of RWD */
</style>