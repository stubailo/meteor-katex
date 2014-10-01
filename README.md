KaTeX for Meteor
================

A Meteor wrapper for [KaTeX](http://khan.github.io/KaTeX/), "The fastest math typesetting library for the web."

To install in your Meteor app, type: `meteor add simple:katex`

Check out the example app at: <http://katex-example.meteor.com>

## Usage

There are two ways to use this package. One is by calling `katex` directly:

```
// on the client
katex.render("c = \\pm\\sqrt{a^2 + b^2}", element);

// on the client or server
var html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}");
```

The other is by using the `{{#katex}}` block helper in your templates:

```
{{#katex}}
  c = \pm\sqrt{a^2 + b^2}
{{else}}
  There was a parsing error.
{{/katex}}
```

The else block exists in case you want to display KaTeX code typed by a user, and want to do something sane in case they messed up. This functionality will soon be improved to allow for much better error handling.