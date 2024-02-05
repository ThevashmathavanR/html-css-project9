const days=document.querySelector("#days");
const Hours=document.querySelector("#Hours");
const minutes=document.querySelector("#minutes");
const second=document.querySelector("#second");



function get(){
const currentyear=new Date().getFullYear();
const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`);
const currentDate=new Date();
const diff=newyear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
Hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
second.innerHTML=s<10?"0"+s:s;
}
setInterval(get,1000);