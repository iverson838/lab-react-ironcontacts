import contact from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  const updatedContact = () => {
    const newA = Math.floor(Math.random() * contact.length);
    const updatedContact = [...contacts, contact[newA]];

    setContacts(updatedContact);
  };

  const sortByName = () => {
    const name = [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1));
    setContacts(name);
  };

  const sortByPopularity = () => {
    const popularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(popularity);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <th>
          <h2>Pictures</h2>
        </th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </table>
      {contacts.map((contact) => {
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td> {contact.wonOscar ? 'yes' : 'no'} </td>
                <td> {contact.wonEmmy ? 'yes' : 'no'} </td>
              </tr>
            </tbody>
          </table>
        );
      })}

      <button onClick={updatedContact}>random</button>
      <button onClick={sortByName}>sort</button>
      <button onClick={sortByPopularity}>popularity</button>
    </div>
  );
}

export default App;
