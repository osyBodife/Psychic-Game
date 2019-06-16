
var numTrialsRemaining=0;
function numTrials() {
if(numTrialsRemaining==0){
return numTrialsRemaining=10;
document.getElementById("guessleft").innerHTML = numTrials();

}else{
return numTrialsRemaining+=0;
document.getElementById("guessleft").innerHTML = numTrials();
}
}
