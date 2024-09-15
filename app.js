let boxess= document.querySelectorAll(".box");
  let btn = document.querySelector("#reset-btn");
 




let turn0 = true;

let winPattern = [

[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],



];



boxess.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("The button was clicked");
       if(turn0){
        box.innerHTML ="O";
        turn0 = false;
       }
       else{
        box.innerHTML = "X";
        turn0 = true;
       }
       box.disabled = true;

       showWineer();
    })
});

const showWineer = ()=>{

for(let pattern of winPattern){
    let poss1 = boxess[pattern[0]].innerHTML;
    let poss2 = boxess[pattern[1]].innerHTML;
    let poss3 = boxess[pattern[2]].innerHTML;

    if(poss1!=""&& poss2!=""&&poss3!=""){
   

        if(poss1===poss2 && poss2===poss3){
            console.log("Winner",poss1);
            btn.innerHTML = `The Winner is ${poss1}`;
            console.log(prompt("the winner is",poss1));
            box.disabled =true;
        }
    
    
    
    }
    
}


};