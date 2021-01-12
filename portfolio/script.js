var voornaam = prompt("Wat is je naam?");

var leeftijd = prompt("wat is je leeftijd?");

if (leeftijd > 18) {
    document.body.style.backgroundColor = "green";
   }   else {
        document.body.style.backgroundColor = "red";  
    }

if (voornaam != "");{
    alert("welkom " + voornaam)}

    var bezoeker = {naam: voornaam, leeftijd: leeftijd};