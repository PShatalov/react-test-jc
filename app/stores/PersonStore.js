import alt from '../alt';
import PersonActions from '../actions/PersonActions.js';

class PersonStore {
    constructor() {
        this.bindActions(PersonActions);
    }

}

export default alt.createStore(PersonStore);