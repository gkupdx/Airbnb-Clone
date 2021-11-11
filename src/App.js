//// App.js

//import Header from './components/Header';
import NextTrip from './components/NextTrip';
import GiftCards from './components/GiftCards';
import Hosting from './components/Hosting';
import Discover from './components/Discover';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <NextTrip />
      <GiftCards />
      <Discover />
      <Hosting />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default App;
