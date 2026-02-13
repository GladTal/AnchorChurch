import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons — Anchor Church",
  description: "Listen to sermons from Anchor Church in Oakton, Virginia. Full archive available on SoundCloud.",
};

export default function Sermons() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">The Word</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            SERMONS
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Catch up on past messages or dive into a current series. Every message is rooted in Scripture and meant to encourage your faith.
          </p>
        </div>
      </section>

      {/* Embedded SoundCloud Player */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Full Archive</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight mb-4">
              LISTEN ON SOUNDCLOUD
            </h2>
            <p className="text-[#1c2b3a]/65 text-base max-w-xl mx-auto">
              Our complete sermon library is hosted on SoundCloud. Use the player below to browse and listen, or visit our page directly.
            </p>
          </div>

          {/* SoundCloud Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Anchor Church Sermons on SoundCloud"
              width="100%"
              height="450"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/anchorchurchdc&color=%231c2b3a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://soundcloud.com/anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1c2b3a] text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#243345] transition-colors"
            >
              Open Full Archive
            </a>
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Also Available</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-6 tracking-tight">
            WATCH ON YOUTUBE
          </h2>
          <p className="text-[#1c2b3a]/65 text-base mb-10 leading-relaxed">
            Prefer video? Our services and messages are also available on our YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@anchorchurchdc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1c2b3a] text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#243345] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit YouTube Channel
          </a>
        </div>
      </section>
    </div>
  );
}
