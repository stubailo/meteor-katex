Package.describe({
  name: "sashko:katex",
  summary: "Moved to simple:katex",
  version: "1.0.3",
  git: "https://github.com/stubailo/meteor-katex"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.imply("simple:katex@1.0.3");
});
