# generateSalt()

This is a simple utility function primarily useful for creating salts to add to passwords before hashing them and storing them in a database. It has other uses, as it just returns a random string of any length (default is 16), so can be used to generate (almost) unique keys for account validation etc.

## Usage

To return a salt of default length (16 characters), just call `generateSalt()`. You can optionally pass a parameter for the length of the string to be returned in brackets e.g. `generateSalt(48)` will return a 48 character string.

You can customise the character easily - just add or remove the characters you want to the string `characterList`
