import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_SIGNUP } from 'App';
import AuthPageContainer from 'shared/components/authpage/AuthPageContainer';
import googleSignIn from 'shared/assets/google-signin.png';

const SignIn: React.FC = () => (
  <AuthPageContainer>
    <div className="w-112">
      <h3 className="font-medium my-6 text-center">Sign in to Tokenfolio</h3>
      <div className="drop-shadow-sm border-anti-flash-white border-2 rounded-3xl px-8 py-10 bg-cultured">
        <section className="flex justify-center">
          <img className="w-52" src={googleSignIn} alt="Google sign in" />
        </section>
        <hr className="my-7 border border-anti-flash-white" />
        <section className="my-8">
          <form className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm text-rosso-corsa bg-melon py-1.5 rounded-lg px-4">
              <span>Incorrect email address or phone number</span>
              <button type="button" className="w-7 text-center relative -right-2 text-2xl">
                &times;
              </button>
            </div>
            <label className="input__lg">
              <div className="label">Email address or Phone number</div>
              <input type="email" />
            </label>
            <div className="text-center mt-4 mb-6">
              <button type="button" className="button__lg__black">
                Receive OTP
              </button>
            </div>
          </form>
        </section>
        <hr className="my-7 border border-anti-flash-white" />
        <section className="text-center">
          <Link to={PATH_SIGNUP}>
            <span className="text-black">Don&apos;t have a Tokenfolio account?&nbsp;</span>
            <span className="font-bold">Sign up</span>
          </Link>
        </section>
      </div>
    </div>
  </AuthPageContainer>
);

export default SignIn;
