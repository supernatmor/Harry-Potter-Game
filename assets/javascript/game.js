//code for when doc ready, need start button in battle text

//characters and properties
var herm = {
	hp: 100, attack: 20, guard: 10, heal: 15
};
var ronald = {
	hp: 100, attack: 20, guard: 10, heal: 15
};
var potter = {
	hp: 100, attack: 20, guard: 10, heal: 15
};
var neville  = {
	hp: 100, attack: 20, guard: 10, heal: 15
};
var cedric = {
	hp: 100, attack: 20, guard: 10, heal: 15
};

var snape = {
	live: true, hp: 150, attack: 20
};

var dolores = {
	live: true, hp: 85, attack: 20
};

var voldy = {
	live: true, hp: 200, attack: 20
};

var bella = {
	live: true, hp: 120, attack: 20
};

var malfoy = {
	live: true, hp: 100, attack: 20
};

//start function
$("#start").on("click", function() {
	$("#battleText").html("Choose your player and your Opponent");//eliminates start button after clicking, text will update throughout duel
	pickUser();
	pickComp();
	}

);


//choosing user character
function setUserBlue(){
	document.getElementById("har").style.borderColor = "blue";
	document.getElementById("her").style.borderColor = "blue";
	document.getElementById("ron").style.borderColor = "blue";
	document.getElementById("nev").style.borderColor = "blue";
	document.getElementById("ced").style.borderColor = "blue";
}
function clearHeroes() {
	$("#her").fadeTo(0,0);
	$("#ron").fadeTo(0,0);
	$("#har").fadeTo(0,0);
	$("#nev").fadeTo(0,0);
	$("#ced").fadeTo(0,0);
	$("#heroes").html("<h3>&nbsp</h3>");
}
function pickUser() {
	setUserBlue();
	$("#her").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/hg.jpg');
	});

	$("#ron").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/rw.jpg');
	});

	$("#har").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/hp.jpg');
	});

	$("#nev").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/nl.jpg');
	});

	$("#ced").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/cd.jpg');
	});
}







//choosing comp character
function setCompOrange() {
	document.getElementById("sev").style.borderColor = "orange";
	document.getElementById("del").style.borderColor = "orange";
	document.getElementById("tom").style.borderColor = "orange";
	document.getElementById("bel").style.borderColor = "orange";
	document.getElementById("luc").style.borderColor = "orange";
}
function setCompGray() {
	document.getElementById("sev").style.borderColor = "darkgray";
	document.getElementById("del").style.borderColor = "darkgray";
	document.getElementById("tom").style.borderColor = "darkgray";
	document.getElementById("bel").style.borderColor = "darkgray";
	document.getElementById("luc").style.borderColor = "darkgray";

}
function pickComp(){
	setCompOrange();
	$("#sev").on("click", function() {
		//alert("you clicked Snape");
		if (snape.live == true){
			$("#compImg").attr('src', 'assets/images/ss.jpg');
			setCompGray()
			$("#sev").fadeTo(0,0);
		}
		snape.live = false;
	});

	$("#del").on("click", function() {
		//alert("you clicked Umbridge");
		if (dolores.live == true){
			$("#compImg").attr('src', 'assets/images/du.jpg');
			setCompGray()
			$("#del").fadeTo(0,0);
		}
		dolores.live = false;
	});

	$("#tom").on("click", function() {
		//alert("you clicked Voldemort");
		if (voldy.live == true){
			$("#compImg").attr('src', 'assets/images/tr.jpg');
			setCompGray()
			$("#tom").fadeTo(0,0);
		}
		voldy.live = false;
	});

	$("#bel").on("click", function() {
		//alert("you clicked Bellatrix");
		if (bella.live == true){
			$("#compImg").attr('src', 'assets/images/bl.jpg');
			setCompGray()
			$("#bel").fadeTo(0,0);
		}
		bella.live = false;
	});

	$("#luc").on("click", function() {
		//alert("you clicked Lucius");
		if (malfoy.live == true){
			$("#compImg").attr('src', 'assets/images/lm.jpg');
			setCompGray()
			$("#luc").fadeTo(0,0);
		}
		malfoy.live = false;
	});
} 







//combat functions
$("#attack").on("click", function() {
	alert("you clicked attack");
})

$("#guard").on("click", function() {
	alert("you clicked guard");
})

$("#heal").on("click", function() {
	alert("you clicked heal");
})

$("#special").on("click", function() {
	alert("you clicked special");
})

//round win
$("#newOpp").on("click", function () {
	alert("Pick another Opponent");

	pickComp();
});


