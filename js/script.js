// Although this is not exactly a fool-proof method of age verification, the redirect is always fun ;) //

var agePrompt=prompt("What is your age?");
 
if (agePrompt>=21) alert('Come On In and Enjoy!')
else {
alert('Nope! Not Till You Are Older!')
window.location.href = "http://www.sesamestreet.org";
 
}