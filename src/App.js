import React, { useState } from "react";
import contactsData from "./contacts.json";

import "./App.css";

function App() {
  const firstFiveContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsData.length);
    let randomContact = contactsData[randomIndex];

    let newListContacts = [...firstFiveContacts]; //faço uma copia
    newListContacts.push(randomContact);
    setContacts(newListContacts);

    console.log(newListContacts);
  };

  const handleSortByName = () => {
    const listByName = [...firstFiveContacts];
    listByName.sort((a, b) => {
      if (a.name > b.name) {
        console.log(a.name + " > " + b.name);
        return 1;
      } else if (a.name < b.name) {
        console.log(a.name + " < " + b.name);
        return -1;
      }
      console.log(a.name + " = " + b.name);
      return 0;
    });
  };

  const handleSortByPopularity = () => {
    const listByPopularity = [...firstFiveContacts];
    listByPopularity.sort((a, b) => {
      if (a.popularity > b.popularity) {
        console.log(a.popularity + " > " + b.popularity);
        return 1;
      } else if (a.popularity < b.popularity) {
        console.log(a.popularity + " < " + b.popularity);
        return -1;
      }
      console.log(a.popularity + " = " + b.popularity);
      return 0;
    });
  };

  return (
    <div className="App">
      <table className="table">
        <tbody>
          <tr className="table_tr">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>

          {firstFiveContacts.map((contact, id) => {
            return (
              <tr className="table_tr" key={id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    className="contact_picture"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "🏆" : null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      </div>
    </div>
  );
}

export default App;

