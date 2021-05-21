//4. Doubler

//What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// 0(log(n)) - performance grows with the increased size in the data input, but slowly