const ctof=document.getElementById("ctof");
const ftoc=document.getElementById("ftoc");
const temp=document.getElementById("temps");
const h3=document.getElementById("H3");
let res;
ctof.onclick=function(){
    let vari=Number(temp.value);
    res=((vari*9)/5)+32;
    h3.textContent=`The ${vari} celsius is converted to  ${res} fahrenheit`;
}
ftoc.onclick=function(){
    let vari=Number(temp.value);
    res=((vari-32)*5)/9;
    h3.textContent=`The ${vari} fahrenheit is converted to  ${res} celsius`;
}