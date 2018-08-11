/*
 * Ajax Function
 */
function ajax(arr) {

    if (!arr.method) {
        arr.method = 'POST';
    }
    if (!arr.type) {
        arr.type = 'application/x-www-form-urlencoded; charset=utf-8';
    }
    if (!arr.Xreq) {
        arr.Xreq = true;
    }

    var xmlHttpReq = false;

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
            }
        }
    }

    /*
     * Error If Browser does not support
     */
    if (!xmlHttpReq) {
        if (arr.error) {
            arr.error({
                'response': 'BROWSER'
            });
        }
        return;
    }

    /*
     * Arrangement Data(s)
     */
    var data = '';
    if (arr.data) {

        if (arr.formData) {

            /*
             * Direct access to Form Data
             */
            data = arr.data;

        } else {

            /*
             * Arrange for GET, POST etc. Methods
             */
            var data_keys = Object.keys(arr.data);
            for (var i = 0; i < data_keys.length; i++) {
                if (i < 1) {
                    data += data_keys[i] + '=' + arr.data[data_keys[i]];
                } else {
                    data += '&' + data_keys[i] + '=' + arr.data[data_keys[i]];
                }
            }
        }
    }

    /*
     * Open Request
     */
    if (arr.method === 'GET' || arr.method === 'HEAD' || arr.method === 'PUT' || arr.method === 'DELETE') {

        if (data !== '') {
            arr.url += '?' + data;
            data = null;
        }

        xmlHttpReq.open(arr.method, arr.url, true);

    } else if (arr.method === 'POST') {

        xmlHttpReq.open(arr.method, arr.url, true);

        if (arr.type && !arr.formData) {
            xmlHttpReq.setRequestHeader('Content-Type', arr.type);
        }

        if (arr.Xreq === true) {
            xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
            xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

    } else {
        if (arr.error) {
            arr.error({
                'response': 'METHOD'
            });
        }
        return;
    }

    /*
     * Send Progress Data
     */
    if (typeof arr.progress === 'function') {
        xmlHttpReq.upload.addEventListener('progress', arr.progress, false);
    }

    /*
     * On Load Event
     */
    xmlHttpReq.addEventListener('load', function () {
        if (this.status >= 200 && this.status < 400) {

            /*
             * Success Respond
             */
            if (typeof arr.success === 'function') {
                arr.success(this.responseText.trim());
            }

        } else {

            /*
             * Error in Header
             */
            if (arr.error) {
                arr.error({
                    'response': 'HEADER',
                    'code': this.status
                });
            }
        }
    }, false);

    /*
     * Error in Server
     */
    xmlHttpReq.addEventListener('error', function () {

        if (arr.error) {
            arr.error({
                'response': 'SERVER',
                'code': this.status
            });
        }

    }, false);

    /*
     * Request Abort
     */
    xmlHttpReq.addEventListener('abort', function () {

        if (arr.error) {
            arr.error({
                'response': 'ABORT'
            });
        }

    }, false);

    /*
     * Sending Request & Data(s)
     */
    xmlHttpReq.send(data);
}