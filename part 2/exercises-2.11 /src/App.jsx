import { useState, useEffect } from 'react'
import axios from 'axios'


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

  const addPerson = (event) => {
    event.preventDefault();
    const nameExist = personsProp.some((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      const updatedPersons = [...personsProp, newPerson];
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
      setNewName('');
      setNewNumber('');
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

const Persons = ({ personsProp }) => {
  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {personsProp.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
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
      <Persons personsProp={filteredPersons} />
    </div>
  );
};

export default App;
