/**
 * Created by tg on 11/21/15.
 */


var SOLR_URL = "/solr/collection2";
/**
 * Split the geo identifier into latitude and longitude
 * @param data - the geo point string in the form of "lat, long"
 * @returns [latitude, longitude]
 */
function splitGeo(data){
    parts = data.trim().split(",");
    if (parts.length == 2) {
        return [parseFloat(parts[0]), parseFloat(parts[1])];
    }
    console.error("Couldn't split the geo into lat and long");
    return null;
}

function geoPointTransform(facet) {
    coords = splitGeo(facet.term);
    if (coords) {
        facet['lat'] = coords[0];
        facet['lon'] = coords[1];
    }
    return facet;
}

/**
 * Gets Facets from the solr response
 * @param res solr result
 * @param fieldName facet field
 * @returns {*}
 */
function getSolrFacet(res, fieldName, transformFunc) {
    tmp = res;
    if ('facet_counts' in tmp) {
        tmp = tmp['facet_counts'];
        if ('facet_fields' in tmp){
            tmp = tmp['facet_fields'];
            if (fieldName in tmp) {
                arr = tmp[fieldName];
                list = [];
                for( var i=0; i < arr.length - 1; i++){
                    obj = {};
                    obj['term'] = arr[i];
                    obj['count'] = arr[i + 1];
                    if (transformFunc){
                        obj = transformFunc(obj)
                    }
                    list.push(obj);
                    i++;
                }

                return list
            }
        }
    }
    return null
}


function getDateFacets(query, id, callback){
    dateStartStr = "2015-08-01T00:00:00Z";
    dateEndStr = "NOW";
    dateFieldName = 'dates'
    url = SOLR_URL + "/query?q=*:*&rows=0&facet=true&facet.date=" + dateFieldName + "&fq=" + query
        + "&facet.date.start=" + dateStartStr + "&facet.date.end=" + dateEndStr + "&facet.date.gap=%2B1DAY";
    d3.json(url, function(err, data) {
        if ('facet_counts' in data && (data = data.facet_counts)
            && 'facet_dates' in data && (data = data.facet_dates)
            && "dates" in data && (data = data["dates"])) {

            arr = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)
                    && /^[0-9]{4}-[0-9]{2}-[0-9]{2}T.*/.test(key)) { //because date facets also have 'start' and 'end'
                    obj = {};
                    obj['date'] = new Date(Date.parse(key));
                    obj['count'] =  data[key];
                    arr.push(obj);
                }
            }
            callback(id, arr)
        }
    });

}

function getFacets(fieldName, callback){
    //http://localhost:8983/solr/collection2/query?q=*:*&facet=true&facet.field=weapontypes&rows=0&facet.limit=50
    url = SOLR_URL + "/query?q=*:*&rows=0&facet=on&facet.limit=100&facet.field=" + fieldName;
    d3.json(url, function(error, data) {
        if (error) return console.warn(error);
        //console.log(data);

        if ('facet_counts' in data && (data = data.facet_counts)
            && 'facet_fields' in data && (data = data.facet_fields)
            && fieldName in data && (data = data[fieldName]) && data.length > 0){
            terms = [];
            counts = [];
            for (i = 0; i < data.length - 1;) {
                terms.push(data[i]);
                counts.push(data[i+1]);
                i += 2
            }
            callback(terms, counts)
        }
        return null;
    })

}