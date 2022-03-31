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
  <!-- project top -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="product-film">
          <div class="product"></div>
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
          </span>
          <p class="introduce">
            海外儲能電源領導品牌 BLUETTI ，全台首發推出【 EB55
            野獸級戶外行動電源站】一機搞定你的戶外用電需求，537Wh / 700W 具備 AC
            市用插座及 DC 快充接孔
          </p>
          <!-- 修改這塊比例 -->
          <div class="product-introduce-money">
            <div class="circle">
              <div class="circle-value">70%</div>
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
  <div class="tabs-part">
    <ul
      class="nav nav-tabs nav-justified product-bottom"
      id="myTab"
      role="tablist"
    >
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
    </ul>
    <div class="sponsor">
      <a href="">贊助專案</a>
    </div>
  </div>
  <!-- nav tabs rwd -->
  <div class="tabs-phone-part d-lg-none">
    <div class="container">
      <ul
        class="nav nav-tabs nav-justified product-bottom"
        id="myTab"
        role="tablist"
      >
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
      </ul>
      <div class="sponsor">
        <a href="">贊助專案</a>
      </div>
    </div>
  </div>
  <!-- Tab panes -->
  <div class="tab-content">
    <div
      class="tab-pane active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <!-- 桌面版 -->
      <div class="container program d-none d-lg-block">
        <div class="row">
          <div class="col-lg-8">
            <div class="program-img">
              <!-- <img src="https://i.imgur.com/BA7hkCA.gif" alt="" /> -->
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
      <!-- 手機版 -->
      <div class="container program-phone">
        <div class="row">
          <div class="col-sm-12">
            <div class="program-img">
              <!-- <img src="https://i.imgur.com/BA7hkCA.gif" alt="" /> -->
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
          <div class="col-sm-12">
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
      id="messages"
      role="tabpanel"
      aria-labelledby="messages-tab"
    >
      <!-- 問答桌面版 -->
      <div class="container messager-part-container">
        <div class="messager-part d-none d-lg-block">
          贊助人才能留言，如有專案相關提問，請聯絡提案人。
        </div>
        <div class="message-part d-none d-lg-block">
          <div class="sponsor-img-time">
            <div class="sponsor-question-part">
              <div class="sponsor-img">
                <img src="https://i.imgur.com/fSXMXMb.png" alt="" />
                <div class="sponsor">
                  <span class="sponsor-name">shang</span>
                  <span class="sponsor-label">贊助人</span>
                </div>
              </div>
              <div class="time">
                <span>大約19小時</span>
              </div>
            </div>
            <div class="problem">
              <p>請問太陽能板接頭是哪一種呢？</p>
            </div>
          </div>
          <div class="proposal-answer-part">
            <div class="answer-part">
              <div class="answer-inf">
                <span class="proposal">蔚藍星球</span>
                <span class="proposal-label">提案人</span>
              </div>
              <div class="time">
                <span>大約17小時</span>
              </div>
            </div>
            <div class="answer">
              <p>你好，這款原廠太陽能板是使用MC4接頭喔</p>
            </div>
          </div>
        </div>
        <div class="message-part d-none d-lg-block">
          <div class="sponsor-img-time">
            <div class="sponsor-question-part">
              <div class="sponsor-img">
                <img src="https://i.imgur.com/fSXMXMb.png" alt="" />
                <div class="sponsor">
                  <span class="sponsor-name">shang</span>
                  <span class="sponsor-label">贊助人</span>
                </div>
              </div>
              <div class="time">
                <span>大約19小時</span>
              </div>
            </div>
            <div class="problem">
              <p>請問太陽能板接頭是哪一種呢？</p>
            </div>
          </div>
          <div class="proposal-answer-part">
            <div class="answer-part">
              <div class="answer-inf">
                <span class="proposal">蔚藍星球</span>
                <span class="proposal-label">提案人</span>
              </div>
              <div class="time">
                <span>大約17小時</span>
              </div>
            </div>
            <div class="answer">
              <p>你好，這款原廠太陽能板是使用MC4接頭喔</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 問答頁手機版 -->
      <div class="container messager-part-phone-container">
        <div class="messager-part-phone">
          贊助人才能留言，如有專案相關提問，請聯絡提案人。
        </div>
        <div class="message-part-phone">
          <div class="sponsor-img-time">
            <div class="sponsor-question-part">
              <div class="sponsor-img">
                <img src="https://i.imgur.com/fSXMXMb.png" alt="" />
                <div class="sponsor">
                  <span class="sponsor-name">shang</span>
                  <span class="sponsor-label">贊助人</span>
                </div>
              </div>
              <div class="time">
                <span>大約19小時</span>
              </div>
            </div>
            <div class="problem">
              <p>請問太陽能板接頭是哪一種呢？</p>
            </div>
          </div>
          <div class="proposal-answer-part">
            <div class="answer-part">
              <div class="answer-inf">
                <span class="proposal">蔚藍星球</span>
                <span class="proposal-label">提案人</span>
              </div>
              <div class="time">
                <span>大約17小時</span>
              </div>
            </div>
            <div class="answer">
              <p>你好，這款原廠太陽能板是使用MC4接頭喔</p>
            </div>
          </div>
        </div>
        <div class="message-part-phone">
          <div class="sponsor-img-time">
            <div class="sponsor-question-part">
              <div class="sponsor-img">
                <img src="https://i.imgur.com/fSXMXMb.png" alt="" />
                <div class="sponsor">
                  <span class="sponsor-name">shang</span>
                  <span class="sponsor-label">贊助人</span>
                </div>
              </div>
              <div class="time">
                <span>大約19小時</span>
              </div>
            </div>
            <div class="problem">
              <p>請問太陽能板接頭是哪一種呢？</p>
            </div>
          </div>
          <div class="proposal-answer-part">
            <div class="answer-part">
              <div class="answer-inf">
                <span class="proposal">蔚藍星球</span>
                <span class="proposal-label">提案人</span>
              </div>
              <div class="time">
                <span>大約17小時</span>
              </div>
            </div>
            <div class="answer">
              <p>你好，這款原廠太陽能板是使用MC4接頭喔</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <!-- 留言頁桌面版 -->
      <div class="container">
        <div class="QA-part d-none d-lg-block">
          <div class="qustion">
            <span>Q1.</span> 【關於訂購】我要如何查詢我的贊助紀錄？
          </div>
          <div class="q-time">最後更新於 2021 / 10 / 26 15 : 26</div>
          <div class="answer">
            <p>
              以下提供方式確認<br />
              ❶ 至您的電子信箱收信（使用註冊嘖嘖使用的電子信箱）<br />
              ❷ 確認是否收到一封主旨為「嘖嘖｜支持成功確認信件」<br />
              如果有收到此封信件，即表示贊助成功<br />
            </p>
          </div>
        </div>
      </div>
      <!-- 留言頁手機版 -->
      <div class="QA-part-phone">
        <div class="qustion">
          <span>Q1.</span> 【關於訂購】我要如何查詢我的贊助紀錄？
        </div>
        <div class="q-time">最後更新於 2021 / 10 / 26 15 : 26</div>
        <div class="answer">
          <p>
            以下提供方式確認<br />
            ❶ 至您的電子信箱收信（使用註冊嘖嘖使用的電子信箱）<br />
            ❷ 確認是否收到一封主旨為「嘖嘖｜支持成功確認信件」<br />
            如果有收到此封信件，即表示贊助成功<br />
          </p>
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
.product-film {
  width: 100%;
  position: relative;
  .product {
    background-image: url("https://i.imgur.com/q8fS0nq.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 35rem;
  }
}
// img-top rwd
@media screen and (max-width: 992px) {
  .product-film {
    width: 100%;
    position: relative;
    .product {
      background-image: url("https://i.imgur.com/q8fS0nq.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 15rem;
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
  // 修改這塊
  .product-introduce-money {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dcdcdc;
    .circle {
      width: 4.5rem;
      height: 4.5rem;
      background-color: #000;
      border-radius: 50%;
      position: relative;
      display: grid;
      place-items: center;
      &::before {
        content: "";
        position: absolute;
        height: 95%;
        width: 95%;
        background-color: #fff;
        border-radius: 50%;
      }

      .circle-value {
        position: relative;
        font-size: 15px;
        color: #3f3f3f;
        &:hover {
          transform: scale(1.2);
          transition: all 1s ease-out;
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

// 中間贊助列rwd
@media screen and (min-width: 992px) {
  .tabs-part {
    display: flex;
    justify-content: space-between;
    background-color: #fdfdfd;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    align-items: center;
    margin: 2rem 0rem;
    padding: 0 9rem;
    position: sticky;
    top: 0;
    .product-bottom {
      padding: 1rem 0rem;
      display: flex;
      align-items: center;

      .nav-link {
        color: #696969;
        margin: 0 0.5rem;
      }
    }
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
}
@media screen and (max-width: 992px) {
  .tabs-part {
    display: none;
  }
}
// nav tabs rwd
.tabs-phone-part {
  background-color: #fdfdfd;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  align-items: center;
  margin: 2rem 0rem;
  position: sticky;
  top: 0;
  .product-bottom {
    padding: 1rem 0rem;
    display: flex;
    align-items: center;

    .nav-link {
      color: #696969;
      margin: 0 0.5rem;
    }
  }
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
// 專案內容商品頁rwd
@media screen and (max-width: 992px) {
  .program-phone {
    .program-img {
      img {
        width: 100%;
      }
    }
    .program-container a {
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
@media screen and (min-width: 992px) {
  .program-phone {
    display: none;
  }
}

// 留言
.messager-part {
  color: #3f3f3f;
  line-height: 1.6em;
  font-size: 0.75rem;
  background-color: #f4f4f4;
  padding: 0.5rem;
  text-align: left;
  margin-bottom: 2rem;
}
.message-part {
  padding: 1rem 0rem;
  border-top: 1px solid #e0e0e0;
  .sponsor-img-time {
    .sponsor-question-part {
      display: flex;
      justify-content: space-between;
      .sponsor-img {
        display: flex;
        img {
          border-radius: 40%;
        }
        .sponsor {
          .sponsor-name {
            color: #0050a2;
            font-weight: 700;
            margin-right: 0.5rem;
            margin-left: 1rem;
          }
          .sponsor-label {
            font-weight: 700;
            padding: 0.25rem;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.125rem;
            color: #3366a9;
          }
        }
      }
      .time {
        font-size: 0.75rem;
        color: #767676;
        &:hover {
          color: #0050a2;
        }
      }
    }
    .problem {
      text-align: left;
      padding-left: 4.5rem;
      margin-top: -1rem;
    }
  }
  .proposal-answer-part {
    .answer-part {
      display: flex;
      justify-content: space-between;
      padding-left: 4.5rem;
      .answer-inf {
        .proposal {
          color: #0050a2;
          font-weight: 700;
          margin-right: 0.5rem;
        }
        .proposal-label {
          font-weight: 700;
          padding: 0.25rem;
          border-style: solid;
          border-width: 1px;
          border-radius: 0.125rem;
          border-color: #229f2a;
          background-color: #229f2a;
          color: #fdfdfd;
        }
      }
      .time {
        font-size: 0.75rem;
        color: #767676;
        &:hover {
          color: #0050a2;
        }
      }
    }
    .answer {
      text-align: left;
      padding-left: 4.5rem;
      margin-top: 1rem;
    }
  }
}

// 留言頁rwd
@media screen and (max-width: 992px) {
  .messager-part-phone {
    width: 100%;
    color: #3f3f3f;
    line-height: 1.6em;
    font-size: 0.75rem;
    background-color: #f4f4f4;
    padding: 0.5rem;
    text-align: left;
    margin-bottom: 2rem;
  }
  .message-part-phone {
    padding: 1rem 0rem;
    border-top: 1px solid #e0e0e0;
    .sponsor-img-time {
      .sponsor-question-part {
        display: flex;
        justify-content: space-between;
        .sponsor-img {
          display: flex;
          img {
            border-radius: 40%;
          }
          .sponsor {
            .sponsor-name {
              color: #0050a2;
              font-weight: 700;
              margin-right: 0.5rem;
              margin-left: 1rem;
            }
            .sponsor-label {
              font-weight: 700;
              padding: 0.25rem;
              border-style: solid;
              border-width: 1px;
              border-radius: 0.125rem;
              color: #3366a9;
            }
          }
        }
        .time {
          font-size: 0.75rem;
          color: #767676;
          &:hover {
            color: #0050a2;
          }
        }
      }
      .problem {
        text-align: left;
        padding-left: 4.5rem;
        margin-top: -1rem;
      }
    }
    .proposal-answer-part {
      .answer-part {
        display: flex;
        justify-content: space-between;
        padding-left: 4.5rem;
        .answer-inf {
          .proposal {
            color: #0050a2;
            font-weight: 700;
            margin-right: 0.5rem;
          }
          .proposal-label {
            font-weight: 700;
            padding: 0.25rem;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.125rem;
            border-color: #229f2a;
            background-color: #229f2a;
            color: #fdfdfd;
          }
        }
        .time {
          font-size: 0.75rem;
          color: #767676;
          &:hover {
            color: #0050a2;
          }
        }
      }
      .answer {
        text-align: left;
        padding-left: 4.5rem;
        margin-top: 1rem;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .message-part-phone {
    display: none;
  }
}
// 常見問答
.QA-part {
  .qustion {
    text-align: left;
    font-weight: 700;
    color: #0050a2;
  }
  .q-time {
    font-weight: 700;
    text-align: left;
    font-size: 0.75rem;
    color: #3f3f3f;
    line-height: 1.6em;
  }
  .answer {
    text-align: left;
    background-color: #f4f4f4;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.25rem;
  }
}
// 專案內容問答頁rwd
@media screen and (max-width: 992px) {
  .QA-part-phone {
    width: 100%;
    padding: 1rem;
    .qustion {
      text-align: left;
      font-weight: 700;
      color: #0050a2;
    }
    .q-time {
      font-weight: 700;
      text-align: left;
      font-size: 0.75rem;
      color: #3f3f3f;
      line-height: 1.6em;
    }
    .answer {
      line-height: 1.6em;
      letter-spacing: 3px;
      text-align: left;
      background-color: #f4f4f4;
      border-radius: 0.25rem;
      margin-top: 1rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .QA-part-phone {
    display: none;
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
    // circle progress 改寫成vue
    // v-model直接下在html位置嗎
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = 70;
    let speed = 30;

    let progress = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${progressEndValue}%`;
      progressBar.style.background = `conic-gradient(
      #0f0 ${progressValue * 3.6}deg,
      #dcdcdc ${progressValue * 3.6}deg
  )`;
      if (progressValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    // gotop
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
