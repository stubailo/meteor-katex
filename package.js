Package.describe({
  name: "simple:katex",
  summary: "KaTeX 0.5.1 for Meteor",
  version: "1.1.1",
  git: "https://github.com/stubailo/meteor-katex"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('katex-helper.js', "client");
  api.addFiles('katex.min.css');
  api.addFiles('fonts-override.css');
  api.addFiles('katex.min.js');

  api.addFiles("KaTeX_AMS-Regular.eot, KaTeX_AMS-Regular.ttf, KaTeX_AMS-Regular.woff, KaTeX_AMS-Regular.woff2, KaTeX_Caligraphic-Bold.eot, KaTeX_Caligraphic-Bold.ttf, KaTeX_Caligraphic-Bold.woff, KaTeX_Caligraphic-Bold.woff2, KaTeX_Caligraphic-Regular.eot, KaTeX_Caligraphic-Regular.ttf, KaTeX_Caligraphic-Regular.woff, KaTeX_Caligraphic-Regular.woff2, KaTeX_Fraktur-Bold.eot, KaTeX_Fraktur-Bold.ttf, KaTeX_Fraktur-Bold.woff, KaTeX_Fraktur-Bold.woff2, KaTeX_Fraktur-Regular.eot, KaTeX_Fraktur-Regular.ttf, KaTeX_Fraktur-Regular.woff, KaTeX_Fraktur-Regular.woff2, KaTeX_Main-Bold.eot, KaTeX_Main-Bold.ttf, KaTeX_Main-Bold.woff, KaTeX_Main-Bold.woff2, KaTeX_Main-Italic.eot, KaTeX_Main-Italic.ttf, KaTeX_Main-Italic.woff, KaTeX_Main-Italic.woff2, KaTeX_Main-Regular.eot, KaTeX_Main-Regular.ttf, KaTeX_Main-Regular.woff, KaTeX_Main-Regular.woff2, KaTeX_Math-BoldItalic.eot, KaTeX_Math-BoldItalic.ttf, KaTeX_Math-BoldItalic.woff, KaTeX_Math-BoldItalic.woff2, KaTeX_Math-Italic.eot, KaTeX_Math-Italic.ttf, KaTeX_Math-Italic.woff, KaTeX_Math-Italic.woff2, KaTeX_Math-Regular.eot, KaTeX_Math-Regular.ttf, KaTeX_Math-Regular.woff, KaTeX_Math-Regular.woff2, KaTeX_SansSerif-Bold.eot, KaTeX_SansSerif-Bold.ttf, KaTeX_SansSerif-Bold.woff, KaTeX_SansSerif-Bold.woff2, KaTeX_SansSerif-Italic.eot, KaTeX_SansSerif-Italic.ttf, KaTeX_SansSerif-Italic.woff, KaTeX_SansSerif-Italic.woff2, KaTeX_SansSerif-Regular.eot, KaTeX_SansSerif-Regular.ttf, KaTeX_SansSerif-Regular.woff, KaTeX_SansSerif-Regular.woff2, KaTeX_Script-Regular.eot, KaTeX_Script-Regular.ttf, KaTeX_Script-Regular.woff, KaTeX_Script-Regular.woff2, KaTeX_Size1-Regular.eot, KaTeX_Size1-Regular.ttf, KaTeX_Size1-Regular.woff, KaTeX_Size1-Regular.woff2, KaTeX_Size2-Regular.eot, KaTeX_Size2-Regular.ttf, KaTeX_Size2-Regular.woff, KaTeX_Size2-Regular.woff2, KaTeX_Size3-Regular.eot, KaTeX_Size3-Regular.ttf, KaTeX_Size3-Regular.woff, KaTeX_Size3-Regular.woff2, KaTeX_Size4-Regular.eot, KaTeX_Size4-Regular.ttf, KaTeX_Size4-Regular.woff, KaTeX_Size4-Regular.woff2, KaTeX_Typewriter-Regular.eot, KaTeX_Typewriter-Regular.ttf, KaTeX_Typewriter-Regular.woff, KaTeX_Typewriter-Regular.woff2"
    .split(", ").map(function (filename) {
      return "fonts/" + filename;
    }), "client", {asset: true});

  api.use("templating", "client", {weak: true});
});
