//// Discover_mobile.js

const Discover = () => {
  return (
    <div className="discover">
      <h2>Discover Airbnb Experiences</h2>
      <div className="discoverWrapper">
        <div className="onTrip">
          <h3>Things to do on your trip</h3>
          <button>Experiences</button>
        </div>
        <div className="fromHome">
          <h3>Things to do from home</h3>
          <button>Online Experiences</button>
        </div>
      </div>
    </div>
  )
}

export default Discover;
