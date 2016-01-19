import alt from '../alt';

class PersonActions {
    constructor() {
        this.generateActions(
            'addPersonSuccess',
            'addPersonFail',
            'deleteCharacter'
        );
    }
    getRoles(){
        return [
            {key: 'rich', title: 'Rich', md: 3},
            {key: 'superpower', title: 'Super Power', md: 5},
            {key: 'genius', title: 'Genius', md: 4}
        ]
    }
    addPerson(persons) {
        if(typeof(Storage) !== "undefined") {
           try{
               console.log(JSON.stringify(persons), persons)
               localStorage.setItem("persons", JSON.stringify(persons));
           } catch(e){
               console.log(e)
           }
        }
    }
    removePerson(index){
        console.log(index)
    }

    getTypeCount(persons, key){
        return persons.filter(i => (i[key] == true)).length
    }
}

export default alt.createActions(PersonActions);