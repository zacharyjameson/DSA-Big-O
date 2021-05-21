// 9. Random element

// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 0(1) - holy grail. performance stays the same regardless of input size. runs once.