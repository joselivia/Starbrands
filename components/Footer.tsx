export default function FooterPage() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#seal" className="hover:text-white transition-colors">
              Seal Application
            </a>
            <a href="#awards" className="hover:text-white transition-colors">
              Awards Nomination
            </a>
            <a href="#investor" className="hover:text-white transition-colors">
              Investor Portal
            </a>
          </div>
          <div className="text-sm text-center md:text-right">
            &copy; 2025 Starbrands East Africa |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm bg-gray-800 py-4">
        <p className="text-lg text-gray-400">
          Powered by:{" "}
          <a
            href="https://portfolio-gilt-six-94.vercel.app/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Jomu_Digital
          </a>
        </p>
      </div>
    </div>
  );
}
