<template>
  <!-- navbar -->
  <!-- 桌機板 -->
  <nav class="navbar navbar-expand navbar-light" style="background-color: #fff">
    <div class="container-fluid d-none d-md-block desktop-nav-part">
      <div class="navbar" id="navbarSupportedContent">
        <div class="d-flex align-items-center">
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
              src="https://i.imgur.com/Cqngd9w.png"
              alt=""
              width="50px"
              height="40px"
          /></a>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">探索</a>
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
          src="https://i.imgur.com/Cqngd9w.png"
          alt=""
          width="50px"
          height="40px"
      /></a>
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
        <a class="nav-link" aria-current="page" href="#">探索</a>
      </li>
    </ul>
  </nav>
  <!-- dropdown &search -->
  <div class="container project-navbar">
    <div class="row gy-1">
      <div class="col-md-6 col-sm-12 d-flex align-items-center">
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            專案性質
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">全部</a></li>
            <li><a class="dropdown-item" href="#">群眾集資</a></li>
            <li><a class="dropdown-item" href="#">訂閱式專案</a></li>
            <li><a class="dropdown-item" href="#">預購式專案</a></li>
          </ul>
        </div>
        +
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            主題分類
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">音樂</a></li>
            <li><a class="dropdown-item" href="#">攝影</a></li>
            <li><a class="dropdown-item" href="#">出版</a></li>
            <li><a class="dropdown-item" href="#">時尚</a></li>
            <li><a class="dropdown-item" href="#">設計</a></li>
            <li><a class="dropdown-item" href="#">表演</a></li>
            <li><a class="dropdown-item" href="#">藝術</a></li>
            <li><a class="dropdown-item" href="#">教育</a></li>
            <li><a class="dropdown-item" href="#">遊戲</a></li>
            <li><a class="dropdown-item" href="#">飲食</a></li>
            <li><a class="dropdown-item" href="#">空間</a></li>
            <li><a class="dropdown-item" href="#">社會</a></li>
            <li><a class="dropdown-item" href="#">地方創生</a></li>
          </ul>
        </div>
      </div>
      <div
        class="col-md-6 col-sm-12 d-flex align-items-center justify-content-end"
      >
        <input type="search" name="" placeholder="搜尋計畫" />
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            排序
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">所有計畫</a></li>
            <li><a class="dropdown-item" href="#">專案金額</a></li>
            <li><a class="dropdown-item" href="#">最後衝刺</a></li>
            <li><a class="dropdown-item" href="#">最新啟動</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- project -->
  <div class="container explore-project">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12">
        <div class="card text-start">
          <div class="card-top">
            <a href="">
              <div
                class="card-top-img"
                style="background-image: url('https://i.imgur.com/2P79MF2.png')"
              ></div>
              <h5 class="card-title">
                防災教育品牌《 火柴貓大作戰 | 火災求生桌遊》
              </h5>
            </a>
          </div>
          <div class="card-middle">
            <span class=""
              >遊戲 By <a class="" href="">dosomething studio</a></span
            >
            <p class="card-text">
              火柴貓大作戰是由曾經獲得許多國際設計獎項的團隊dosomething
              studio，研發設計的火災求生桌遊，希望...
            </p>
          </div>
          <div class="card-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <span class="time"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  /></svg
                >剩下4小時</span
              >
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="card text-start">
          <div class="card-top">
            <a href="">
              <div
                class="card-top-img"
                style="background-image: url('https://i.imgur.com/WV4ViWO.jpg')"
              ></div>
              <h5 class="card-title">流光百色 2022日曆</h5>
            </a>
          </div>
          <div class="card-middle">
            <span class="">設計 By <a class="" href="">不只是</a></span>
            <p class="card-text">讓心成為三稜鏡，日光穿透，虹彩斑斕閃爍</p>
          </div>
          <div class="card-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <span class="time"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  /></svg
                >剩下4小時</span
              >
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="card text-start">
          <div class="card-top">
            <a href="">
              <div
                class="card-top-img"
                style="background-image: url('https://i.imgur.com/ELfBBRy.jpg')"
              ></div>
              <h5 class="card-title">
                厭世好療癒桌曆｜35組紙娃娃穿搭療癒你的厭世日常
              </h5>
            </a>
          </div>
          <div class="card-middle">
            <span class=""
              >插畫漫畫 By <a class="" href="">厭世女子文創工作室</a></span
            >
            <p class="card-text">
              現代社會讓人生活壓力大，厭世成為大家的共通點，《厭世女子》希望透過插畫圖文道出你心中的厭世，【厭世好療癒套組】因此...
            </p>
          </div>
          <div class="card-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <span class="time"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  /></svg
                >剩下4小時</span
              >
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="card text-start">
          <div class="card-top">
            <a href="">
              <div
                class="card-top-img"
                style="background-image: url('https://i.imgur.com/WV4ViWO.jpg')"
              ></div>
              <h5 class="card-title">流光百色 2022日曆</h5>
            </a>
          </div>
          <div class="card-middle">
            <span class="">設計 By <a class="" href="">不只是</a></span>
            <p class="card-text">讓心成為三稜鏡，日光穿透，虹彩斑斕閃爍</p>
          </div>
          <div class="card-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <span class="time"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  /></svg
                >剩下4小時</span
              >
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >上一頁</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
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
@import "~bootstrap/dist/css/bootstrap.css";
.project-navbar {
  padding: 01rem 0;
}
// search RWD
@media screen and (max-width: 576px) {
  .project-navbar {
    padding: 1rem 1rem;
    input {
      flex: auto;
    }
  }
}
// explore-project
.explore-project {
  .card {
    border-style: none;
    position: relative;
    height: 30rem;
    a {
      text-decoration: none;
      color: #000;
      .card-top-img {
        padding-bottom: 56.25%;
        background-size: cover;
        background-position: center;
        border-radius: 0.2rem;
      }
      h5 {
        font-weight: bold;
        margin-top: 2rem;
      }
    }
    .card-middle {
      span {
        color: #767676;
        font-size: 0.75rem;
        a {
          text-decoration: none;
          color: var(--font-color);
        }
      }
      .card-text {
        padding: 1rem;
        margin-bottom: 4rem;
      }
    }
    .card-footer {
      background-color: #fff;
      border-style: none;
      position: absolute;
      bottom: 0;
      width: 100%;
      /* 注意下fill設定 */
      .cpf-line {
        width: 100%;
        height: 0.15rem;
        background-color: var(--line-border-fill);
        border-radius: 0.2rem;
      }
      .time-money-part {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
          line-height: 1.8rem;
          font-size: 0.8rem;

          svg {
            margin-bottom: 0.2rem;
          }
        }
        .money {
          font-weight: bold;
        }
      }
    }
  }
  .pagination {
    margin-top: 2rem;
    .page-item a {
      color: var(--font-color);
    }
  }
}
</style>
<script>
export default {
  name: "Home",
  components: {},
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
