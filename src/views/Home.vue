<template>
  <!-- navbar -->

  <!-- 商品方案分類 及按鈕 -->
  <div class="row mb-4">
    <div class="col">
      <h4>群眾集資</h4>
    </div>
    <!-- 此處修改 -->
    <div class="col">
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
  <div class="container home">
    <!-- 商品區 -->
    <div class="row">
      <div class="col">
        <div class="card text-start" style="width: 16rem">
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
              <span class="time"><i class="far fa-clock"></i>剩下4小時</span>
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-start" style="width: 16rem">
          <a href="">
            <img
              src="https://i.imgur.com/WV4ViWO.jpg"
              class="card-img-top"
              alt=""
            />
            <h5 class="card-title">流光百色 2022日曆</h5>
          </a>
          <div class="card-body pb4">
            <span class="">設計 By <a class="" href="">不只是</a></span>
            <p class="card-text">讓心成為三稜鏡，日光穿透，虹彩斑斕閃爍</p>
          </div>
          <div class="container-project-footer">
            <div class="cpf-line"></div>
            <div class="time-money-part">
              <span class="time"><i class="far fa-clock"></i>剩下4小時</span>
              <div class="money">NT$123,558</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-start" style="width: 16rem">
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
              <span class="time"><i class="far fa-clock"></i>剩下4小時</span>
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
.card {
  height: 30rem;
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    .card-img-top {
      height: 10rem;
    }
    .card-body-span a {
      color: #0d6efd;
    }
    .time-money-part {
      justify-content: space-around;
    }
  }
}

.pagination {
  margin-top: 2rem;
}

// .card img {
//   width: 18rem;
// }
</style>
<script>
export default {
  name: "Home",
  components: {},
};
</script>
