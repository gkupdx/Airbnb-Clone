//// Footer.js - for the footer links

const Footer = () => {

  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="about">
          <h2>About</h2>
          <a href="#how-airbnb-works">How Airbnb works</a>
          <a href="#newsroom">Newsroom</a>
          <a href="#2021">Airbnb 2021</a>
          <a href="#investors">Investors</a>
          <a href="#airbnb-plus">Airbnb Plus</a>
          <a href="#airbnb-luxe">Airbnb Luxe</a>
          <a href="#hotel-tonight">HotelTonight</a>
          <a href="#airbnb-for-work">Airbnb for Work</a>
          <a href="#youtube/airbnb">Made possible by Hosts</a>
          <a href="#careers">Careers</a>
          <a href="#what-makes-airbnb-airbnb">Founders' Letter</a>
        </div>
        <div className="community">
          <h2>Community</h2>
          <a href="#diversity">Diversity & Belonging</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#associates">Airbnb Associates</a>
          <a href="#refugees">Host Afghan refugees</a>
          <a href="#invite">Guest Referrals</a>
          <a href="#giftcards">Gift cards</a>
          <a href="#locale">Airbnb.org</a>
        </div>
        <div className="host">
          <h2>Host</h2>
          <a href="#host">Host your home</a>
          <a href="#onlinehost">Host an Online Experience</a>
          <a href="#experiences">Host an Experience</a>
          <a href="#responsible-hosting">Responsible hosting</a>
          <a href="#resources">Resource Center</a>
          <a href="#community">Community Center</a>
        </div>
        <div className="support">
          <h2>Support</h2>
          <a href="#covidsafety">Our COVID-19 Response</a>
          <a href="#help">Help Center</a>
          <a href="#cancellation">Cancellation options</a>
          <a href="#neighbors">Neighborhood Support</a>
          <a href="#trust">Trust & Safety</a>
        </div>
       </div>

      <div className="divider2"></div>

      <div className="copyrightWrapper">
        <div className="copyright">
          <p>&copy; 2021 Airbnb, Inc. &#183; <a href="#privacy">Privacy</a> &#183; <a href="#terms-and-conditions">Terms</a> &#183; <a href="#sitemap">Sitemap</a></p>
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
