import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Church Online — Anchor Church",
  description: "Watch Anchor Church live or on demand. Join our online community from anywhere in the world.",
};

export default function ChurchOnline() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Join From Anywhere</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            CHURCH ONLINE
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Can&apos;t be there in person? No problem. Anchor Church is just a click away — live every Sunday and on demand all week.
          </p>
        </div>
      </section>

      {/* YouTube Embed */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Watch Live & On Demand</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight mb-4">
              YOUTUBE CHANNEL
            </h2>
            <p className="text-[#1c2b3a]/65 text-base max-w-xl mx-auto">
              We go live every Sunday at 10:30am EST. Past services are available to watch at any time on our YouTube channel.
            </p>
          </div>

          {/* YouTube Channel Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video w-full">
            <iframe
              title="Anchor Church YouTube Channel"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed?listType=user_uploads&list=anchorchurchdc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1c2b3a] text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#243345] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Open YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Listen to Sermons */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Audio Messages</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-5 tracking-tight">
            PREFER TO LISTEN?
          </h2>
          <p className="text-[#1c2b3a]/65 text-base mb-10 leading-relaxed">
            Our full sermon archive is available on SoundCloud — perfect for listening on the go.
          </p>
          <a
            href="https://soundcloud.com/anchorchurchdc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1c2b3a] text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#243345] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.56 8.87V17h8.76.01c1.19 0 2.17-.96 2.17-2.15 0-1.16-.93-2.11-2.1-2.14-.03 0-.07 0-.1.01.01-.11.01-.22.01-.33 0-2.48-2.02-4.5-4.5-4.5-.64 0-1.25.13-1.8.36-.28-2.18-2.13-3.87-4.38-3.87-2.45 0-4.44 1.98-4.44 4.43 0 .08 0 .16.01.24C2.18 9.27.5 11.11.5 13.35c0 2.24 1.81 4.05 4.05 4.05h6.47V8.87z" />
            </svg>
            Listen on SoundCloud
          </a>
        </div>
      </section>

      {/* In-Person CTA */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            JOIN US IN PERSON
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            Online is great, but there&apos;s nothing quite like being together. We&apos;d love to see you in Oakton on Sunday morning.
          </p>
          <Link
            href="/new-here"
            className="inline-block bg-white text-[#1c2b3a] font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
