import { useState } from 'react';

export const useValidationPerson = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [contacts, setContacts] = useState([]);

    const validatePerson = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length < 0 || phone.length < 10 || !emailRegex.test(email)) {
            alert('Enter Valid Data');
        } else {
            const auxObject = {
                name,
                phone,
                email,
            };
            setContacts((prevContacts) => [...prevContacts, auxObject]);
            alert('Successfully Added');
        }

    };

    return {
        setName,
        setPhone,
        setEmail,
        contacts,
        validatePerson,
    }
}
