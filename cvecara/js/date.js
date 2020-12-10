var trenutniDatum = new Date();
var mesec = trenutniDatum.getMonth();
var dan = trenutniDatum.getDate();
var godina = trenutniDatum.getFullYear();
var ceoDatum = mesec+1 + "/" + dan + "/" + godina;
document.getElementById("time").innerHTML = ceoDatum;