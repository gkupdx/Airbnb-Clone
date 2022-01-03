//// Footer_mobile.js (mobile view to C+P later)

import { FiGlobe } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';

const Footer = () => {

  const paddingTop = {
    paddingTop: "15px"
  }

  const globeIconStyle = {
    fontSize: "1.2em"
  }

  const dollarIconStyle = {
    fontSize: "1em",
    opacity: "0.9"
  }

  const socialIconStyle = {
    fontSize: "1.1em"
  }

  return (
    <div className="footer">
      <div className="footerWrapper">

        <h2 style={paddingTop}>Support</h2>
        <div className="column">
          <a href="#link">Help Center</a>
          <a href="#link">Safety information</a>
          <a href="#link">Cancellation options</a>
          <a href="#link">Our COVID-19 Response</a>
          <a href="#link">Supporting people with disabilities</a>
          <a href="#link">Report a neighborhood concern</a>
        </div>

        <div className="divideY"></div>

        <h2>Community</h2>
        <div className="column">
          <a href="#link">Airbnb.org disaster relief housing</a>
          <a href="#link">Support Afghan refugees</a>
          <a href="#link">Celebrating diversity & belonging</a>
          <a href="#link">Combating discrimination</a>
        </div>

        <div className="divideY"></div>

        <h2>Hosting</h2>
        <div className="column">
          <a href="#link">Try hosting</a>
          <a href="#link">AirCover: protection for Hosts</a>
          <a href="#link">Explore hosting resources</a>
          <a href="#link">Visit our community forum</a>
          <a href="#link">How to host responsibly</a>
        </div>

        <div className="divideY"></div>

        <h2>About</h2>
        <div className="column">
          <a href="#link">Newsroom</a>
          <a href="#link">Learn about new features</a>
          <a href="#link">Letter from our founders</a>
          <a href="#link">Careers</a>
          <a href="#link">Investors</a>
          <a href="#link">Airbnb Luxe</a>
        </div>

        <div className="divideY"></div>

        <div className="copyrightColumn">
          <button className="footerBtn"><FiGlobe style={globeIconStyle}/><p className="iconText">English (US)</p></button>
          <button className="footerBtn"><BiDollar style={dollarIconStyle}/><p className="iconText">USD</p></button>
          <a className="social" href="#facebook"><ImFacebook style={socialIconStyle}/></a>
          <a className="social" href="#twitter"><ImTwitter style={socialIconStyle}/></a>
          <a className="social" href="#instagram"><ImInstagram style={socialIconStyle}/></a>
          <p>&copy; 2022 Airbnb, Inc.</p>
          <p className="copyrightLinks">
            <a href="link">Privacy</a>&#183;
            <a href="link">Terms</a>&#183;
            <a href="link">Sitemap</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
