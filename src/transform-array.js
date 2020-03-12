module.exports = function transform(arr) {
    let answer = [];
    if (!Array.isArray(arr)) {
        throw Error();
    }

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case '--discard-next':
                if (i + 1 < arr.length)
                    i = i + 1;
                break;
            case '--discard-prev':
                if (i - 1 >= 0)
                    answer.pop();
                break;
            case '--double-next':
                if (i + 1 < arr.length)
                    answer.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i - 1 >= 0)
                    answer.push(arr[i - 1]);
                break;
            default:
                answer.push(arr[i]);
                break;
        }

    }

    return answer;

};