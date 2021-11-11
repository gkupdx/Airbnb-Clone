//// NextTrip.js - 'Inspiration for your next trip' section

const NextTrip = () => {

  return (
    <div className="nextTrip">
      <h2>Inspiration for your next trip</h2>
      <div className="nextTripWrapper">
        <div className="icon">
          <img src="https://a0.muscache.com/im/pictures/e68a0a87-e41a-489e-a03e-e11236d9b679.jpg?im_w=320" alt="Portland"/>
          <div className="portlandHours">
            <h3>Portland</h3>
            <p>1 hour drive</p>
          </div>
        </div>

        <div className="icon">
          <img src="https://a0.muscache.com/im/pictures/7ab01178-6b05-4f14-8fcf-b989acb7a52c.jpg?im_w=320" alt="Seattle"/>
          <div className="seattleHours">
            <h3>Seattle</h3>
            <p>4.5 hour drive</p>
          </div>
        </div>

        <div className="icon">
          <img src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320" alt="Bend"/>
          <div className="bendHours">
            <h3>Bend</h3>
            <p>4.5 hour drive</p>
          </div>
        </div>

        <div className="icon">
          <img src="https://a0.muscache.com/im/pictures/b4e025ab-b353-41fb-814d-5e4f80571186.jpg?im_w=320" alt="Tacoma"/>
          <div className="eugeneHours">
            <h3>Eugene</h3>
            <p>3 hour drive</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextTrip;
