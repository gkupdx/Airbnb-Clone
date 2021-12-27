//// UniqueLocation_mobile.js

const UniqueLocation = ({ lightText }) => {

  return (
    <div className="getawayLocation">
      <div className="getawayWrapper">
        <button>Cabins<br/><span style={lightText}>United States</span></button>
        <button>Treehouses<br/><span style={lightText}>United States</span></button>
        <button>Glamping<br/><span style={lightText}>United States</span></button>
        <button>Tiny Houses<br/><span style={lightText}>United States</span></button>
        <button>Beach Houses<br/><span style={lightText}>United States</span></button>
        <button>Campers and RVs<br/><span style={lightText}>United States</span></button>
        <button>Lakehouses<br/><span style={lightText}>United States</span></button>
      </div>
    </div>
  )
}

export default UniqueLocation;
