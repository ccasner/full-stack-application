

function initMap () {
  const leeExit = {lat: 42.297662, lng: -73.243628}
  const blandfordExit = {lat: 42.220804, lng: -72.963571}
  const westfieldExit = {lat: 42.143556, lng: -72.726407}
  const ludlowExit = {lat: 42.166944, lng: -72.434314}
  const warrenExit = {lat: 42.180541, lng: -72.205252}
  const charltonExit = {lat: 42.153168, lng: -71.979811}
  const hopkintonExit = {lat: 42.248524, lng: -71.587797}
  const southboroughExit = {lat: 42.278662, lng: -71.523222}
  const framinghamExit = {lat: 42.310595, lng: -71.432064}
  const westonExit = {lat: 42.335256, lng: -71.311551}
  const newtonvilleExit = {lat: 42.351057, lng: -71.208272}
  const brightonExit = {lat: 42.357568, lng: -71.138889}
  const allstonExit = {lat: 42.355221, lng: -71.118724}
  const tedWilliamsTunnelExit = {lat: 42.349492, lng: -71.031805}
  const sumnerTunnelExit = {lat: 42.373136, lng: -71.038723}
  const tobinBridgeExit = {lat: 42.370540, lng: -71.063967}

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: charltonExit
  })

  const lee = new google.maps.Marker({
    position: leeExit,
    map: map,
    title: 'Lee'
  })
  lee.addListener('mouseover', function () {
    console.log('$0.25')
  })
  const blandford = new google.maps.Marker({
    position: blandfordExit,
    map: map,
    title: 'Blandford'
  })
  blandford.addListener('mouseover', function () {
    console.log('$1.00')
  })
  const westfield = new google.maps.Marker({
    position: westfieldExit,
    map: map,
    title: 'Westfield'
  })
  westfield.addListener('mouseover', function () {
    console.log('$0.30')
  })
  const ludlow = new google.maps.Marker({
    position: ludlowExit,
    map: map,
    title: 'Ludlow'
  })
  ludlow.addListener('mouseover', function () {
    console.log('$0.45')
  })
  const warren = new google.maps.Marker({
    position: warrenExit,
    map: map,
    title: 'Warren'
  })
  warren.addListener('mouseover', function () {
    console.log('$0.55')
  })
  const charlton = new google.maps.Marker({
    position: charltonExit,
    map: map,
    title: 'Charlton'
  })
  charlton.addListener('mouseover', function () {
    console.log('$0.50')
  })
  const hopkinton = new google.maps.Marker({
    position: hopkintonExit,
    map: map,
    title: 'Hopkinton'
  })
  hopkinton.addListener('mouseover', function () {
    console.log('$0.45')
  })
  const southborough = new google.maps.Marker({
    position: southboroughExit,
    map: map,
    title: 'Southborough'
  })
  southborough.addListener('mouseover', function () {
    console.log('$0.25')
  })
  const framingham = new google.maps.Marker({
    position: framinghamExit,
    map: map,
    title: 'Framingham'
  })
  framingham.addListener('mouseover', function () {
    console.log('$0.25')
  })
  const weston = new google.maps.Marker({
    position: westonExit,
    map: map,
    title: 'Weston'
  })
  weston.addListener('mouseover', function () {
    console.log('$0.25')
  })
  const newtonville = new google.maps.Marker({
    position: newtonvilleExit,
    map: map,
    title: 'Newtonville'
  })
  newtonville.addListener('mouseover', function () {
    console.log('$0.35')
  })
  const brighton = new google.maps.Marker({
    position: brightonExit,
    map: map,
    title: 'Brighton'
  })
  brighton.addListener('mouseover', function () {
    console.log('$1.00')
  })
  const allston = new google.maps.Marker({
    position: allstonExit,
    map: map,
    title: 'Allston'
  })
  allston.addListener('mouseover', function () {
    console.log('$0.35')
  })
  const tedWilliamsTunnel = new google.maps.Marker({
    position: tedWilliamsTunnelExit,
    map: map,
    title: 'Ted Williams Tunnel'
  })
  tedWilliamsTunnel.addListener('mouseover', function () {
    console.log('$1.50')
  })
  const sumnerTunnel = new google.maps.Marker({
    position: sumnerTunnelExit,
    map: map,
    title: 'Sumner Tunnel'
  })
  sumnerTunnel.addListener('mouseover', function () {
    console.log('$1.50')
  })
  const tobinBridge = new google.maps.Marker({
    position: tobinBridgeExit,
    map: map,
    title: 'Tobin Bridge'
  })
  tobinBridge.addListener('mouseover', function () {
    console.log('$1.25')
  })
}

// google.maps.event.addDomListener(window, 'load', initialize)
