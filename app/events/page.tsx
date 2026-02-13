import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events — Anchor Church",
  description: "Upcoming events at Anchor Church in Oakton, Virginia.",
};

const upcomingEvents = [
  {
    date: "Every Sunday",
    month: "",
    day: "",
    title: "Sunday Worship Service",
    time: "10:30am EST",
    location: "Oakton, Virginia",
    description: "Join us for worship, prayer, and a message from God's Word. All are welcome.",
  },
  {
    date: "Recurring",
    month: "",
    day: "",
    title: "Prayer Night EXAMPLE",
    time: "Wednesday Evenings",
    location: "Oakton, Virginia",
    description: "A dedicated evening of corporate prayer and worship. Come expectant.",
  },
  {
    date: "Monthly",
    month: "",
    day: "",
    title: "Community Outreach EXAMPLE",
    time: "Check with us for dates",
    location: "Oakton & Surrounding Areas",
    description: "Serving our local community through various outreach efforts. Sign up to get involved.",
  },
];

export default function Events() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">What&apos;s Happening</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            EVENTS
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Stay up to date with everything happening at Anchor Church. There&apos;s always a place for you here.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Calendar</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">
              UPCOMING EVENTS
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-[#f4f6f9] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="bg-[#1c2b3a] text-white rounded-xl px-6 py-4 text-center shrink-0 min-w-[90px]">
                  <p className="text-xs tracking-widest uppercase text-white/60">{event.date}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-[#1c2b3a] text-xl tracking-tight">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-[#1c2b3a]/55 tracking-wide">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            STAY IN THE LOOP
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            Follow us on Facebook and YouTube to hear about new events, announcements, and more from Anchor Church.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/AnchorChurchDC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1c2b3a] font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Follow on Facebook
            </a>
            <Link
              href="/connect"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
