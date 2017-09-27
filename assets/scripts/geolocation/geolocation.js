
function initMap () {
  const leeExit = {lat: 42.297662, lng: -73.243628}
  const blandfordExit = {lat: 42.220804, lng: -72.963571}
  const westfieldExit = {lat: 42.143556, lng: -72.726407}
  const ludlowExit = {lat: 42.166944, lng: -72.434314}
  const warrenExit = {lat: 42.180541, lng: -72.205252}
  const charltonExit = {lat: 42.153168, lng: -71.979811}
  const center = {lat: 42.275321, lng: -71.979811}
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
    center: center
  })
  const content = this.title
  const infowindow = new google.maps.InfoWindow({
    content: content
  })
  const leeIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Lee|Toll:+$0.25'
  const lee = new google.maps.Marker({
    position: leeExit,
    map: map,
    title: 'Lee',
    price: '$0.25'
  })
  lee.addListener('mouseover', function () {
    this.setIcon(leeIcon)
    $('#exit').text(this.title)
    $('#price').text(this.price)
  })
  lee.addListener('click', function () {
    this.setIcon()
  })
  const blandIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Blandford|Toll:+$1.00'

  const blandford = new google.maps.Marker({
    position: blandfordExit,
    map: map,
    title: 'Blandford',
    price: '$1.00'
  })

  blandford.addListener('mouseover', function () {
    this.setIcon(blandIcon)
    $('#exit').text(this.title)
    $('#price').text('$1.00')
  })
  blandford.addListener('click', function () {
    this.setIcon()
  })
  const westfieldIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Westfield|Toll:+$0.30'
  const westfield = new google.maps.Marker({
    position: westfieldExit,
    map: map,
    title: 'Westfield',
    price: '$0.30'
  })
  westfield.addListener('mouseover', function () {
    this.setIcon(westfieldIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.30')
  })
  westfield.addListener('click', function () {
    this.setIcon()
  })
  const ludlowIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Ludlow|Toll:+$0.45'
  const ludlow = new google.maps.Marker({
    position: ludlowExit,
    map: map,
    title: 'Ludlow',
    price: '$0.45'
  })
  ludlow.addListener('mouseover', function () {
    this.setIcon(ludlowIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.45')
  })
  ludlow.addListener('click', function () {
    this.setIcon()
  })
  const warrenIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Warren|Toll:+$0.55'
  const warren = new google.maps.Marker({
    position: warrenExit,
    map: map,
    title: 'Warren',
    price: '$0.55'
  })
  warren.addListener('mouseover', function () {
    this.setIcon(warrenIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.55')
  })
  warren.addListener('click', function () {
    this.setIcon()
  })
  const charltonIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Charlton|Toll:+$0.50'
  const charlton = new google.maps.Marker({
    position: charltonExit,
    map: map,
    title: 'Charlton',
    price: '$0.50'
  })
  charlton.addListener('mouseover', function () {
    this.setIcon(charltonIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.50')
  })
  charlton.addListener('click', function () {
    this.setIcon()
  })
  const hopkintonIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Hopkinton|Toll:+$0.45'
  const hopkinton = new google.maps.Marker({
    position: hopkintonExit,
    map: map,
    title: 'Hopkinton',
    price: '$0.45'
  })
  hopkinton.addListener('mouseover', function () {
    this.setIcon(hopkintonIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.45')
  })
  hopkinton.addListener('click', function () {
    this.setIcon()
  })
  const southboroughIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Southborough|Toll:+$0.25'
  const southborough = new google.maps.Marker({
    position: southboroughExit,
    map: map,
    title: 'Southborough',
    price: '$0.25'
  })
  southborough.addListener('mouseover', function () {
    this.setIcon(southboroughIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.25')
  })
  southborough.addListener('click', function () {
    this.setIcon()
  })
  const framinghamIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Framingham|Toll:+$0.25'
  const framingham = new google.maps.Marker({
    position: framinghamExit,
    map: map,
    title: 'Framingham',
    price: '$0.25'
  })
  framingham.addListener('mouseover', function () {
    this.setIcon(framinghamIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.25')
  })
  framingham.addListener('click', function () {
    this.setIcon()
  })
  const westonIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Weston|Toll:+$0.25'
  const weston = new google.maps.Marker({
    position: westonExit,
    map: map,
    title: 'Weston',
    price: '$0.25'
  })
  weston.addListener('mouseover', function () {
    this.setIcon(westonIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.25')
  })
  weston.addListener('click', function () {
    this.setIcon()
  })
  const newtonvilleIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Newtonville|Toll:+$0.35'
  const newtonville = new google.maps.Marker({
    position: newtonvilleExit,
    map: map,
    title: 'Newtonville',
    price: '$0.35'
  })
  newtonville.addListener('mouseover', function () {
    this.setIcon(newtonvilleIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.35')
  })
  newtonville.addListener('click', function () {
    this.setIcon()
  })
  const brightonIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Brighton|Toll:+$1.00'
  const brighton = new google.maps.Marker({
    position: brightonExit,
    map: map,
    title: 'Brighton',
    price: '$1.00'
  })
  brighton.addListener('mouseover', function () {
    this.setIcon(brightonIcon)
    $('#exit').text(this.title)
    $('#price').text('$1.00')
  })
  brighton.addListener('click', function () {
    this.setIcon()
  })
  const allstonIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Allston|Toll:+$0.35'
  const allston = new google.maps.Marker({
    position: allstonExit,
    map: map,
    title: 'Allston',
    price: '$0.35'
  })
  allston.addListener('mouseover', function () {
    this.setIcon(allstonIcon)
    $('#exit').text(this.title)
    $('#price').text('$0.35')
  })
  allston.addListener('click', function () {
    this.setIcon()
  })
  const tedWilliamsTunnelIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Ted+Williams+Tunnel|Toll:+$1.50'
  const tedWilliamsTunnel = new google.maps.Marker({
    position: tedWilliamsTunnelExit,
    map: map,
    title: 'Ted Williams Tunnel',
    price: '$1.50'
  })
  tedWilliamsTunnel.addListener('mouseover', function () {
    this.setIcon(tedWilliamsTunnelIcon)
    $('#exit').text(this.title)
    $('#price').text('$1.50')
  })
  tedWilliamsTunnel.addListener('click', function () {
    this.setIcon()
  })
  const sumnerTunnelIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Sumner+Tunnel|Toll:+$1.50'
  const sumnerTunnel = new google.maps.Marker({
    position: sumnerTunnelExit,
    map: map,
    title: 'Sumner Tunnel',
    price: '$1.50'
  })
  sumnerTunnel.addListener('mouseover', function () {
    this.setIcon(sumnerTunnelIcon)
    $('#exit').text(this.title)
    $('#price').text('$1.50')
  })
  sumnerTunnel.addListener('click', function () {
    this.setIcon()
  })
  const tobinBridgeIcon = 'https://chart.googleapis.com/chart?chst=d_bubble_icon_texts_big&chld=bank-dollar|bbT|FFFFFF|000000|Tobin+Bridge|Toll:+$1.25'
  const tobinBridge = new google.maps.Marker({
    position: tobinBridgeExit,
    map: map,
    title: 'Tobin Bridge',
    price: '$1.25'
  })
  tobinBridge.addListener('mouseover', function () {
    this.setIcon(tobinBridgeIcon)
    $('#exit').text(this.title)
    $('#price').text('$1.25')
  })
  tobinBridge.addListener('click', function () {
    this.setIcon()
  })
}


// window.eqfeed_callback = function(results) {
//        for (var i = 0; i < results.features.length; i++) {
//          var coords = results.features[i].geometry.coordinates;
//          var latLng = new google.maps.LatLng(coords[1],coords[0]);
//          var marker = new google.maps.Marker({
//            position: latLng,
//            map: map
//          });

// google.maps.event.addDomListener(window, 'load', initialize)
