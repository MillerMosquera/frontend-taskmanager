import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postLogin = () => {
    fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          console.log(data.data);
          navigate("/task");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postLogin();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
              <p className="mt-2 text-gray-500">
                Sign in below to access your account
              </p>
            </div>
            <div className="mt-5">
              <form action="login" onSubmit={handleSubmit}>
                <div className="text-start mt-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="text-start mt-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                    id="password"
                    type="password"
                    placeholder="******************"
                    minLength={5}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black py-2 text-white  focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Don&#x27;t have an account yet?
                  <Link
                    to="/register"
                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                  >
                    Sign up.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
