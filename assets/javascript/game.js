//code for when doc ready, need start button in battle text

//....

//start function
$("#start").on("click", function() {
	alert("Choose Your Champion");
	pickUser();
	alert("Choose Your Opponent");
	pickComp();
	$("#battleText").html("Start!!");//eliminates start button after clicking, text will update throughout duel
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
function setUserGray() {
	document.getElementById("her").style.borderColor = "darkgray";
	document.getElementById("ron").style.borderColor = "darkgray";
	document.getElementById("har").style.borderColor = "darkgray";
	document.getElementById("nev").style.borderColor = "darkgray";
	document.getElementById("ced").style.borderColor = "darkgray";

}
function pickUser() {
	setUserBlue();
	$("#her").on("click", function() {
		//alert("you clicked Hermione");
		setUserGray()
		document.getElementById("her").style.borderColor = "green";
		$("#userImg").attr('src', 'assets/images/hg.jpg');
	});

	$("#ron").on("click", function() {
		//alert("you clicked Ron");
		setUserGray()
		document.getElementById("ron").style.borderColor = "green";
		$("#userImg").attr('src', 'assets/images/rw.jpg');
	});

	$("#har").on("click", function() {
		//alert("you clicked Harry");
		setUserGray()
		document.getElementById("har").style.borderColor = "green";
		$("#userImg").attr('src', 'assets/images/hp.jpg');
	});

	$("#nev").on("click", function() {
		//alert("you clicked Neville");
		setUserGray()
		document.getElementById("nev").style.borderColor = "green";
		$("#userImg").attr('src', 'assets/images/nl.jpg');
	});

	$("#ced").on("click", function() {
		//alert("you clicked Cedrick");
		setUserGray()
		document.getElementById("ced").style.borderColor = "green";
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
		setCompGray()
		document.getElementById("sev").style.borderColor = "red";
		$("#compImg").attr('src', 'assets/images/ss.jpg');
	});

	$("#del").on("click", function() {
		//alert("you clicked Umbridge");
		setCompGray()
		document.getElementById("del").style.borderColor = "red";
		$("#compImg").attr('src', 'assets/images/du.jpg');
	});

	$("#tom").on("click", function() {
		//alert("you clicked Voldemort");
		setCompGray()
		document.getElementById("tom").style.borderColor = "red";
		$("#compImg").attr('src', 'assets/images/tr.jpg');
	});

	$("#bel").on("click", function() {
		//alert("you clicked Bellatrix");
		setCompGray()
		document.getElementById("bel").style.borderColor = "red";
		$("#compImg").attr('src', 'assets/images/bl.jpg');
	});

	$("#luc").on("click", function() {
		//alert("you clicked Lucius");
		setCompGray()
		document.getElementById("luc").style.borderColor = "red";
		$("#compImg").attr('src', 'assets/images/lm.jpg');
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