import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect — Anchor Church",
  description: "Connect with Anchor Church in Oakton, Virginia. Find community, get involved, and reach out to us.",
};

export default function Connect() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Community</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            CONNECT
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Life is better together. Here are some of the ways you can get connected at Anchor Church.
          </p>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Get Involved</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">WAYS TO CONNECT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Small Groups",
                body: "Grow deeper in faith and friendship by joining one of our small groups. We gather in homes throughout the week for study, prayer, and life together.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
                title: "Serve",
                body: "Use your gifts to serve others. From greeting and worship to kids ministry and outreach — there&apos;s a place for you on our team.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Prayer",
                body: "We believe in the power of prayer. Join us for our weekly prayer nights or submit a prayer request — our team would love to stand with you.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f4f6f9] rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                <div className="text-[#1c2b3a]">{item.icon}</div>
                <h3 className="font-bold text-[#1c2b3a] text-base tracking-wide">{item.title}</h3>
                <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Reach Out */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Say Hello</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            REACH OUT TO US
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            Have questions, need prayer, or just want to introduce yourself? We&apos;d love to hear from you.
            Send us a message on Facebook or find us on YouTube.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/AnchorChurchDC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1c2b3a] font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Message on Facebook
            </a>
            <a
              href="https://www.youtube.com/@anchorchurchdc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Find Us on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
