//2. Even or odd

//What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

//0(1) - no matter what the input is, the function will only run once; taking the same time to complete, each time.