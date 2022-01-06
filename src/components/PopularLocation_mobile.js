//// PopularLocation_mobile.js

const PopularLocation = ({ lightText, showMoreStyle, showSeeMore, hiddenStyle, showMoreLocations }) => {

  return (
    <div className="getawayLocation">
      <div className="getawayWrapper">
        <button>Canmore<br/><span style={lightText}>Alberta</span></button>
        <button>Benalmadena<br/><span style={lightText}>Andalusia</span></button>
        <button>Marbella<br/><span style={lightText}>Andalusia</span></button>
        <button>Mijas<br/><span style={lightText}>Andalusia</span></button>
        <button>Prescott<br/><span style={lightText}>Arizona</span></button>
        <button>Scottsdale<br/><span style={lightText}>Arizona</span></button>
        <button>Tucson<br/><span style={lightText}>Arizona</span></button>
        <button>Jasper<br/><span style={lightText}>Arkansas</span></button>
        <button>Mountain View<br/><span style={lightText}>Arkansas</span></button>
        <button>Devonport<br/><span style={lightText}>Australia</span></button>
        <button>Mallacoota<br/><span style={lightText}>Australia</span></button>
        {showSeeMore ? <button onClick={showMoreLocations} style={showMoreStyle}>Show more</button> : <button>Ibiza<br/><span style={lightText}>Balearic Islands</span></button>}
        <div style={hiddenStyle} className="hiddenLocations">
          <button>Anaheim<br/><span style={lightText}>California</span></button>
          <button>Monterey<br/><span style={lightText}>California</span></button>
          <button>Paso Robles<br/><span style={lightText}>California</span></button>
          <button>Santa Barbara<br/><span style={lightText}>California</span></button>
          <button>Sonoma<br/><span style={lightText}>California</span></button>
          <button>La Serena<br/><span style={lightText}>Coquimbo</span></button>
          <button>Dubai<br/><span style={lightText}>Dubai</span></button>
          <button>Birmingham<br/><span style={lightText}>England</span></button>
          <button>Brighton<br/><span style={lightText}>England</span></button>
          <button>Bude<br/><span style={lightText}>England</span></button>
          <button>Newcastle upon Tyne<br/><span style={lightText}>England</span></button>
          <button>Padstow<br/><span style={lightText}>England</span></button>
          <button>South West England<br/><span style={lightText}>England</span></button>
          <button>Whitby<br/><span style={lightText}>England</span></button>
          <button>Fort Myers<br/><span style={lightText}>Florida</span></button>
          <button>Jacksonville<br/><span style={lightText}>Florida</span></button>
          <button>Kissimmee<br/><span style={lightText}>Florida</span></button>
          <button>Longboat Key<br/><span style={lightText}>Florida</span></button>
          <button>Orlando<br/><span style={lightText}>Florida</span></button>
          <button>St Petersburg<br/><span style={lightText}>Florida</span></button>
          <button>St. Augustine<br/><span style={lightText}>Florida</span></button>
          <button>The Villages<br/><span style={lightText}>Florida</span></button>
          <button>Dahlonega<br/><span style={lightText}>Georgia</span></button>
          <button>Crete<br/><span style={lightText}>Greece</span></button>
          <button>Mykonos<br/><span style={lightText}>Greece</span></button>
          <button>Santorini<br/><span style={lightText}>Greece</span></button>
          <button>Oahu<br/><span style={lightText}>Hawaii</span></button>
          <button>Capri<br/><span style={lightText}>Italy</span></button>
          <button>Bar Harbor<br/><span style={lightText}>Maine</span></button>
          <button>Mackinac Island<br/><span style={lightText}>Michigan</span></button>
          <button>St. Joseph<br/><span style={lightText}>Michigan</span></button>
          <button>Larsmont<br/><span style={lightText}>Minnesota</span></button>
          <button>Las Vegas<br/><span style={lightText}>Nevada</span></button>
          <button>Madrid<br/><span style={lightText}>New Mexico</span></button>
          <button>Sante Fe<br/><span style={lightText}>New Mexico</span></button>
          <button>Bermagui<br/><span style={lightText}>New South Wales</span></button>
          <button>Evans Head<br/><span style={lightText}>New South Wales</span></button>
          <button>Sawtell<br/><span style={lightText}>New South Wales</span></button>
          <button>Young<br/><span style={lightText}>New South Wales</span></button>
          <button>Ocracoke<br/><span style={lightText}>North Carolina</span></button>
          <button>Florence<br/><span style={lightText}>Oregon</span></button>
          <button>Lakeside<br/><span style={lightText}>Oregon</span></button>
          <button>Lincoln City<br/><span style={lightText}>Oregon</span></button>
          <button>Paphos<br/><span style={lightText}>Paphos</span></button>
          <button>Maleny<br/><span style={lightText}>Queensland</span></button>
          <button>Stanthorpe<br/><span style={lightText}>Queensland</span></button>
          <button>Newport<br/><span style={lightText}>Rhode Island</span></button>
          <button>Glasgow<br/><span style={lightText}>Scotland</span></button>
          <button>Scottish Highlands<br/><span style={lightText}>Scotland</span></button>
          <button>St Andrews<br/><span style={lightText}>Scotland</span></button>
          <button>McLaren Vale<br/><span style={lightText}>South Australia</span></button>
          <button>Wallaroo<br/><span style={lightText}>South Australia</span></button>
          <button>Charleston<br/><span style={lightText}>South Carolina</span></button>
          <button>Hvar<br/><span style={lightText}>Split-Dalmatia County</span></button>
          <button>Saint John<br/><span style={lightText}>St. John</span></button>
          <button>Chattanooga<br/><span style={lightText}>Tennessee</span></button>
          <button>Concan<br/><span style={lightText}>Texas</span></button>
          <button>Fredericksburg<br/><span style={lightText}>Texas</span></button>
          <button>New Braunfels<br/><span style={lightText}>Texas</span></button>
          <button>Rockport<br/><span style={lightText}>Texas</span></button>
          <button>Waco<br/><span style={lightText}>Texas</span></button>
          <button>Forest of Dean District<br/><span style={lightText}>United Kingdom</span></button>
          <button>Jersey<br/><span style={lightText}>United Kingdom</span></button>
          <button>Lyme Regis<br/><span style={lightText}>United Kingdom</span></button>
          <button>Manchester<br/><span style={lightText}>United Kingdom</span></button>
          <button>Seaview<br/><span style={lightText}>United Kingdom</span></button>
          <button>Southwold<br/><span style={lightText}>United Kingdom</span></button>
          <button>Staithes<br/><span style={lightText}>United Kingdom</span></button>
          <button>Wells-next-the-Sea<br/><span style={lightText}>United Kingdom</span></button>
          <button>St. George<br/><span style={lightText}>Utah</span></button>
          <button>Benidorm<br/><span style={lightText}>Valencian Community</span></button>
          <button>Barwon Heads<br/><span style={lightText}>Victoria</span></button>
          <button>Castlemaine<br/><span style={lightText}>Victoria</span></button>
          <button>Healesville<br/><span style={lightText}>Victoria</span></button>
          <button>Marysville<br/><span style={lightText}>Victoria</span></button>
          <button>Sorrento<br/><span style={lightText}>Virginia</span></button>
          <button>Chincoteague<br/><span style={lightText}>Virginia</span></button>
          <button>Williamsburg<br/><span style={lightText}>Virginia</span></button>
          <button>Hay-on-Wye<br/><span style={lightText}>Wales</span></button>
          <button>Llandudno<br/><span style={lightText}>Wales</span></button>
          <button>Tenby<br/><span style={lightText}>Wales</span></button>
        </div>
      </div>
    </div>
  )
}

export default PopularLocation;
