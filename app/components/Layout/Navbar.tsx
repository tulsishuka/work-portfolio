import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent backdrop-blur-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 7L12 12L4 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      <Link href="/">  <span className="text-white font-bold text-xl tracking-tight">Strakzat</span></Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/work" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Work</Link>
        <Link href="/about" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">About</Link>
        <Link href="/pricing" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Pricing</Link>
        <Link href="/contact" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Contact Us</Link>
      </div>

      {/* Action Button */}
      <div>
        <Link href="/contact">
          <button className="bg-white text-black px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-all active:scale-95">
            Get in touch
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
