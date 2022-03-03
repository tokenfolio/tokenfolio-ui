import React from 'react';
import logo from 'shared/assets/tokenfolio-cultured.svg';

const AuthPageContainer: React.FC = ({ children }) => (
  <main className="grid grid-cols-2 h-screen">
    <aside className="flex items-center justify-center h-full bg-gradient-to-r from-persian-blue to-chinese-purple text-cultured">
      <div className="w-120">
        <figure className="mb-24">
          <img className="object-contain h-40 w-40" src={logo} alt="Tokenfolio" />
        </figure>
        <p className="my-12 font-medium w-2/3 text-lg">
          Get the best in class investment opportunities in early-stage startups.
        </p>
        <h1 className="my-12 leading-snug font-bold">Enabling Liquid Equity Crowdfunding</h1>
      </div>
    </aside>
    <section className="flex items-center justify-center">{children}</section>
  </main>
);

export default AuthPageContainer;
