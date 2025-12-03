const getTheTitles = function(booksArr) {
    // return booksArr.reduce((titleArr, book) => {
    //     titleArr.push(book["title"]);
    //     return titleArr;
    // }, []);

    return booksArr.map((book) => book["title"]);
};

// Do not edit below this line
module.exports = getTheTitles;
