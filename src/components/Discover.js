//// Discover.js - 'Discover things to do' section

const Discover = () => {
  return (
    <div className="discover">
      <h1>Discover Airbnb Experiences</h1>
      <div className="discoverWrapper">
        <div className="experiences">
          <div className="experiencesContent">
            <h3>Things to do on your trip</h3>
            <button>Experiences</button>
          </div>
          <img src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480" alt="Sheep"/>
        </div>
        <div className="onlineExperiences">
          <div className="onlineExperiencesContent">
            <h3>Things to do from home</h3>
            <button>Online Experiences</button>
          </div>
          <img src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480" alt="Tablet"/>
        </div>
      </div>
    </div>
  )
}

export default Discover;
