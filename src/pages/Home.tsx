import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen m-8">
      <header className="bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-pink-400">MatchMingle</h2>
          <nav className="text-gray-400 pb-5 space-x-4">
            <a href="#" className="text-pink-400">
              Home
            </a>
            <a href="#" className="text-pink-400">
              About
            </a>
            <a href="#" className="text-pink-400">
              Contact
            </a>
            <button className="bg-pink-400 text-white rounded-lg py-2 px-4 hover:bg-pink-500 transition">
              Login
            </button>
          </nav>
        </div>
      </header>
      <section className="relative bg-white">
        <img
          src="https://images.unsplash.com/photo-1475721042966-f829c9b42aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0cmltb255fGVufDB8fDB8fHww"
          alt="Matrimony couple"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-3xl font-bold text-white mb-6">
              Where connections become commitments. Begin your journey today
              with MatchMingle.
            </p>
            <button className="bg-pink-400 text-white rounded-lg px-4 py-2 hover:bg-pink-500 m-4">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Verified Profiles
          </h3>
          <p className="text-gray-600">
            Every profile is reviewed to ensure authenticity and genuine intent.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Smart Matching
          </h3>
          <p className="text-gray-600">
            AI-powered recommendations tailored to your values and preferences.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Private & Secure
          </h3>
          <p className="text-gray-600">
            Your data is protected with industry-standard privacy and security
            protocols.
          </p>
        </div>
      </section>
      <footer className="bg-white shadow-inner py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          © {new Date().getFullYear()} MatchMingle. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
