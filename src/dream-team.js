module.exports = function createDreamTeam(arr) {

    if (!Array.isArray(arr)) {
        return false;
    } else {
        var answer = "";
        for (var j = 0; j < arr.length; j++) {

            if (typeof arr[j] == "string") {
                for (var i = 0; i < arr[j].length; i++) {
                    if (arr[j][i] != " ") {
                        answer = answer + (arr[j][i]);
                        break;
                    }
                }
            }
        }
        return answer.toUpperCase().split("").sort().join("");

    }
};