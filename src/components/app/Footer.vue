<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-contact">
        <div class="footer-logo">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="footer-name">WEBSITE TÌM NHÀ TRỌ SINH VIÊN UET</div>
        <div class="footer-infor">
          <div class="information">
            <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
            <div>144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</div>
          </div>
          <div class="information">
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <div>(084)123456789</div>
          </div>
        </div>
      </div>
      <div class="footer-hotline">
        <div id="footer-help">
          <div class="help">
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <div class="content">
              <p class="title">Hỗ trợ khách hàng</p>
              <p class="own">18020853@vnu.edu.vn</p>
            </div>
          </div>
          <div class="help">
            <font-awesome-icon class="icon" icon="fa-solid fa-headphones" />
            <div class="content">
              <p class="title">Chăm sóc khách hàng</p>
              <p class="own">18020853@vnu.edu.vn</p>
            </div>
          </div>
        </div>
        <div id="footer-tutorial">
          <div class="tutorial">
            <ul>
              <li style="font-weight: bold">CHÍNH SÁCH</li>
              <li>Báo giá và hỗ trợ</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
            </ul>
          </div>
          <div class="tutorial">
            <ul>
              <li style="font-weight: bold">HƯỚNG DẪN</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
            </ul>
          </div>
          <div class="tutorial">
            <ul>
              <li style="font-weight: bold">QUY ĐỊNH</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
              <li>Hướng dẫn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  background: lavender;
}
.footer-content {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.footer-contact {
  width: 100%;
  font-weight: bold;
  padding-left: 80px;
}
.footer-name {
  font-size: 14px;
  font-family: auto;
  margin-top: 20px;
}
.footer-infor {
  font-size: 14px;
}
.footer-infor .information {
  margin-top: 20px;
  display: flex;
}
img {
  width: 200px;
  height: 100px;
  display: block;
  margin-top: 20px;
}
.footer-contact .icon {
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
}
.footer-hotline .icon {
  font-size: 35px;
}
#footer-help {
  display: flex;
  margin: 20px 15% 10px;
}
.footer-hotline .help {
  display: flex;
  margin: 20px 5%;
}
.footer-hotline .help .content {
  margin-left: 15px;
  font-size: 13px;
}
.footer-hotline .help .content .title {
  margin: 0;
}
.footer-hotline .help .content .own {
  font-weight: bold;
}
#footer-tutorial {
  display: flex;
}
#footer-tutorial .tutorial {
  width: 200px;
  margin-left: 40px;
}
@media screen and (min-width: 900px) {
  .footer {
    height: 350px;
  }
  .footer-content {
    display: flex;
  }
  .footer-contact {
    flex: 4;
    font-weight: bold;
  }
  .footer-hotline {
    flex: 6;
    margin-left: 50px;
  }
 
}
</style>
