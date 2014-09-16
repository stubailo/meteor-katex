if (Package.templating) {
  var Template = Package.templating.Template;
  var Blaze = Package.blaze.Blaze; // implied by `templating`
  var HTML = Package.htmljs.HTML; // implied by `blaze`

  Template.registerHelper("katex", new Template('katex', function () {
    var view = this;
    var content = '';
    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }

    try {
      return HTML.Raw(katex.renderToString(content));
    } catch (error) {
      console.log(view);
      if (view.templateElseBlock) {
        return view.templateElseBlock;
      }
    }
  }));
}
