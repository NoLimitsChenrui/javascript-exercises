const findTheOldest = function(people) {
    const peopleAgeHierarchy = people.sort((a,b) => {
        if(b["yearOfDeath"]){
            return (b["yearOfDeath"] - b["yearOfBirth"]) - (a["yearOfDeath"] - a["yearOfBirth"]);
        }
        else{
            return (new Date().getFullYear() - b["yearOfBirth"]) - (a["yearOfDeath"] - a["yearOfBirth"]);
        }
    });
    return peopleAgeHierarchy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
