<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fff;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        >
        <!-- 參考網站 svg皆為28px 這裡做調整 -->
        <img
          src="https://i.imgur.com/MCdlcAI.jpg"
          alt=""
          width="38px"
          height="38px"
      /></a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">探索</a>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-light" type="submit">登入</button>
          <button class="btn btn-light" type="submit">註冊</button>
        </div>
      </div>
    </div>
  </nav>
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
  <!-- 再回來修改 -->
  <div class="container project-navbar">
    <!-- 商品方案分類 及按鈕 -->
    <div class="row mt-4 mb-4 justify-content-between">
      <div class="col-4">
        <h4>群眾集資</h4>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-outline-primary">
          更多
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="container home">
    <!-- 商品區 -->
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="card text-start" style="width: 16rem">
          <div class="card-top">
            <a href="">
              <img
                src="https://i.imgur.com/2P79MF2.png"
                class="card-img-top"
                alt=""
              />
              <h5 class="card-title">
                防災教育品牌《 火柴貓大作戰 | 火災求生桌遊》
              </h5>
            </a>
          </div>
          <div class="card-body pb4">
            <span class=""
              >遊戲 By <a class="" href="">dosomething studio</a></span
            >
            <p class="card-text">
              火柴貓大作戰是由曾經獲得許多國際設計獎項的團隊dosomething
              studio，研發設計的火災求生桌遊，希望...
            </p>
          </div>
          <div class="container-project-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <!-- 時間如何靠左 再回來修改 -->
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
      <div class="col-3">
        <div class="card text-start" style="width: 16rem">
          <div class="card-top">
            <a href="">
              <img
                src="https://i.imgur.com/WV4ViWO.jpg"
                class="card-img-top"
                alt=""
              />
              <h5 class="card-title">流光百色 2022日曆</h5>
            </a>
          </div>
          <div class="card-body pb4">
            <span class="">設計 By <a class="" href="">不只是</a></span>
            <p class="card-text">讓心成為三稜鏡，日光穿透，虹彩斑斕閃爍</p>
          </div>
          <div class="container-project-footer">
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
      <div class="col-3">
        <div class="card text-start" style="width: 16rem">
          <div class="card-top">
            <a href="">
              <img
                src="https://i.imgur.com/ELfBBRy.jpg"
                class="card-img-top"
                alt=""
              />
              <h5 class="card-title">
                厭世好療癒桌曆｜35組紙娃娃穿搭療癒你的厭世日常
              </h5>
            </a>
          </div>
          <div class="card-body">
            <span class="card-body-span"
              >插畫漫畫 By <a class="" href="">厭世女子文創工作室</a></span
            >
            <p class="card-text">
              現代社會讓人生活壓力大，厭世成為大家的共通點，《厭世女子》希望透過插畫圖文道出你心中的厭世，【厭世好療癒套組】因此...
            </p>
          </div>
          <div class="container-project-footer">
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
</template>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
:root {
  --line-border-fill: #41aa5c;
  --line-border-empty: #696969;
}
/* classification */

.classification {
  margin: auto;
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
    border-top: 1px solid #696969;
    border-bottom: 1px solid #696969;
    .classification-choose {
      color: #00008b;
      text-decoration: none;
      padding: 0 10px;
    }

    .classification-choose:hover {
      font-weight: bold;
      color: #00008b;
      text-decoration: none;
    }
  }
}

/* end of classifications */
// .project-navbar  {
//   // 再注意寬度問題
//   padding: 0 9rem;
// }
// // project
// .home {
//   // 再注意寬度問題
//   padding: 0 9rem;
// }
.card {
  height: 30rem;
  .card-top a {
    text-decoration: none;
    color: #000;
    .card-img-top {
      height: 10rem;
    }
  }
}

.pagination {
  margin-top: 2rem;
}
</style>
<script>
export default {
  name: "Home",
  components: {},
};
</script>
