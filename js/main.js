var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamons',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}

];
var cardsInPlay = [];
var wins = 0;
var losses = 0;


var checkForMatch = function(cardElement) {
	var cardID = cardElement.getAttribute('data-id');
	var cardImage = cards[cardID].cardImage;
	cardElement.setAttribute('src', cardImage);



	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			wins++;
			document.getElementById('wins').innerHTML = wins;
			alert("You found a match");
			
			
		}
		else {
			losses++;
			document.getElementById('losses').innerHTML = losses;
			alert("Sorry, try again");
			
		}
	}
}


var flipCard = function() {
	var cardID = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardID].rank);

	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	checkForMatch(this);

	
};

var cardElements = [];

var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		
		cardElements.push(cardElement);
	}
};


createBoard();

var resetBoard = function() {
	cardsInPlay = [];
	for (i = 0; i < cardElements.length; i++) {
		cardElements[i].setAttribute('src', 'images/back.png');
	}
};








