

// methode2 last element remove
// const frt=["apple","banana","mango","grape"];
// frt.length=frt.length-1
// console.log(frt)


//methode2 first element remove
// const frt=["apple","banana","mango","grape"];
// for(i=0; i<frt.length; i++){
//     frt[i]=frt[i+1]
// }

// frt.length=frt.length-1
// console.log(frt) 


//methode2 middle element remove
const frt=["apple","banana","mango","grape","orange","painaple","kiwi"];
 let a= Math.floor(frt.length/2)
for(i=a; i<frt.length-1; i++){
 
    frt[i]=frt[i+1]
}

frt.length=frt.length-1
console.log(frt) 



//largrst num display
// const arr=[2323,5,333,87]
// let result=arr[0]
// for(i=0;i<arr.length;i++){
//     if(result<arr[i]){
//      result=arr[i]
//     }
// }
// console.log(result);
 


// remove midlle 2 elements
// let arr = [1, 2, 3, 4, 5, 6,7,8]; 
// let len = arr.length/2;
//     for (i = len+ 1; i < arr.length; i++) {
//         arr[i - 2] = arr[i];
//     }

// for (let i = 0; i < arr.length-2; i++) { 
//     console.log(arr[i]);
// }




// remove element-even-large
// const arr = [1, 2, 3, 44 , 5, 6,7,8]; 
//     for (i=0; i < arr.length; i++) {
//        let a=(arr.length)/2
//        let b=a-1
//        if(arr[b]>arr[a]){
//        var res=b
//        }
//        else{
//        var res=a
//        }
//        if(i!=res)

//         console.log(arr[i]);
    
// }        























