var Form = {
	
	"First_Name":"",
	"Last_Name":"",
	"Zip_Code":"",
	
	    "testPrint" : function(){
			console.log("Test");
		
		},
	
		"validateNotEmpty" : function(){
		
			//validate fields are not empty
			if(document.getElementById("firstName").value == null || document.getElementById("firstName").value == undefined ||
			document.getElementById("lastName").value == null || document.getElementById("lastName").value == undefined ||
			document.getElementById("zipCode").value == null || document.getElementById("zipCode").value == undefined ||
			document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" ||
			document.getElementById("zipCode").value == ""){
				return(false);
			}else{
				return(true);
			}
	
		},
	
		"validateRange3_50Char" : function(){
			//validate that names are between 3 and 50 characters
			if(document.getElementById("firstName").value.length >= 3 && document.getElementById("firstName").value.length <= 50 &&
			document.getElementById("lastName").value.length >= 3 && document.getElementById("lastName").value.length <= 50){
				return(true);
			} else {
				return(false);
			}
	
		},
	
		"validateIsNumber" : function(){
			//zip code only numbers
			if(isNaN(document.getElementById("zipCode").value)){
				return(false);
			}else{
				return(true);
			}
		},
		
		"setFirst": function(FirstName){
			First_Name = FirstName;
		},
		
		"setLast" : function(LastName){
			Last_Name = LastName;
		},
		
		"setZip": function(ZipCode){
			Zip_Code = ZipCode;
		}
		
};