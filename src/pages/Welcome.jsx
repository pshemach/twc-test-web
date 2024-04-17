import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import background from "../assets/Ellipse-1.png";

export default function Welcome() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <Title>Welcome,</Title>
      <br />
      <SubTitle>
        This is where your contacts will live. Click the button below to add a
        new contact.
      </SubTitle>
    </div>
  );
}
