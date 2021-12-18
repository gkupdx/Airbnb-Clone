//// App.js

/*import Header from './components/Header';
import NextTrip from './components/NextTrip';
import GiftCards from './components/GiftCards';
import Hosting from './components/Hosting';
import Discover from './components/Discover';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';*/
import SearchBar from './components/SearchBar_mobile';
import Header from './components/Header_mobile';
import NextTrip from './components/NextTrip_mobile';
import Discover from './components/Discover_mobile';
import Hosting from './components/Hosting_mobile';
import Inspiration from './components/Inspiration_mobile';
import Footer from './components/Footer_mobile';
//import FooterBar from './components/FooterBar_mobile';

function App() {

  return (
    <div className="container">
      {/*<Header />
      <NextTrip />
      <GiftCards />
      <Discover />
      <Hosting />
      <Inspiration />
      <Footer />*/}
      <SearchBar />
      <Header />
      <NextTrip />
      <Discover />
      <Hosting />
      <Inspiration />
      <Footer />
      {/*<FooterBar />*/}
    </div>
  );
}

export default App;
