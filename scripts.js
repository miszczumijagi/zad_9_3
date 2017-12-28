var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinosaurUpperCased);
console.log(newText);
var textHalfLength = (newText.length)/2;
console.log(textHalfLength);
var halfNewText = newText.substr(0, textHalfLength);
console.log(halfNewText);

