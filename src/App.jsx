import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Registor from "./pages/Registor";
import Contacts from "./pages/Contacts";
import NewContacts from "./pages/NewContacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registor />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/new" element={<NewContacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
