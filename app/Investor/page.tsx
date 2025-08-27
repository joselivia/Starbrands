"use client";
import React from "react";


export default function StarbrandsConnectPage() {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12 mx-auto">
      <header className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Starbrands Connect Portal
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A digital hub linking certified brands to both local and global investors.
        </p>
      </header>

      <main className="space-y-20">
        {/* Features Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Trade Missions",
                desc: "Curated tours for foreign buyers and investors.",
              },
              {
                title: "Pre-Vetted Opportunities",
                desc: "Access to rigorously assessed, investment-ready brands.",
              },
              {
                title: "Sector-Specific Insights",
                desc: "Tailored reports on high-growth industries (e.g., agritech, renewable energy).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Join */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Why Join the Starbrands Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Trusted Certification",
                desc: "Sector-specific criteria validated by independent experts.",
              },
              {
                title: "Global-Local Bridge",
                desc: "Locally rooted insights with globally aligned standards.",
              },
              {
                title: "Impact-Driven",
                desc: "Driving job creation, sustainability, and export growth.",
              },
              {
                title: "Founding Member",
                desc: "20% discount for the first 100 sign-ups.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            How to Join
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brands",
                actions: [
                  "Apply for certification at:",
                  "Nominate your company for the Starbrands Excellence Awards.",
                ],
                email: "portal@starbrandseastafrica.com",
              },
              {
                title: "Investors",
                actions: ["Explore opportunities at:"],
                email: "connect@starbrandseastafrica.com",
              },
              {
                title: "Partners",
                actions: ["Collaborate with us at:"],
                email: "partnerships@starbrandeastafrica.com",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition text-center"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <ul className="text-gray-700 mb-3 space-y-1">
                  {item.actions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:${item.email}`}
                  className="text-red-600 font-medium hover:underline"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <p className="text-lg text-gray-700 leading-relaxed">
            Starbrands acts as a catalyst for Kenya’s economic growth, aligning with national agendas 
            like the Big 4 Agenda, Vision 2030, and BETA, while appealing to global ESG and impact 
            investment trends.
          </p>
          <p className="mt-6 text-xl font-semibold text-gray-900">
            Let’s build a legacy of excellence together!
          </p>
        </section>
      </main>
    </div>
  );
}
