"use client";
import React from "react";

export default function SealOfExcellencePage() {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12 mx-auto">
      <header className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Seal of Excellence
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Elevating service quality, professionalism, and customer satisfaction in
          Kenya’s dynamic service economy.
        </p>
      </header>

      <main className="space-y-24">
        {/* Service Industry Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Brands in the Service Industry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Service Quality & Consistency",
                details: [
                  "Adherence to industry-specific standards (ISO 9001, TRA, CMA, SASRA, CAK, etc.)",
                  "Mystery customer audits to assess service delivery.",
                  "Client testimonials showing 90%+ satisfaction.",
                  "Service guarantees (SLAs, refund policies).",
                ],
                example:
                  "Tour operator with consistent 5-star reviews on TripAdvisor and verified eco-tourism compliance.",
              },
              {
                title: "Customer Experience & Satisfaction",
                details: [
                  "Independent surveys showing 85%+ satisfaction.",
                  "Low complaint rates (<5% unresolved issues annually).",
                  "Digital engagement (ratings, social media responsiveness).",
                ],
                example:
                  "Fintech app with 4.8-star rating and 24/7 customer support.",
              },
              {
                title: "Ethical Practices & Transparency",
                details: [
                  "Compliance with Data Protection Act (Kenya).",
                  "Clear terms of service, no hidden fees.",
                  "Fair Trade / B Corp certifications (if applicable).",
                ],
                example:
                  "Healthcare provider with GDPR-compliant patient records and transparent billing.",
              },
              {
                title: "Employee Training & Welfare",
                details: [
                  "Regular staff training & certifications.",
                  "Compliance with labor laws & health insurance.",
                  "Employee satisfaction >75% retention rate.",
                ],
                example:
                  "Hotel chain with accredited training & wellness programs.",
              },
              {
                title: "Innovation & Technology Adoption",
                details: [
                  "AI chatbots, mobile booking systems, BMS tools.",
                  "Partnerships with tech hubs like iHub or Nailab.",
                  "Recognition in Kenya Tech Awards.",
                ],
                example:
                  "Logistics company using real-time GPS tracking & blockchain.",
              },
              {
                title: "Compliance & Legal Standing",
                details: [
                  "Valid sector-specific licenses (CBK, CMA, PPB, etc.).",
                  "KRA clearance certificate.",
                  "No unresolved legal disputes.",
                ],
                example:
                  "Microfinance institution licensed by the Central Bank of Kenya.",
              },
              {
                title: "Social Impact & Community Engagement",
                details: [
                  "80%+ Kenyan staff hiring.",
                  "CSR initiatives (youth training, clean-ups).",
                  "Support for marginalized groups.",
                ],
                example:
                  "Telecom company running digital literacy programs in rural areas.",
              },
              {
                title: "Sustainability & Environmental Responsibility",
                details: [
                  "Green certifications (Green Key, carbon offsets).",
                  "30%+ paperless operations.",
                  "Use of renewable energy (e.g., solar).",
                ],
                example:
                  "Conference center using solar energy & biodegradable materials.",
              },
              {
                title: "Continuous Improvement",
                details: [
                  "Seal re-evaluation every 2 years.",
                  "Feedback-driven improvements.",
                ],
                example:
                  "SaaS company releasing bi-monthly updates based on user surveys.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturing Industry Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Brands in the Manufacturing Industry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Product Quality & Safety",
                details: [
                  "KEBS or international certification compliance.",
                  "Lab testing reports for durability & safety.",
                  "Regular factory audits for consistency.",
                ],
                example:
                  "Maize flour manufacturer meeting KEBS hygiene & packaging standards.",
              },
              {
                title: "Market Reputation & Consumer Trust",
                details: [
                  "Market surveys showing 80%+ approval.",
                  "Evidence of repeat purchases & growth.",
                  "Positive third-party reviews with low complaints.",
                ],
                example:
                  "Kenyan paint brand with 4.5-star average on e-commerce platforms.",
              },
              {
                title: "Ethical & Sustainable Practices",
                details: [
                  "Compliance with NEMA regulations.",
                  "Fair Trade, ISO 26000, or similar certifications.",
                  "Ethical labor practices.",
                ],
                example:
                  "Coffee producer using solar energy & paying farmers premium prices.",
              },
              {
                title: "Innovation & Competitiveness",
                details: [
                  "Patents, R&D, or KIRDI collaborations.",
                  "Product differentiation (eco-packaging, local sourcing).",
                ],
                example:
                  "Solar lamp maker using recycled materials & IoT technology.",
              },
              {
                title: "Compliance & Legal Standing",
                details: [
                  "Valid business licenses & KRA compliance.",
                  "No unresolved legal disputes.",
                ],
                example:
                  "Cosmetics brand licensed by the Pharmacy & Poisons Board.",
              },
              {
                title: "Local Impact & Economic Contribution",
                details: [
                  "70%+ locally sourced raw materials.",
                  "Significant job creation.",
                  "CSR contributions (scholarships, water projects).",
                ],
                example:
                  "Dairy company sourcing from 500+ smallholder farmers.",
              },
              {
                title: "Continuous Improvement",
                details: [
                  "Annual re-audits for seal renewal.",
                  "Process upgrades & staff training.",
                ],
                example:
                  "Furniture manufacturer adopting CNC machines to reduce waste.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
