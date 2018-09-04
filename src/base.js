import Rebase from 're-base';

// connection to our Firebase database
const base = Rebase.createClass({
	apiKey: "AIzaSyA9po7L54Y5oLSRqkvw-9BIWOqcYPhpeWI",
    authDomain: "catch-of-the-day-jp-330af.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jp-330af.firebaseio.com"
});

export default base;