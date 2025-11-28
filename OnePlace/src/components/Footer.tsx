function Footer() {
  return (
    <footer className="bg-gray-100 px-16 py-12 font-sans">
      
      <div className="bg-gray-400 p-10 rounded-2xl flex flex-wrap justify-between items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-black">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
        </div>

        <div className="flex flex-col gap-3 mt-6 md:mt-0">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <img src="/img/email.png" alt="email icon" className="w-8 h-8 mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 text-sm outline-none border-none"
            />
          </div>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-between mt-12 text-gray-700">
        <div className="max-w-sm">
          <p>
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex gap-4 mt-4">
            <img src="/img/Twitter.jpg" alt="Twitter" className="w-6 h-6" />
            <img src="/img/Facebook.jpg" alt="Facebook" className="w-6 h-6" />
            <img src="/img/Instagram.jpg" alt="Instagram" className="w-6 h-6" />
            <img src="/img/Github.jpg" alt="GitHub" className="w-6 h-6" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">HELP</h4>
          <ul className="space-y-1">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">FAQ</h4>
          <ul className="space-y-1">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">RESOURCES</h4>
          <ul className="space-y-1">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      
      <hr className="my-10 border-gray-300" />

      
      <div className="flex flex-wrap justify-between items-center text-gray-500">
        <p>OnePlace.co © 2025, All Rights Reserved</p>
        <div className="flex gap-3 mt-3 md:mt-0">
          <img src="/img/Visa.jpg" alt="Visa" className="w-20 h-15" />
          <img src="/img/Mastercard.jpg" alt="Mastercard" className="w-20 h-15" />
          <img src="/img/Paypal.jpg" alt="Paypal" className="w-20 h-15" />
          <img src="/img/ApplePay.png" alt="Apple Pay" className="w-20 h-15" />
          <img src="/img/GooglePay.png" alt="Google Pay" className="w-20 h-15" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
