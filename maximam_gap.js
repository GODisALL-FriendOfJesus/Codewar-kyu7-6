// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
function maxGap (numbers){
 let sorted=numbers.sort((a,b)=> a - b);
  let largest=0;
  for(let i = 0; i< sorted.length;i++){
    
    let difference=sorted[i+1] - sorted[i]; 
  
    if(largest<difference ){
        largest=difference;
    }
  
}
  return largest;}