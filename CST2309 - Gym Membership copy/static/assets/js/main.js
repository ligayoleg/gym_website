// Function to check the first name
function checkFirstName(){
	var firstName = document.survey.firstName.value;
	if(firstName == ""){
		alert("First name must be filled out.");
		return false;
	}
	if(!isNaN(firstName)){
		alert("First name must be only letters.")
		return false;
	}

	return true;
}


// Function to check the last name
function checkLastName(){
	var lastName = document.survey.lastName.value;
	if(lastName == ""){
		alert("Last name must be filled out.");
		return false;
	}
	if(!isNaN(lastName)){
		alert("Last name must be only letters.")
		return false;
	}

	return true;
}

//Function to check the gender
function checkGender(){
	if(document.survey.gender[0].checked || document.survey.gender[1].checked ){
		return true;
	}

	return false;
}

//Function to check email 
function checkEmail(){
	var email = document.survey.email.value;
	
	if(email == ""){
		alert("Email must be filled out.");
		return false;
	}
	if(email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0){
		alert("Watch your email punctuation, don't miss '@' or '.'!");
		return false;
	}

	return true;
}


// Function to check the phone
function checkPhone(){
	var phone = document.survey.phone.value;
	if(phone == ""){
		alert("Phone must be filled out");
		return false;
	} else if (isNaN(phone)){
		alert("Phone must be all numbers");
		return false;
	} else if(phone.length < 10){
		alert("Please check your number, it is too short.");
		return false;
	}
	return true;
}

//Function to check the address
function checkAddress(){
	var street = document.survey.street.value;
	var city = document.survey.city.value;
	var state = document.survey.state.value;
	var zipcode = document.survey.zipcode.value;

	if(street.length == 0){
		alert("Please, provide your address.");
		return false;
	} else if(city == ""){
		alert("Please, provide your city");
		return false;
	} else if(zipcode == ""){
		alert("Please, provide your zipcode.");
		return false;
	} else if(isNaN(zipcode)){
		alert("Zip code must be all digits");
		return false;
	} else if(zipcode.length != 5){
		alert("Zipcode must be 5 digits.");
		return false;
	}

	return true;
}

//function to check the goals
function checkGoals(){
	var goals = document.survey.goal;
	for(var i = 0; i < 10; i++){
		if(goals[i].checked){
			return true;
		}
	}
	return false;
}

//function to check membership
function checkMembership(){
	var membership = document.survey.membership;
	for(var i = 0; i < membership.length; i++){
		if(membership[i].checked){
			return true;
		}
	}
	return false;
}

//function to check the credit card
function checkCard(){
	var nameOnCard = document.survey.nameOnCard.value;
	var cardNum = document.survey.cardNum.value;
	var expDate = document.survey.expiration.value;

	if(nameOnCard == ""){
		alert("Please provide the name on a card.");
		return false;
	}else if(cardNum == ""){
		alert('Please provide the credit card number.');
		return false;
	} else if(isNaN(cardNum)){
		alert("Card number must be all digits.");
		return false;
	}else if(cardNum.length != 16){
		alert("Card number must be 16 digits.");
		return false;
	}else if(expDate == ""){
		alert("Please provide the expiration date.");
		return false;
	}else if(isNaN(expDate)){
		alert("Expiration date must be digits only");
		return false;
	}

	return true;
}

// check if mailing address is the same as billing
// var sameAddress = document.survey.sameAsAbove;

// if(sameAddress[0].checked){

// }




//Function to Submit the Details
function doSubmit(){
	if(!checkFirstName()) {}
	else if(!checkLastName()){}
	else if(!checkGender()){
		alert("Please check the gender.");
	}
	else if(!checkEmail()){}
	else if(!checkPhone()){}
	// else if(!checkAddress()){}
	else if(!checkGoals()){
		alert("Please check one or multiple goals.")
	}
	else if(!checkMembership()){
		alert("Please choose the type of membership");
	}
	else{
		alert("Your sign up form is filled out! Allow us to review, and we will get back to you!");
	
	}
}	


// Function to create a slideshow
var imgArray = new Array(5);
var index = 0;
function cycle(){
	document.banner.src = imgArray[index].src;
	index++;
	if (index > 4){
		index = 0;
	}
	setTimeout("cycle()", 2000);
	return;
}

function startup(){
	imgArray[0] = new Image;
	imgArray[0].src = "assets/media/images/gallery1.jpg";
	imgArray[1] = new Image;
	imgArray[1].src = "assets/media/images/gallery2.jpg";
	imgArray[2] = new Image;
	imgArray[2].src = "assets/media/images/gallery3.jpg";
	imgArray[3] = new Image;
	imgArray[3].src = "assets/media/images/gallery4.jpg";
	imgArray[4] = new Image;
	imgArray[4].src = "assets/media/images/gallery5.jpg";
	cycle();
	return;
}



//function to check the firstname in suscription form
function firstName(){
	let firstName = document.subscription.firstName.value;
	if(firstName == ""){
		alert("First name must to be filled out.");
		return false;
	}else if(!isNaN(firstName)){
		alert("First name must be letters only.");
		return false;
	}

	return true;
}

//function to check the last name
function lastName(){
	var lastName = document.subscription.lastName.value;
	if(lastName == ""){
		alert("Last must be filled out.")
		return false;
	} else if(!isNaN(lastName)){
		alert("Last name must be letters only.");
		return false;
	}

	return true;
}

//function to check the email
function email(){
	var email = document.subscription.email.value;
	if(email == ""){
		alert("Email must be filled out.");
		return false;
	} else if(email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0){
		alert("Watch your email punctuation, don't miss '@' or '.'!");
		return false;
	}

	return true;
}


//function to Subscribe
function doSubscribe(){
	if(!firstName()){}
	else if(!lastName()){}
	else if (!email()){}
	else{
		alert("We thank you for subscription, you will be the first one to get the news.");
	}
}




































