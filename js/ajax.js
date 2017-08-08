/*
 * Ajax Function
 */
function ajax(param, callback, upload_progress) {
    if (!param.method) {
        param.method = 'POST';
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
        param.Xreq = true;
    }

    var xmlHttpReq = false;
    var return_data = [];

    /*
     * Creating HTTP Request Object
     */

    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();

    } else if (window.ActiveXObject) {
        try {
            xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");

        } catch (ex) {
            try {
                xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");

            } catch (ex) {
                xmlHttpReq = false;
            }
        }
    }

    if (xmlHttpReq) {

        /*
         * Arrange Datas
         */

        var data = '';
        if (param.data !== null) {
            var mData = Object.keys(param.data);
            var mData_length = mData.length;
            for (var i = 0; i < mData_length; i++) {
                var temp_key = mData[i];
                if (i > 0) {
                    data += '&' + mData[i] + '=' + param.data[temp_key];
                } else {
                    data += mData[i] + '=' + param.data[temp_key];
                }
            }
        }

        /*
         * Open Reuqest
         */

        if (param.method === 'GET' || param.method === 'HEAD' || param.method === 'PUT' || param.method === 'DELETE') {

            if (param.data !== null) {
                param.url += '?' + data;
                data = null;
            }

            xmlHttpReq.open(param.method, param.url, true);

        } else if (param.method === 'POST') {

            xmlHttpReq.open(param.method, param.url, true);

            if (param.type && param.file === false) {
                xmlHttpReq.setRequestHeader('Content-Type', param.type);
            }

            if (param.x_req_wid === true) {
                xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
                xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }

        } else {
            param.method = false;
        }

        if (param.method) {

            if (typeof upload_progress === 'function') {
                xmlHttpReq.upload.addEventListener('progress', upload_progress, false);
            }

            xmlHttpReq.addEventListener('load', function () {
                if (this.status >= 200 && this.status < 400) {

                    return_data = {
                        0: 'success',
                        'response': this.responseText.trim()
                    };

                    callback(return_data);
                } else {

                    return_data = {
                        0: 'error',
                        'response': 'HEADER',
                        'code': this.status
                    };

                    callback(return_data);
                }
            }, false);

            xmlHttpReq.addEventListener('error', function () {

                return_data = {
                    0: 'error',
                    'response': 'SERVER'
                };

                callback(return_data);
            }, false);

            xmlHttpReq.addEventListener('abort', function () {

                return_data = {
                    0: 'error',
                    'response': 'ABORT'
                };

                callback(return_data);
            }, false);

            if (param.file) {
                xmlHttpReq.send(param.file);
            } else {
                xmlHttpReq.send(data);
            }

        } else {
            return_data = {
                0: 'error',
                'response': 'METHOD'
            };
            callback(return_data);
        }

    } else {
        return_data = {
            0: 'error',
            'response': 'BROWSER'
        };
        callback(return_data);
    }
}