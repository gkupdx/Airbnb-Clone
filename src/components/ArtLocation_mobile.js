//// ArtLocation_mobile.js

const ArtLocation = () => {
  const lightText = {
    color: "rgba(0, 0, 0, 0.6)"
  }

  const showMore = {
    fontWeight: 600,
    textDecoration: "underline"
  }

  return (
    <div className="artLocation">
      <div className="artWrapper">
        <button>Phoenix<br/><span style={lightText}>Arizona</span></button>
        <button>Hot Springs<br/><span style={lightText}>Arkansas</span></button>
        <button>Los Angeles<br/><span style={lightText}>California</span></button>
        <button>San Diego<br/><span style={lightText}>California</span></button>
        <button>San Francisco<br/><span style={lightText}>California</span></button>
        <button>Barcelona<br/><span style={lightText}>Catalonia</span></button>
        <button>Prague<br/><span style={lightText}>Czechia</span></button>
        <button>Washington<br/><span style={lightText}>District of Columbia</span></button>
        <button>Keswick<br/><span style={lightText}>England</span></button>
        <button>London<br/><span style={lightText}>England</span></button>
        <button>Scarborough<br/><span style={lightText}>England</span></button>
        <button><span style={showMore}>Show more</span></button>
      </div>
    </div>
  )
}

export default ArtLocation;
