var S_N=[]

function submit(){

var Name_1=document.getElementById("N_1").value
var Name_2=document.getElementById("N_2").value
var Name_3=document.getElementById("N_3").value
var Name_4=document.getElementById("N_4").value

S_N.push(Name_1)
S_N.push(Name_2)
S_N.push(Name_3)
S_N.push(Name_4)

document.getElementById("result").innerHTML=S_N
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorter(){


S_N.sort()

document.getElementById("result").innerHTML=S_N


}