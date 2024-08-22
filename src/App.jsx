// import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}
export default App;
