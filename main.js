function router() {
  const routes = {
    '/': 'index.html',
    '#/about': '/about.html',
    '#/contact': '/contact.html',
    '#/gallery': '/gallery.html',
    '#/DigitalLearning': '/DigitalLearning.html',
    '#/choose': '/choose.html',
    '#/Kindergarten': '/Kindergarten.html',
    '#/PrimarySchool': '/PrimarySchool.html',
    '#/junior': '/junior.html',
    '#/Admissions':'/Admissions.html',
    // '#/SocialResponsibility':'/SocialResponsibility.html',
    '#/MentalWellbeing':'/MentalWellbeing.html',MentalWellbeing
    '#/Sports':'/Sports.html',
    '#/ClubsandPrograms':'/ClubsandPrograms.html',
    '#Facilities':'/Facilities.html',
    '#/StudentLife':'/StudentLife.html',
    '#/Facilities':'/Facilities.html'
    // Add more routes as needed
  };

  const contentDiv = document.getElementById('content');

  function loadPage(path) {
    fetch(routes[path])
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading page:', error);
      });
  }

  window.addEventListener('hashchange', () => {
    const path = window.location.hash || '';
    loadPage(path);
  });
  

  // Load the initial page
  loadPage(window.location.hash || '');
}

// Call the router function to initialize routing
router();




document.querySelector('#app').innerHTML = `
  <footer class="footer-style_two">
    <div class="footer-two_icon" style="background-image: url(assets/images/icons/footer-icon-1.png)"></div>
    <div class="footer-two_icon-two" style="background-image: url(assets/images/icons/footer-icon-2.png)"></div>
    <div class="footer-two_icon-three" style="background-image: url(assets/images/icons/footer-icon-3.png)"></div>
    <div class="outer-container">
      <div class="auto-container">
        <!-- Gallery Box -->
        <div class="footer-two_gallery">
          <div class="instagram_icon"><i class="fa-brands fa-instagram"></i></div>
          <h2 class="footer-two_gallery-title">Milimani<span>Gallery</span></h2>
          
          <div class="instagram_carousel swiper-container">
            <div class="swiper-wrapper">

              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-7.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-7.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-8.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-8.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-9.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-9.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-10.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-10.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-11.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-11.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Slide -->
              <div class="swiper-slide">
                <!-- Gallery One Block -->
                <div class="gallery-one_block">
                  <div class="gallery-one_block-inner">
                    <div class="gallery-one_block-image">
                      <img src="assets/images/gallery/instagram-12.jpg" alt="" />
                      <div class="gallery-one_block-overlay">
                        <a href="assets/images/gallery/instagram-12.jpg" class="lightbox-image gallery-one_block-icon fa-brands fa-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <!-- End Gallery Box -->
      </div>
      
      <!-- Widgets Section -->
      <div class="widgets-section">
        <div class="auto-container">
          <div class="row clearfix">
                
            <!-- Big Column -->
            <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">

                <!-- Footer Column -->
                <div class="footer_column col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget">
                    <div class="footer-logo3"><a href="index.html"><img src="assets/images/logo3-2.png" alt="" title=""></a></div>
                    <div class="footer-text">Find us on our social media platforms</div>
                    <!-- Social Box -->
                    <div class="footer_socials">
                      <a href="https://facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                      <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                      <a href="https://youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                      <a href="https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                  </div>
                </div>

                <!-- Footer Column -->
                <div class="footer_column col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h5 class="footer-title">Programs</h5>
                    <ul class="footer-list">
                      <li><a href="#">Academics</a></li>
                      <li><a href="#">Sports Spectacular</a></li>
                      <li><a href="#">Nature's Gymnasts</a></li>
                      <li><a href="#">Warrior Training</a></li>
                      <li><a href="#">Adventure Explorers</a></li>
                      <li><a href="#">Champions Camp</a></li>
                      <li><a href="#">Team Building</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <!-- Big Column -->
            <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">

                <!-- Footer Column -->
                <div class="footer_column col-lg-4 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h5 class="footer-title">Resources</h5>
                    <ul class="footer-list">
                      <li><a href="#">About</a></li>
                      <li><a href="#">FaQs</a></li>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">Case Studies</a></li>
                      <li><a href="#">Whitepapers</a></li>
                      <li><a href="#">services</a></li>
                    </ul>
                  </div>
                </div>

                <!-- Footer Column -->
                <div class="footer_column col-lg-8 col-md-6 col-sm-12">
                  <div class="footer-widget newsletter-widget">
                    <h5 class="footer-title">Our Newsletter</h5>
                    <div class="newsletter-box_two">
                      <form method="post" action="contact.html">
                        <div class="form-group">
                          <span class="icon fa-regular fa-envelope fa-fw"></span>
                          <input type="email" name="search-field" value="" placeholder="Email address" required>
                          <button type="submit" class="theme-btn flaticon-paper-plane"></button>
                        </div>
                      </form>
                      <div class="newsletter-box_two-spam">*we never spam</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- End Widgets Section -->
    
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="inner-container">
            <div class="row clearfix">
              <!-- Column -->
              <div class="column col-lg-6 col-md-12 col-sm-12">
                <div class="copyright">Copyright &copy; 2024 MilimaniAll Rights Reserved</div>
              </div>
              <!-- Column -->
              <div class="column col-lg-6 col-md-12 col-sm-12">
    .             </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </footer>

`
