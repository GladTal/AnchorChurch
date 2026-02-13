import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giving — Anchor Church",
  description: "Support the mission of Anchor Church in Oakton, Virginia through generous giving.",
};

export default function Giving() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Generosity</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            GIVING
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Your generosity fuels the mission of Anchor Church and enables us to serve our community and spread the Gospel.
          </p>
        </div>
      </section>

      {/* Why We Give */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">The Heart Behind It</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-6 tracking-tight leading-tight">
                WHY WE GIVE
              </h2>
              <p className="text-[#1c2b3a]/65 text-base leading-relaxed mb-4">
                Giving is an act of worship and trust in God. When we give, we participate in something bigger than ourselves — the work of building God&apos;s Kingdom right here in Oakton and beyond.
              </p>
              <p className="text-[#1c2b3a]/65 text-base leading-relaxed">
                Every gift, large or small, makes a difference. Your generosity helps us reach people, serve families, and create a community where everyone belongs.
              </p>
            </div>
            <div className="bg-[#1c2b3a] rounded-2xl p-10 text-center">
              <blockquote className="text-white text-xl md:text-2xl font-bold italic leading-snug mb-4">
                &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </blockquote>
              <p className="text-white/55 text-sm">&mdash; 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Make a Difference</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">HOW TO GIVE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 flex flex-col gap-4">
              <div className="bg-[#1c2b3a] rounded-xl w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1c2b3a] text-base">Give Online</h3>
              <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">
                Give securely online — one time or recurring. Our online giving portal makes it simple and safe to support the church from anywhere.
              </p>
              <button className="mt-2 bg-[#1c2b3a] text-white font-bold px-6 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#243345] transition-colors w-fit">
                Give Online
              </button>
              <p className="text-[#1c2b3a]/40 text-xs italic">Online giving link coming soon. Contact us for current options.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col gap-4">
              <div className="bg-[#1c2b3a] rounded-xl w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1c2b3a] text-base">Give In Person</h3>
              <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">
                Bring your gift on Sunday morning. We receive tithes and offerings during our weekly service in Oakton, Virginia.
              </p>
              <div className="mt-2 border-t border-[#1c2b3a]/10 pt-4">
                <p className="text-[#1c2b3a]/55 text-xs leading-relaxed">
                  <strong className="text-[#1c2b3a]">Sundays at 10:30am EST</strong><br />
                  Oakton, Virginia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            QUESTIONS ABOUT GIVING?
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            We&apos;re happy to help. Reach out to us on Facebook and we&apos;ll get back to you.
          </p>
          <a
            href="https://www.facebook.com/AnchorChurchDC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1c2b3a] font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
