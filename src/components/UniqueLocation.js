//// UniqueLocation.js - for 'Unique Stays' button click

const UniqueLocation = () => {
  const lightText = {
    color: "rgba(0, 0, 0, 0.6)"
  }

  return (
    <div className="uniqueLocation">
      <div className="uniqueWrapper">
        <div className="columnOne">
          <button>Cabins<br></br><span style={lightText}>United States</span></button>
          <button>Beach Houses<br></br><span style={lightText}>United States</span></button>
        </div>
        <div className="columnTwo">
          <button>Treehouses<br></br><span style={lightText}>United States</span></button>
          <button>Campers and RVs<br></br><span style={lightText}>United States</span></button>
        </div>
        <div className="columnThree">
          <button>Glamping<br></br><span style={lightText}>United States</span></button>
          <button>Lakehouses<br></br><span style={lightText}>United States</span></button>
        </div>
        <div className="columnFour">
          <button>Tiny Houses<br></br><span style={lightText}>United States</span></button>
        </div>
      </div>
    </div>
  )
}

export default UniqueLocation;
