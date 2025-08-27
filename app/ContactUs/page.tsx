import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUsPage() {
    return (
        <div className="bg-white text-gray-900 p-6 md:p-12 mx-auto">

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
            <div data-aos="fade-left" data-aos-duration="1000" >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">General Inquiries</h3>
              <a href='mailto:info@starbrandseastafrica.com' className="text-gray-600 flex items-center hover:text-blue-600 gap-2"><MdEmail /> info@starbrandseastafrica.com</a>
              <a href="tel:+254728802222" className="text-gray-600 flex items-center hover:text-blue-600 gap-2 py-2"><FaPhoneAlt /> +254 728 802 222</a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Partnerships</h3>
              <a href='mailto:partnerships@starbrandseastafrica.com' className="text-gray-600 flex items-center hover:text-blue-600 gap-2"><MdEmail /> partnerships@starbrandseastafrica.com</a>
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
        </div>
    );
}