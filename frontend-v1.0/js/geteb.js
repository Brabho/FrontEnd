function getEB(attr_deti, callback) {
    var attr_deti1 = Object.keys(attr_deti);
    for (var m = 0; m < attr_deti1.length; m++) {
        var attr_deti2 = attr_deti[attr_deti1[m]];
        switch (attr_deti1[m]) {

            case 'id':
                callback(document.getElementById(attr_deti2));
                continue;
                break;

            case 'class':
                var the_clsId = document.getElementsByClassName(attr_deti2);
                break;

            case 'name':
                var the_clsId = document.getElementsByName(attr_deti2);
                break;

            case 'tag':
                var the_clsId = document.getElementsByTagName(attr_deti2);
                break;
        }
        if (the_clsId) {
            for (var i = 0; i < the_clsId.length; i++) {
                callback(the_clsId[i]);
            }
        }
    }
}