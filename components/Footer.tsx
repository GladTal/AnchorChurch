import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: "New Here?", href: '/new-here' },
  { label: 'Connect', href: '/connect' },
  { label: 'Giving', href: '/giving' },
  { label: 'Church Online', href: '/church-online' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c2b3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/anchorChurchLogo.jpg"
                alt="Anchor Church"
                width={38}
                height={38}
                className="rounded-md"
              />
              <span className="font-extrabold text-base tracking-widest uppercase">Anchor Church</span>
            </Link>
            <p className="text-white/55 text-sm italic leading-relaxed">
              &ldquo;Have faith in God.&rdquo; &mdash; Jesus
            </p>
            <p className="text-white/55 text-sm">Oakton, Virginia</p>
            <p className="text-white/55 text-sm">Sundays at 10:30am EST</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white/90 mb-5 text-xs tracking-widest uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white/90 mb-5 text-xs tracking-widest uppercase">Follow Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.facebook.com/AnchorChurchDC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@anchorchurchdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://soundcloud.com/anchorchurchdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/55 hover:text-white text-sm transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.56 8.87V17h8.76.01c1.19 0 2.17-.96 2.17-2.15 0-1.16-.93-2.11-2.1-2.14-.03 0-.07 0-.1.01.01-.11.01-.22.01-.33 0-2.48-2.02-4.5-4.5-4.5-.64 0-1.25.13-1.8.36-.28-2.18-2.13-3.87-4.38-3.87-2.45 0-4.44 1.98-4.44 4.43 0 .08 0 .16.01.24C2.18 9.27.5 11.11.5 13.35c0 2.24 1.81 4.05 4.05 4.05h6.47V8.87z"/>
                </svg>
                SoundCloud
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/35 text-xs">
          &copy; {new Date().getFullYear()} Anchor Church &mdash; Oakton, Virginia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
