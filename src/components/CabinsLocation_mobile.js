//// CabinsLocation_mobile.js

const CabinsLocation = ({ lightText, showMoreStyle, showSeeMore, hiddenStyle, showMoreLocations }) => {

  return (
    <div className="getawayLocation">
      <div className="getawayWrapper">
        <button>Mentone<br/><span style={lightText}>Alabama</span></button>
        <button>Sedona<br/><span style={lightText}>Arizona</span></button>
        <button>Helen<br/><span style={lightText}>Georgia</span></button>
        <button>Pine Mountain<br/><span style={lightText}>Georgia</span></button>
        <button>Stone Mountain<br/><span style={lightText}>Georgia</span></button>
        <button>Island Park<br/><span style={lightText}>Idaho</span></button>
        <button>Blue Mountains<br/><span style={lightText}>New South Wales</span></button>
        <button>Asheville<br/><span style={lightText}>North Carolina</span></button>
        <button>Blowing Rock<br/><span style={lightText}>North Carolina</span></button>
        <button>Boone<br/><span style={lightText}>North Carolina</span></button>
        <button>Hochatown<br/><span style={lightText}>Oklahoma</span></button>
        {showSeeMore ? <button onClick={showMoreLocations}><span style={showMoreStyle}>Show more</span></button> : <button>Pigeon Forge<br/><span style={lightText}>Tennessee</span></button>}
        <div style={hiddenStyle} className="hiddenLocations">
          <button>Townsend<br/><span style={lightText}>Tennessee</span></button>
          <button>Wears Valley<br/><span style={lightText}>Tennessee</span></button>
          <button>Cabins<br/><span style={lightText}>West Virginia</span></button>
        </div>
      </div>
    </div>
  )
}

export default CabinsLocation;
