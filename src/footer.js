function Footer(){
        
   return(
    <section className="footer-sec">
      <div className="foooter-contaner">
          <div className="footer-row">
              <div className="footer-col1">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <div className="col1-content">
                      <h1>Address</h1>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022 - US</p>
                  </div>
              </div>
              <div className="footer-col2">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <div className="col2-content">
                      <h1>Reservations</h1>
                      <p>Phone: +1 5589 55488 55</p>
                      <p>Email: info@example.com</p>
                  </div>
              </div>
              <div className="footer-col3">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  <div className="col3-content">
                      <h1>Opening Hours</h1>
                      <p>Mon-Sat: 11AM - 23PM</p>
                      <p>Sunday: Closed</p>
                  </div>
              </div>
              <div className="footer-col4">
                  
                  <div className="col4-content">
                     <h1>Follow Us</h1>
                    <div className="col4-icons">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                  </div>
              </div>
          </div><hr/>
          <div className="footer-last-content">
              <p>© Copyright Yummy. All Rights Reserved</p>
              <p>Designed by <span>BootstrapMade</span></p>
          </div>
      </div>
    </section>
   )

     
}
export default Footer