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
	
	//Set uncache so that we don't pull a cached version of a request.
	if(url.search(/\x3f/)===-1){ //Checks if the url already has a ? in it
		var uncache="?uncache="; //If not this must be the first parameter
	}else{
		var uncache="&uncache=";	
	}
	
	xmlhttp.open("GET",url+uncache+Math.random(),true); 
	xmlhttp.send(); //Send the request
}