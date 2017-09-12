//code for when doc ready, need start button in battle text

//....

//start function
$("#start").on("click", function() {
	alert("Choose Your Champion");
	pickUser();
	alert("Choose Your Opponent");
	pickComp();
	//$("#battleText").html("Start!!");//eliminates start button after clicking, text will update throughout duel
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
	$('#her').off("click");
	document.getElementById("ron").style.borderColor = "darkgray";
	$('#ron').off("click");
	document.getElementById("har").style.borderColor = "darkgray";
	$('#har').off("click");
	document.getElementById("nev").style.borderColor = "darkgray";
	$('#nev').off("click");
	document.getElementById("ced").style.borderColor = "darkgray";
	$('#ced').off("click");

}
function pickUser() {
	setUserBlue();
	$("#her").on("click", function() {
		//alert("you clicked Hermione");
		setUserGray()
		$("#her").fadeTo(0,0);
		$("#userImg").attr('src', 'assets/images/hg.jpg');
	});

	$("#ron").on("click", function() {
		//alert("you clicked Ron");
		setUserGray()
		$("#ron").fadeTo(0,0);
		$("#userImg").attr('src', 'assets/images/rw.jpg');
	});

	$("#har").on("click", function() {
		//alert("you clicked Harry");
		setUserGray()
		$("#har").fadeTo(0,0);
		$("#userImg").attr('src', 'assets/images/hp.jpg');
	});

	$("#nev").on("click", function() {
		//alert("you clicked Neville");
		setUserGray()
		$("#nev").fadeTo(0,0);
		$("#userImg").attr('src', 'assets/images/nl.jpg');
	});

	$("#ced").on("click", function() {
		//alert("you clicked Cedrick");
		setUserGray()
		$("#ced").fadeTo(0,0);
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
	$('#sev').off("click");
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
		setCompGray()
		$("#sev").fadeTo(0,0);
		$("#compImg").attr('src', 'assets/images/ss.jpg');
	});

	$("#del").on("click", function() {
		//alert("you clicked Umbridge");
		setCompGray()
		$("#del").fadeTo(0,0);
		$("#compImg").attr('src', 'assets/images/du.jpg');
	});

	$("#tom").on("click", function() {
		//alert("you clicked Voldemort");
		setCompGray()
		$("#tom").fadeTo(0,0);
		$("#compImg").attr('src', 'assets/images/tr.jpg');
	});

	$("#bel").on("click", function() {
		//alert("you clicked Bellatrix");
		setCompGray()
		$("#bel").fadeTo(0,0);
		$("#compImg").attr('src', 'assets/images/bl.jpg');
	});

	$("#luc").on("click", function() {
		//alert("you clicked Lucius");
		setCompGray()
		$("#luc").fadeTo(0,0);
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

//round win
$("#newOpp").on("click", function () {
	alert("Pick another Opponent");
	pickComp();
});


