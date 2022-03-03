import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_SIGNUP } from 'App';
import logo from 'shared/assets/tokenfolio-cultured.svg';
import googleSignIn from 'shared/assets/google-signin.png';

const SignIn: React.FC = () => (
  <main className="grid grid-cols-2 h-screen">
    <section className="flex items-center justify-center h-full bg-gradient-to-r from-persian-blue to-chinese-purple text-cultured">
      <div className="w-120">
        <figure className="mb-24">
          <img className="object-contain h-40 w-40" src={logo} alt="Tokenfolio" />
        </figure>
        <p className="my-12 font-medium w-2/3 text-lg">
          Get the best in class investment opportunities in early-stage startups.
        </p>
        <h1 className="my-12 leading-snug font-bold">Enabling Liquid Equity Crowdfunding</h1>
      </div>
    </section>
    <section className="flex items-center justify-center">
      <div className="w-112">
        <h3 className="font-medium my-6 text-center">Sign in to Tokenfolio</h3>
        <div className="drop-shadow-sm border-anti-flash-white border-2 rounded-3xl p-8 bg-cultured">
          <section className="pb-7 pt-2 flex justify-center">
            <img className="w-52" src={googleSignIn} alt="Google sign in" />
          </section>
          <hr className="border border-anti-flash-white" />
          <section className="my-8">
            <form className="">
              <div className="flex justify-between items-center text-sm text-rosso-corsa bg-melon py-1.5 rounded-lg px-4 my-6">
                <span>Incorrect email address or phone number</span>
                <button type="button" className="w-7 text-center relative -right-2 text-2xl">
                  &times;
                </button>
              </div>
              <label className="input__lg">
                <div className="label">Email address or Phone number</div>
                <input type="email" />
              </label>
              <div className="flex justify-center items-center mt-8 mb-12">
                <button type="button" className="button__lg__black">
                  Receive OTP
                </button>
              </div>
            </form>
          </section>
          <hr className="border border-anti-flash-white" />
          <section className="pt-7 pb-2 text-center">
            <span>Don&apos;t have a Tokenfolio account?&nbsp;</span>
            <Link to={PATH_SIGNUP} className="font-bold">
              Sign up
            </Link>
          </section>
        </div>
      </div>
    </section>
  </main>
);

export default SignIn;
