import alt from '../alt';

class PersonActions {
    constructor() {
        this.generateActions(
            'addPersonSuccess',
            'addPersonFail',
            'deleteCharacter',
            'filterApplied',
            'filterComplete'
        );
    }

    getRoles() {
        return [
            {key: 'rich', title: 'Rich', md: 2},
            {key: 'superpower', title: 'Super Power', md: 4},
            {key: 'genius', title: 'Genius', md: 3}
        ]
    }

    addPerson(persons) {
        if (typeof(Storage) !== "undefined") {
            try {
                console.log(JSON.stringify(persons), persons)
                localStorage.setItem("persons", JSON.stringify(persons));
            } catch (e) {
                console.log(e)
            }
        }
    }

    removePerson(index) {
        console.log(index)
    }

    getTypeCount(persons, key) {
        return persons.filter(i => (i[key] == true)).length
    }

    filteredPersons(persons, filter) {
        //console.log(persons, filter)
        return persons.filter(i => (i[filter] == true))
        //this.actions.filterComplete(filtered)
    }

    applyFilter(filterKey) {
        //console.log(filterKey)
        if(filterKey == 'reset'){
            filterKey = false
        }
        this.actions.filterApplied(filterKey)
    }
    checkRole(roles,key){
        console.log(roles.filter(i => (i.key == key)).length > 0, key, "HERE!!")
        return (roles.filter(i => (i.key == key)).length > 0)
    }
}

export default alt.createActions(PersonActions);