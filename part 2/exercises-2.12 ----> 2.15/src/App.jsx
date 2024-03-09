import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'



const Filter = ({ personsProp, setFilteredPersons }) => {
  const [newSearch, setNewSearch] = useState('');

  const handleFiltering = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setNewSearch(searchValue);

    const filteredPersons = personsProp.filter(person =>
      person.name.toLowerCase().includes(searchValue)
    );
    setFilteredPersons(filteredPersons);
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search in Phonebook{' '}
        <input value={newSearch} onChange={handleFiltering} />
      </div>
    </div>
  );
};

const PersonForm = ({ personsProp, setPersons, setFilteredPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const addPerson =  (event) => {
    event.preventDefault();
    const nameExist = personsProp.some((person) => person.name === newName);
    if (nameExist) {
      const confirmed = window.confirm(`${newName} is already in the phonebook would you like to replace the number ?`);
      if(confirmed){
        const personToUpdate = personsProp.find(person => person.name === newName);

        personToUpdate.number=newNumber

        const updatedPersons = personsProp.map(person =>
          person.name === newName ? personToUpdate : person );
          setPersons(updatedPersons)
          setFilteredPersons(updatedPersons)

          personService.update(personToUpdate.id,personToUpdate)

        
        

      }else{
        console.window("Nothing changed")
      }

    } else {
      
      const newPerson = { name: newName, number: newNumber };
      const updatedPersons = [...personsProp, newPerson];
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
      setNewName('');
      setNewNumber('');

      personService.create(newPerson)

      personService.getAll()
      

    }
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h3>Add a new contact</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};




const Persons = ({ personsProp, setPersons, setFilteredPersons }) => {

  const handleDelete = async (id, name) => {
    try {
      const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
      if (confirmed) {
        await personService.deletePerson(id);
        setPersons(personsProp.filter(person => person.id !== id));
        setFilteredPersons(personsProp.filter(person => person.id !== id)); 
        window.alert(`Deleted ${name} successfully.`);
        personService.getAll()
      }
    } catch (error) {
      console.error('Error deleting person', error);
    }
  };

  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {personsProp.map((person, index) => (
          <li key={index}>
            {person.name} {person.number} <button type='button' onClick={() => handleDelete(person.id, person.name)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }, [])
  console.log('Persons Array', persons.length, 'persons')

  return (
    <div>
      <Filter personsProp={persons} setFilteredPersons={setFilteredPersons} />
      <PersonForm personsProp={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} />
      <Persons personsProp={filteredPersons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} />
    </div>
  );
};

export default App;
