for(
  i=0;//first we declare the variable
  i<10;//continue running the for loop as long as this condition is true
  i++//increaing the value by 1
){
  console.log(i)
}
//or
for(i=0;i<10;i++){
  console.log(i)
}
let a=[1,2,3,4,5,6,7,8]
for(i=0;i < a.length;i++){
  console.log(a[i])//means print index of array a ie when i= 0 a[0],then i+1 ,i=2 a[2]....like that as long as i is less than the length of a which is 8
}
//can use code snippet in  javascript so when u write for u use the one with for loop
a=[1,2,3,4,5,6,7,8]
for (let b = 0; b < a.length; b++) {
  const c = a[b];
  console.log(c)
  
} 
for(i=0;1<10;i++){
  if(i==7){
    break;
  }
  console.log(i)
}
console.log(a.slice(0,5))
