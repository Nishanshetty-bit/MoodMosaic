import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Redirect support
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { auth } from "../firebase/server"; // ✅ Adjust Firebase import
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // ✅ Added username field
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ Hook to redirect users

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  // ✅ Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-up successful!");
      navigate("/"); // ✅ Redirect to main page after sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Handle Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign-in successful!");
      navigate("/"); // ✅ Redirect to main page after sign-in
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-6">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Typography variant="h3" color="blue-gray" className="mb-4">
          Sign In / Sign Up
        </Typography>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form>
          {/* ✅ Username Field */}
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-900 rounded-lg p-2 placeholder-gray-700" // ✅ Bold outline and stretched
              required
            />
          </div>

          {/* ✅ Email Field */}
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-900 rounded-lg p-2 placeholder-gray-700" // ✅ Bold outline and stretched
              required
            />
          </div>

          {/* ✅ Password Field */}
          <div className="mb-4 relative">
            <Input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-900 rounded-lg p-2 placeholder-gray-700" // ✅ Bold outline and stretched
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePasswordVisibility}
            >
              {passwordShown ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleSignIn} color="blue">
              Sign In
            </Button>
            <Button onClick={handleSignUp} color="green">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;