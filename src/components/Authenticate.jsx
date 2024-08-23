import { useState } from "react";

function Authenticate({ token }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleClick() {
    setLoading(true);
    setMessage(null);
    setError(null);

    console.log("Token:", token);
    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);

      const successMessage = result.message
        ? result.message
        : "Authentication successful!";

      if (result.success) {
        setMessage(result.message);
      } else {
        setError("Authentication Failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 id="authentic">Authenticate</h2>
      <button onClick={handleClick}>
        {loading ? "Authenticating..." : "Authenticate Token!"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Authenticate;
