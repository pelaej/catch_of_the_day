import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	/* used to bind "this" to custom methods */
	//constructor() {
		/* Super runs react component first then allows us to include custom stuff */
		//super();
		/* binds "this" to the goToStore method. without it, the goToStore method can't reference "this" of StorePicker */
		//this.goToStore = this.goToStore.bind(this);
	//}

	goToStore(event) {
		event.preventDefault();
		// first grab the text from the box
		const storeId = this.storeInput.value;
		// second we're going to transition from / to /store:storeId
		this.context.router.transitionTo(`/store/${storeId}`)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}> { /* this.goToStore is used to bind "this" to the goToStore custom method. can't reference "this" without it */ }
				{ /* This is a JSX comment */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;