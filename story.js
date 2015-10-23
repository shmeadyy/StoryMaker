var adjective = prompt("Please type an adjective:");
var noun = prompt("Please type a noun:");
var verb = prompt("Please type a verb:");


if(adjective[0] == 'a' || adjective[0] == 'e' || adjective[0] == 'o' || adjective == 'u'){
	var vowel = "an ";
}else {
	var vowel = "a ";
}

document.write("There once was " + vowel + adjective + " " + noun + " who wanted to use Javascript to " + verb + " the world.");
