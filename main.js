function validateForm(){
	
    if(!Form.validateNotEmpty()){
		document.getElementById("errors").innerHTML = "One of the 3 fields are empty."
		return(false);
	}
	
	if(!Form.validateRange3_50Char()){
		document.getElementById("errors").innerHTML = "Names must be between 3 and 50 characters."
		return(false);
	}
	
	if(!Form.validateIsNumber()){
		document.getElementById("errors").innerHTML = "Enter a zipcode with only numbers."
		return(false);
	}
	
	
	Form.setFirst(document.getElementById("firstName").value);
	Form.setLast(document.getElementById("lastName").value);
	Form.setZip(document.getElementById("zipCode").value);
	document.getElementById("errors").innerHTML = "Form object updated"
	
	
	return(false);
}















