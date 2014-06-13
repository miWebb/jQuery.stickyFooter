jQuery.stickyFooter
===================

The jQuery sticky footer plugin sticks your footer, with or without set height, to the bottom of your page. You can also use the sticky footer plugin to stick other elements to the bottom of their parent. Check the [demo](https://miwebb.github.io/jQuery.stickyFooter/) for more information.

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
	width: 100%;
}</pre>

### Javascript

<pre>$(window).load(function() {
	$("#footer").stickyFooter();
});</pre>

## Options

<pre>
$("#footer").stickyFooter({
	// The class that is added to the footer.
	class: 'sticky-footer',

	// The footer will stick to the bottom of the given frame. The parent of the footer is used when an empty string is given.
	frame: '',

	// The content of the frame. You can use multiple selectors. e.g. "#header, #body"
	content: '#page'
});</pre>
