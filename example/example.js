if (Meteor.isClient) {
  Session.setDefault("text", "x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}");

  Template.body.events({
    "keyup input": function (event) {
      Session.set("text", event.target.value);
    }
  });

  Template.body.helpers({
    text: function () {
      return Session.get("text");
    }
  });
}
