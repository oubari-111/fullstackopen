import React, { useState } from 'react';

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

const PersonForm = ({ personsProp, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const nameExist = personsProp.some((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...personsProp, newPerson]);
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  console.log(typeof(persons))
  const [filteredPersons, setFilteredPersons] = useState(persons);

  return (
    <div>
      <Filter personsProp={persons} setFilteredPersons={setFilteredPersons} />
      <PersonForm personsProp={persons} setPersons={setPersons} />
      <Persons personsProp={filteredPersons} />
      
    </div>
  );
};

export default App;
