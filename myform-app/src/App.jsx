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
          <form onSubmit={handleSubmit}>
            <h2>Create account</h2>

            <input
              value={name}
              type="text"
              name="name"
              placeholder="Nom"
              onChange={(event) => {
                console.log(event.target.value);
                setName(event.target.value);
              }}
            />

            <input
              value={email}
              type="email"
              name="email"
              placeholder="Michel@sardou.fr"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <input
              className={showBorder}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input
              className={showBorder}
              value={confirmpassword}
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              onChange={(event) => {
                setConfirmpassword(event.target.value);
              }}
            />
            <button className="buttonform">Envoyer</button>
            {showError === true && (
              <p style={{ color: "red" }}>Nul tu es NUL !!!</p>
            )}
          </form>
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
