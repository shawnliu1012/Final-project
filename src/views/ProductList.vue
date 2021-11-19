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
            src="https://i.imgur.com/Cqngd9w.png"
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
      <div class="col-lg-8">
        <div class="product-film">
          <div class="product">
            <!-- 會跳轉成影片 修改這部分 -->
            <button class="play-radio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
          <span class="proposer">
            提案人 <a href="" class="">蔚藍星球</a>
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
      </div>
    </div>
  </div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs product-bottom" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home"
        type="button"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        專案內容
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        專案更新<span>1</span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="messages-tab"
        data-bs-toggle="tab"
        data-bs-target="#messages"
        type="button"
        role="tab"
        aria-controls="messages"
        aria-selected="false"
      >
        留言<span>6</span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="settings-tab"
        data-bs-toggle="tab"
        data-bs-target="#settings"
        type="button"
        role="tab"
        aria-controls="settings"
        aria-selected="false"
      >
        常見問答<span>6</span>
      </button>
    </li>
    <div class="sponsor">
      <a href="">贊助專案</a>
    </div>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div
      class="tab-pane active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div class="container program">
        <div class="row">
          <div class="col-lg-8">
            <div class="program-img">
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
          </div>
          <div class="col-lg-4">
            <div class="program-container">
              <a class="c-p-1 text-start" href="">
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
              </a>

              <a class="c-p-1 text-start" href="">
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
              </a>
              <a class="c-p-1 text-start" href="">
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="col-lg-8">
        <h4>
          計畫更新 #1｜開賣 10 分鐘達標
          感謝贊助者的大力支持，別忘了贊助者限定活動分享即贈禮
        </h4>
        <img src="https://i.imgur.com/RY5gbly.png" alt="" />
        <p>感謝各位熱烈支持 ٩(ˊᗜˋ )و</p>
        <button type="button" class="btn btn-outline-primary">繼續閱讀</button>
      </div>
      <div class="col-lg-4"></div>
    </div>
    <div
      class="tab-pane"
      id="messages"
      role="tabpanel"
      aria-labelledby="messages-tab"
    >
      ...
    </div>
    <div
      class="tab-pane"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      ...
    </div>
  </div>
  <!-- 單一商品詳細介紹及方案區 -->
  <!-- navbar -->

  <!-- <div class="product-bottom">
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
  </div> -->
  <!-- 圖片及方案內容 -->

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
.product-film {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  .product {
    background-image: url("https://i.imgur.com/q8fS0nq.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 35rem;
    .play-radio {
      width: 4rem;
      height: 4rem;
      border-style: none;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4rem;
        height: 4rem;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

.product-introduce {
  .product-classification {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    a {
      color: #696969;
      font-weight: bold;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .pc-title {
    display: inline-block;
    text-decoration: none;
    color: #3f3f3f;
    h3 {
      color: #000;
      line-height: 2em;
    }
    &:hover {
      text-decoration: none;
    }
  }

  .proposer {
    display: inline-block;
    font-size: 0.9rem;
    a {
      text-decoration: none;
      padding: 0 0.2rem;
      color: var(--font-color);
      font-weight: bold;
      &:hover {
        text-decoration: none;
        color: #000;
      }
      &:not(:first-child) {
        color: #696969;
      }
    }
  }

  .introduce {
    margin: 1.2rem 0;
    color: #767676;
  }

  /* 金額區 */

  .product-introduce-money {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dcdcdc;
    .circle-out {
      width: 4.5rem;
      height: 4.5rem;
      background-color: #dcdcdc;
      border-radius: 50%;
      position: relative;
      &:hover {
        animation: percentage 1s;
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
      }
      .circle-in {
        width: 4rem;
        height: 4rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .p-i-amount {
      // 預購金額處置中
      padding-top: 1em;
      margin-left: 1rem;
      line-height: 0.6rem;
      .pre-order {
        font-size: 0.5rem;
        font-weight: bold;
      }
      .order-amount {
        font-size: 1.8rem;
        font-weight: bold;
      }
      .target {
        font-size: 0.5rem;
      }
    }
  }
}
.product-middle {
  margin-top: 1rem;
  display: flex;
  .time {
    line-height: 2rem;
    font-size: 0.5rem;
    font-weight: bold;
    color: #3f3f3f;
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
  }
}

.product-bottom {
  background-color: #fdfdfd;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  padding: 0rem 9rem;
  margin: 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  // 圖片及方案內容

  // .content-choose {
  //   a {
  //     text-decoration: none;
  //     margin-right: 1.5rem;
  //     color: #696969;
  //     div {
  //       display: inline-block;
  //       margin-right: 0.8rem;
  //     }
  //   }
  // }
  .sponsor {
    border: 1px solid #229f2a;
    border-radius: 0.2rem;
    padding: 0.5rem 7rem;
    transition: transform 1s ease;
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #ccc;
    a {
      color: #229f2a;
      text-decoration: none;
    }
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      font-weight: bold;
    }
  }
}
.program {
  .program-img {
    margin-right: 2rem;
    width: auto;
    overflow: hidden;
  }
  .program-container a {
    display: inline-block;
    width: 18rem;
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
      font-size: 0.875rem;
      color: #101010;
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
// 專案更新
#profile {
  padding: 0rem 9rem;
  h4 {
    text-align: left;
  }
  img {
    width: 90%;
  }
  p {
    text-align: left;
  }

}
// 商品邊線變色效果
</style>