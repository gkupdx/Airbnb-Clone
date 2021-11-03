//// Footer.js - for the footer links

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="about">
          <h2>ABOUT</h2>
          <a href="#link">How Airbnb works</a>
          <a href="#link">Newsroom</a>
          <a href="#link">Airbnb 2021</a>
          <a href="#link">Investors</a>
          <a href="#link">Airbnb Plus</a>
          <a href="#link">Airbnb Luxe</a>
          <a href="#link">HotelTonight</a>
          <a href="#link">Airbnb for Work</a>
          <a href="#link">Made possible by Hosts</a>
          <a href="#link">Careers</a>
          <a href="#link">Founders' Letter</a>
        </div>
        <div className="community">
          <h2>COMMUNITY</h2>
          <a href="link">Diversity & Belonging</a>
          <a href="link">Against Discrimination</a>
          <a href="link">Accessbility</a>
          <a href="link">Airbnb Associates</a>
          <a href="link">Host Afghan refugees</a>
          <a href="link">Guest Referrals</a>
          <a href="link">Gift cards</a>
          <a href="link">Airbnb.org</a>
        </div>
        <div className="host">
          <h2>HOST</h2>
          <a href="link">Host your home</a>
          <a href="link">Host an Online Experience</a>
          <a href="link">Host an Experience</a>
          <a href="link">Responsible hosting</a>
          <a href="link">Resource Center</a>
          <a href="link">Community Center</a>
        </div>
        <div className="support">
          <h2>SUPPORT</h2>
          <a href="link">Our COVID-19 Response</a>
          <a href="link">Help Center</a>
          <a href="link">Cancellation options</a>
          <a href="link">Neighborhood Support</a>
          <a href="link">Trust & Safety</a>
        </div>
       </div>

      <div className="copyrightWrapper">
        <div className="copyright">
          <p>&copy; 2021 Airbnb, Inc. &#183; <a href="#link">Privacy</a> &#183; <a href="#link">Terms</a> &#183; <a href="#link">Sitemap</a></p>
        </div>
        <div className="social">
          <button><i class="fas fa-globe"></i> English (US)</button>
          <button><i class="fas fa-dollar-sign"></i> USD</button>
          <a href="#facebook"><i class="fab fa-facebook"></i></a>
          <a href="#twitter"><i class="fab fa-twitter"></i></a>
          <a href="#instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
