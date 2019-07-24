// Although this is not exactly a fool-proof method of age verification, the redirect is always fun ;) //

var agePrompt=prompt("How Old Are You??");
 
if (agePrompt>=21) alert('Come On In and Enjoy!')
else {
    alert('Nope! Come back in a few years!')
    window.location.href = "http://www.sesamestreet.org";
    
}