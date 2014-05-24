jQuery.stickyFooter
===================

jQuery sticky footer plugin

## Example

### HTML

<pre>&lt;html>
	&lt;body>
		&lt;div id="page">
			&lt;p>Content&lt;/p>
		&lt;/div>

		&lt;div id="footer">
			&lt;p>Footer&lt;/p>
		&lt;/div>
	&lt;/body>
&lt;/html></pre>

### CSS

<pre>.sticky-footer
{
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
}</pre>

### Javascript

<pre>$(window).load(function() {
	$("#footer").stickyFooter();
});</pre>

## Options

<pre>
$("#footer").stickyFooter({
class: 'sticky-footer',
content: '#page',
frame: 'body'
});</pre>
