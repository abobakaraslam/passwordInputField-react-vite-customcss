/* File: App.jsx located in RootFolder/src/ */
import { useState } from "react";

function App() {
  // Initialize state for form inputs
  const [InputData, setInputData] = useState({
    password: "",
    repeatPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle password input changes
  const onChangePassword = (e) => {
    setInputData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const onChangeRepeatPassword = (e) => {
    setInputData((prev) => ({
      ...prev,
      repeatPassword: e.target.value,
    }));
  };

  // Handle form submission
  const handleForm = (event) => {
    event.preventDefault();

    let password_get = InputData.password;
    let password_repeat_get = InputData.repeatPassword;

    if (password_get !== password_repeat_get) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage(""); // clear any previous error
    console.log("Form Submitted");
    console.log("Password:", InputData.password);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {/* Password Fields */}
        <div>
          <p><strong>Create Password:</strong></p>

          {/* Error Message */}
          {errorMessage && (
            <p style={{ color: "red", marginTop: "8px" }}>{errorMessage}</p>
          )}
          <input
            type="password"
            placeholder="Enter Password"
            value={InputData.password}
            onChange={onChangePassword}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Repeat Password"
            value={InputData.repeatPassword}
            onChange={onChangeRepeatPassword}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
