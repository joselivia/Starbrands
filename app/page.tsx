'use client';
import React from 'react';
import './globals.css';

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      <section
        className="relative bg-gradient-to-br from-blue-700 to-indigo-900 text-white text-center py-32 px-4 overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,100" fill="currentColor" className="text-blue-500" />
            <polygon points="100,100 0,100 100,0" fill="currentColor" className="text-indigo-500" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Elevating Excellence, Connecting Markets
          </h1>
          <p
            className="text-lg md:text-xl font-light mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Certifying Quality. Recognizing Innovation. Bridging East Africa to the World.
          </p>
          <div
            className="flex justify-center gap-6 flex-wrap"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <a
              href="#seal"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Apply for Certification
            </a>
            <a
              href="#awards"
              className="bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Nominate Your Brand
            </a>
            <a
              href="#investor"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section
        className="max-w-6xl mx-auto my-20 px-6"
        id="intro-video"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2
          className="text-4xl font-bold text-center mb-10 text-gray-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Journey
        </h2>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
          <video
            src="/Starleaders.mp4" autoPlay muted loop playsInline 

            controls
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* STARBRANDS SEAL */}
      <section className="bg-gray-50 py-20 px-6" id="seal">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Starbrands Seal of Excellence
          </h2>
          <p
            className="mb-12 text-lg text-gray-600"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            A globally recognized endorsement of quality, sustainability, and ethics.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Why Get Certified?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Boost consumer trust</li>
                <li>Access premium pricing and export markets</li>
                <li>Feature in the Starbrands Connect Investor Portal</li>
              </ul>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Certification Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Submit application and documents</li>
                <li>Independent audit (onsite and lab tests)</li>
                <li>Certification awarded (valid for 2 years)</li>
              </ol>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Sector-Specific Criteria</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Manufacturing: KEBS compliance, R&D, local sourcing</li>
                <li>Services: Customer satisfaction, tech adoption</li>
                <li>Real Estate: Green building, affordability</li>
                <li>Paints: Eco-friendly formulas, innovation</li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="mt-12 inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Start Your Application
          </a>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 px-6" id="awards">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Annual Excellence Awards
          </h2>
          <p
            className="mb-12 text-lg text-gray-600"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Recognizing innovation, sustainability, and market leadership.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Manufacturing Industry</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Product Excellence Award</li>
                <li>Sustainable Manufacturing Champion</li>
              </ul>
            </div>
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Service Industry</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Customer Experience Leader</li>
                <li>Digital Innovation Award</li>
              </ul>
            </div>
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Real Estate Industry</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Green Building Pioneer</li>
                <li>Affordable Housing Star</li>
              </ul>
            </div>
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Cross-Industry</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Starbrands Overall Champion</li>
                <li>SME Rising Star</li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="mt-12 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Nominate Your Company
          </a>
        </div>
      </section>

      {/* INVESTOR HUB */}
      <section className="bg-gray-50 py-20 px-6" id="investor">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Investor Hub
          </h2>
          <p
            className="mb-12 text-lg text-gray-600"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Access East Africa’s most promising, Starbrands-certified brands.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">Why Invest?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Rigorous due diligence (quality, compliance, ESG)</li>
                <li>High-growth sectors: Agri-tech, renewable energy, real estate</li>
              </ul>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">Starbrands Connect Portal</h3>
              <p className="text-gray-600">Filter by industry, investment size, location, and message CEOs directly.</p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">Success Stories</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Optiven Group: Secured $10M for solar-powered housing</li>
                <li>United Paints: Expanded to 3 East-African markets post-certification</li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="mt-12 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Sign Up for Investor Access
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-gray-100" id="contact">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Let’s Build Excellence Together
          </h2>
          <p
            className="mb-12 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Reach out for partnerships, inquiries, or media requests.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-12 text-left">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Office Address</h3>
              <p className="text-gray-600">Minet House, Processional Way (off Nyerere Rd), Nairobi</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">General Inquiries</h3>
              <p className="text-gray-600">Email: info@starbrandsawards.com</p>
              <p className="text-gray-600">Phone: +254 728 80 22 22</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Partnerships</h3>
              <p className="text-gray-600">Email: partnerships@starbrandsawards.com</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Social Media</h3>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <form
            className="max-w-xl mx-auto grid gap-6 text-left"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="text"
              placeholder="Sector"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}