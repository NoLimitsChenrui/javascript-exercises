const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }
    else{
        let result = "";
        for(let i = num; i >0; i--){
            result += str;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
