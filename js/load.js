/*
 * Document Loaded
 */
function load(doc, call) {
    if (typeof doc === null) {
        doc = document;
    }
    doc.addEventListener('load', call, false);
}

/*
 * Document Ready Stage
 * All Contents Loaded
 */
function loaded(doc, call) {
    if (typeof doc === null) {
        doc = document;
    }
    doc.addEventListener('DOMContentLoaded', call, false);
}