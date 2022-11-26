function distanceFromHqInBlocks(blocks) {
  const hq = 42
  return Math.abs(blocks - hq);
 
}
function distanceFromHqInFeet(blocks) {
    const hq = 42
    return Math.abs(blocks - hq)*264;
   
 }

 function distanceTravelledInFeet(start, destination){
    const hq = 42
    return Math.abs(start - destination)*264;
 }

 function calculatesFarePrice(start, destination){
   let travel = distanceTravelledInFeet(start, destination);
   if (travel <= 400){
    return 0;
   }
    if (travel >= 400 && travel <= 2000) {
    return (travel - 400) * 0.02;
   
   } else if (travel >= 2000 && travel <= 2500) {
    return 25; 
   } else if (travel > 2500) {
    return "cannot travel that far";
   }
 }