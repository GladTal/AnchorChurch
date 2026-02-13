import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Anchor Church",
  description: "Learn about Anchor Church in Oakton, Virginia — who we are, what we believe, and our mission.",
};

export default function About() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-[#1c2b3a] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            ABOUT US
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Anchor Church is a community of believers rooted in faith, love, and the Word of God,
            located in Oakton, Virginia.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] mb-6 tracking-tight leading-tight">
                ANCHORED IN FAITH,<br />ROOTED IN LOVE
              </h2>
              <p className="text-[#1c2b3a]/65 text-base leading-relaxed mb-4">
                At Anchor Church, we believe that Jesus Christ is the anchor for every storm of life.
                Our mission is to help people know God, find community, and live on purpose.
              </p>
              <p className="text-[#1c2b3a]/65 text-base leading-relaxed">
                We gather every Sunday to worship, study God&apos;s Word, and encourage one another —
                and we scatter throughout the week to love and serve our neighbors in Oakton and beyond.
              </p>
            </div>
            <div className="bg-[#1c2b3a] rounded-2xl p-10 text-center">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Our Verse</p>
              <blockquote className="text-white text-2xl md:text-3xl font-bold italic leading-snug mb-4">
                &ldquo;Have faith in God.&rdquo;
              </blockquote>
              <p className="text-white/55 text-sm">&mdash; Jesus (Mark 11:22)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-[#f4f6f9] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1c2b3a]/50 text-xs tracking-widest uppercase mb-3">Core Beliefs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c2b3a] tracking-tight">WHAT WE BELIEVE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "The Bible",
                body: "We believe the Bible is the inspired, authoritative Word of God and our guide for all of life and faith.",
              },
              {
                title: "Jesus Christ",
                body: "We believe Jesus is the Son of God, who died for our sins, rose from the dead, and is the only way to salvation.",
              },
              {
                title: "The Holy Spirit",
                body: "We believe the Holy Spirit dwells in every believer, empowering us to live godly lives and serve others.",
              },
              {
                title: "The Church",
                body: "We believe the local church is essential — a community called to worship, grow, and love one another and the world.",
              },
              {
                title: "Grace & Faith",
                body: "We believe we are saved by grace alone, through faith alone, in Christ alone.",
              },
              {
                title: "Prayer",
                body: "We believe prayer is our direct connection to God and a vital part of our personal and corporate life.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7">
                <h3 className="font-bold text-[#1c2b3a] text-base mb-3">{item.title}</h3>
                <p className="text-[#1c2b3a]/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-[#1c2b3a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Come As You Are</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            JOIN US THIS SUNDAY
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-4 leading-relaxed">
            We meet every Sunday at <strong className="text-white">10:30am EST</strong> in Oakton, Virginia.
            Whoever you are, wherever you&apos;re from &mdash; you&apos;re welcome here.
          </p>
          <Link
            href="/new-here"
            className="inline-block bg-white text-[#1c2b3a] font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/90 transition-colors mt-4"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
