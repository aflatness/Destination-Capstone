/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const initMap = (query = 'Austin, Texas, United States') => {
  console.log(query);
  const loc = {
    lat: 0,
    lng: 0,
  };

  let map;
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: query }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      loc.lat = results[0].geometry.location.lat();
      loc.lng = results[0].geometry.location.lng();

      const mapOptions = {
        center: loc,
        zoom: 12,
        mapId: '154f55af6afa1600',
        fullscreenControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP,
        },
        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP,
        },
      };

      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      console.log('Map loaded');

      new google.maps.Marker({
        position: loc,
        map,
      });
      const transit = new google.maps.TransitLayer();
      let transitShown = false;

      document.getElementById('transit').addEventListener('click', () => {
        !transitShown ? transit.setMap(map) : transit.setMap(null);
        transitShown = !transitShown;
      });
    } else {
      console.log('error');
      console.log(results, status);
    }
  });
  return map;
};

export default initMap;
