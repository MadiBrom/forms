import "./App.css";
import "./index.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section class="container">
        <div class="user">
          <SignUpForm
            setToken={setToken}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </div>
        <div class="input">
          <Authenticate token={token} username={username} password={password} />
        </div>
      </section>
    </>
  );
}

export default App;
