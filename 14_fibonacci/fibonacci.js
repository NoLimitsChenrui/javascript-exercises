const fibonacci = function(position) {
    if(position == 1){
        return 1;
    }
    if(position == 0){
        return 0;
    }
    if(position < 0){
        return "OOPS";
    }
    if(position > 0){
        return fibonacci(position-2) + fibonacci(--position);
    }
};

// Do not edit below this line
module.exports = fibonacci;
