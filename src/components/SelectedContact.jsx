import { useState, useEffect } from 'react';
export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.log(error);
            }
        }
        if (selectedContactId) {
        fetchContact();
        }
    }, [selectedContactId]);

    if(!contact) {
        return <div>Loading contact...</div>
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </div>
    );
}