<template>
  <!-- navbar -->
  <!-- 桌機板 -->
  <nav class="navbar navbar-expand navbar-light" style="background-color: #fff">
    <div class="container-fluid d-none d-md-block desktop-nav-part">
      <div class="navbar" id="navbarSupportedContent">
        <div class="d-flex align-items-center">
          <router-link to="/" class="navbar-brand">
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
            <img
              src="https://i.imgur.com/Cqngd9w.png"
              alt=""
              width="50px"
              height="40px"
            />
          </router-link>

          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/explore" class="nav-link">探索</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-btn">
          <button class="btn btn-light" type="submit">登入</button>
          <button class="btn btn-light" type="submit">註冊</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- 手機版navbar -->
  <nav
    class="navbar navbar-expand navbar-light phone-nav-top-part"
    style="background-color: #fff"
  >
    <div class="container-fluid d-md-none">
      <router-link to="/" class="navbar-brand">
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
        <img
          src="https://i.imgur.com/Cqngd9w.png"
          alt=""
          width="50px"
          height="40px"
        />
      </router-link>
      <div class="navbar" id="navbarSupportedContent">
        <div class="navbar-btn">
          <button class="btn btn-light" type="submit">登入</button>
          <button class="btn btn-light" type="submit">註冊</button>
        </div>
      </div>
    </div>
  </nav>
  <nav
    class="navbar navbar-expand navbar-light d-md-none phone-nav-bottom-part"
    style="background-color: #fff"
  >
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/explore" class="nav-link">探索</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <!-- product container -->
  <div class="container-line"></div>
  <div class="container shoppingcart d-none d-lg-block">
    <div class="row">
      <div class="col-lg-4 container-img"></div>
      <div class="col-lg-8 container-span">
        <a class="c-s-title" href="">
          <h4>
            BLUETTI EB55 野獸級戶外行動電源站｜用「電」解放你的 outdoor 魂！
          </h4>
        </a>
        <div class="c-s-s">
          <span class="proposer"
            >提案人 <a href="" class="proposer-name">蔚藍星球</a>
          </span>
          <span class="c-s-s-project">|</span> 預購式專案
          <div class="c-s-s-m">
            <span class="money">NT$6,902,200 </span>
            <span class="money-target">/目標 NT$500,000 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- product container rwd -->
  <div class="container shoppingcart-phone">
    <div class="row">
      <div class="col-sm-12 container-img"></div>
      <div class="col-sm-12 container-span">
        <a class="c-s-title" href="">
          <h4>
            BLUETTI EB55 野獸級戶外行動電源站｜用「電」解放你的 outdoor 魂！
          </h4>
        </a>
        <div class="c-s-s">
          <span class="proposer"
            >提案人 <a href="" class="proposer-name">蔚藍星球</a>
          </span>
          <span class="c-s-s-project">|</span> 預購式專案
          <div class="c-s-s-m">
            <span class="money">NT$6,902,200 </span>
            <span class="money-target">/目標 NT$500,000 </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-line"></div>
<!-- 方案選擇區 -->
<div class="container">
    <div class="more"></div>
    <div>
        <div class="program">
          <div class="c-p-1 text-start">
            <img src="https://i.imgur.com/Mwlp2ZX.jpg" />
            <div class="program-money">NT$15,900</div>
            <div class="program-already">
              <span class="program-already-1">剩餘91份</span>
              <span class="program-already-2"
                >已被贊助
                <span class="p-time">9</span>
                /100次
              </span>
            </div>
            <div class="program-word">
              <p>
                【限量 | 64折晚鳥價】 <br />原價$24,900 | 現省$9,000
                <br />
                #現在買不算晚的晚鳥價
              </p>
              <p>
                方案內容：
                <br />
                ◆ BLUETTI EB55 行動電源站 x1
                <br />
                ◆ AC電源變壓器 x1
                <br />
                ◆ 車載點菸充電線(Car to XT60-F) x1
                <br />
                ◆ 太陽能板充電線(MC4 to XT60-F) x1
                <br />
                ◆ 線材收納束帶 x1
                <br />
                ◆ 說明書 x1
                <br />
                ◆ 產品保固卡 x1
              </p>
              <p>
                -
                <br />
                ✓ 嘖嘖平台購買，享「免運」優惠
                <br />
                ✓ 本機保固時間 18 個月
                <br />
                ✓ 將依下單順序陸續出貨
                <br />
                ✓ 一律採用電子發票
                <br />
                ✓ 若需開立統編/載具請填寫於備註欄
                <br />
                ✓ 蔚藍星球台灣總代理專人客服
              </p>
            </div>
            <div class="choose-program">
              <div class="c-p-word">可選擇加購商品</div>
            </div>
            <div class="program-finish-time">預計於 2022 年三月實現</div>
          </div>
        </div>
    </div>
</div>
  <div class="line"></div>
  <!-- footer -->
  <div class="container footer">
    <div class="row footer-part gy-4">
      <div class="col-lg-4 d-flex flex-column text-start">
        <div class="footer-title">社群</div>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
      </div>
      <div class="col-lg-4 d-flex flex-column text-start">
        <div class="footer-title">幫助</div>
        <a href="">常見問答</a>
        <a href="">使用條款</a>
        <a href="">隱私權政策</a>
      </div>
      <div class="col-lg-4 d-flex flex-column text-start">
        <div class="footer-title">關於</div>
        <a href="">關於我們</a>
        <a href="">商標資源</a>
        <div class="trademark">©募思</div>
      </div>
    </div>
    <div class="footer-img-part">
      <button class="btn btn-outline-light" @click="goTop()">
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
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.container-line {
  border-bottom: 1px solid #dcdcdc;
}
.shoppingcart {
  .container-img {
    width: 18rem;
    height: 10rem;
    background-image: url("https://i.imgur.com/q8fS0nq.png");
    background-size: cover;
    background-position: center;
  }
  .container-span {
    padding-left: 1rem;
    text-align: left;
    a {
      text-decoration: none;
      h4 {
        color: #000;
        line-height: 2em;
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .c-s-s {
      font-size: 0.8rem;
      .proposer-name {
        color: #0f1bcc;
        font-weight: bold;
      }
      .c-s-s-m {
        margin-top: 3rem;
        font-size: 1rem;
        .money {
          font-weight: bold;
        }
      }
    }
  }
}
// product rwd
@media screen and (min-width: 992px) {
  .shoppingcart-phone {
    display: none;
  }
}
@media screen and (max-width: 992px) {
  .shoppingcart-phone {
    .container-img {
      height: 15rem;
      background-image: url("https://i.imgur.com/q8fS0nq.png");
      background-size: cover;
      background-position: center;
    }
    .container-span {
      padding-left: 1rem;
      text-align: left;
      a {
        text-decoration: none;
        h4 {
          color: #000;
          line-height: 2em;
          font-size: 1rem;
          font-weight: bold;
        }
      }
      .c-s-s {
        font-size: 0.8rem;
        .proposer-name {
          color: #0f1bcc;
          font-weight: bold;
        }
        .c-s-s-m {
          margin-top: 1rem;
          font-size: 1rem;
          .money {
            font-weight: bold;
          }
        }
      }
    }
  }
}
// 選項方案

</style>
<script>
export default {
  data() {
    return {
      name: "Footer",
      scrollNum: 0,
    };
  },
  methods: {
    // 設定置頂
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let clientTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = clientTop;
      // console.log(`目前頁面高度 ${clientTop}`);
    });
  },
};
</script>