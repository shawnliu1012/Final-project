<template>
  <!-- navbar -->
  <div class="container">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #fff"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            />
          </svg>
          <img
            src="https://i.imgur.com/MCdlcAI.jpg"
            alt=""
            width="50px"
            height="40px"
        /></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">探索</a>
            </li>
          </ul>
          <div class="d-flex navbar-btn">
            <button class="btn btn-light" type="submit">登入</button>
            <button class="btn btn-light" type="submit">註冊</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- project top -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8"></div>
      <div class="col-lg-4 text-start">
        <div class="product-introduce">
          <div class="product-classification">
            <a href="" class="">預購式專案</a> \
            <a href="" class="">科技</a>
          </div>
          <a class="pc-title" href="">
            <h4>
              BLUETTI EB55 野獸級戶外行動電源站｜用「電」解放你的 outdoor 魂！
            </h4>
          </a>
          <span class="proposer"> 提案人 <a href="" class="">蔚藍星球</a>
            <!-- <a href=""> <i class="fab fa-facebook"></i></a>
            <a href=""> <i class="fas fa-compass"></i></a>
            <a href=""> <i class="fab fa-instagram"></i></a> -->
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
    </div>
  </div>
  <!-- footer -->
  <div class="container footer mt-4">
    <div class="row footer-part">
      <div class="col-4 d-flex flex-column text-start">
        <div class="footer-title">社群</div>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
      </div>
      <div class="col-4 d-flex flex-column text-start">
        <div class="footer-title">幫助</div>
        <a href="">常見問答</a>
        <a href="">使用條款</a>
        <a href="">隱私權政策</a>
      </div>
      <div class="col-4 d-flex flex-column text-start">
        <div class="footer-title">關於</div>
        <a href="">關於我們</a>
        <a href="">商標資源</a>
        <div class="trademark">©募思</div>
      </div>
    </div>
    <div class="footer-img-part">
      <a href="footer-svg" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<style lang="scss">


.product-classification {
  margin-bottom: 1rem;
  font-size: 0.8rem;
}

.product-classification a {
  color: #696969;
  font-weight: bold;
}

.product-classification a:hover {
  text-decoration: none;
}
.pc-title {
  text-decoration: none;
  color: #3f3f3f;
}

.pc-title h3 {
  color: #000;
  line-height: 2em;
}

.pc-title:hover {
  text-decoration: none;
}

.proposer {
  display: inline-block;
  
}

.proposer a {
  text-decoration: none;
  padding: 0 0.2rem;
  color: var(--font-color);
  font-weight: bold;
}

.proposer a:not(:first-child) {
  color: #696969;
}

.proposer a:hover {
  text-decoration: none;
  color: #000;
}



.introduce {
  margin: 2rem 0;
}

/* 金額區 */

.product-introduce-money {
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid #dcdcdc;
}

.circle-out {
  width: 4rem;
  height: 4rem;
  background-color: #dcdcdc;
  border-radius: 50%;
  position: relative;
}

/* 需再加一個進度條 讓其可以轉動 */

.circle-out:hover {
  animation: percentage 1s;
}

@keyframes percentage {
  0% {
    background: #dcdcdc;
  }
  20% {
    background: #0f1bcc;
  }
  60% {
    background: #d87e2a;
  }
  80% {
    background: #177a30;
  }
  100% {
    background: #e50030;
  }
}

.circle-in {
  width: 3.5rem;
  height: 3.5rem;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
}

.percentage {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
}

.p-i-amount {
  margin-left: 1rem;
}

.order-amount {
  font-size: 1.5rem;
  font-weight: bold;
}
/* product-middle */
.product-middle {
  margin-top: 1rem;
  padding: 0 9rem;
  display: flex;
}
.product-follow {
  /* 暫時設定 */
  /* background-color:#00008B; */
  width: 660px;
}

.time {
  margin-left: 2rem;
  line-height: 2rem;
  font-size: 0.5rem;
  font-weight: bold;
}

.t-a-1 {
  border: 1px solid #696969;
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
  color: #696969;
  text-decoration: none;
  margin-right: 0.2rem;
}
.t-a-2 {
  border: 1px solid #00008b;
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
  color: #00008b;
  text-decoration: none;
  margin-right: 0.2rem;
}
.t-a-3 {
  border: 1px solid #1e90ff;
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
  color: #1e90ff;
  text-decoration: none;
}
</style>