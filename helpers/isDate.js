const moment = require('moment')

const isDate = ( value, { req, location, path } ) => {
    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    return fecha.isValid;
    // if ( fecha.isValid ) {
    //     return true;
    // } else {
    //     return false
    // }
}

module.exports = {
    isDate
};