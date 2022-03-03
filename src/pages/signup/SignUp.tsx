import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_SIGNIN } from 'App';
import AuthPageContainer from 'shared/components/authpage/AuthPageContainer';

const SignUp: React.FC = () => (
  <AuthPageContainer>
    <div className="w-112">
      <h3 className="font-medium my-6 text-center">Sign up to Tokenfolio</h3>
      <div className="drop-shadow-sm border-anti-flash-white border-2 rounded-3xl px-8 py-10 bg-cultured">
        <section>A</section>
        <hr className="my-7 border border-anti-flash-white" />
        <section className="my-8">
          <form className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm text-rosso-corsa bg-melon py-1.5 rounded-lg px-4">
              <span>Email address is already in use</span>
              <button type="button" className="w-7 text-center relative -right-2 text-2xl">
                &times;
              </button>
            </div>
            <label className="input__lg">
              <div className="label">Name</div>
              <input type="text" />
            </label>
            <label className="input__lg">
              <div className="label">Email address</div>
              <input type="email" />
            </label>
            <div className="text-center mt-4">
              <button type="button" className="text-center button__lg__black">
                Create Account
              </button>
              <p className="text-sm mt-4 text-left">
                <span>By creating an account, I agree to the </span>
                <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
                <span> and </span>
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                <span>.</span>
              </p>
            </div>
          </form>
        </section>
        <hr className="my-7 border border-anti-flash-white" />
        <section className="text-center">
          <Link to={PATH_SIGNIN}>
            <span className="text-black">Already have an account?&nbsp;</span>
            <span className="font-bold">Sign in</span>
          </Link>
        </section>
      </div>
    </div>
  </AuthPageContainer>
);

export default SignUp;
