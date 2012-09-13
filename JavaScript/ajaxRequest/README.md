# ajaxRequest()

This is a general function for running an `xmlHttpRequest()`.

## Usage

Pass your url (can be relative to the url on which the js is running) and callback function to it (along with an optional parameter) and it should do the rest.

Note the example callbackfunction, possibly one of the most useful
```JavaScript
function callbackfunction(){
	document.getElementById('response').innerHTML=xmlhttp.responseText;
}
```