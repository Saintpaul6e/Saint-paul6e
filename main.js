
function Male(){
    document.getElementById("body").style.backgroundImage="linear-gradient(to right,red, yellow)";
    document.getElementById("h1").style.color="black"
}
var Gender=localStorage.getItem("Gender");
if(Gender = "Male"){
Male();
}
function None(){
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("h1").style.color="Black";


}
function Female(){
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("body").style.backgroundImage="linear-gradient(to right,purple, lightskyblue)";
    document.getElementById("h1").style.color="pink"

}
function Other(){
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("body").style.backgroundImage="linear-gradient(to right,black, white)";
    document.getElementById("h1").style.color="Red"

}
