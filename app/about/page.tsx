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
            We are a Spirit-Filled Word of Faith Church that believes the Love of God is one of the greatest gifts believers have been given in Jesus Christ. We believe Gods miracle working power is available and active today.  
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
                title: "The Scriptures",
                body: "The Bible is the inspired Word of God, the product of holy men of old who spoke and wrote as they were moved by the Holy Spirit. The New Covenant, as recorded in the New Testament, we accept as our infallible guide in matters pertaining to conduct and doctrine (2 Tim. 3:16; 1 Thess. 2:13; 2 Peter 1:21).",
              },
              {
                title: "The Godhead",
                body: "Our God is One, but manifested in three Persons—the Father, the Son, and the Holy Spirit, being coequal (Deut. 6:4; Phil. 2:6). God the Father is greater than all; the Sender of the Word (Logos) and the Begetter (John 14:28; John 16:28; John 1:14). The Son is the Word flesh-covered, the One Begotten, and has existed with the Father from the beginning (John 1:1; John 1:18; John 1:14). The Holy Spirit proceeds forth from both the Father and the Son and is eternal (John 14:16; John 15:26).",
              },
              {
                title: "Man, his fall and redemption",
                body: "Man is a created being, made in the likeness and image of God, but through Adam’s transgression and fall, sin came into the world. The Bible says “…all have sinned, and come short of the glory of God,” and “…There is none righteous, no, not one” (Rom. 3:10; 3:23). Jesus Christ, the Son of God, was manifested to undo the works of the devil and gave His life and shed His blood to redeem and restore man back to God (Rom. 5:14; 1 John 3:8). Salvation is the gift of God to man, separate from works and the Law, and is made operative by grace through faith in Jesus Christ, producing works acceptable to God (Eph. 2:8–10).",
              },
              {
                title: "Eternal Life and The New Birth",
                body: "Man’s first step toward salvation is godly sorrow that worketh repentance. The New Birth is necessary to all men, and when experienced, produces eternal life (2 Cor. 7:10; John 3:3–5; 1 John 5:12).",
              },
              {
                title: "Water Baptism",
                body: "Baptism in water is by immersion, is a direct commandment of our Lord, and is for believers only. The ordinance is a symbol of the Christian’s identification with Christ in His death, burial, and resurrection (Matt. 28:19; Rom. 6:4; Col. 2:12; Acts 8:36–39). The following recommendation regarding the water baptismal formula is adopted; to wit: “On the confession of your faith in the Lord Jesus Christ, the Son of God, and by His authority, I baptize you in the Name of the Father, and of the Son, and of the Holy Ghost. Amen.”",
              },
              {
                title: "Baptism in the Holy Ghost",
                body: "The Baptism in the Holy Ghost and fire is a gift from God as promised by the Lord Jesus Christ to all believers in this dispensation and is received subsequent to the new birth. This experience is accompanied by the initial evidence of speaking in other tongues as the Holy Spirit Himself gives utterance (Matt. 3:11; John 14:16,17; Acts 1:8; Acts 2:38,39; Acts 19:1–7; Acts 2:1–4).",
              },
              {
                title: "Sanctification",
                body: "The Bible teaches that without holiness no man can see the Lord. We believe in the Doctrine of Sanctification as a definite, yet progressive work of grace, commencing at the time of regeneration and continuing until the consummation of salvation at Christ’s return (Heb. 12:14; 1 Thess. 5:23; 2 Peter 3:18; 2 Cor. 3:18; Phil. 3:12–14; 1 Cor. 1:30).",
              },
              {
                title: "Divine Healing",
                body: "Healing is for the physical ills of the human body and is wrought by the power of God through the prayer of faith, and by the laying on of hands. It is provided for in the atonement of Christ, and is the privilege of every member of the Church today (James 5:14,15; Mark 16:18; Isa. 53:4,5; Matt. 8:17; 1 Peter 2:24).",
              },
              {
                title: "Ressurection of the just and the return of our Lord",
                body: "The angels said to Jesus’ disciples, “…This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.” His coming is imminent. When He comes, “…The dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air…” (Acts 1:11; 1 Thess. 4:16,17). Following the Tribulation, He shall return to earth as King of kings, and Lord of lords, and together with His saints, who shall be kings and priests, He shall reign a thousand years (Rev. 5:10; 20:6).",
              },
              {
                title: "Hell and eternal retribution",
                body: "The one who physically dies in his sins without accepting Christ is hopelessly and eternally lost in the lake of fire and, therefore, has no further opportunity of hearing the Gospel or repenting. The lake of fire is literal. The terms “eternal” and “everlasting,” used in describing the duration of the punishment of the damned in the lake of fire, carry the same thought and meaning of endless existence as used in denoting the duration of joy and ecstasy of saints in the Presence of God (Heb. 9:27; Rev. 19:20).",
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
            We are currently located at Oakton Elementary School (3000 Chain Bridge Rd, Oakton, VA 22124)
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
