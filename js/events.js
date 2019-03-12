/*
 * Document On Event
 */
function on(type, elm, callback) {

    if(document.attachEvent) {

        if(type === 'left_click') {

            type = 'click';
            document.attachEvent('on' + type, function(e) {
                if(e.which === 1) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else if(type === 'middle_click') {

            type = 'click';
            document.attachEvent('on' + type, function(e) {
                if(e.which === 2) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else if(type === 'right_click') {

            type = 'click';
            document.attachEvent('on' + type, function(e) {
                if(e.which === 3) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else {
            document.attachEvent('on' + type, function(e) {
                if(typeof elm === 'undefined' || elm === null) {
                    callback(e.target, e);
                } else {
                    if(typeof elm === 'object' && elm.contains(e.target)) {
                        callback(e.target, e);
                    } else if(typeof elm === 'string' && $(elm)) {
                        if($(elm).length > 1) {
                            $(elm, null, function(ele) {
                                if(ele.contains(e.target)) {
                                    callback(e.target, e);
                                }
                            });
                        } else if($(elm).contains(e.target)) {
                            callback(e.target, e);
                        }
                    }
                }
            });
        }

    } else {

        if(type === 'left_click') {

            type = 'click';
            document.addEventListener(type, function(e) {
                if(e.which === 1) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else if(type === 'middle_click') {

            type = 'click';
            document.addEventListener(type, function(e) {
                if(e.which === 2) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else if(type === 'right_click') {

            type = 'click';
            document.addEventListener(type, function(e) {
                if(e.which === 3) {
                    if(typeof elm === 'undefined' || elm === null) {
                        callback(e.target, e);
                    } else {
                        if(typeof elm === 'object' && elm.contains(e.target)) {
                            callback(e.target, e);
                        } else if(typeof elm === 'string' && $(elm)) {
                            if($(elm).length > 1) {
                                $(elm, null, function(ele) {
                                    if(ele.contains(e.target)) {
                                        callback(e.target, e);
                                    }
                                });
                            } else if($(elm).contains(e.target)) {
                                callback(e.target, e);
                            }
                        }
                    }
                }
            }, false);

        } else {
            document.addEventListener(type, function(e) {
                if(typeof elm === 'undefined' || elm === null) {
                    callback(e.target, e);
                } else {
                    if(typeof elm === 'object' && elm.contains(e.target)) {
                        callback(e.target, e);
                    } else if(typeof elm === 'string' && $(elm)) {
                        if($(elm).length > 1) {
                            $(elm, null, function(ele) {
                                if(ele.contains(e.target)) {
                                    callback(e.target, e);
                                }
                            });
                        } else if($(elm).contains(e.target)) {
                            callback(e.target, e);
                        }
                    }
                }
            }, false);
        }
    }
}