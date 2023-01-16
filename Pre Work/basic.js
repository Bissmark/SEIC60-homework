const computer = {
    currentChoice: null,
}

const options = ['Lapis/rock', 'Papyrus/paper', 'Scallpellus/scisors']; // lapis (rock) = 0 | papyrus (paper) = 1 | scallpellus (scissors) = 2

const computerChooses = function() {
	const RandomChoice = Math.floor(Math.random() * options.length);
	return computer.currentChoice = options[RandomChoice];
}

console.log(c)
