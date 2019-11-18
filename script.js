// FONCTIONNALITE 1 & 1 BIS
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// +  afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.


var footer = document.querySelector("footer") ;
clickCount = 0 ;

function footerClick() {
	console.log("Il a cliqué sur le footer !")
	clickCount ++
	console.log("clic numéro " + clickCount)
}


footer.addEventListener('click', footerClick);


// FONCTIONNALITE 2
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. 
// Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

var menu = document.getElementById('navbarHeader')
var menuButton = document.getElementsByClassName('navbar-toggler')[0];

function hamburger(){
	menu.classList.toggle('collapse'); // permet de faire un bouton Toggle, passant d'une fonctionnalité à une autre
}

menuButton.addEventListener('click', hamburger);

// FONCTIONNALITE 3
// Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)


var firstCard = document.querySelectorAll('main > div > div > div > div ')[0] ;
var editButton = document.getElementsByClassName('btn-outline-secondary')[0];

function editBtnChange () {
	firstCard.style.color = 'red';
}

editButton.addEventListener('click', editBtnChange)

// FONCTIONNALITE 4
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. 
// Si on re-clique dessus, il redevient comme avant 

var secondCard = document.querySelectorAll('main > div > div > div > div ')[1] ;
var editButton2 = document.getElementsByClassName('btn-outline-secondary')[1];

function editBtnChange2 () {


	if (secondCard.style.color === 'green'){
		secondCard.style.color = '' ;
	}	
	else {
		secondCard.style.color = 'green' ;
	}

}

editButton2.addEventListener('click', editBtnChange2)


// FONCTIONNALITE 5
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

var navbar = document.querySelector('header');
var bootstrapLink = document.querySelector('link');

function bootstrapDelete () {

	if (bootstrapLink.disabled == false) {
		bootstrapLink.disabled = true ;
	}

	else {
		bootstrapLink.disabled = false;
	}

}

navbar.addEventListener('dblclick', bootstrapDelete)

// FONCTIONNALITE 6
// si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles.



var img1 = document.querySelector("main > div > div > div  ").getElementsByTagName('img');
var view = document.querySelector("main > div > div > div ").getElementsByClassName("btn-success")
let cards = document.getElementsByClassName('col-md-4');

  for (let i = 0; i < cards.length; i++) {

view[i].addEventListener("mouseover", function(){



			if (img1[i].style.width === '100%'){

				img1[i].style.width = '80%'
				cards[i].getElementsByClassName("card-text")[0].style.display = 'none';



			}else {
				img1[i].style.width = '100%'
				cards[i].getElementsByClassName("card-text")[0].style.display = 'block';
			};





})};




// FONCTIONNALITE 7
// si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). 

var row = document.getElementsByClassName("row")[1];

var card = document.getElementsByClassName('col-md-4');


 document.getElementsByClassName('my-2')[1].addEventListener("click", function (){ 


row.insertBefore(card[card.length-1], card[0]);

});

// FONCTIONNALITE 8
// tourner les card dans l'autre sens aussi

var unlinked = document.getElementsByClassName('jumbotron')[0].getElementsByTagName('a')[0];
unlinked.addEventListener("click", function(){

unlinked.href = '#';
row.lastCard.nextSibling(card[card.length-1], card[0]);

});



//FONCTIONNALITE 9 
// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

 let logo = document.getElementsByClassName('navbar-brand')[0];

logo.addEventListener("keypress", function(event){


if (event.key === "a"){
	document.getElementsByTagName('body')[0].classList = 'none';
	document.getElementsByTagName('body')[0].classList.add('col-4');

}else if (event.key === "y"){
document.getElementsByTagName('body')[0].classList = 'none';
document.getElementsByTagName('body')[0].classList.add('offset-md-4');


}else if (event.key === "p"){
document.getElementsByTagName('body')[0].classList = 'none';
document.getElementsByTagName('body')[0].classList.add('offset-md-8');

}else if (event.key === "b"){
document.getElementsByTagName('body')[0].classList = 'none';
}


}); 