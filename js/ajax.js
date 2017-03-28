/*
 * Ajax Function
 */
function ajax(param, callback) {
    if (!param.meth) {
        param.meth = 'POST';
    }
    if (!param.file) {
        param.file = false;
    }
    if (!param.data) {
        param.data = null;
    }
    if (!param.type) {
        param.type = false;
    }
    if (!param.x_req_wid) {
        param.x_req_wid = true;
    }

    var xmlHttpReq;
    var create_httpReq = false;

    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
        create_httpReq = true;

    } else if (window.ActiveXObject) {
        try {
            xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
            create_httpReq = true;

        } catch (ex) {
            try {
                xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
                create_httpReq = true;

            } catch (ex) {
                create_httpReq = false;
            }
        }
    }

    if (xmlHttpReq && create_httpReq) {

        var data = '';
        if (param.data !== null) {
            var mData = Object.keys(param.data);
            for (var i = 0; i < mData.length; i++) {
                var temp_key = mData[i];
                if (i > 0) {
                    data += '&' + mData[i] + '=' + param.data[temp_key];
                } else {
                    data += mData[i] + '=' + param.data[temp_key];
                }
            }
        }

        var url = param.url;

        switch (param.meth) {
            case 'GET':

                if (param.data !== null) {
                    url += '?' + data;
                    data = null;
                }

                xmlHttpReq.open(param.meth, url, true);
                break;

            case 'POST':

                xmlHttpReq.open(param.meth, url, true);

                if (param.type) {
                    xmlHttpReq.setRequestHeader('Content-Type', param.type);
                }
                break;
        }

        if (param.x_req_wid === true) {
            xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
            xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        var return_data = [];

        xmlHttpReq.addEventListener('load', function () {
            if (this.status >= 200 && this.status < 400) {

                return_data = {
                    '0': 'success',
                    'response': this.responseText.trim()
                };

                callback(return_data);
            } else {

                return_data = {
                    '0': 'error',
                    'status': 'HEADER',
                    'code': this.status
                };

                callback(return_data);
            }
        }, false);

        xmlHttpReq.addEventListener('error', function () {

            return_data = {
                '0': 'error',
                'status': 'SERVER'
            };

            callback(return_data);
        }, false);

        xmlHttpReq.addEventListener('abort', function () {

            return_data = {
                '0': 'error',
                'status': 'ABORT'
            };

            callback(return_data);
        }, false);

        if (param.file) {
            xmlHttpReq.send(param.file);
        } else {
            xmlHttpReq.send(data);
        }

        return xmlHttpReq;

    } else {
        return false;
    }
}