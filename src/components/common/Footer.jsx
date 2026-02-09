// src/components/common/Footer.jsx
// Purpose: Footer component for all pages

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 px-6 mt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">💎</span>
              </div>
              <span className="text-xl font-bold text-white">Investify</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering your financial future with intelligent investment solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Investify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;