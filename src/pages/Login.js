// import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [message, setMessage] = useState("");

  let email = useRef();
  let password = useRef();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center text-center pt-14">
      <div>
        <div className="font-bold pb-10 text-3xl">Sign In</div>

        <div className="border rounded-[12px] mx-auto w-[500px] shadow-xl drop-shadow-md pt-8">
          Fill your data here
          <div className="pt-3 md:pt-5">
            <fieldset>
              <div>
                <div>
                  <input
                    ref={email}
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
                <div>
                  <input
                    ref={password}
                    type="password"
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <div className="text-red-500 font-bold my-4">{message}</div>
            <button
              // onClick={onLogin}
              onClick={() =>
                props.myFunc.onLogin(
                  email.current.value,
                  password.current.value
                )
              }
              className="mb-10 bg-green-800 text-white px-5 py-3 rounded-full border shadow-md drop-shadow-lg font-lg hover:bg-green-900"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
