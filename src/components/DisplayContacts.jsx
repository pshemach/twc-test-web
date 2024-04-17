import { useState, useEffect } from "react";
import maleIcon from "../assets/male.png";
import femaleIcon from "../assets/female.png";

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
    console.log("Editing contact with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Deleting contact with id:", id);
  };

  return (
    <div>
      <div>Contacts</div>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center space-x-2">
            <div className="h-[5px] w-[5px] flex items-center justify-center rounded-full bg-transparent">
              <img
                src={contact.gender === "male" ? maleIcon : femaleIcon}
                alt={contact.gender}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div>Name: {contact.name}</div>
              <div>Email: {contact.email}</div>
              <div>Phone Number: {contact.phoneNumber}</div>
            </div>
            <div className="flex">
              <button
                onClick={() => handleEdit(contact.id)}
                className="bg-blue-500 text-white rounded px-2 py-1 mr-2"
              ></button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-red-500 text-white rounded px-2 py-1"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
