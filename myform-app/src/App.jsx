import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Edit from "./assets/components/Edit";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [switcher, setSwitcher] = useState(false);
  const [showBorder, setShowBorder] = useState("");

  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmpassword) {
      setShowError(false);
      alert("Tu as créé ton compte (ꈍᴗꈍ)");
      setSwitcher(true);
    } else {
      setShowError(true);
      setShowBorder("errorform");
    }
  };

  return (
    <>
      <Header />

      <div className="mainform">
        {switcher === false ? (
          //
          //
          <Form
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmpassword={confirmpassword}
            setConfirmpassword={setConfirmpassword}
            switcher={switcher}
            setSwitcher={setSwitcher}
            showBorder={showBorder}
            setshowBorder={setShowBorder}
            showError={ShowError}
            setShowError={setShowError}
          />
        ) : (
          <Edit name={name} email={email} password={password} />
        )}
      </div>

      <footer>
        <Footer text=" Made at Le Reacteur by Gaëtan (ꈍᴗꈍ)" />
      </footer>
    </>
  );
}

export default App;
