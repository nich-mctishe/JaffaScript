# JaffaScript Version 1.0 Release: Alpha.

## Contents:

#### 1. 	About
#### 2. 	Installation
#### 3. 	Contribute

## About Jaffascript.

Jaffascript is an open source Plug In, built by Hogarth Labs that is available under the GPU and MIT licences. 

It allows a user to build a dropdown nav bar for sites that require responsivity.

The Plug in handles the apparation and disapparation of a standard nav bar as well as ensuring that your menu will reposition itself when the window is set to a wider window, or one that no longer requires a dropdown.

## Installation

** installation of the plug in is both swift and easy, however it requires teh following steps. **

1. firstly download and initialise JQuery. The latest version can be found here: `<script src=`[`"http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"`](http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js)`></script>` this an be copied and pasted into your head as is.
2. download and implement the latest version of jaffascript.js.
3. to be able to use this effectively you will need a combonation of the following things
	* a navigation menu with an unordered list like this: `<nav><ul><li> ABout </li><li> Ect. </li></ul></nav>` .
	* if not the you will have to ginto the jaffascript to change the type of list you have, currently you will have to do this 3 times as each `$('nav ul').css()` function will need to be cahnged to your id or class. please look at the [jquery documentation](http://api.jquery.com/category/selectors/basic-css-selectors/) for more info
	* the next customizable section is the `set_interval` which calls both the fucntion and a variable recall time (milliseconds). please make the number smaller to make it call the function more often or larger to make the calls less responsive.
	* also the varibale `mobileSize` value at the top of the plug in will need to be set to the desired width of your mobile device in order to render the queries.
4. Feel free to play with any of the attributes and functionality of the script, and check back regularly for updated versions!

## Contribute.

** For contributions please fork the project then submit your branch for approval. **

Approval will normally take  3 days.

To make the process faster please also supply a markdown file outlining your amendment, or an email to [nicholas.headlong@hogarthww.com]() 