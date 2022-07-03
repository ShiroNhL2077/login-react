import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const testLogin = await signInWithEmailAndPassword(auth,email,pw)
        console.log(testLogin)
    } catch (error) {
        alert("Ararara")
    }
  };    
  return (
    <div id="intro" className="bg-image shadow-2-strong app">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form
                className="bg-white rounded-5 shadow-5-strong p-5"
                id="form"
              >
                <div className="form-outline mb-4">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={(e) => setPw(e.target.value)}
                    value={pw}
                  />
                </div>

                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>
                  </div>

                  <div className="col text-center">
                    <p>Forgot password?</p>
                  </div>
                </div>

                <div className="d-flex justify-content-center my-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block px-5"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
                <div className="col text-center">
                  <p>Don't have an account? Create one</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
