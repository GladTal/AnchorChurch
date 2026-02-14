import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Here? — Anchor Church",
  description: "Visiting Anchor Church for the first time? Here's everything you need to know before you come.",
};

const whatToExpect = [
  {
    step: "01",
    title: "Warm Welcome",
    body: "From the moment you arrive, someone will be there to greet you, answer your questions, and help you feel at home.",
  },
  {
    step: "02",
    title: "Worship Together",
    body: "We start each service with praise and worship — uplifting music that sets the tone for an encounter with God.",
  },
  {
    step: "03",
    title: "The Message",
    body: "Our pastor delivers a practical, Bible-based message designed to meet you right where you are in life.",
  },
  {
    step: "04",
    title: "Community",
    body: "After the service, stay and connect. We love meeting new people and building lasting friendships.",
  },
];

export default function NewHere() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">First Time?</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            YOU&apos;RE WELCOME HERE
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            We&apos;re so glad you&apos;re considering joining us. Here&apos;s everything you need to know about your first visit to Anchor Church.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Plan Your Visit</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">WHEN & WHERE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1c2b3a] rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="font-bold text-white text-sm tracking-widest uppercase">Service Times</h3>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white/50 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <p className="text-white font-semibold">Sunday Morning</p>
                  <p className="text-white/60 text-sm">10:30am EST</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/55 text-sm leading-relaxed">
                  Services typically last about 60–75 minutes. Dress code is casual — come as you are.
                </p>
              </div>
            </div>
            <div className="bg-[#f4f6f9] rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="font-bold text-[#1c2b3a] text-sm tracking-widest uppercase">Location</h3>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#1c2b3a]/50 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className="text-[#1c2b3a] font-semibold">Oakton Elementary School</p>
                  <p className="text-[#1c2b3a]/60 text-sm">3000 Chain Bridge Rd, Oakton, VA 22124</p>
                </div>
              </div>
              <div className="border-t border-[#1c2b3a]/10 pt-4">
                <p className="text-[#1c2b3a]/55 text-sm leading-relaxed">
                  Can&apos;t make it in person? Join us online — we livestream every Sunday service.
                </p>
                <Link href="/church-online" className="text-[#1c2b3a] font-semibold text-xs tracking-wide underline mt-2 inline-block">
                  Watch Online &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Your First Sunday</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">WHAT TO EXPECT</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatToExpect.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 flex flex-col gap-3">
                <span className="text-[#1c2b3a]/20 font-extrabold text-4xl leading-none">{item.step}</span>
                <h3 className="font-bold text-[#1c2b3a] text-base">{item.title}</h3>
                <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Families Welcome</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            BRINGING KIDS?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed">
            We love kids! We have programming available for children during the service.
            Our team is dedicated to making church a safe and fun experience for your little ones.
            Reach out in advance and we&apos;d be happy to walk you through what to expect.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-white text-[#1c2b3a] font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
