import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.png"
                alt="Asgard Fitness"
                className="h-12 w-12"
              />
              <h2 className="font-zentry text-2xl font-bold text-white">
                ASGARD FITNESS
              </h2>
            </div>
            <p className="mt-4 text-gray-400">
              Transform your life through fitness. Our state-of-the-art
              facilities and expert trainers are here to help you achieve your
              fitness goals, whether you're just starting out or pushing for
              peak performance.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/asgardfitness"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-zentry text-lg font-bold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Class Schedule",
                "Membership Plans",
                "Personal Training",
                "Nutrition Coaching",
                "Success Stories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-red-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-zentry text-lg font-bold text-white">
              Hours & Location
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Mon-Fri: 5:00 AM - 11:00 PM</li>
              <li>Sat-Sun: 6:00 AM - 9:00 PM</li>
              <li className="mt-4">
                Studlands Park Industrial Estate, Studlands Park Ave, Newmarket,
              </li>
              <li>Suffolk, CBB 7AUSuffolk</li>
              <li className="mt-4">
                <a
                  href="tel:+1234567890"
                  className="text-red-500 hover:text-red-400"
                >
                  (+44) 1638664256
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center md:px-4  gap-4 text-sm text-gray-500 md:flex-row md:justify-between">
          <p>© {year} Asgard Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a key={item} href="#" className="hover:text-red-500">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
