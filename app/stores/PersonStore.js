import alt from '../alt';
import PersonActions from '../actions/PersonActions.js';

class PersonStore {
    constructor() {
        this.bindActions(PersonActions);
        this.appliedFilter = false
        //this.filteredPersons = false
    }
    onFilterApplied(filterKey){
        this.appliedFilter = filterKey
    }
    //onFilterComplete(filtered){
    //    this.filteredPersons = filtered
    //}
}

export default alt.createStore(PersonStore);