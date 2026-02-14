import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-[#1c2b3a] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/anchorChurchLogo.jpg"
            alt="Anchor Church"
            width={110}
            height={110}
            className="rounded-2xl mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none mb-6">
            ANCHOR CHURCH
          </h1>
          <p className="text-lg md:text-xl text-white/60 italic mb-3">
            &ldquo;Have faith in God.&rdquo; &mdash; Jesus
          </p>
          <p className="text-sm md:text-base text-white/45 mb-12 tracking-widest uppercase">
            Oakton, Virginia &nbsp;&middot;&nbsp; Sundays at 10:30am EST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-here"
              className="bg-white text-[#1c2b3a] font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              I&apos;m New Here
            </Link>
            <Link
              href="/church-online"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Watch Online
            </Link>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] text-center mb-14 tracking-tight">
            JOIN US THIS SUNDAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f4f6f9] rounded-2xl p-8 flex flex-col items-center gap-3 text-center">
              <svg className="w-10 h-10 text-[#1c2b3a] mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h3 className="font-bold text-[#1c2b3a] text-sm tracking-widest uppercase">Location</h3>
              <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">3000 Chain Bridge Rd, Oakton, VA 22124</p>
              <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">Inside Oakton Elementary School</p>
            </div>
            <div className="bg-[#1c2b3a] rounded-2xl p-8 flex flex-col items-center gap-3 text-center">
              <svg className="w-10 h-10 text-white mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-bold text-white text-sm tracking-widest uppercase">Service Time</h3>
              <p className="text-white/65 text-sm leading-relaxed">Sundays at 10:30am EST</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-2xl p-8 flex flex-col items-center gap-3 text-center">
              <svg className="w-10 h-10 text-[#1c2b3a] mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
              </svg>
              <h3 className="font-bold text-[#1c2b3a] text-sm tracking-widest uppercase">Watch Online</h3>
              <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">Join from anywhere in the world</p>
              <Link href="/church-online" className="text-[#1c2b3a] font-semibold text-xs tracking-wide underline mt-1">
                Watch Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            LATEST SERMONS
          </h2>
          <p className="text-white/55 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Missed a Sunday or want to revisit a message? Our full sermon archive is available on SoundCloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sermons"
              className="bg-white text-[#1c2b3a] font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Browse Sermons
            </Link>
            <a
              href="https://soundcloud.com/anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Listen on SoundCloud
            </a>
          </div>
        </div>
      </section>

      {/* New Here CTA */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-6 tracking-tight">
            NEW TO ANCHOR CHURCH?
          </h2>
          <p className="text-[#1c2b3a]/65 text-base md:text-lg mb-10 leading-relaxed">
            We&apos;d love to meet you. Whether you&apos;re checking us out for the first time or looking for a
            church home, you&apos;re welcome here. Learn what to expect when you visit.
          </p>
          <Link
            href="/new-here"
            className="inline-block bg-[#1c2b3a] text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#243345] transition-colors"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* Social Connect */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-14 tracking-tight">
            STAY CONNECTED
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://www.facebook.com/AnchorChurchDC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow"
            >
              <svg className="w-10 h-10 text-[#1c2b3a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-bold text-[#1c2b3a] text-sm tracking-wide">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow"
            >
              <svg className="w-10 h-10 text-[#1c2b3a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="font-bold text-[#1c2b3a] text-sm tracking-wide">YouTube</span>
            </a>
            <a
              href="https://soundcloud.com/anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow"
            >
              <svg className="w-10 h-10 text-[#1c2b3a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.56 8.87V17h8.76.01c1.19 0 2.17-.96 2.17-2.15 0-1.16-.93-2.11-2.1-2.14-.03 0-.07 0-.1.01.01-.11.01-.22.01-.33 0-2.48-2.02-4.5-4.5-4.5-.64 0-1.25.13-1.8.36-.28-2.18-2.13-3.87-4.38-3.87-2.45 0-4.44 1.98-4.44 4.43 0 .08 0 .16.01.24C2.18 9.27.5 11.11.5 13.35c0 2.24 1.81 4.05 4.05 4.05h6.47V8.87z" />
              </svg>
              <span className="font-bold text-[#1c2b3a] text-sm tracking-wide">SoundCloud</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
