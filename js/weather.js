'use strict';

$(document).ready(function() {
    $.ajax({
        url: "http://api.wunderground.com/api/714a33a55874728b/geolookup/conditions/q/TX/Austin.json",
        // url: "http://api.wunderground.com/api/714a33a55874728b/geolookup/q/autoip.json",
        dataType: "jsonp",
        success: function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            
            $("#weather").append("Current temperature in " + location + " is: " + temp_f);
        }
    });
});