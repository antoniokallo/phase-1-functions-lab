// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return someValue > 42 ? someValue-42 : 42-someValue
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
function distanceTravelledInFeet(start, destination) {
  return Math.abs (start - destination) *264
}

function calculatesFarePrice (start, destination) {
  let traveled = distanceTravelledInFeet(start, destination)
  if(traveled<400){
    return 0
  }
  else if (traveled < 2000){
    return (traveled - 400) * .02
  }
  else if (traveled <= 2500){
    return 25
  }
else {
return 'cannot travel that far'
}
console.log(`price is ${price}`)
return price
}
calculatesFarePrice(31, 35)