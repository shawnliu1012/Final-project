<template>
  <!-- navbar -->
  <!-- 桌機板 -->
  <nav class="navbar navbar-expand navbar-light" style="background-color: #fff">
    <div class="container-fluid d-none d-md-block desktop-nav-part">
      <div class="navbar" id="navbarSupportedContent">
        <div class="d-flex align-items-center">
          <a class="navbar-brand" href="http://localhost:8080/#/"
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
              <a class="nav-link" aria-current="page" href="http://localhost:8080/#/explore">探索</a>
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
      <a class="navbar-brand" href="http://localhost:8080/#/"
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
        <a class="nav-link" aria-current="page" href="http://localhost:8080/#/explore">探索</a>
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
      <div class="col-sm-12 container-img "></div>
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
  <!-- project -->
  <div class="container project-program">
    <div class="row">
      <div class="col-lg-4">
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
      <div class="col-lg-8">
        <div class="pay-part text-start">
          <label>付款方式</label>
          <div class="part-form">
            <div class="btn">
              <label class="btn" for="btn-check-outlined">
                <input
                  class="btn-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  v-on:click="this.Full = false"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-credit-card-2-back-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"
                  />
                </svg>
                信用卡付款
              </label>
            </div>
            <div class="btn">
              <label class="btn" for="btn-check-outlined">
                <input
                  class="btn-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  v-on:click="this.Full = true"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bank2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"
                  />
                </svg>
                ATM 機器轉帳或銀行臨櫃繳款
              </label>
            </div>
            <div class="mb-3 text-part" v-show="Full">
              虛擬帳號轉帳因要等待銀行於工作天回傳，<strong>限量的選項可能會在入帳前售罄並造成贊助失敗</strong>。遇到例假日將會延後更新。若未來有遇到退款的情況，<strong>退款金額會扣除轉帳交易所產生的手續費用</strong>。臨櫃繳款的截止期限，必須在週一至週五（不含例假日）的下午三點半前完成，<strong>週六的郵局轉帳將會造成交易失敗</strong>。
            </div>
          </div>
          <div class="amount-part">
            <div class="amount-word">加碼贊助(選擇)</div>
            <div class="amount-input">
              <div class="amount-tag">$</div>
              <input
                type="number"
                id="amount"
                placeholder="0"
                min="0"
                value="0"
              />
            </div>
          </div>
          <label for="exampleDataList" class="form-label">收件地點</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>選擇收件地點</option>
            <option value="1">台灣(本島) Taiwan</option>
          </select>
          <div class="address">
            <div class="col-lg-8">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >地址</label
                >
                <input
                  type=""
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >郵遞區號</label
                >
                <input
                  type=""
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label for="exampleFormControlInput1" class="form-label"
            >超商取貨(選填)</label
          ><br />
          <button
            class="btn btn-outline-secondary chooseLabel"
            for="btn-check-outlined"
            type="button"
            v-on:click="change('convenienceStore')"
          >
            選擇 >
          </button>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
            v-show="convenienceStore"
          >
            <button type="button" class="btn btn-outline-secondary">
              7-11
            </button>
            <button type="button" class="btn btn-outline-secondary">
              全家
            </button>
            <button type="button" class="btn btn-outline-secondary">
              萊爾富
            </button>
          </div>
          <div class="mb-3 text-part">
            提案人將優先為你安排超商取貨，但若出貨時，選擇的超商因故不支援店取，提案人將把回饋品寄至收件地址。提案人保有寄送方式的最終決定權。
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >收件人</label
            >
            <input
              type=""
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >連絡電話</label
            >
            <input
              type=""
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >備註 可留空</label
            >
            <input
              type=""
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="填寫備註(參考回饋或計畫內容的說明，可留空)"
            />
          </div>
          <button type="button" class="btn btn-outline-success b-money">
            立刻贊助 <span>NT<span class="money">1,197</span></span>
          </button>
          <div class="word-part">
            <p>提案人有權決定是否接受贊助。</p>
            <p>如提案人因故決定不接受贊助，將會取消贊助並主動退還贊助款項。</p>
          </div>
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

.project-program {
  .program {
    .c-p-1 {
      display: inline-block;
      border: 1px solid #e0e0e0;
      margin: 1rem 0;
      padding: 1rem;
      text-decoration: none;
      color: #3f3f3f;
      img {
        width: 100%;
      }
      .program-money {
        font-weight: 700;
        font-size: 1.25rem;
        color: #101010;
      }
      .program-already {
        font-size: 0.75rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        .program-already-1 {
          background-color: #c45059;
          color: #fdfdfd;
          display: inline-block;
          padding: 0.2rem 0.5rem;
          font-weight: 700;
        }
        .program-already-2 {
          display: inline-block;
          background-color: #f4f4f4;
          color: #101010;
          padding: 0.2rem 0.5rem;
          .p-time {
            font-weight: bold;
          }
        }
      }
      .program-word {
        max-height: 16em;
        font-size: 0.875rem;
        color: #101010;
        overflow: auto;
      }
      .choose-program {
        margin-top: 1rem;
        .c-p-word {
          line-height: 1;
          font-weight: 700;
          font-size: 0.75rem;
          display: inline-block;
          background-color: #4389e7;
          color: #fdfdfd;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
        }
      }
      .program-finish-time {
        font-size: 0.75rem;
        text-align: center;
        color: #767676;
        margin-top: 1rem;
        padding: 0.5rem 0.5rem;
        border-style: solid;
        border-width: 1px;
      }
    }
  }
}
// pay
.pay-part {
  label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .part-form {
    .btn {
      background-color: #f4f4f4;
      display: block;
      font-weight: 700;
      text-align: start;
      margin-bottom: 0.5rem;
      justify-content: center;
      svg {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding-bottom: 0.2rem;
      }
    }
  }
  .text-part {
    background-color: #fffceb;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: gold;
  }
  // amount-part

  .amount-part {
    position: relative;
    .amount-word {
      padding: 0.5rem 0;
    }
    .amount-input {
      display: inline-block;
      border: 1px solid #bebebe;
      border-radius: 3px;
      .amount-tag {
        font-size: 1.1rem;
        position: absolute;
        top: 2.65rem;
        left: 0.5rem;
      }
      #amount {
        margin-left: 1.5rem;
        outline: none;
        border: 1px solid #fff;
      }
    }
  }
  // address select
  .form-select:focus,
  .form-select:active:focus,
  .form-select.active:focus,
  .form-select.focus,
  .form-select:active.focus,
  .form-select.active.focus {
    outline: none;
    border-color: #ced4da;
    box-shadow: none;
  }
  // address
  .address {
    display: flex;
    justify-content: space-between;
    input:focus,
    input:active:focus,
    input.active:focus,
    input.focus,
    input:active.focus,
    input.active.focus {
      outline: none;
      border-color: #ced4da;
      box-shadow: none;
    }
  }

  // 超商取貨
  .chooseLabel:focus,
  .chooseLabel:active:focus,
  .chooseLabel.active:focus,
  .chooseLabel.focus,
  .chooseLabel:active.focus,
  .chooseLabel.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-group {
    margin-left: 3rem;
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
    // 收件人 聯絡電話 備註
  }
  input:focus,
  input:active:focus,
  input.active:focus,
  input.focus,
  input:active.focus,
  input.active.focus {
    outline: none;
    border-color: #ced4da;
    box-shadow: none;
  }
  // 結帳按鈕
  .b-money:focus,
  .b-money:active:focus,
  .b-money.active:focus,
  .b-money.focus,
  .b-money:active.focus,
  .b-money.active.focus {
    outline: none;
    border-color: #198754;
    box-shadow: none;
  }
  // 提案人贊助提醒
  .word-part {
    line-height: 0.25;
    font-size: 0.75rem;
    color: #767676;
    margin-top: 1rem;
    p {
      padding: 0.01rem 0;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      Full: false,
      convenienceStore: false,
      name: "Footer",
      scrollNum: 0,
    };
  },
  methods: {
    change: function (key) {
      this[key] = !this[key];
    },
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