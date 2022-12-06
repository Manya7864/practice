import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext} from "../Context/AppContext";


function Login() {
  const [formState, setFormState] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const {loginUser} = useContext(AuthContext);
  
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        loginUser(res.token)
        navigate("/dashboard");
      })
      .catch((err) => {});
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}

            />
          </label>
        </div>
        <div>
          <button  data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
