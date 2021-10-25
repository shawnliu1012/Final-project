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
  <!-- product container -->
  <div class="container-line"></div>
  <div class="container shoppingcart">
    <div class="container-img"></div>
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
.shoppingcart {
  display: flex;
  .container-img {
    width: 16rem;
    height: 10rem;
    background-image: url("https://i.imgur.com/q8fS0nq.png");
    background-size: cover;
    background-position: center;
  }
  .container-span {
    padding-left: 1rem;
    a {text-decoration: none;
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
        margin-top: 5rem;
        font-size: 1rem;
      }
    }
  }
}
</style>