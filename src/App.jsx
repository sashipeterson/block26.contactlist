import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

export default function App() {

  const[selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div id = "selectedContact">
        <SelectedContact selectedContactId={selectedContactId} />
        </div>

      ) : (

        <div id="contactList">
        <ContactList setSelectedContactId={setSelectedContactId} />
        </div>
        
      )}
    </>
  );
}