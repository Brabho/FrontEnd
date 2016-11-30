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
        param.type = 'application/x-www-form-urlencoded; charset=utf-8';
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
        if (param.meth === 'GET' && param.data !== null) {
            url += '?' + data;
            data = null;
        }

        xmlHttpReq.open(param.meth, url, true);
        if (param.file === false && param.meth === 'POST') {
            xmlHttpReq.setRequestHeader('Content-Type', param.type);
            if (param.x_req_wid === true) {
                xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
                xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
        }

        xmlHttpReq.addEventListener('load', function () {
            if (this.status >= 200 && this.status < 400) {
                callback(this.responseText.trim());
            } else {
                callback('HEADER_ERROR: ' + this.status);
            }
        }, false);

        xmlHttpReq.addEventListener('error', function () {
            callback('SERVER_ERROR');
        }, false);

        xmlHttpReq.addEventListener('abort', function () {
            callback('USER_ABORT');
        }, false);

        xmlHttpReq.send(data);
        return xmlHttpReq;

    } else {
        return false;
    }
}