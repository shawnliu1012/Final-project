<template>
  <div class="home">
    <!-- navbar  -->
    <div class="navbar-part">
      <div class="logo-search-part">
        <a href="" class="navbar-logo">
          <div class="logo">
            <div class="logo-item"></div>
          </div>
          <img src="final project logo.JPG" alt="" />
        </a>
        <a href="" class="search-in-navbar">探索</a>
      </div>
      <div class="btn-signpart">
        <input type="button" value="登入" class="btn-sign" />
        <input type="button" value="註冊" class="btn-sign" />
      </div>
    </div>
    <!-- end of navbar -->
    <!-- Slideshow -->

    <div class="slideshow">
      <a href="">
        <img class="myslides" src="https://picsum.photos/id/1/960/300" alt="" />
      </a>
      <a href="">
        <img
          class="myslides"
          src="https://picsum.photos/id/10/960/300"
          alt=""
        />
      </a>
      <a href="">
        <img
          class="myslides"
          src="https://picsum.photos/id/237/960/300?blur=2"
          alt=""
        />
      </a>
      <a href="">
        <img
          class="myslides"
          src="https://picsum.photos/id/10/960/300"
          alt=""
        />
      </a>
      <div>
        <span class="btn-floating" id="btn1" onclick="plusDivs(-1)"
          >&#10094;</span
        >
        <span class="btn-floating" id="btn2" onclick="plusDivs(+1)"
          >&#10095;</span
        >
      </div>
    </div>

    <!-- end of Slideshow -->
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
    <!-- project -->
    <div class="project">
      <!-- 群眾集資 -->
      <div class="project-name">
        <h2>群眾集資</h2>
        <!-- 此處修改 -->
        <button type="button" class="project-btn">
          更多 <i class="fas fa-caret-right"></i>
        </button>
      </div>
      <div class="project-content">
        <div class="container">
          <div class="container-projects">
            <a class="photo" href="">
              <img src="https://picsum.photos/300/200" alt="" />
              <h2 class="title">Lorem ipsum dolor sit amet.</h2>
            </a>
            <span class="container-span"
              >設計by <a class="cp-name" href="">lorem</a></span
            >
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe dignissimos neque quas blanditiis at, beatae, repellat
              adipisci praesentium laboriosam et. Explicabo ipsam eveniet iste,
              iure cupiditate laboriosam consectetur a.
            </p>
            <div class="container-project-footer">
              <div class="cpf-line"></div>
              <div class="time-money-part">
                <span class="time"><i class="far fa-clock"></i>剩下4小時</span>
                <div class="money">NT$123,558</div>
              </div>
            </div>
          </div>
          <div class="container-projects">
            <a class="photo" href="">
              <img src="https://picsum.photos/300/200" alt="" />
              <h2 class="title">Lorem ipsum dolor sit amet.</h2>
            </a>
            <span class="container-span"
              >設計by <a class="cp-name" href="">lorem</a></span
            >
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe dignissimos neque quas blanditiis at, beatae, repellat
              adipisci praesentium laboriosam et. Explicabo ipsam eveniet iste,
              iure cupiditate laboriosam consectetur000000000000000000 a.
            </p>
            <div class="container-project-footer">
              <div class="cpf-line"></div>
              <div class="time-money-part">
                <span class="time"><i class="far fa-clock"></i>剩下4小時</span>
                <div class="money">NT$123,558</div>
              </div>
            </div>
          </div>
          <div class="container-projects">
            <a class="photo" href="">
              <img src="https://picsum.photos/300/200" alt="" />
              <h2 class="title">Lorem ipsum dolor sit amet.</h2>
            </a>
            <span class="container-span"
              >設計by <a class="cp-name" href="">lorem</a></span
            >
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe dignissimos neque quas blanditiis at, beatae, repellat
              adipisci praesentium laboriosam et. Explicabo ipsam eveniet iste,
              iure cupiditate laboriosam consectetur a.
            </p>
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

      <!-- end of project -->

      <!-- footer -->
      <footer>
        <div class="footer-part">
          <div class="footer-content">
            <div class="footer-title">社群</div>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
          <div class="footer-content">
            <div class="footer-title">幫助</div>
            <a href="">常見問答</a>
            <a href="">使用條款</a>
            <a href="">隱私權政策</a>
          </div>
          <div class="footer-content">
            <div class="footer-title">關於</div>
            <a href="">關於我們</a>
            <a href="">商標資源</a>
            <div class="trademark">©募思</div>
          </div>
        </div>
      </footer>
    </div>
    <!-- end of footer -->
  </div>
</template>
<style lang="scss">
/* 設定進度條 */
:root {
    --line-border-fill: #41aa5c;
    --line-border-empty: #696969;
}

* {
    margin: 0%;
    padding: 0%;
}



/* navbar */

.navbar-part {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DCDCDC;
    padding: 0 9rem;
}

.navbar-part a {
    color: #000;
    text-decoration: none;
    padding: 6px 20px;
    font-size: 0.9rem;
    background-color: #fff;
    transition: 0.5s;
    display: flex;
    align-items: center;
}

.logo-search-part {
    display: flex;
}

.logo {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    
}
.logo:hover {
    animation: change 2s ;
}

@keyframes change{
    0%{ background: #000;}
    20%{ background: #0f1bcc;}
    60%{ background: #d87e2a;}
    80%{ background: #177a30;}
    100%{ background: #000;}
}

.logo-item {
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;

}
.search-in-navbar {
    border-left: 1px solid #DCDCDC;
}

.search-in-navbar:hover {
    color: #1E90FF;
    text-decoration: none;
}

.navbar-logo img {
    width: 60px;
}

.navbar-logo img:hover {
    opacity: 0.5;
}

.btn-sign {
    color: rgb(116, 111, 111);
    font-weight: bold;
    border: none;
    border-radius: 10%;
    padding: 0.4rem 1rem;
    cursor: pointer;
}

.btn-sign:hover {
    color:#000;
}

/* end of navbar */

/* Slideshow */

.slideshow {
    margin: 20px;
    position: relative;
}

.myslides {
    margin: auto;
    width: 100%;
    border-radius: 10px;
}

.btn-floating {
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #000;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
}

#btn1 {
    position: absolute;
    left: 0;
    top: 43%;
}

#btn2 {
    position: absolute;
    right: 0;
    top: 43%;
}

.btn-floating:hover {
    background-color: #00008B;
    transform: scale(1.2);
}

/* end of Slideshow */

/* classification */

.classification {
    margin: auto;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
}

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
}

.classification-choose {
    color: #00008B;
    text-decoration: none;
    padding: 0 10px;
}

.classification-choose:hover {
    font-weight: bold;
    color: #00008B;
    text-decoration: none;
}

/* end of classifications */

/* section-1 */

.project {
    width: 75%;
    margin: auto;
}

.project-name {
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
}
/* 探索頁仿照此 */
.project-name h2 {
    color: #696969;
    font-weight: 400;
}

.project-btn {
    background-color: #fff;
    color: #1E90FF;
    border: 1px solid #1E90FF;
    border-radius: 3px;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
}

.project-btn:hover {
    color: #00008b;
    border: 1px solid #00008b;
}

.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.container-projects {
    width: 30%;
    margin: 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
}

.container-projects a{
    text-decoration: none
}

.photo:hover {
    text-decoration: none;
}

.title {
    color: #000;
    margin-top: 0.7rem;
}

.container-projects img {
    width: 100%;
    vertical-align: top;
    border-radius: 10px;
}

.container-span {
    display: block;
    font-size: 12px;
    color: #696969;
    margin-top: 0.7rem;
}

a.cp-name {
    color: #0050a2;
}

a.cp-name:hover {
    text-decoration: none;
    color: #000000;
}

.container-projects p {
    color: #696969;
    font-size: 14px;
    margin-top: 0.7rem;
}

.container-project-footer {
    color: #696969;
}
/* 設定進度條 */
.cpf-line {
    width: 100%;
    height: 0.15rem;
    background-color: var(--line-border-empty);
    border-radius: 0.2rem;
    margin-top: 0.7rem;
}
/* 注意下fill設定 */
.cpf-line {
    /* width: 100%; */
    height: 0.15rem;
    background-color: var(--line-border-fill);
    border-radius: 0.2rem;
}


.time-money-part {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.time {
    vertical-align: top;
    line-height: 1.8rem;
    font-size: 0.2rem;
}

.money {
    vertical-align: top;
}

/* page btn */

/* 設定頁面按鈕 */

/* .project-page {
    padding-top: 30px;
    display: flex;
    justify-content: center;
} */

/* end of project */

/* footer */

footer {
    background-color: #F5F5F5;
}

.footer-part {
    width: 50%;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: space-between;
}

.footer-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px 0px;
}

.footer-content a {
    text-decoration: none;
    /* 此處看是否與首頁統一 */
    color: #1E90FF;
}

.footer-content a:hover {
    text-decoration: none;
    color: #000000;
}

.footer-title {
    margin-bottom: 20px;
}

.trademark {
    margin-top: 20px;
    color: #696969;
}

/* end of footer */

/* RWD */

@media screen and (max-width:320px) {
    #btn1 {
        position: absolute;
        left: 0;
        top: 30%;
    }
    #btn2 {
        position: absolute;
        right: 0;
        top: 30%;
    }
    .classification {
        width: 100%;
    }
    .classification-choose-part {
        width: 50%;
    }
    .container-projects {
        width: 100%;
    }
    .footer-part {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .footer-content {
        width: 100%;
    }
}

@media screen and (min-width:320px) and (max-width:840px) {
    .container-projects {
        width: 100%;
    }
    .footer-part {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: start;
    }
}

/* end of RWD */
</style>
<script>
// @ is an alias to /src
// Slideshow
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("myslides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} 
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }

export default {
  name: "Home",
  components: {},
};
</script>
