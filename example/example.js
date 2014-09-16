if (Meteor.isClient) {
  Session.setDefault("text", "\\sqrt{x + 3}");

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