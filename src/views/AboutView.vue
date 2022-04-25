<template>
  <div class="about-view">
    <section class="background firstsection">
      <div class="box-main">
        <div class="firstHalf">
          <p class="text-big">Contact Us</p>

          <p class="text-small">Bạn có thể liên hệ với chúng tôi nếu bạn gặp vấn đề</p>

          <br />
          <p class="center" style="text-decoration: none; color: white;">
            
          </p>
        </div>
      </div>
    </section>
    <section class="service">
      <!-- Heading-->
      <h1 class="h-primary center" style="margin-top: 30px;font-family: Piazzolla, serif;">
        Liên hệ với chúng tôi
      </h1>
      <div id="service">
        <div class="box">
          <!-- Form -->
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/800px-Circle-icons-phone.svg.png"
            alt="color_image"
          />
          <br />

          <p class="center">
            Số điện thoại: +1800 200 300 400
          </p>
        </div>
        <div class="box">
          <!-- Email -->
          <img
            src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
            alt="color_image"
          />
          <br />

          <!-- Displaying text at
                    the center of the box-->
          <p class="center">
            Email: 18020853@vnu.edu.com
          </p>
        </div>
        <div class="box">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/33/28/location-icon-map-address-geographical-position-vector-29053328.jpg"
            alt="color_image"
          />
          <br />

          <!-- Displaying text at
                    the center of the box-->
          <p class="center">Địa chỉ: 144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
 
html {
    scroll-behaviour: smooth;
}
 
:root {
    --navbar-height: 59px;
}
 
.logo {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
 
.logo img {
    width: 33%;
    border: 2px solid white;
    border-radius: 50px;
}
 
.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    cursor: pointer;
}
 
.nav-list {
    width: 70%;
    display: flex;
}
 
.nav-list li {
    list-style: none;
    padding: 2px 6px;
}
 
.nav-list li a {
    text-decoration: none;
    color: white;
}
 
.nav-list li a:hover {
    color: grey;
}
 
.rightNav {
    width: 50;
    text-align: right;
}
 
#search {
    padding: 5px;
    font-size: 17px;
    border: 2px solid grey;
    border-radius: 9px;
}
 
.background {
    background-color: grey;
    background-blend-mode: darken;
    background-size: cover;
}
 
.firstsection {
    height: 100vh;
}
 
.box-main {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    max-width: 50%;
    margin: auto;
    height: 80%;
}
 
.firstHalf {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
 
.firstHalf img {
    display: flex;
    border-radius: 9050px;
}
 
.text-big {
    font-family: "Piazzolla", serif;
    font-weight: bold;
    font-size: 41px;
    text-align: center;
}
 
.text-small {
    font-family: "Sansita Swashed", cursive;
    font-size: 18px;
    text-align: center;
}
 
#service {
    margin: 34px;
    display: flex;
}
 
#service .box {
    width: 33.33%;
    padding: 45px;
    margin: 3px 6px;
    border-radius: 28px;
}
 
#service .box img {
   width: 100px;
   height: 100px; 
   display: block;
   margin: 0 auto
}
 
#service .box p {
    font-family: sans-serif;
    text-align: center;
}
 
.btn {
    padding: 8px 20px;
    margin: 7px 0;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    cursor: pointer;
}
 
.btn-sm {
    padding: 6px 10px;
    vertical-align: middle;
}
 
.center {
    text-align: center;
}
 
.text-footer {
    text-align: center;
    padding: 30px 0;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    justify-content: center;
}
</style>
