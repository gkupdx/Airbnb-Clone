//// CabinsLocation - for 'Mountain cabins' button click

const CabinsLocation = () => {
  const lightText = {
    color: "rgba(0, 0, 0, 0.6)"
  }

  return (
    <div className="cabinsLocation">
      <div className="cabinsWrapper">
        <div className="columnOne">
          <button>Mentone<br></br><span style={lightText}>Alabama</span></button>
          <button>Stone Mountain<br></br><span style={lightText}>Georgia</span></button>
          <button>Blowing Rock<br></br><span style={lightText}>North Carolina</span></button>
          <button>Townsend<br></br><span style={lightText}>Tennessee</span></button>
        </div>
        <div className="columnTwo">
          <button>Sedona<br></br><span style={lightText}>Arizona</span></button>
          <button>Island Park<br></br><span style={lightText}>Idaho</span></button>
          <button>Boone<br></br><span style={lightText}>North Carolina</span></button>
          <button>Wears Valley<br></br><span style={lightText}>Tennessee</span></button>
        </div>
        <div className="columnThree">
          <button>Helen<br></br><span style={lightText}>Georgia</span></button>
          <button>Blue Mountains<br></br><span style={lightText}>New South Wales</span></button>
          <button>Hochatown<br></br><span style={lightText}>Oklahoma</span></button>
          <button>Cabins<br></br><span style={lightText}>West Virginia</span></button>
        </div>
        <div className="columnFour">
          <button>Pine Mountain<br></br><span style={lightText}>Georgia</span></button>
          <button>Asheville<br></br><span style={lightText}>North Carolina</span></button>
          <button>Pigeon Forge<br></br><span style={lightText}>Tennessee</span></button>
        </div>
      </div>
    </div>
  )
}

export default CabinsLocation;
