// Code your solution in this file!
let hqLocationStreet = 42;
let blocksBeyondHq;
function distanceFromHqInBlocks(blocksBeyondHq){
    if (hqLocationStreet < blocksBeyondHq) 
        {return (blocksBeyondHq - hqLocationStreet)     
    }else 
    {return (hqLocationStreet - blocksBeyondHq)}
}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(34));

let distanceOfFeet = 264;
function distanceFromHqInFeet(blocksBeyondHq)
    {return (distanceFromHqInBlocks(blocksBeyondHq) * distanceOfFeet)}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start,final){
    if (start < final)
        {return (final - start) * distanceOfFeet;
    }else 
    {return (start - final) * distanceOfFeet;}
}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, final){
    if (distanceTravelledInFeet(start,final) < 400)
        {return 0;
    }else if ( distanceTravelledInFeet(start,final) >=400 && distanceTravelledInFeet(start,final) <=2000)
        {return (distanceTravelledInFeet(start,final) - 400) * 0.02;
        }else if (distanceTravelledInFeet(start,final) >2000 && distanceTravelledInFeet(start,final) <2500)
           {return 25;
           }else 
           { return 'cannot travel that far'}
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
