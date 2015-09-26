// HappySadUnknown.js

'use strict';

function gladSadOrUnknown(text) {

    if (!text)
      return 'unknown';

    var gladWords = [
      'delight', 'delighted', 'delightful', 'happy',
      'glad', 'joy', 'joyful', 'merry', 'pleasant'
    ];
    var sadWords = [
      'disappointed', 'miserable', 'sad', 'sorrow', 'unhappy'
    ];
    var gladCount = _countMatches(text, gladWords);
    var sadCount = _countMatches(text, sadWords);
      
    // A text is happy if it includes at least 50% more happy words than sad words. 
    // It is sad if it contains at least 50% more sad words than happy words. 
    // Otherwise it is unknown.
    if ( gladCount + sadCount == 0 ) {
        return 'unknown';
    } else if ( (gladCount - sadCount) >= (sadCount * 0.5) ) {
        return 'happy'; 
    } else if ( (sadCount - gladCount) >= (gladCount * 0.5) ) {
        return 'sad'; 
    }

    return 'unknown';
}

function _countMatches(text, matchThese) {
    var count = 0;
    for (var word of matchThese) {
        var regexp = new RegExp(`\\b${word}\\b`, 'g');
        var matches = text.match(regexp); // ensure anchors
        if (matches)
          count += matches.length;
    }
    return count;
}

module.exports = gladSadOrUnknown;
