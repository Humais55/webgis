    // Map Intialization
    var map = L.map('map').setView([24.8607, 67.0011], 11);

    // OSM Layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    // Adding marker with popup
    var myIcon = L.icon({
    iconUrl: 'img/red_marker.png',
    iconSize: [40, 40],
    });

    var single_marker = L.marker([24.8607, 67.0011], {icon: myIcon, draggable: true}).addTo(map)
    var popup = single_marker.bindPopup('<h1>Karachi,<br> The City of Lights.</h1> <p>It is the largest city in Pakistan, located on the southern coast along the Arabian Sea. It serves as the country’s economic and financial hub, hosting major industries, corporate headquarters, and Pakistan’s busiest seaports, including the Port of Karachi and Port Qasim. With a population of over 15 million people, it is one of the most populous and diverse megacities in the world. Karachi is also the capital of the Sindh province, though not the capital of Pakistan, which is Islamabad. The city is known for its vibrant culture, educational institutions, historic landmarks, and bustling marketplaces. Its blend of modern infrastructure, seaside views, and multicultural communities makes Karachi a central and influential part of Pakistan’s identity</p> <img src="./img/karachi.jpg" width="310px" height="150px">');
    popup.addTo(map);