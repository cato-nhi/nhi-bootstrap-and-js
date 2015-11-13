# Bootstrap 

## Grid system
http://getbootstrap.com/css/#grid
```html
<div class="container">
	<div class="row">
		<div class="col-md-3">
		</div>
		<div class="col-md-9">
		</div>
	</div>
</div>
```

## Typography
http://getbootstrap.com/css/#type

```html
<div class="row">
	<div class="col-md-6">
		<h1>Bootstrap 101</h1>
		<h2>Heading type 2</h2>
		<h3>Type 3 heading <small>Dette er en liten tekst sammen med en title</small></h3>

		<p class="lead">
			Nam posuere volutpat massa, <strong>interdum facilisis</strong> elit luctus non. Phasellus non lectus maximus, sagittis
		</p>
	</div>
	<div class="col-md-6">
		<p>
			Cras laoreet nunc in mauris mattis, lobortis feugiat erat gravida. Vestibulum finibus erat varius, gravida tortor eget, porta
			libero. <strong>Suspendisse pharetra tincidunt lorem quis pretium.</strong> In dictum sem eu purus vehicula
			rhoncus. Praesent maximus dictum felis ac finibus. <abbr title="Proinassdf asdfDSFASFDSdff0">Proin</abbr> vehicula
			ex vitae lectus consectetur, ac commodo dui dignissim. Curabitur in efficitur turpis.
		</p>
		<p>
			Phasellus venenatis quis quam id commodo. Ut vehicula est tempor tincidunt volutpat. Sed efficitur tristique libero, quis
			mattis massa placerat eget. Nulla consequat eget diam cursus mattis. Duis ac consectetur erat, sit amet pulvinar magna.
			Sed augue urna, congue at mattis ut, malesuada vel diam. Phasellus consectetur nibh quis aliquam ultrices. Quisque
			tempus sem odio, at suscipit odio lacinia quis. Nunc suscipit at elit ornare aliquet. Fusce erat eros, cursus eget
			dignissim quis, bibendum imperdiet diam.
		</p>
	</div>
</div>
<hr/>
```

## Navbar
http://getbootstrap.com/components/#navbar

### NAV #1
```html
<nav class="navbar navbar-inverse fw-navbar">
	<div class="container">
		<div class="navbar-header">
			<a ui-sref="layout.home" class="navbar-brand"><span class="brand-title">CSA</span></a>
			<a class="btn navbar-btn navbar-toggle" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed" data-toggle="collapse"
			data-target=".navbar-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
		</div>

		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li><a href="#">Menu item 1</a></li>
				<li><a href="#">Menu item 2</a></li>
				<li class="visible-md-block visible-lg-block"><a href="#">Menu item 3</a></li>
				<li class="visible-lg-block"><a href="#">Menu item 4</a></li>
				<li class="visible-lg-block"><a href="#">Menu item 5</a></li>
			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li role="separator" class="divider"></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>
```
### NAV #2
```html
<h1>Sidebar</h1>
<ul class="nav nav-pills nav-stacked">
	<li><a href="#">En url</a></li>
	<li><a href="#">En annen url</a></li>
	<li><a href="#">Url #3</a></li>
</ul>
```

## Forms
http://getbootstrap.com/css/#forms

```html
<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<form class="login">
			<h1>Logg inn</h1>
			<div class="form-group">
				<label for="input1">Brukernavn</label>
				<input type="text" class="form-control" id="input1" placeholder="ole@nordmann.no">
			</div>
			<div class="form-group">
				<label for="input2">Passord</label>
				<input type="password" class="form-control" id="input2">
			</div>
			<div class="form-group">
				<input type="submit" class="btn btn-primary" value="Logg inn">
			</div>
		</form>
	</div>
</div>
<hr/>
```

## Buttons
http://getbootstrap.com/css/#buttons

```html
<div class="row">
	<div class="col-md-12">
		<button type="button" class="btn btn-default">Default</button>
		<button type="button" class="btn btn-primary">Primary</button>
		<input type="submit" class="btn btn-info" value="Submit" />
		<a href="#" class="btn btn-danger">I'm also a button!</a>

		<div class="btn-group">
			<button type="button" class="btn btn-warning">Stuck</button>
			<a href="#" class="btn btn-success">Together</a>
		</div>

		<div class="btn-group">
			<button type="button" class="btn btn-primary">I has menu</button>
			<a href="#" class="dropdown-toggle btn btn-primary" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">Action</a></li>
				<li><a href="#">Another action</a></li>
				<li><a href="#">Something else here</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="#">Separated link</a></li>
			</ul>
		</div>
	</div>
</div>
<hr />
```

## Tables
http://getbootstrap.com/css/#tables

```html
<div class="row">
	<div class="col-md-12">
		<table class="table table-bordered table-hover table-striped">
			<tr>
				<th>Company</th>
				<th>Contact</th>
				<th>Country</th>
			</tr>
			<tr>
				<td>Alfreds Futterkiste</td>
				<td>Maria Anders</td>
				<td>Germany</td>
			</tr>
			<tr>
				<td>Ernst Handel</td>
				<td>Roland Mendel</td>
				<td>Austria</td>
			</tr>
			<tr>
				<td>Island Trading</td>
				<td>Helen Bennett</td>
				<td>UK</td>
			</tr>
			<tr>
				<td>Laughing Bacchus Winecellars</td>
				<td>Yoshi Tannamuri</td>
				<td>Canada</td>
			</tr>
			<tr>
				<td>Magazzini Alimentari Riuniti</td>
				<td>Giovanni Rovelli</td>
				<td>Italy</td>
			</tr>
			<tr>
				<td>North/South</td>
				<td>Simon Crowther</td>
				<td>UK</td>
			</tr>
		</table>
	</div>
</div>
<hr />
```

# CSS / LESS Structure
```less
@import "../bootstrap/bootstrap.less";	// Theme (Bootstrap can be built in)

@import "variables.less";				// Our variables (theme may have it's own)
@import "mixins.less";					// Our handy functions (gradient, border, prefixes)
@import "main.less";					// Our custom overrides and general styles not included in Theme

@import "client-message.less";			// 3rd party component
@import "modal.less";

@import "header.less";					// Layout components
@import "nav.less";						// 
@import "breadcrumb.less";				// 
@import "footer.less";					// 
@import "book.less";					// 

@import "search-form.less";				// Content components / Widgets
@import "search-result.less";			//
@import "search-autocomplete.less";		//
@import "order.less";					//
@import "account.less";					//
@import "document/document.less";		// 
@import "document/document-theme.less";	//
```

# Javascript

## 'use strict'
https://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx

## IIFE (Immediately-Invoked Function Expression)
A javaScript design pattern to protect against polluting the global environment, and simultaneously allow public access to 
methods while retaining privacy for variables defined within the function.

https://en.wikipedia.org/wiki/Immediately-invoked_function_expression: 

```javascript
; (function ($, window, document, nhiStrings) {
    'use strict';
	
	// My code here	
	
})(jQuery, window, document, window.nhiStrings);
```
Check out scripts/iife.js

## Jquery plugins "boilerplate"
http://jqueryboilerplate.com/

Check out 'scripts/super-green.js'

### Ajax "boilerplate"
```javascript
$.ajax({
	url: '/favorites/add',
	type: 'POST',
	data: {
		pageId: 1234,
	}
})
.done(function () {
	console.log('Favorite added');
})
.fail(function (response) {
	console.log(response.statusText + ' - ' + response.responseText);
})
.always(function () {
	// This code will execute even if request failed
});
```

## Top tips

## Callbacks
One of the main features of the language and a powerful tool in an async environment

```javascript
$.ajax({ /* ... */ })
.done(function () {
	console.log('Favorite added');
})
.fail(errorHandler);

function errorHandler(response) {
	console.log(response.statusText + ' - ' + response.responseText);
}
```

### Check if element exist (JQuery)
```javascript
var $myDiv = $('#my-div');
if ($myDiv.length) { 
    // Wohoo, this is how I know the jquery-element exist! 
}
```

### Default value
```javascript
function foo(a) {
	a = typeof a !== 'undefined' ? a : 42;
```

### Strict equal (===) vs Equal (==)
Almost always use === operator, as it compares value and type.
 
```javascript
	"1" == 1 	// true
	"1" === 1	// false
```

## Lenker
- https://developer.mozilla.org/en-US/
- http://getbootstrap.com/css/
- https://bootswatch.com/ 
- http://bootsnipp.com/
- http://fortawesome.github.io/Font-Awesome/icons/
