// Convert Degress to Radians
function Deg2Rad( deg ) {
  return deg * Math.PI / 180;
}

function PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
  var y = (lat2-lat1);
  var d = Math.sqrt(x*x + y*y) * R;
  return d;
}

function NearestCity(latitude, longitude, locations) {
  var mindif=99999;
  var closest;

  for (index = 0; index < locations.length; ++index) {
    var dif =  PythagorasEquirectangular(latitude, longitude, locations[ index ][ 1 ], locations[ index ][ 2 ]);
    if ( dif < mindif ) {
      closest=index;
      mindif = dif;
    }
  }

  // return the nearest location
  var closestLocation = (locations[ closest ]);
  console.log('The closest location is ' + closestLocation[0]);
  return closestLocation;
}
