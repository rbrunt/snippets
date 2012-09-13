<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>generateSalt() example</title>
    </head>
    <body>
        <p>Choose the length of the string you'd like, then press "Get Salt"</p>
        <p>See the salt you generated underneath</p>

        <form name="form" action="index.php" method="GET">
        	<!--- The PHP below just sets the form up so that pressing the button repeatedly keeps generating new salts of the same length -->
            <input name="length" type="number" min="0" max="1000" step="1" value="<?php if(isset($_GET['length'])){echo $_GET['length'];}else{echo "16";} ?>" autofocus>
            <input type="submit" value="Get Salt">
        </form>
        <p style="font-family: monospace;">
			<?php
				// Default is to generate a 16 character long salt
				function generateSalt($max = 16){
					// You can customise the character set here:
					$characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*&?";
					$i = 0;
					$salt = "";
					while ($i < $max) {
						$salt .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
						$i++;
					}
					return $salt;
				}

				// Check to see if we've been passed a GET parameter
				if(isset($_GET['length'])){
					$length = $_GET['length'];
					// Call the generate salt function, convert any special HTML characters, and print to page:
					echo htmlentities(generateSalt($length));
				}
			?>
  		</p>
    </body>
</html>