const usage = 12;
const dist = 300;
const price = 36;

const travelPrice = (usage, dist, price) => ((dist/usage) * price);    
console.log (travelPrice(usage,dist,price));
