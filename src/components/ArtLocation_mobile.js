//// ArtLocation_mobile.js

const ArtLocation = ({ lightText, showMoreStyle, showSeeMore, hiddenStyle, showMoreLocations }) => {

  return (
    <div className="getawayLocation">
      <div className="getawayWrapper">
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
        {showSeeMore ? <button onClick={showMoreLocations} style={showMoreStyle}>Show more</button> : <button>Sherwood Forest<br/><span style={lightText}>England</span></button>}
        <div style={hiddenStyle} className="hiddenLocations">
          <button>York<br/><span style={lightText}>England</span></button>
          <button>Paris<br/><span style={lightText}>France</span></button>
          <button>Rhodes<br/><span style={lightText}>Greece</span></button>
          <button>Nashville<br/><span style={lightText}>Indiana</span></button>
          <button>Dublin<br/><span style={lightText}>Ireland</span></button>
          <button>Florence<br/><span style={lightText}>Italy</span></button>
          <button>Rome<br/><span style={lightText}>Italy</span></button>
          <button>Lisbon<br/><span style={lightText}>Lisbon</span></button>
          <button>Grande Isle<br/><span style={lightText}>Louisiana</span></button>
          <button>New Orleans<br/><span style={lightText}>Louisiana</span></button>
          <button>Marthas Vineyard<br/><span style={lightText}>Massachussetts</span></button>
          <button>South Haven<br/><span style={lightText}>Michigan</span></button>
          <button>Duluth<br/><span style={lightText}>Minnesota</span></button>
          <button>Amsterdam<br/><span style={lightText}>Netherlands</span></button>
          <button>New York<br/><span style={lightText}>New York</span></button>
          <button>Nice<br/><span style={lightText}>Provence-Alpes-Cote d'Azur</span></button>
          <button>Inverness<br/><span style={lightText}>Scotland</span></button>
          <button>Malaga<br/><span style={lightText}>Spain</span></button>
          <button>Valencia<br/><span style={lightText}>Spain</span></button>
          <button>Split<br/><span style={lightText}>Split-Dalmatia County</span></button>
          <button>Nashville<br/><span style={lightText}>Tennessee</span></button>
          <button>Austin<br/><span style={lightText}>Texas</span></button>
          <button>Houston<br/><span style={lightText}>Texas</span></button>
          <button>Darthmouth<br/><span style={lightText}>United Kingdom</span></button>
          <button>Edinburgh<br/><span style={lightText}>United Kingdom</span></button>
          <button>Liverpool<br/><span style={lightText}>United Kingdom</span></button>
          <button>St Ives<br/><span style={lightText}>United Kingdom</span></button>
          <button>Lake Powell<br/><span style={lightText}>United States</span></button>
          <button>Lake Anna<br/><span style={lightText}>Virginia</span></button>
          <button>Leavenworth<br/><span style={lightText}>Washington</span></button>
          <button>Seattle<br/><span style={lightText}>Washington</span></button>
        </div>
      </div>
    </div>
  )
}

export default ArtLocation;
