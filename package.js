Package.describe({
  name: "sashko:katex",
  summary: "KaTeX for Meteor.",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('katex-helper.js', "client");
  api.addFiles('katex.min.css');
  api.addFiles('fonts-override.css');
  api.addFiles('katex.min.js');

  api.addFiles("KaTeX_AMS-Regular.eot, KaTeX_AMS-Regular.ttf, KaTeX_AMS-Regular.woff, KaTeX_Main-Bold.eot, KaTeX_Main-Bold.ttf, KaTeX_Main-Bold.woff, KaTeX_Main-Italic.eot, KaTeX_Main-Italic.ttf, KaTeX_Main-Italic.woff, KaTeX_Main-Regular.eot, KaTeX_Main-Regular.ttf, KaTeX_Main-Regular.woff, KaTeX_Math-BoldItalic.eot, KaTeX_Math-BoldItalic.ttf, KaTeX_Math-BoldItalic.woff, KaTeX_Math-Italic.eot, KaTeX_Math-Italic.ttf, KaTeX_Math-Italic.woff, KaTeX_Math-Regular.eot, KaTeX_Math-Regular.ttf, KaTeX_Math-Regular.woff, KaTeX_Size1-Regular.eot, KaTeX_Size1-Regular.ttf, KaTeX_Size1-Regular.woff, KaTeX_Size2-Regular.eot, KaTeX_Size2-Regular.ttf, KaTeX_Size2-Regular.woff, KaTeX_Size3-Regular.eot, KaTeX_Size3-Regular.ttf, KaTeX_Size3-Regular.woff, KaTeX_Size4-Regular.eot, KaTeX_Size4-Regular.ttf, KaTeX_Size4-Regular.woff"
    .split(", ").map(function (filename) {
      return "fonts/" + filename;
    }), "client", {asset: true});

  api.use("templating", "client", {weak: true});
});
