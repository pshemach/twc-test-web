import { useState, useEffect } from "react";
import { FaMale, FaFemale, FaEdit, FaTrash } from "react-icons/fa";

export default function DisplayContacts() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const sampleData = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phoneNumber: "1234567890",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phoneNumber: "9876543210",
        },
      ];

      setContacts(sampleData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (id) => {
    // Logic for editing contact with the given id
    console.log("Editing contact with id:", id);
  };

  const handleDelete = (id) => {
    // Logic for deleting contact with the given id
    console.log("Deleting contact with id:", id);
  };

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.gender === "male" ? <FaMale /> : <FaFemale />}
            <div>Name: {contact.name}</div>
            <div>Email: {contact.email}</div>
            <div>Phone Number: {contact.phoneNumber}</div>
            <button onClick={() => handleEdit(contact.id)}>
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(contact.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
