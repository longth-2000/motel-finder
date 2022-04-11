<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="left section">
          <h2>About Us</h2>
          <div class="content">
            <p>
              MultiWebPress is a educational blog where we post blogs related to
              Website Development, Technology, Tips & Hacks and much more
              creative coding stuff.
            </p>
          </div>
        </div>

        <div class="center section">
          <h2>Contact Us</h2>
          <div class="content">
            <div class="place">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              <span class="text"> 144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy</span>
            </div>
            <div class="phone">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <span class="text"> +98-76543210</span>
            </div>
            <div class="email">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <span class="text"> test@outlook.com</span>
            </div>
          </div>
        </div>

        <div class="right section">
          <h2>Subscribe</h2>
          <div class="content" >
            <div class="social" style="padding-top:30px">
              <a href="https://multiwebpress.com"
                ><a-icon
                  class="icon-social"
                  type="facebook"
                  :style="{ fontSize: '30px', color: 'white' }"
                />
              </a>
              <a href="https://instagram.com/multiwebpress"
                ><a-icon
                  class="icon-social"
                  type="instagram"
                  :style="{ fontSize: '30px', color: 'white' }"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCvB-4cVzkhvu4TkTy1hs9zA"
                ><a-icon
                  class="icon-social"
                  type="youtube"
                  :style="{ fontSize: '30px', color: 'white' }"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <center>
          <div>
            <span
              >Powered By
              <a href="https://multiwebpress.com"
                >© 2021 | All Rights Reserved | Made By Multiwebpress</a
              ></span
            >
          </div>
        </center>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Tahoma;
  box-sizing: border-box;
  color: #d9d9d9;
}

footer {
  bottom: 0;
  width: 100%;
  background-color: #316cab;
}

.container {
  display: flex;
  padding: 3rem 0;
  margin: 0 auto;
}

.container .section {
  flex-basis: 50%;
  padding: 0 20px;
}

.section h2 {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.section .content {
  margin: 20px 0 0 0;
  position: relative;
}

.section .content::before {
  position: absolute;
  content: "";
  top: -10px;
  height: 2px;
  width: 100%;
}

.section .content::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 15%;
  background-color: #dd5f24;
  top: -10px;
}

.left .content .social {
  margin: 20px 0 0 0;
}

.left .content .social a {
  padding: 0 2px;
}

.left .content .social a span {
  height: 40px;
  width: 40px;
  background: transparent;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border-radius: 50px;
  transition: 0.4s;
  border: 1px solid #656565;
}

.left .content .social a span:hover {
  background: #dd5f24;
}

.center .content .fas {
  background: transparent;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #656565;
}

.center .content .fas:hover {
  background: #dd5f24;
  border: 1px solid #dd5f24;
}

.center .content .text {
  font-size: 1rem;
  font-weight: 500;
  padding-left: 10px;
}

.center .content .phone {
  margin: 15px 0;
}

.right form .text {
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #656565;
}

.right form input {
  width: 100%;
  font-size: 1.0625rem;
  background: transparent;
  border: 1px solid #656565;
}

.right form input {
  height: 35px;
}

.right form .btn {
  margin-top: 10px;
}

.right form .btn button {
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  background: #dd5f24;
  font-size: 1.0625rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.right form .btn button:hover {
  background: #000;
}

.footer-bottom center {
  padding: 5px;
  font-size: 0.9375rem;
  background: #151515;
}

.footer-bottom center span {
  color: #656565;
}

.footer-bottom center a {
  text-decoration: none;
}

.footer-bottom center a:hover {
  text-decoration: underline;
}
.icon-social {
  margin-right: 30px;
}

@media screen and (max-width: 700px) {
  footer {
    position: relative;
    bottom: 0px;
  }

  .left .content {
    padding-right: 0px;
    padding-bottom: 30px;
  }

  .container {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0.5rem;
  }

  .container .section {
    margin: 5px 0;
  }
}
</style>
