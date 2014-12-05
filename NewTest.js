Games = new Meteor.Collection('games');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.postGrat.events({
  	'click input': function (event, template){
		var inputValue = $('input#textboc').val();
		if (inputValue == ''){
		    return;
		}
		//Get value
        	Games.insert({name : inputValue, created: Date.now(), user : Meteor.user().username});
		$('input#textboc').val('');
        } 
  });
  // in your JS file
  //Template.profilePage.helpers({
  //  username: function () {
  //    return Meteor.user() && Meteor.user().username;
  //  }
  //});
  Template.list.helpers({
    posts: function () {
     // this helper returns a cursor of
     // all of the posts in the collection
     return Games.find();
   }
});
// At the bottom of the client code
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	console.log('TWhat');
  });
}
