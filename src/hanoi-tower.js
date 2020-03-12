module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    console.log(disksNumber);
    return {
        'turns ': (Math.pow(2, disksNumber) - 1),
        'seconds': (Math.pow(2, disksNumber) - 1) / turnsSpeed * 3600
    }

}