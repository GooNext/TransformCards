let cards = document.querySelectorAll(".card");

for (let i=0 ; i < cards.length ; i++) {
	const card = cards[i];
	card.addEventListener("mousemove", transform);
	card.addEventListener("mouseout", stopRotate);
}

function transform (event){
	let cardItem = this.querySelector(".card-item");

	let halfHeight = cardItem.offsetHeight/2;
	let halfWidth = cardItem.offsetWidth/2;

	cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfWidth)/7 + 'deg) rotateY('+ (event.offsetX - halfHeight)/5 + 'deg)';
}

function stopRotate (event){

	let cardItem = this.querySelector(".card-item");

	let halfHeight = cardItem.offsetHeight/2;

	cardItem.style.transform = 'rotate(0)';
}