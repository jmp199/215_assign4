var wrapperEle = document.body.querySelector(".wrapper");
var data = [
   {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"}

];

function botMaker(obj) {
  var pEle = document.createElement("div");
  pEle.classList.add("character");
  
  var nEle = document.createElement("h1");

  nEle.innerHTML = obj.name;
  
 
  var bEle = document.createElement("h3");
    bEle.innerHTML=obj.class;
bEle.classList.add("box1");

  
  var cEle = document.createElement("h3");
    cEle.innerHTML=obj.afl;
    var img = document.createElement("img");
  if(obj.afl=="autobot")
{img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  var src = document.getElementById("pic");}
  else{
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  var src = document.getElementById("pic");
  };
  
    if(obj.afl=="autobot"){
    pEle.classList.add("autobot");}
  else{
    pEle.classList.add("decepticon");
  }
  
    var dEle = document.createElement("h3");
    dEle.innerHTML=obj.vehicle;
    if(obj.vehicle=="tank"){
    dEle.style.color="green";
  }
else if(obj.vehicle=="car"){
   dEle.style.color="gold";
 }
  else if(obj.vehicle=="truck"){
   dEle.style.color="blue";
 }else{
    dEle.style.color=="white";
  };
  
  pEle.appendChild(nEle);
  pEle.appendChild(bEle);
  pEle.appendChild(cEle);
  pEle.appendChild(img);
   pEle.appendChild(dEle);
  wrapperEle.appendChild(pEle);
}

for(var i=0; i<data.length; i++){
  botMaker(data[i]);
}