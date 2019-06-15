<template>
  <div id="app">
    <div>
      <header class="main-header">
        <!--Start Main Menu area-->
        <div class="mainmenu-area stick">
          <div class="container clearfix">
            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12">
                  <div class="logo">
                      <router-link to="/">
                          <img src="images/resources/logo.png" alt="Awesome Logo">
                      </router-link>
                  </div>
              </div>
              <div class="col-md-9 col-sm-12 col-xs-12">
                  <nav class="main-menu">
                      <div class="navbar-header">     
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                      </div>
                      <div class="navbar-collapse collapse clearfix">
                          <ul class="navigation clearfix">
                              <li class="dropdown"><router-link to="/">Home</router-link>
                                  <ul>
                                      <li><router-link to="/">Home Slider</router-link></li>
                                      <li><router-link to="/">Home Banner</router-link></li>
                                  </ul>
                              </li>
                              <li><router-link to="/about">About</router-link></li>
                              <li><router-link to="/menu">Menu</router-link></li>
                              <li><router-link to="/reservation">Reservation</router-link></li>
                              <li><router-link to="/contact">Contact</router-link></li>
                          </ul>
                      </div>
                      <div class="login-bt">
                          <router-link to="/reservation" class="thm-btn bg-clr1">Reservation</router-link>
                      </div>
                  </nav>
              </div>           
            </div>
          </div>
        </div>
        <!--End Main Menu area-->
      </header>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <footer class="footer-area">
      <div class="container">
        <div class="row">
            <!--Start single footer widget-->
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-footer-widget">
                    <div class="sec-title left">
                        <h2>Contact Us</h2>
                    </div>
                    <div class="our-info">
                        <p>Address: Essex St.New York, USA</p>
                    </div> 
                </div>
            </div>
            <!--End single footer widget-->

            <!--Start single footer widget-->
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-footer-widget">
                    <div class="sec-title left">
                        <h2>Reservation</h2>
                    </div>
                    <div class="our-info">
                        <p>Phone: +385 21 333 777</p>
                        <p>Email: reservation@restaurantdany.com</p>
                    </div> 
                </div>
            </div>
            <!--End single footer widget-->

            <!--Start single footer widget-->
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-footer-widget">
                    <div class="sec-title left">
                        <h2>Download Our App</h2>
                    </div>
                    <div class="our-info">
                        <figure><img src="images/icons/4.jpg" alt="" /></figure>
                        <figure><img src="images/icons/5.jpg" alt="" /></figure>
                    </div> 
                </div>
            </div>
            <!--End single footer widget-->
        </div>
      </div>
    </footer>   
    <!--End footer area-->

    <!--Start footer bottom area-->
    <section class="footer-bottom-area">
        <div class="container">
            <div class="copyright-text text-center">
                <p>Copyright &copy; 2019 <a href="#">DanyResto All right reserved</a></p> 
                
            </div> 
        </div>  
    </section>
    <!--End footer bottom area-->



    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html"><i class="fa fa-arrow-up"></i></div>
  </div>
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
