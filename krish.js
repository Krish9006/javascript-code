// console.log("krish")
// let x=5
// let v=5
// console.log(x+v);
// let user1 = {
// Name: "krish",
// Age:18,

// };
// console.log(user1.Name);
// let bank =10;
// if(bank>10){
//     console.log("allowed car");
// }
// else{
//     console.log("not allowed");
// }
// let rain=true
// rain? console.log("it 's rannnnn"):console.log("gjdghu");
// for(let i=0;i<10;i++){
//     console.log("pwioi");
// }
// function krish(){
//     let mob = 1234567890;
//     console.log("krish" + mob);
// }
// krish();
function withdrawal(amt,wdamt,via){
    if(via="upi"){
      if(amt<=100000){
        if(wdamt<=amt){
            console.log("withdrawal done");
            return amt-wdamt;
        }
        else{console.log("withdrawal  not done")};

      }
      else{console.log("withdrawal  not done")};
}

    else if(via=="tap2pay"){
        if(amt<=5000){
            if(wdamt<=amt){
                console.log("withdrawal done");
               return amt-wdamt;
            }
            else{console.log("withdrawal  not done")};
        }
        else{console.log("withdrawal  not done")};
    }
    else{console.log("withdrawal  not done")};
}

remamt = withdrawal(100000, 100000, "upi");
console.log(remamt);


