const chainMaker = {
    elements: [],
    getLength() {
        return this.elements.length;
    },
    addLink(value) {
        this.elements.push(String(value));
        return this;
    },
    removeLink(position) {
        position--;
        if (position >= 0 && position < this.elements.length) {
            this.elements.splice(position, 1);
        } else {
            this.elements = [];
            throw Error();
        }
        return this;
    },
    reverseChain() {
        this.elements.reverse();
        return this;
    },
    finishChain() {
        let answer = "";
        for (let i = 0; i < this.elements.length; i++) {
            if (i == 0) {
                answer = answer + "( " + this.elements[i] + " )";
            } else {
                answer = answer + "~~( " + this.elements[i] + " )";
            }
        }

        this.elements = [];
        return answer;
    }
};

module.exports = chainMaker;