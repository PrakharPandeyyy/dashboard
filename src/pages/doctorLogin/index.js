import { useState } from "react";


export default function DoctorLogin() {
 const[signUpState,setSignUpState]=useState(false);


  return (
    <div>
      <div class={`container ${signUpState && "sign-up-mode"} `}>
        <div class="forms-container">
          <div class="signin-signup">
            <form action="" class="sign-in-form">
              <h2 class="title">Sign In</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />

              <p class="social-text">Or Sign in using Google</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </form>

            <form action="" class="sign-up-form">
              <h2 class="title">Sign Up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" class="btn solid" />

              <p class="social-text">Sign up using Google</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here?</h3>
              <p>Join us now with a single click!</p>
              <button class="btn transparent" id="sign-up-btn" onClick={()=>{
                setSignUpState(true);
              }}>
                Sign Up
              </button>
            </div>
            <img src="./img/log.svg" class="image" alt="" />
          </div>

          <div class="panel right-panel">
            <div class="content">
              <h3>One of us?</h3>
              <p>Sign in using your existing account!</p>
              <button class="btn transparent" id="sign-in-btn" onClick={()=>{
                setSignUpState(false);
              }}>
                Sign In
              </button>
            </div>
            <img src="./img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
