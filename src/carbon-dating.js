const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sampleActivity) {
    if ("string" != typeof(sampleActivity) || isNaN(parseFloat(sampleActivity))) {
        return false;
    }
    var result = 0;
    var k = 0.693 / HALF_LIFE_PERIOD;
    result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
    if (result > 0 && result != Infinity)
        return result;
    else
        return false;
};