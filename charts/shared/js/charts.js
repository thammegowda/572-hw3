
function drawGeoMap(elementId){
    var width  = 960;
    var height = 540;

    var drag = false;

    // using natural earth projection
    // https://github.com/mbostock/d3/wiki/Geo-Projections
    // http://bl.ocks.org/mbostock/4479477
    var projection = d3.geo.naturalEarth()
        .translate([width / 2, height / 2])
        .precision(0.1)
        .scale(140);

    // used to scale mouse domain to rotation range
    var scale_angle = d3.scale.linear()
        .domain([-width, width])
        .range([-180, 180]);

    // tracks previous values
    var prev_x = 0;
    var prev_a = 0;

    // geographic path generator (use instead of scales
    // to map longitude, latitude points to pixel points)
    var geo_path = d3.geo.path().projection(projection);

}