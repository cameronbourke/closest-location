# closest-location

This is a tiny and simple script created in response to this question, http://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position


All credit goes to Andrew for the original code, http://stackoverflow.com/users/622104/andrew-opengeocode

### Installation
If you are using jQuery, then simply just add the file to your `index.html` and you are right to go.

If you are using Angular, then copy the code into a service and make sure to create the `nearestLocation` function on the services scope like so:
```
this.nearestLocation = nearestLocation;
```

### How to use
Theres only three things you need to bring to this pool party, a `latitude`, a `longitude` and an `array of arrays` that contain your locations that you want to compare the latitiude and longitiude too.
The `array of arrays` must be structed like below:
```
var locations = [
  ['Name of Location', latitude, longitude],
  ['Name of Location', latitude, longitude],
  ['Name of Location', latitude, longitude]
]
```

When you've got all three things. Just pass each variable into the `nearestLocation` function like so:
```
nearestLocation(latitude, longitude, locations);
```

Obviously if you are using Angular it would look something more similiar to this:
```
LocationService.nearestLocation(latitude, longitude, locations);
```

The function will return the array that is closest to the latitude and longitude you passed it.

Say you wanted to get just the name of the location that is closest? Easy.
```
// Store the value returned from nearestLocation into a variable
var closest = nearestLocation(latitude, longitude, locations);
// Then grab the value at the first index of the array
closest[0]
```

### Example
Most people will want to use this code to work out what city etc is closest to a users location.

This can achieved using the `Geolocation API` in broswers these days.

```


