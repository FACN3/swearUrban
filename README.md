# :hear_no_evil:  SWEARurban :hear_no_evil:
## _an autocomplete search app with spunk!_

## Install Guide
To install project locally:
1. git clone
2. npm i
3. npm run devStart


## WHO
swearUrban is a team of smashing charming individuals:
- Hasan
- Marlen
- Neil

## WHAT
swearUrban takes the dictionary of https://www.urbandictionary.com/ and suggests values based on what the user is typing in the search box on the homepage. Time permitting, it will pull up the result on urbandictionary, either in the window or hyperlinking to a new site
## WHEN
as soon as possible
## WHY
In order to practice servers with node.js and implement past weeks' learning, especially XMLHttpRequests, we need to create an application that frequently makes api requests to a server, sends back successful responses (whether full web pages, css, .js files or json data), and that is hosted on a web server. 
## PLAN
### WIRE FRAME & ARCHITECTURE
![alt text](https://github.com/FACN3/swearUrban/blob/master/public/images/WhatsApp%20Image%202017-11-21%20at%2012.48.38%20(1).jpeg)
![alt text](https://github.com/FACN3/swearUrban/blob/master/public/images/WhatsApp%20Image%202017-11-21%20at%2012.49.54.jpeg)
### REQUIREMENTS
#### Search Bar
* drop down list of suggestions (limited to 6 max)
* keyboard navagable list
* pressing enter on result lists definition (time permitting)
#### Backend Design
* server.js
* dictionary.json (urban 
* script (tell the server how to collect data from the dictiionary)
* xhr (start typing in the search bar, send api request to server, return suggested diciontary values)
* handler (serving html, css, javascript, JSON data)

### Final Thoughts
We learnt a lot and had a great time working together! :sunny:

A couple of things that we found useful:

- window.location.url gives you the url of the client (deployed on server/deployed on localhost)

- encodeURI(url) provides a server-friendly url (useful for when search results have spaces or special characters)

- querystring

querystring.parse (passes string and return objects)
```
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// returns 'foo=bar&baz=qux&baz=quux&corge='
```
