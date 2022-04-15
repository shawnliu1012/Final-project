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

  <!-- 挺好店專區 -->
  <!-- 桌機板 -->
  <div class="covid d-none d-md-block">
    <div class="covid-img"></div>
    <div class="covid-title">
      <div class="covid-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-shield-fill-plus"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
          />
        </svg>
      </div>
      <h3>挺好店應援計畫</h3>
      <span class="covid-span">
        疫情讓許多你我的愛店面臨經營困難，我們規劃近期啟動「挺好店應援計畫」，提供<strong>實體空間／店家經營者</strong>和<strong>需要實體空間做展演的團隊</strong>應變疫情的上架方案。
      </span>
    </div>
  </div>
  <!-- 手機板 -->
  <div class="covid-phone d-md-none">
    <div class="covid-img"></div>
    <div class="covid-title">
      <div class="covid-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-shield-fill-plus"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
          />
        </svg>
      </div>
      <h3>挺好店應援計畫</h3>
      <span class="covid-span">
        疫情讓許多你我的愛店面臨經營困難，嘖嘖規劃近期啟動「挺好店應援計畫」，提供<strong>實體空間／店家經營者</strong>和<strong>需要實體空間做展演的團隊</strong>應變疫情的上架方案。
      </span>
    </div>
  </div>
  <!-- 挺好店商品區 -->
  <div class="container helpshop">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item,idx) in myjson.products.slice(0,3)" :key="idx">
        <div class="card text-start">
          <div class="card-top">
            <a href="">
              <div
                class="card-top-img"
                :style="`background-image: url('${item.img}')`"
              ></div>
              <h5 class="card-title">
                {{item.title}}
              </h5>
            </a>
          </div>
          <div class="card-middle">
            <span class=""
              >遊戲 By <a class="" href="">{{item.author}}</a></span
            >
            <p class="card-text">
              {{item.description}}
            </p>
          </div>
          <div class="card-footer">
            <!-- 此處引入json需修改％ -->
            <progress class="cpf-line" id="file" max="100" value="70"> 70% </progress>
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
              <div class="money">NT${{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
        <!-- <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      </div> -->
    </div>
    <!-- 更多計畫按鈕 -->
    <button type="button" class="btn btn-light helpshop-btn d-none d-lg-block">
      更多挺好店計畫
    </button>
  </div>
  <!-- img RWD part -->
  <!-- img -->
  <div class="container-fluid main-img">
    <a
      class="img-part"
      href=""
      style="background-image: url('https://i.imgur.com/UcIpttt.jpg')"
    >
      <div class="img-cover"></div>
      <div class="img-title">
        <span class="img-title-time">剩下10小時</span>
        <h3 class="">
          【黃色書刊】勇者系列盒玩公仔｜台灣原創漫畫動畫、公仔原來那麼高品質！
        </h3>
        <span class="button">查看計畫內容▸ </span>
      </div>
    </a>
  </div>

  <!-- classification -->
  <div class="classification">
    <div class="classification-word">探索專案類別</div>
    <div class="classification-choose-part">
      <a class="classification-choose" href="">空間</a>
      <a class="classification-choose" href="">教育</a>
      <a class="classification-choose" href="">科技</a>
      <a class="classification-choose" href="">社會</a>
      <a class="classification-choose" href="">設計</a>
      <a class="classification-choose" href="">飲食</a>
      <a class="classification-choose" href="">遊戲</a>
      <a class="classification-choose" href="">攝影</a>
    </div>
  </div>
  <!-- end of classification -->

  <!-- 商品方案分類 及按鈕 -->
  <div class="container homeproject">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <h4 class="align-self-end">群眾集資</h4>
        <button type="button" class="btn">更多▸</button>
      </div>
    </div>
    <!-- 商品區 -->
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
  <div class="line"></div>

  <div class="container homeproject">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <h4 class="align-self-end">預購式專案</h4>
        <button type="button" class="btn btn-outline-primary">更多▸</button>
      </div>
    </div>
    <!-- 商品區 -->
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
  <div class="line"></div>

  <div class="container homeproject">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <h4 class="align-self-end">訂閱式專案</h4>
        <button type="button" class="btn btn-outline-primary">更多▸</button>
      </div>
    </div>
    <!-- 商品區 -->
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
      <div class="col-lg-4 col-md-6 col-sm-12">
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
:root {
  --line-border-fill: #41aa5c;
  --line-border-empty: #696969;
  --font-color: rgb(0, 80, 162);
}

// navbar
// logo
.desktop-nav-part {
  margin: 0 6rem;
  .navbar-brand svg:hover {
    animation: change 2s;

    @keyframes change {
      0% {
        color: #000;
        transform: rotate(0deg);
      }
      20% {
        color: #0f1bcc;
      }
      60% {
        color: #d87e2a;
      }
      80% {
        color: #177a30;
      }
      100% {
        color: #000;
        transform: rotate(720deg);
      }
    }
  }

  .navbar-btn {
    .btn {
      font-weight: bold;
      color: #3f3f3f;
      margin: 0 0.2rem;
    }
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

  .nav-link {
    border-left: 1px solid #dcdcdc;
  }
}
// navbar RWD
.phone-nav-top-part {
  margin: 0 1rem;
  .navbar-brand svg:hover {
    animation: change 2s;

    @keyframes change {
      0% {
        color: #000;
        transform: rotate(0deg);
      }
      20% {
        color: #0f1bcc;
      }
      60% {
        color: #d87e2a;
      }
      80% {
        color: #177a30;
      }
      100% {
        color: #000;
        transform: rotate(720deg);
      }
    }
  }
  .navbar-btn {
    .btn {
      font-weight: bold;
      color: #3f3f3f;
      margin: 0 0.2rem;
    }
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
}

.phone-nav-bottom-part {
  border-top: 1px solid #dcdcdc;
}

// 挺好店
// 桌機版
.covid {
  z-index: -1;
  position: relative;
  .covid-img {
    background-image: url("https://i.imgur.com/HnDfduT.png");
    height: 25rem;
    background-size: cover;
  }
  .covid-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 26rem;
    text-align: justify;
    // 設定svg水平置中
    display: flex;
    flex-direction: column;
    align-items: center;
    .covid-svg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background-color: #fff;
      border-radius: 50%;
      svg {
        color: #0a6b0a;
      }
    }
    h3 {
      font-weight: bold;
      padding-top: 1rem;
    }
  }
}
// 手機版

.covid-phone {
  z-index: -1;
  position: relative;
  .covid-img {
    background: url("https://i.imgur.com/HnDfduT.png") center center no-repeat;
    width: 100%;
    height: 25rem;
    background-size: cover;
  }
  .covid-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 26rem;
    text-align: justify;
    // 設定svg水平置中
    display: flex;
    flex-direction: column;
    align-items: center;
    .covid-svg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background-color: #fff;
      border-radius: 50%;
      svg {
        color: #0a6b0a;
      }
    }
    h3 {
      font-weight: bold;
      padding-top: 1rem;
    }
  }
}

// 挺好店商品區
.helpshop {
  margin-top: -2rem;
  position: relative;
  .row {
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
    z-index: 1;
    padding: 4rem 1rem;
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
            font-size: 1rem;
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

  .btn {
    position: absolute;
    bottom: 7%;
    left: 43%;
    padding: 1rem;
    background-color: rgb(226, 222, 222);
    opacity: 0.5;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.25s ease-out;
    }
  }
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

// img
.main-img {
  padding: 2rem 0;
  .img-part {
    display: block;
    text-decoration: none;
    padding-bottom: 35rem;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 0.2rem;
    .img-cover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(16, 16, 16, 0.2);
      border-radius: 0.2rem;
    }
    .img-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      .img-title-time {
        font-size: 1rem;
        text-decoration: underline;
      }
      h3 {
        padding: 1rem 0;
      }
      .button {
        padding: 0.75rem 1.5rem;
        border: 1px solid #fff;
        border-radius: 0.2rem;
        font-weight: bold;
      }
    }
  }
}
// img RWD
@media screen and (max-width: 576px) {
  .main-img {
    .img-part {
      display: block;
      text-decoration: none;
      padding: 100px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      border-radius: 0.2rem;
      .img-title {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        .img-title-time {
          font-size: 1rem;
          text-decoration: underline;
        }
        h3 {
          padding: 1rem 0;
        }
        .button {
          padding: 0.75rem 1.5rem;
          border: 1px solid #fff;
          border-radius: 0.2rem;
          font-weight: bold;
        }
      }
    }
  }
}
/* classification */

.classification {
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;

  .classification-word {
    background-color: #fff;
    font-weight: bolder;
    padding: 0px 10px;
    color: #696969;
    position: absolute;
    top: -10px;
  }

  .classification-choose-part {
    width: 75%;
    padding: 30px 10px 20px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .classification-choose {
      color: var(--font-color);
      text-decoration: none;
      padding: 0 10px;
      &:hover {
        font-weight: bold;
        color: var(--font-color);
        text-decoration: none;
      }
    }
  }
}
// classification RWD 手機
@media screen and (max-width: 576px) {
  .classification {
    .classification-choose-part {
      width: 100%;
      padding: 30px 10px 20px;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      overflow: auto;
      .classification-choose {
        color: var(--font-color);
        text-decoration: none;
        padding: 0 10px;
        &:hover {
          font-weight: bold;
          color: var(--font-color);
          text-decoration: none;
        }
      }
    }
  }
}
/* end of classifications */

.homeproject {
  .row {
    margin: 1.5rem 0;
    .btn {
      background-color: var(--font-color);
      color: #fff;
      outline: none;
      border-color: transparent;
      box-shadow: none;
    }
    .btn:hover,
    .btn:active {
      outline: none;
      border-color: transparent;
      box-shadow: none;
      transform: scale(1.1);
      transition: transform 0.25s ease-out;
    }
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
            font-size: 1rem;
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

// empty line
// .cpf-line {
//   width: 100%;
//   height: 0.15rem;
//   background-color: var(--line-border-empty);
//   border-radius: 0.2rem;
//   margin-top: 0.7rem;
// }

.line {
  width: 100%;
  height: 0.01rem;
  background-color: #dcdcdc;
}
// footer
.footer {
  height: 18rem;
  margin-top: 1.5rem;
  position: relative;

  a {
    margin: 10px 0px;
    color: #0050a2;
    text-decoration: none;
    width: 30%;
    &:hover {
      color: #000;
    }
  }
  .trademark {
    margin: 10px 0px;
    color: #3f3f3f;
  }

  .footer-img-part {
    position: absolute;
    bottom: 80%;
    left: 90%;
    .btn {
      border-radius: 50%;
      padding: 0;
      svg {
        color: #000;
      }
    }
  }
}
</style>

<script>

import json from '../json/db.json';

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "Footer",
      scrollNum: 0,
      myjson:json
    };
  },
  methods: {
    // 設定置頂
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    // console.log(this.myjson)
    // this.axios
    //   .get("http://localhost:3000/products")
    //   .then(result => {
    //     console.log("result:", result.data);
    //   })
    //   .catch(err => {
    //     console.warn(err);
    //   });
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
