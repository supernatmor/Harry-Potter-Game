//code for when doc ready, need start button in battle text

//characters and properties
var herm = {
	hp: 100, attack: 20, guard: 10, heal: 15, sp: "Obliviate"
};
var ronald = {
	hp: 100, attack: 20, guard: 10, heal: 15, sp: "Stupefy"
};
var potter = {
	hp: 100, attack: 20, guard: 10, heal: 15, sp: "Expelliarmus"
};
var neville  = {
	hp: 100, attack: 20, guard: 10, heal: 15, sp: "Petrificus Totalus"
};
var cedric = {
	hp: 100, attack: 20, guard: 10, heal: 15, sp: "Transfigure"
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
	live: true, hp: 100,  attack: 20
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
		$("#userHP").html("HP -  " + herm.hp);
		$("#userSP").html("Special - " + herm.sp);

	});

	$("#ron").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/rw.jpg');
		$("#userHP").html("HP -  " + ronald.hp);
		$("#userSP").html("Special - " + ronald.sp);
	});

	$("#har").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/hp.jpg');
		$("#userHP").html("HP -  " + potter.hp);
		$("#userSP").html("Special - " + potter.sp);
	});

	$("#nev").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/nl.jpg');
		$("#userHP").html("HP -  " + neville.hp);
		$("#userSP").html("Special - " + neville.sp);
	});

	$("#ced").on("click", function() {
		clearHeroes()
		$("#userImg").attr('src', 'assets/images/cd.jpg');
		$("#userHP").html("HP -  " + cedric.hp);
		$("#userSP").html("Special - " + cedric.sp);
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
	$("#sev").off("click");
	document.getElementById("del").style.borderColor = "darkgray";
	$('#del').off("click");
	document.getElementById("tom").style.borderColor = "darkgray";
	$('#tom').off("click");
	document.getElementById("bel").style.borderColor = "darkgray";
	$('#bel').off("click");
	document.getElementById("luc").style.borderColor = "darkgray";
	$('#luc').off("click");

}
function pickComp(){
	setCompOrange();
	$("#sev").on("click", function() {
		//alert("you clicked Snape");
		if (snape.live == true){
			$("#compImg").attr('src', 'assets/images/ss.jpg');
			setCompGray()
			$("#sev").fadeTo(0,0);
			$("#compHP").html("HP -  " + snape.hp);
		}
		snape.live = false;
	});

	$("#del").on("click", function() {
		//alert("you clicked Umbridge");
		if (dolores.live == true){
			$("#compImg").attr('src', 'assets/images/du.jpg');
			setCompGray()
			$("#del").fadeTo(0,0);
			$("#compHP").html("HP -  " + dolores.hp);
		}
		dolores.live = false;
	});

	$("#tom").on("click", function() {
		//alert("you clicked Voldemort");
		if (voldy.live == true){
			$("#compImg").attr('src', 'assets/images/tr.jpg');
			setCompGray()
			$("#tom").fadeTo(0,0);
			$("#compHP").html("HP -  " + voldy.hp);
		}
		voldy.live = false;
	});

	$("#bel").on("click", function() {
		//alert("you clicked Bellatrix");
		if (bella.live == true){
			$("#compImg").attr('src', 'assets/images/bl.jpg');
			setCompGray()
			$("#bel").fadeTo(0,0);
			$("#compHP").html("HP -  " + bella.hp);
		}
		bella.live = false;
	});

	$("#luc").on("click", function() {
		//alert("you clicked Lucius");
		if (malfoy.live == true){
			$("#compImg").attr('src', 'assets/images/lm.jpg');
			setCompGray()
			$("#luc").fadeTo(0,0);
			$("#compHP").html("HP -  " + malfoy.hp);
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


