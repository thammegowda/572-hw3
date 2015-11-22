/**
 * Created by tg on 11/21/15.
 */


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