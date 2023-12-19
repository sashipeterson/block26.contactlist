import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

export default function App() {

  const[selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}