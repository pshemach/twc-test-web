import Button from "../components/Button";
import DisplayContacts from "../components/DisplayContacts";
import Title from "../components/Title";

export default function Contacts() {
  return (
    <div style={{ backgroundColor: "#083F46" }}>
      <Title>Contacts</Title>
      <Button>add new contact</Button>
      <DisplayContacts />
    </div>
  );
}
