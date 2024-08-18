let boxes=document.getElementsByClassName('box')
console.log(boxes);



let storeComb=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [2,5,8], 
  [3,6,9]
]



let plaeryX=true;




Array.from(boxes).forEach(box=>{
  box.addEventListener('click',()=>{

    if(plaeryX){
      box.textContent='X';
      plaeryX=false;
    }else{
      box.textContent='O';
      plaeryX=true;
    }

    box.disabled=true;
    check();
  })
})


let newGame=document.getElementById('new-btn');
newGame.addEventListener('click',()=>{
  window.location.reload();
})

let cd=document.getElementById('reset-btn');
cd.addEventListener('click',()=>{
  window.location.reload();
})
let show=(val1)=>{
  //console.log("Hello world")

  let cnt=document.getElementById('cnt');
  cnt.classList.remove('hide');
  
  document.getElementById('msg').innerText=`Winner is ${val1}`
}

let check=()=>{
  for(patteern of storeComb){
    // console.log(patteern[0],patteern[1],patteern[2]);
   
     for(let i=0;i<3;i++){
      let val1=boxes[patteern[0]-1].textContent;
      let val2=boxes[patteern[1]-1].textContent;
      let val3=boxes[patteern[2]-1].textContent;
      if(val1!="" && val2!="" && val3!=""){
        if(val1==val2 && val2==val3){
          show(val1);
          break;
        }
        break;
      }
     }
  }
}