"use client";
import React from "react";
import { Download } from "lucide-react";

export default function AwardsNominationPage() {

  return (
    <div className="bg-white text-gray-900 p-6 md:p-12 mx-auto">
      <header className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Awards Nomination
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          <span className="font-semibold">Starbrands Spotlight Engine</span> – 
          A PR ecosystem to elevate member visibility through awards, media, and storytelling.
        </p>
      </header>

      <main className="space-y-16">
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Key Features
          </h2>
          <div className="space-y-8">
            <div
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Annual Awards
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">Starbrands Certified Export Champion</span> – For SMEs with proven cross-border success.
                </li>
                <li>
                  <span className="font-medium">Green Innovator Prize</span> – For sustainable businesses, sponsored by partners like Safaricom.
                </li>
              </ul>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Media Syndication
              </h3>
              <p className="text-gray-700">
                Guaranteed features in partner outlets to spotlight award winners and nominees.
              </p>
            </div>

            {/* Celebrity Ambassadors */}
            <div
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Celebrity Ambassadors
              </h3>
              <p className="text-gray-700">
                Collaborations with top influencers and celebrities to endorse award winners and increase brand credibility.
              </p>
            </div>
          </div>
        </section>

        {/* Nomination Form */}
        <section className="text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Download the Nomination Form
          </h2>
          <p className="text-gray-700 mb-6">
            Submit your nomination today and be part of Kenya’s most prestigious awards platform.
          </p>
          <a
            href="/Starbrands-Nomination-Form.pdf"
            download
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transition"
          >
            <Download className="w-5 h-5" />
            Download Nomination Form
          </a>
        </section>
      </main>
    </div>
  );
}
