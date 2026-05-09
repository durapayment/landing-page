export const Footer = () => {
  const linkClass =
    "text-sm text-gray-700 hover:text-black cursor-pointer transition";

  return (
    <footer className="w-full bg-white text-black pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* 1st DIV */}
          <div>
            <h3 className="font-semibold mb-4">Why Durapayment</h3>
            <ul className="space-y-2">
              <li className={linkClass}>Why Choose Paystack</li>
              <li className={linkClass}>Success rates</li>
              <li className={linkClass}>For Entrepreneurs</li>
              <li className={linkClass}>For Corporates</li>
              <li className={linkClass}>For International Companies</li>
              <li className={linkClass}>For Startups</li>
              <li className={linkClass}>For Fintechs</li>
              <li className={linkClass}>For Agencies</li>
              <li className={linkClass}>For Schools</li>
              <li className={linkClass}>For Betting</li>
            </ul>
          </div>

          {/* 2nd DIV */}
          <div>
            <h3 className="font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2">
              <li className={linkClass}>Nigeria</li>
              <li className={linkClass}>Ghana</li>
              <li className={linkClass}>South Africa</li>
              <li className={linkClass}>Kenya</li>
              <li className={linkClass}>Côte d'Ivoire</li>
              <li className={linkClass}>Customers</li>
              <li className={linkClass}>Testimonials</li>
              <li className={linkClass}>Learn</li>
              <li className={linkClass}>Blog</li>
              <li className={linkClass}>Guides</li>
              <li className={linkClass}>Video Tutorials</li>
              <li className={linkClass}>Decode Fintech</li>
              <li className={linkClass}>Commerce</li>
              <li className={linkClass}>Terminal</li>
            </ul>
          </div>

          {/* 3rd DIV */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li className={linkClass}>Overview</li>
              <li className={linkClass}>Documentation</li>
              <li className={linkClass}>Integrations</li>
              <li className={linkClass}>Status Page</li>
              <li className={linkClass}>Community</li>
              <li className={linkClass}>Service Partner Directory</li>
              <li className={linkClass}>Nigeria Logos</li>
              <li className={linkClass}>Support</li>
              <li className={linkClass}>Help Desk</li>
              <li className={linkClass}>Contact Us</li>
              <li className={linkClass}>Why was I debited?</li>
              <li className={linkClass}>Register your business</li>
            </ul>
          </div>

          {/* 4th DIV */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li className={linkClass}>Company</li>
              <li className={linkClass}>Changelog</li>
              <li className={linkClass}>Subscribe</li>
              <li className={linkClass}>Compliance</li>
              <li className={linkClass}>Careers</li>
              <li className={linkClass}>Media Kit</li>
              <li className={linkClass}>Privacy & Terms</li>
              <li className={linkClass}>Cookies Settings</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Durapay. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-600">
            <span className="hover:text-black cursor-pointer">Twitter</span>
            <span className="hover:text-black cursor-pointer">LinkedIn</span>
            <span className="hover:text-black cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
