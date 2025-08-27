export default function AboutUsPage() {
  return (
    <div className="p-4 bg-white text-gray-900">
      <header className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Starbrands Awards Ltd is Kenya’s premier certification and awards organization well known
          for certifying excellence, recognizing innovation, and bridging Kenyan brands to global
          opportunities.
        </p>
      </header>

      <main className="space-y-24">
        {/* Commitment Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-800 mb-4">
              Our trademark “Starbrands” was established to elevate Kenya’s commercial ecosystem,
              empower businesses across industries—from manufacturing sector, real estate,
              agribusiness, to the service industry —through rigorous third-party validation,
              strategic visibility, and investor connectivity.
            </p>
            <p className="text-gray-800">
              At our core, we champion quality, sustainability, and ethical practices, aligning with
              Kenya’s Vision 2030 and global ESG standards. Our Starbrands Seal of Excellence serves
              as a trusted mark of excellence and credibility, awarded only to brands that meet
              stringent benchmarks for product integrity, customer satisfaction, and environmental
              stewardship.
            </p>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Spotlighting Industry Pioneers
              </h3>
              <p className="text-gray-700">
                Complementing this, our annual Starbrands Excellence Awards spotlight industry
                pioneers, from eco-conscious brands in the manufacturing sector to tech-driven
                service industry providers, fostering healthy competition and inspiring sector-wide
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-2">Mission</h3>
              <p className="text-gray-800">
                To position Kenya’s brands as globally competitive leaders by certifying excellence,
                fostering trust, and driving sustainable growth.
              </p>
            </div>
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-2">Vision</h3>
              <p className="text-gray-800">
                To be Africa’s most trusted benchmark for excellence in brands that offer quality,
                innovative, ethical and sustainable business practices.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", text: "Uncompromising adherence to transparent, unbiased evaluation." },
              { title: "Innovation", text: "Championing forward-thinking solutions across industries." },
              { title: "Sustainability", text: "Promoting eco-friendly and socially responsible practices." },
              { title: "Inclusivity", text: "Empowering Dominant, Emerging and Startup brands across MSMEs and large enterprises alike." },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-300"
                data-aos="flip-up"
                data-aos-delay={(i + 1) * 100}
              >
                <h3 className="text-xl font-semibold text-red-600 mb-2">{value.title}</h3>
                <p className="text-gray-800">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="text-center" data-aos="zoom-in">
          <p className="text-2xl italic text-gray-700">
            Starbrands – “Elevating Excellence, Building Trust, Connecting Markets”
          </p>
        </section>
      </main>
    </div>
  );
}
