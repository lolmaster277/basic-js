module.exports = function countCats(matrix) {
    var count = 0;
    matrix.flat().forEach(function(element) {
        if (element == "^^") { count++; }
    });
    return count;
};