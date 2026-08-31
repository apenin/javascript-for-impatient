const constructCounter = (initial, step = 1) => {
    return Object.freeze({
        count: () => {
            const previous = initial;
            initial += step;
            return previous;
        }
    });
}

const myFirstCounter = constructCounter(0, 2);
console.log(myFirstCounter.count()); // 0
console.log(myFirstCounter.count()); // 2
