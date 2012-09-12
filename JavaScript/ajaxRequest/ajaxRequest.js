function ajaxRequest(url, callbackfunction, param1){ //param1 is optional, callbackfunction is not though an empty function is an ok parameter
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	
	xmlhttp.onreadystatechange=function(){ //Once the request has come back.
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//Run your callbackfunction with a parameter.
			callbackfunction(param1);
		}
	}
	
	xmlhttp.open("GET",url,true);
	xmlhttp.send(); //Send the request
}