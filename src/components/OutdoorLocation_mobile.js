//// OutdoorLocation_mobile.js

const OutdoorLocation = ({ lightText, showMoreStyle, showSeeMore, hiddenStyle, showMoreLocations }) => {

  return (
    <div className="getawayLocation">
      <div className="getawayWrapper">
        <button>Lake Martin<br/><span style={lightText}>Alabama</span></button>
        <button>Banff<br/><span style={lightText}>Alberta</span></button>
        <button>Nerja<br/><span style={lightText}>Andalucia</span></button>
        <button>Greer<br/><span style={lightText}>Arizona</span></button>
        <button>Lake Havasu City<br/><span style={lightText}>Arizona</span></button>
        <button>Lake Powell<br/><span style={lightText}>Arizona</span></button>
        <button>North Rim<br/><span style={lightText}>Arizona</span></button>
        <button>Pyason<br/><span style={lightText}>Arizona</span></button>
        <button>Pinetop-Lakeside<br/><span style={lightText}>Arizona</span></button>
        <button>Red Rock<br/><span style={lightText}>Arizona</span></button>
        <button>Dinner Plain<br/><span style={lightText}>Australia</span></button>
        {showSeeMore ? <button onClick={showMoreLocations}><span style={showMoreStyle}>Show more</span></button> : <button>Streaky Bay<br/><span style={lightText}>Australia</span></button>}
        <div style={hiddenStyle} className="hiddenLocations">
          <button>Emerald Lake<br/><span style={lightText}>British Columbia</span></button>
          <button>Vancouver Island<br/><span style={lightText}>British Columbia</span></button>
          <button>Victoria<br/><span style={lightText}>British Columbia</span></button>
          <button>Idyllwild-Pine Cove<br/><span style={lightText}>California</span></button>
          <button>Mammoth Lakes<br/><span style={lightText}>California</span></button>
          <button>Palm Desert<br/><span style={lightText}>California</span></button>
          <button>Shaver Lake<br/><span style={lightText}>California</span></button>
          <button>South Lake Tahoe<br/><span style={lightText}>California</span></button>
          <button>Cultus Lake<br/><span style={lightText}>Canada</span></button>
          <button>Georgian Bay<br/><span style={lightText}>Canada</span></button>
          <button>Manitoulin Island<br/><span style={lightText}>Canada</span></button>
          <button>Ottawa River<br/><span style={lightText}>Canada</span></button>
          <button>The Blue Mountains<br/><span style={lightText}>Canada</span></button>
          <button>West Kelowna<br/><span style={lightText}>Canada</span></button>
          <button>Gran Canaria<br/><span style={lightText}>Canary Islands</span></button>
          <button>Lanzarote<br/><span style={lightText}>Canary Islands</span></button>
          <button>Castle Hill<br/><span style={lightText}>Canterbury</span></button>
          <button>Aspen<br/><span style={lightText}>Colorado</span></button>
          <button>Colorado Springs<br/><span style={lightText}>Colorado</span></button>
          <button>Denver<br/><span style={lightText}>Colorado</span></button>
          <button>Durango<br/><span style={lightText}>Colorado</span></button>
          <button>Estes Park<br/><span style={lightText}>Colorado</span></button>
          <button>Grand Lake<br/><span style={lightText}>Colorado</span></button>
          <button>Keystone<br/><span style={lightText}>Colorado</span></button>
          <button>Vail<br/><span style={lightText}>Colorado</span></button>
          <button>Winter Park<br/><span style={lightText}>Colorado</span></button>
          <button>Salcombe<br/><span style={lightText}>England</span></button>
          <button>Swanage<br/><span style={lightText}>England</span></button>
          <button>Cape Coral<br/><span style={lightText}>Florida</span></button>
          <button>Blue Ridge<br/><span style={lightText}>Georgia</span></button>
          <button>Jekyll Island<br/><span style={lightText}>Georgia</span></button>
          <button>Lake Lanier<br/><span style={lightText}>Georgia</span></button>
          <button>Corfu<br/><span style={lightText}>Greece</span></button>
          <button>McCall<br/><span style={lightText}>Idaho</span></button>
          <button>Clear Lake<br/><span style={lightText}>Iowa</span></button>
          <button>Lough Eske<br/><span style={lightText}>Ireland</span></button>
          <button>Lake Cumberland<br/><span style={lightText}>Kentucky</span></button>
          <button>Portland<br/><span style={lightText}>Maine</span></button>
          <button>South Portland<br/><span style={lightText}>Maine</span></button>
          <button>Deep Creek Lake<br/><span style={lightText}>Maryland</span></button>
          <button>Lake Michigan Beach<br/><span style={lightText}>Michigan</span></button>
          <button>Lakeside<br/><span style={lightText}>Michigan</span></button>
          <button>Torch Lake<br/><span style={lightText}>Michigan</span></button>
          <button>Traverse City<br/><span style={lightText}>Michigan</span></button>
          <button>Upper Peninsula of Michigan<br/><span style={lightText}>Michigan</span></button>
          <button>Branson<br/><span style={lightText}>Missouri</span></button>
          <button>Lake of the Ozarks<br/><span style={lightText}>Missouri</span></button>
          <button>Big Sky<br/><span style={lightText}>Montana</span></button>
          <button>West Yellowstone<br/><span style={lightText}>Montana</span></button>
          <button>Mount Charleston<br/><span style={lightText}>Nevada</span></button>
          <button>Cloudcroft<br/><span style={lightText}>New Mexico</span></button>
          <button>Red River<br/><span style={lightText}>New Mexico</span></button>
          <button>Bellingen<br/><span style={lightText}>New South Wales</span></button>
          <button>Brunswick Heads<br/><span style={lightText}>New South Wales</span></button>
          <button>Adirondack Mountains<br/><span style={lightText}>New York</span></button>
          <button>Lake Placid<br/><span style={lightText}>New York</span></button>
          <button>Niagara Falls<br/><span style={lightText}>New York</span></button>
          <button>Bald Head Island<br/><span style={lightText}>North Carolina</span></button>
          <button>Bryson City<br/><span style={lightText}>North Carolina</span></button>
          <button>Emerald Isle<br/><span style={lightText}>North Carolina</span></button>
          <button>Lake Gaston<br/><span style={lightText}>North Carolina</span></button>
          <button>Lake Lure<br/><span style={lightText}>North Carolina</span></button>
          <button>Lake Norman of Catawba<br/><span style={lightText}>North Carolina</span></button>
          <button>Mount Airy<br/><span style={lightText}>North Carolina</span></button>
          <button>Mountain<br/><span style={lightText}>North Carolina</span></button>
          <button>Oak Island<br/><span style={lightText}>North Carolina</span></button>
          <button>Geneva-on-the-Lake<br/><span style={lightText}>Ohio</span></button>
          <button>Medicine Park<br/><span style={lightText}>Oklahoma</span></button>
          <button>Turner Falls<br/><span style={lightText}>Oklahoma</span></button>
          <button>Algonquin Park<br/><span style={lightText}>Ontario</span></button>
          <button>Muskoka Lakes<br/><span style={lightText}>Ontario</span></button>
          <button>Tobermory<br/><span style={lightText}>Ontario</span></button>
          <button>Bend<br/><span style={lightText}>Oregon</span></button>
          <button>Crater Lake<br/><span style={lightText}>Oregon</span></button>
          <button>Northern Oregon Coast Range<br/><span style={lightText}>Oregon</span></button>
          <button>Sunriver<br/><span style={lightText}>Oregon</span></button>
          <button>Lake Harmony<br/><span style={lightText}>Pennsylvania</span></button>
          <button>Mount Pocono<br/><span style={lightText}>Pennsylvania</span></button>
          <button>Mont-Tremblant<br/><span style={lightText}>Quebec</span></button>
          <button>Aviemore<br/><span style={lightText}>Scotland</span></button>
          <button>Isle of Mull<br/><span style={lightText}>Scotland</span></button>
          <button>Robe<br/><span style={lightText}>South Australia</span></button>
          <button>Mountain Rest<br/><span style={lightText}>South Carolina</span></button>
          <button>St Helens<br/><span style={lightText}>Tasmania</span></button>
          <button>Big Bend National Park<br/><span style={lightText}>Texas</span></button>
          <button>Canyon Lake<br/><span style={lightText}>Texas</span></button>
          <button>Lake Austin<br/><span style={lightText}>Texas</span></button>
          <button>Lake Buchanan<br/><span style={lightText}>Texas</span></button>
          <button>Betws-y-Coed<br/><span style={lightText}>United Kingdom</span></button>
          <button>Filey<br/><span style={lightText}>United Kingdom</span></button>
          <button>Fort Williams<br/><span style={lightText}>United Kingdom</span></button>
          <button>Loch Lomond<br/><span style={lightText}>United Kingdom</span></button>
          <button>Port Isaac<br/><span style={lightText}>United Kingdom</span></button>
          <button>Moab<br/><span style={lightText}>Utah</span></button>
          <button>Mount Zion<br/><span style={lightText}>Utah</span></button>
          <button>Moraira<br/><span style={lightText}>Valencian Community</span></button>
          <button>Inverloch<br/><span style={lightText}>Victoria</span></button>
          <button>Metung<br/><span style={lightText}>Victoria</span></button>
          <button>Mount Buller<br/><span style={lightText}>Victoria</span></button>
          <button>Port Campbell<br/><span style={lightText}>Victoria</span></button>
          <button>Wilsons Promontory<br/><span style={lightText}>Victoria</span></button>
          <button>Shenandoah<br/><span style={lightText}>Virginia</span></button>
          <button>Smith Mountain Lake<br/><span style={lightText}>Virginia</span></button>
          <button>Snowdon<br/><span style={lightText}>Wales</span></button>
          <button>Lake Chelan<br/><span style={lightText}>Washington</span></button>
          <button>Lake Crescent<br/><span style={lightText}>Washington</span></button>
          <button>Lake Quinault<br/><span style={lightText}>Washington</span></button>
          <button>Quinault<br/><span style={lightText}>Washington</span></button>
          <button>Skamania<br/><span style={lightText}>Washington</span></button>
          <button>Snowshoe<br/><span style={lightText}>West Virginia</span></button>
          <button>Lake Geneva<br/><span style={lightText}>Wisconsin</span></button>
          <button>Wisconsin Dells<br/><span style={lightText}>Wisconsin</span></button>
          <button>Yellowstone National Park<br/><span style={lightText}>Wyoming</span></button>
        </div>
      </div>
    </div>
  )
}

export default OutdoorLocation;
