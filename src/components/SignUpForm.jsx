import { useState } from "react";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!username) {
      setError("Username is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    setError(null);
    return true;
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError("An error occurred during sign-up.");
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label class="label">
          Username:
          <input
            class="login"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label class="label">
          Password:
          <input
            class="login"
            id="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default SignUpForm;
