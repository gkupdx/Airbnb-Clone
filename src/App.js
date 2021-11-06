//// App.js

import LiveAnywhere from './components/LiveAnywhere';
import Hosting from './components/Hosting';
import Discover from './components/Discover';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <LiveAnywhere />
      <Hosting />
      <Discover />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default App;
