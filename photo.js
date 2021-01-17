const fs = require('fs');
const uuid = require('uuid');
const path = require('path');


class Photo {
    constructor() {
        this.uniqueID = "";
        this.name = "";
        this.extType = "";
        this.path = "";
    }
}

module.exports = Photo;