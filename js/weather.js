'use strict';

$(document).ready(function() {
    $.ajax({
        url: "http://api.wunderground.com/api/714a33a55874728b/geolookup/conditions/q/TX/Austin.json",
        dataType: "jsonp",
        success: function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            // var icon_url = parsed_json['current_observation']['icon_url'];
            // $("#icon").attr("img", icon_url);
            $("#weather").append("Current temperature in " + location + " is: " + temp_f + "°F");
        }
    });
});

function greenBeltLevels(){
    //use  http://waterservices.usgs.gov/
    $.ajax({
        url: "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=08155300",
        success: function(){
            
        }
    })
};


function poolHours(){
    //get pool hours from City API if possible
}