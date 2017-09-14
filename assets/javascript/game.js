//code for when doc ready, need start button in battle text
//$(document).ready(function() {})

//characters
var herm, ronald, potter, neville, cedric, snape, dolores, voldy, bella, malfoy;
var user = {maxHP : 0, attack : 0, guard : 0};
var comp = {maxHP : 0, attack : 0, name : ""};
var currentUserHP, currentCompHP;
var battle;
var roundWin;

function setUser (x, y, z) {
	user.maxHP = x;
	user.attack = y;
	user.guard = z;
}

function setComp(x,y, z) {
	comp.maxHP = x;
	comp.attack = y;
	comp.name = z;
}


//sets char stats
function setStats() {
	battle = false;
	roundWin = 0;
	herm = {
		maxHP: 85, attack: 30, guard: 10
	};
	ronald = {
		maxHP: 90, attack: 20, guard: 15
	};
	potter = {
		maxHP: 100, attack: 25, guard: 20
	};
	neville  = {
		maxHP: 120, attack: 15, guard: 10
	};
	cedric = {
		maxHP: 1, attack: 0, guard: 0
	};
	snape = {
		live: true, maxHP: 150, attack: 20, name : "Snape"
	};
	dolores = {
		live: true, maxHP: 85, attack: 20, name : "Umbridge"
	};
	voldy = {
		live: true, maxHP: 200, attack: 20, name : "Voldemort"
	};
	bella = {
		live: true, maxHP: 120, attack: 20, name : "Bellatrix"
	};
	malfoy = {
		live: true, maxHP: 100,  attack: 20, name : "Malfoy"
	};
}


//choosing user character
		//blue borders on hero pics
function setUserBlue(){
	$(".hPic").css({"border-color" : "blue"});
}
		//clears photos after user chooses hero
function clearHeroes() {
	$(".hPic").fadeTo(0,0).off("click");
	$("#heroes").html("<h3>&nbsp</h3>");
}

function pickUser() {
	$("#battleText1").html("<h1>Choose Your Hero Then Choose Your Opponent</h1>");//eliminates start button after clicking, text will update throughout duel
	$("#battleText2").html("");
	setUserBlue();
	$("#her").on("click", function() {
		clearHeroes()
		setUser (herm.maxHP, herm.attack, herm.guard)
		$("#userImg").attr('src', 'assets/images/hg.jpg');
		$("#userHP").html("HP -  " + herm.maxHP);
		currentUserHP = user.maxHP;
		pickComp()

	});

	$("#ron").on("click", function() {
		clearHeroes()
		setUser (ronald.maxHP, ronald.attack, ronald.guard)
		$("#userImg").attr('src', 'assets/images/rw.jpg');
		$("#userHP").html("HP -  " + ronald.maxHP);
		currentUserHP = user.maxHP;
		pickComp()
	});

	$("#har").on("click", function() {
		clearHeroes()
		setUser (potter.maxHP, potter.attack, potter.guard)
		$("#userImg").attr('src', 'assets/images/hp.jpg');
		$("#userHP").html("HP -  " + potter.maxHP);
		currentUserHP = user.maxHP;
		pickComp()
	});

	$("#nev").on("click", function() {
		clearHeroes()
		setUser (neville.maxHP, neville.attack, neville.guard)
		$("#userImg").attr('src', 'assets/images/nl.jpg');
		$("#userHP").html("HP -  " + neville.maxHP);
		currentUserHP = user.maxHP;
		pickComp()
	});

	$("#ced").on("click", function() {
		clearHeroes()
		setUser (cedric.maxHP, cedric.attack, cedric.guard)
		$("#userImg").attr('src', 'assets/images/cd.jpg');
		$("#userHP").html("HP -  " + cedric.maxHP);
		currentUserHP = user.maxHP;
		pickComp()
	});
}



//choosing comp character
		//sets orange borders on villains
function setCompOrange() {
	$(".ePic").css({"border-color" : "orange"});
}
		//gray borders after choosing a villain
function setCompGray() {
	$(".ePic").css({"border-color" : "darkgray"});
	$("#sev, #del, #tom, #bel, #luc").off("click");
}


function pickComp(){
	setCompOrange();
	$("#sev").on("click", function() {
		//alert("you clicked Snape");
		if (snape.live == true){
			setComp(snape.maxHP, snape.attack, snape.name)
			$("#compImg").attr('src', 'assets/images/ss.jpg');
			setCompGray()
			$("#sev").fadeTo(0,0);
			$("#compHP").html("HP -  " + snape.maxHP);
			currentCompHP = comp.maxHP;
			battle = true;
			$("#battleText1").html("Begin!!");
			$("#battleText2").html("");
		}
		snape.live = false;
	});

	$("#del").on("click", function() {
		//alert("you clicked Umbridge");
		if (dolores.live == true){
			setComp(dolores.maxHP, dolores.attack, dolores.name)
			$("#compImg").attr('src', 'assets/images/du.jpg');
			setCompGray()
			$("#del").fadeTo(0,0);
			$("#compHP").html("HP -  " + dolores.maxHP);
			currentCompHP = comp.maxHP;
			battle = true;
			$("#battleText1").html("Begin!!");
			$("#battleText2").html("");
		}
		dolores.live = false;
	});

	$("#tom").on("click", function() {
		//alert("you clicked Voldemort");
		if (voldy.live == true){
			setComp(voldy.maxHP, voldy.attack, voldy.name)
			$("#compImg").attr('src', 'assets/images/tr.jpg');
			setCompGray()
			$("#tom").fadeTo(0,0);
			$("#compHP").html("HP -  " + voldy.maxHP);
			currentCompHP = comp.maxHP;
			battle = true;
			$("#battleText1").html("Begin!!");
			$("#battleText2").html("");
		}
		voldy.live = false;
	});

	$("#bel").on("click", function() {
		//alert("you clicked Bellatrix");
		if (bella.live == true){
			setComp(bella.maxHP, bella.attack, bella.name)
			$("#compImg").attr('src', 'assets/images/bl.jpg');
			setCompGray()
			$("#bel").fadeTo(0,0);
			$("#compHP").html("HP -  " + bella.maxHP);
			currentCompHP = comp.maxHP;
			battle = true;
			$("#battleText1").html("Begin!!");
			$("#battleText2").html("");
		}
		bella.live = false;
	});

	$("#luc").on("click", function() {
		//alert("you clicked Lucius");
		if (malfoy.live == true){
			setComp(malfoy.maxHP, malfoy.attack, malfoy.name)
			$("#compImg").attr('src', 'assets/images/lm.jpg');
			setCompGray()
			$("#luc").fadeTo(0,0);
			$("#compHP").html("HP -  " + malfoy.maxHP);
			currentCompHP = comp.maxHP;
			battle = true;
			$("#battleText1").html("Begin!!");
			$("#battleText2").html("");
		}
		malfoy.live = false;
	});
} 


//combat functions
function counterAttack() {
	$("#battleText2").html(comp.name + " attacked for " + comp.attack);
	currentUserHP = currentUserHP - comp.attack; 
}


$("#attack").on("click", function() {
	if (battle === true){
		$("#battleText1").html("You attack for " + user.attack);
		currentCompHP -= user.attack;
		if (currentCompHP> 0) {//checks if comp still alive
			counterAttack();
			$("#compHP").html("HP - " + currentCompHP);
			
		}

		if (currentCompHP <=0) {
			roundWin++;
			battle = false;
			if (roundWin<5){
				$("#compHP").html("HP - 0");
				$("#battleText1").html("You've won this duel!!")
				$("#battleText2").html("Pick another opponent.");
			pickComp()
			}
			else{
				gg()
			}
		}

		if (currentUserHP > 0 ) {
				$("#userHP").html("HP - " + currentUserHP);
		}

			//checks loss condition
		else if (currentUserHP <=0) {
			battle = false;
			loseText()

		}
	}	
	
})

$("#guard").on("click", function() {
	if (battle === true) {
		var gHeal = Math.floor(user.maxHP * .15);
		$("#battleText1").html("Health up by " + gHeal + ". Incoming attack reduced by " + (user.guard));
		counterAttack();
		currentUserHP += user.guard + gHeal;
		$("#compHP").html("HP - " + currentCompHP);
		//checks loss condition
		if (currentUserHP > 0) {
			$("#userHP").html("HP - " + currentUserHP);
		}
		else if (currentUserHP <=0) {
			battle = false;
			loseText()

		}
	}	
})

$("#heal").on("click", function() {
	if (battle === true){
		var heal = Math.floor(user.maxHP * .3);
		$("#battleText1").html("You heal for " + heal);
		currentUserHP += heal;
		counterAttack();
		$("#compHP").html("HP - " + currentCompHP);
		//checks loss condition
		if (currentUserHP > 0) {
			$("#userHP").html("HP - " + currentUserHP);
		}
		else if (currentUserHP <=0) {
			battle = false;
			loseText()
		}

	}
})


//start function
$("#start").on("click", function() {
	setStats();
	pickUser();
	}


);

//text if user loses
function loseText () {
	$("#userHP").html("");
	$("#battleText1").html("You lose");
	$("#battleText2").html("Try Again");
	reset()
}

//resets board for win or lose scenario
function reset () {
	$(".hPic").css({"border-color" : "darkgray"});
	$(".hPic").fadeTo(1,1);
	$(".ePic").fadeTo(1,1);
	$("#userImg").attr('src', 'assets/images/php.png');
	$("#compImg").attr('src', 'assets/images/php.png');
	$("#heroes").html("<h3>Heroes</h3>");
	$("#compHP").html("");
	$("#battleText2").on("click", function() {
		setStats();
		pickUser();
	})
	
}


//if user beats all comp chars
function gg() {
	$("#battleText1").html("<h1>Congratulations!!! You've Saved the Wizarding World!!!</h1>");
	$("#battleText2").html("<h2>Play again</h2>");
	reset()
}