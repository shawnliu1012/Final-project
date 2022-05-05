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
  <!-- dropdown &search -->
  <!-- 本次問題 -->
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
          <!-- 下拉式選單 篩選群眾集資及預購式專案及下方對照的主題分類-->
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">全部</a></li>
            <li><a class="dropdown-item" href="#">群眾集資</a></li>
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
            <li><a class="dropdown-item" href="#">空間</a></li>
            <li><a class="dropdown-item" href="#">教育</a></li>
            <li><a class="dropdown-item" href="#">科技</a></li>
            <li><a class="dropdown-item" href="#">社會</a></li>
            <li><a class="dropdown-item" href="#">設計</a></li>
            <li><a class="dropdown-item" href="#">飲食</a></li>
            <li><a class="dropdown-item" href="#">遊戲</a></li>
            <li><a class="dropdown-item" href="#">出版</a></li>
          </ul>
        </div>
      </div>
      <div
        class="col-md-6 col-sm-12 d-flex align-items-center justify-content-end"
      >
        <input type="search" name="" placeholder="搜尋計畫" />
        <div class="dropdown">
          <!-- 排序功能詢問 -->
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
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- project -->
  <!-- 引入dbjson -->
  <div class="container explore-project">
    <div class="row">
      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(item, idx) in myjson.products"
        :key="idx"
      >
      <!-- 引入axios取到的資料 -->
      <!-- <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(item, idx) in this.exploreTemp"
        :key="idx"
      > -->
        <!-- TODO:router-link -->
        <router-link class="rt-link" :to="`/products/${item.id}`">
          <div class="card text-start">
            <div class="card-top">
              <a href="">
                <div
                  class="card-top-img"
                  :style="`background-image: url('${item.img}')`"
                ></div>
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
              </a>
            </div>
            <div class="card-middle">
              <span class=""
                >By <a class="" href="">{{ item.author }}</a></span
              >
              <p class="card-text">
                {{ item.description }}
              </p>
            </div>
            <div class="card-footer">
              <progress
                class="cpf-line"
                id="file"
                max="100"
                :value="item.percent"
              ></progress>
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
                <div class="money">NT${{ this.formatPrice(item.price) }}</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
      <!-- 本次問題：分頁設置 -->
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
@import "~bootstrap/dist/css/bootstrap.css";
// navbar
.navbar-brand {
  img {
    width: 50px;
    height: 40px;
  }
}
.project-navbar {
  padding: 01rem 0;
  .dropdown {
    // 消除按鈕外框
    .btn:focus,
    .btn:active:focus,
    .btn.active:focus,
    .btn.focus,
    .btn:active.focus,
    .btn.active.focus {
      outline: none;
      border-color: transparent;
      box-shadow: none;
    }
  }
  input:hover,
  input:focus {
    outline: none;
  }
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
  a {
    text-decoration: none;
    color: #000;

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
          height: 5.5rem;
          -webkit-line-clamp: 3; /* 设置超出多少行隐藏 */
          -webkit-box-orient: vertical;
          overflow: hidden;
          /* 设置 display 为 -webkit-box 或者 -webkit-inline-box 时为隐藏状态 */
          display: -webkit-inline-box;
        }
      }
      .card-footer {
        background-color: #fff;
        border-style: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        .cpf-line {
          width: 100%;
          height: 0.15rem;

          // 將progress預設樣式清除
          -webkit-appearance: none;
          appearance: none;
          // 設置外框
          &::-webkit-progress-bar {
            background-color: var(--line-border-empty);
            border-radius: 0.2rem;
          }
          // 設置進度條顏色
          &::-webkit-progress-value {
            background-color: var(--line-border-fill);
          }
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
// 改使用axios串接
import json from "../json/db.json";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "Footer",
      scrollNum: 0,
      myjson: json,
      // 設定空陣列塞進axios讀取之資料
      // exploreTemp: {},
    };
  },
  methods: {
    // 設定置頂
    goTop() {
      document.documentElement.scrollTop = 0;
    },
    // 千分位數加上逗號
    formatPrice(price) {
      let res = Number(price)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
        .replace(/\.\d*/, "");
      return res;
    },
  },
  mounted() {
    console.log("res:", this.myjson);
    window.addEventListener("scroll", () => {
      let clientTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = clientTop;
      // console.log(`目前頁面高度 ${clientTop}`);
    });
    // axios串接
    // this.axios.get("http://localhost:3000/products/").then((result) => {
    //   // this.item = result.data
    //   console.log("res:", result.data);
    //   this.exploreTemp = result.data;
    // });
  },
};
</script>
