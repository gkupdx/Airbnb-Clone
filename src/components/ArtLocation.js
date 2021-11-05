//// ArtLocation - for 'Destination for arts & culture' button click

const ArtLocation = () => {
  // Change opacity of text using rgba()
  const lightText = {
    color: "rgba(0, 0, 0, 0.6)"
  }

  return (
    <div className="artLocation">
      <div className="artWrapper">
        <div className="columnOne">
          <button>Phoenix<br></br><span style={lightText}>Arizona</span></button>
          <button>San Francisco<br></br><span style={lightText}>California</span></button>
          <button>Keswick<br></br><span style={lightText}>England</span></button>
          <button>York<br></br><span style={lightText}>England</span></button>
          <button>Dublin<br></br><span style={lightText}>Ireland</span></button>
          <button>Grande<br></br><span style={lightText}>Isle Louisiana</span></button>
          <button>Duluth<br></br><span style={lightText}>Minnesota</span></button>
          <button>Inverness<br></br><span style={lightText}>Scotland</span></button>
          <button>Nashville<br></br><span style={lightText}>Tennessee</span></button>
          <button>Edinburgh<br></br><span style={lightText}>United Kingdom</span></button>
          <button>Lake Anna<br></br><span style={lightText}>Virginia</span></button>
        </div>
        <div className="columnTwo">
          <button>Hot Springs<br></br><span style={lightText}>Arkansas</span></button>
          <button>Barcelona<br></br><span style={lightText}>Catalonia</span></button>
          <button>London<br></br><span style={lightText}>England</span></button>
          <button>Paris<br></br><span style={lightText}>France</span></button>
          <button>Florence<br></br><span style={lightText}>Italy</span></button>
          <button>New Orleans<br></br><span style={lightText}>Louisiana</span></button>
          <button>Amsterdam<br></br><span style={lightText}>Netherlands</span></button>
          <button>Malaga<br></br><span style={lightText}>Spain</span></button>
          <button>Austin<br></br><span style={lightText}>Texas</span></button>
          <button>Liverpool<br></br><span style={lightText}>United Kingdom</span></button>
          <button>Leavenworth<br></br><span style={lightText}>Washington</span></button>
        </div>
        <div className="columnThree">
          <button>Los Angeles<br></br><span style={lightText}>California</span></button>
          <button>Prague<br></br><span style={lightText}>Czechia</span></button>
          <button>Scarborough<br></br><span style={lightText}>England</span></button>
          <button>Rhodes<br></br><span style={lightText}>Greece</span></button>
          <button>Rome<br></br><span style={lightText}>Italy</span></button>
          <button>Marthas Vineyard<br></br><span style={lightText}>Massachusetts</span></button>
          <button>New York<br></br><span style={lightText}>New York</span></button>
          <button>Valencia<br></br><span style={lightText}>Spain</span></button>
          <button>Houston<br></br><span style={lightText}>Texas</span></button>
          <button>St Ives<br></br><span style={lightText}>United Kingdom</span></button>
          <button>Seattle<br></br><span style={lightText}>Washington</span></button>
        </div>
        <div className="columnFour">
          <button>San Diego<br></br><span style={lightText}>California</span></button>
          <button>Washington<br></br><span style={lightText}>District of Columbia</span></button>
          <button>Sherwood Forest<br></br><span style={lightText}>England</span></button>
          <button>Nashville<br></br><span style={lightText}>Indiana</span></button>
          <button>Lisbon<br></br><span style={lightText}>Lisbon</span></button>
          <button>South Haven<br></br><span style={lightText}>Michigan</span></button>
          <button>Nice<br></br><span style={lightText}>Provence-Alpes-Cote d'Azur</span></button>
          <button>Split<br></br><span style={lightText}>Split-Dalmatia County</span></button>
          <button>Dartmouth<br></br><span style={lightText}>United Kingdom</span></button>
          <button>Lake Powell<br></br><span style={lightText}>United States</span></button>
        </div>
      </div>
    </div>
  )
}

export default ArtLocation;
