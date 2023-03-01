function makeMap(l1,l2,sx) {
const map = L.map('map').setView([41.3494, 26.49729], 15);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	const LeafIcon = L.Icon.extend({
		options: {
			// shadowUrl: 'leaf-shadow.png',
			iconSize:     [50, 50],
			//shadowSize:   [50, 64],
			iconAnchor:   [25, 50],
			//shadowAnchor: [4, 62],
			popupAnchor:  [-3, -50]
		}
	});

	const blueMarker = new LeafIcon({iconUrl: './images/blueMarker.png'});
	const redMarker = new LeafIcon({iconUrl: './images/redMarker.png'});
	
	const m = [
	      L.marker([41.3494, 26.49729], {icon: blueMarker}).bindPopup('Παναγία Ελευθερώτρια').addTo(map),
		  L.marker([41.3486391, 26.4888714], {icon: blueMarker}).bindPopup('Άγιος Αθανάσιος').addTo(map),
		  L.marker([41.35238432, 26.48987174], {icon: blueMarker}).bindPopup('Κοιμήσεως της Θεοτόκου').addTo(map),
		  L.marker([41.3499141, 26.48966255], {icon: blueMarker}).bindPopup('Σωτήρος Χριστού').addTo(map),
		  ]
	L.marker([l1, l2], {icon: redMarker}).bindPopup(sx).addTo(map);
		  
	      
//	const mRed = L.marker([41.3494, 26.49729], {icon: redMarker}).bindPopup('Παναγία Ελευθερώτρια').addTo(map);
//	const mBlue1 = L.marker([41.3486391, 26.4888714], {icon: blueMarker}).bindPopup('Άγιος Αθανάσιος').addTo(map);
//    const mBlue2 = L.marker([41.35238432, 26.48987174], {icon: blueMarker}).bindPopup('Κοιμήσεως της Θεοτόκου').addTo(map);
//    const mBlue3 = L.marker([41.3499141, 26.48966255], {icon: blueMarker}).bindPopup('Σωτήρος Χριστού').addTo(map);
}