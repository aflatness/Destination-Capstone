/* eslint-disable no-undef */
function initMap(query = '') {
  const loc = {
    lat: 0,
    lng: 0,
  };
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: query }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      loc.lat = results[0].geometry.location.lat();
      loc.lng = results[0].geometry.location.lng();

      const mapOptions = {
        center: loc,
        zoom: 14,
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

      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      google.maps.event.trigger(map, 'resize');

      new google.maps.Marker({
        position: loc,
        map,
      });

      // const places = new google.maps.places.Autocomplete({});
    } else {
      console.log('error');
    }
  });
}

export default initMap;
