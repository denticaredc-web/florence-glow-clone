import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  Sparkles, Award, ShieldCheck, HeartHandshake, Star, ChevronDown,
  MapPin, Phone, Clock, Mail, Facebook, Instagram, ArrowRight, Quote,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";
import sHydra from "@/assets/service-hydra.jpg";
import sLaser from "@/assets/service-laser.jpg";
import sBotox from "@/assets/service-botox.jpg";
import sMicro from "@/assets/service-microneedling.jpg";
import sPrp from "@/assets/service-prp.jpg";
import sPeel from "@/assets/service-peel.jpg";
import sRhino from "@/assets/service-rhino.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florence Aesthetics by Dr Kinza Nasir | Premier Skin & Laser Clinic Rawalpindi" },
      { name: "description", content: "Luxury aesthetic & dermatology clinic in Rawalpindi. HydraFacial, Botox, Laser, PRP, Microneedling & more by FCPS Dermatologist Dr Kinza Nasir." },
      { property: "og:title", content: "Florence Aesthetics by Dr Kinza Nasir" },
      { property: "og:description", content: "Premier aesthetic clinic in Rawalpindi — advanced skin, laser & non-surgical treatments." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "HydraFacial", desc: "Deep cleanse, exfoliate, hydrate — instant radiance with zero downtime.", img: sHydra },
  { title: "Laser Treatments", desc: "Laser hair removal, resurfacing & pigmentation correction with advanced tech.", img: sLaser },
  { title: "Botox & Fillers", desc: "Smooth wrinkles and restore youthful volume with precision injectables.", img: sBotox },
  { title: "Microneedling", desc: "Stimulate collagen, refine texture, fade acne scars naturally.", img: sMicro },
  { title: "PRP Therapy", desc: "Platelet-rich plasma for skin rejuvenation and hair restoration.", img: sPrp },
  { title: "Chemical Peels", desc: "Reveal brighter, smoother skin with medical-grade peel formulations.", img: sPeel },
  { title: "Rhinoplasty", desc: "Non-surgical & surgical nose refinement — natural, beautiful results.", img: sRhino },
  { title: "Anti-Aging", desc: "Personalized programs combining injectables, lasers & medical skincare.", img: sHydra },
];

const reviews = [
  { name: "Hareem Fatima", text: "I had microneedling done by Dr. Kinza Nasir, and I am extremely satisfied. My skin texture improved and acne scars visibly reduced. Highly recommended!" },
  { name: "Hinza Shahzad", text: "Extremely satisfied with the HydraFacial. Dr. Kinza guided me so well and made the whole experience super comfortable. Laser treatment was on point, no side effects." },
  { name: "Kaneez Akhtar", text: "I had my Botox done by Dr. Kinza and had an incredible experience. My wrinkles are reduced and I'm feeling more confident. A true professional." },
  { name: "Jamshed Ali Afaq", text: "I had my rhinoplasty done by Dr. Kinza Nasir and the results are absolutely natural and beautiful. She made me feel confident throughout." },
  { name: "Aleena Iqbal", text: "I had PRP treatment done by Dr. Kinza Nasir. She explained everything clearly and made me feel comfortable. Highly recommended clinic." },
  { name: "Ifra Tariq", text: "Best place ever — 100% satisfied. Chemical peels, laser resurfacing and facials not only improved appearance but enhanced skin health." },
  { name: "Saad Malik", text: "Microneedling and PRP session with Dr. Kinza was an incredible experience. My skin is so much better. A professional dermatologist." },
  { name: "Laiba Yousaf", text: "Dr. Kinza Nasir is a very good dermatologist. I have seen a lot of difference after getting the treatment." },
];

const why = [
  { icon: Award, title: "FCPS Certified Dermatologist", desc: "Treatments by Dr Kinza Nasir — MBBS, FCPS." },
  { icon: ShieldCheck, title: "Advanced Technology", desc: "State-of-the-art equipment for safe, effective results." },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Tailored treatment plans for your unique skin." },
  { icon: Sparkles, title: "Luxurious Setting", desc: "A calming, premium clinic experience every visit." },
];

const faqs = [
  { q: "How do I book an appointment?", a: "Call us at 0309 8589191, message us on Instagram or Facebook, or use the contact form below. We typically confirm within the same day." },
  { q: "What are your clinic hours?", a: "We are open every day from 3:00 PM to 10:00 PM (Saturday through Friday)." },
  { q: "Are consultations required before treatment?", a: "Yes. Dr Kinza personally consults every client to design a safe, customized plan aligned with your goals and skin type." },
  { q: "Is there downtime after treatments?", a: "Most treatments such as HydraFacial and chemical peels have minimal to no downtime. Stronger lasers may require 1–3 days. Dr Kinza will advise based on your plan." },
  { q: "Do you treat both men and women?", a: "Absolutely. Our services are tailored for everyone seeking healthy, radiant skin." },
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  );
}

function Showcase() {
  return (
    <section className="relative bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Step Inside</p>
            <h2 className="text-4xl md:text-[5rem] font-semibold leading-[1.05] text-foreground">
              A serene escape for <br />
              <span className="font-script text-gradient text-shine cursor-default text-5xl md:text-[6.5rem] inline-block mt-2 text-shine cursor-default">
                radiant skin
              </span>
            </h2>
          </>
        }
      >
        <img
          src={hero}
          alt="Florence Aesthetics clinic interior"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
          loading="lazy"
        />
      </ContainerScroll>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <img
        src={hero}
        alt="Luxury aesthetic clinic interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      <div className="absolute -top-20 -right-20 size-96 rounded-full bg-primary/20 blur-3xl float-slow" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
            <Sparkles className="size-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Rawalpindi's Premier Skin Clinic</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Reveal your most <span className="font-script text-gradient text-shine cursor-default text-6xl sm:text-7xl lg:text-8xl">radiant</span> self
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Advanced dermatology, laser & aesthetic treatments by FCPS specialist <strong className="text-foreground">Dr Kinza Nasir</strong> — in a serene, luxurious setting designed to transform your skin and your confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="shine inline-flex items-center gap-2 gradient-luxe text-primary-foreground px-7 py-4 rounded-full font-semibold hover-glow">
              Book Your Consultation <ArrowRight className="size-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border-2 border-foreground/15 hover:border-primary hover:text-primary text-foreground px-7 py-4 rounded-full font-semibold transition-all hover:scale-105">
              Explore Treatments
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-primary text-primary" />)}
            </div>
            <p className="text-sm text-muted-foreground"><strong className="text-foreground">4.8</strong> · 24+ Google Reviews</p>
          </div>
        </div>

        <div className="hidden lg:block relative reveal" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-6 gradient-luxe opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-luxe img-zoom aspect-[4/5] max-w-md ml-auto">
            <img src={doctor} alt="Dr Kinza Nasir" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-luxe max-w-xs hover-lift">
            <p className="font-script text-primary text-2xl">Dr Kinza Nasir</p>
            <p className="text-sm text-muted-foreground">MBBS · FCPS · Dermatologist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 gradient-soft">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative img-zoom rounded-3xl overflow-hidden shadow-luxe aspect-square">
          <img src={hero} alt="Clinic interior" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">About the Clinic</p>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Where science meets <span className="font-script text-gradient text-shine cursor-default text-5xl lg:text-6xl">artistry</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Discover our premier aesthetic clinic, where advanced treatments and personalized care combine to enhance your natural beauty. Our expert team offers skincare, anti-aging solutions, and non-surgical enhancements in a luxurious and comfortable setting.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Experience transformative results with our state-of-the-art technology and tailored approach — your journey to radiant, youthful skin starts here with Dr Kinza Nasir.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "4.8★", l: "Rating" },
              { n: "500+", l: "Happy Clients" },
              { n: "10+", l: "Treatments" },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-2xl bg-card shadow-soft hover-lift">
                <p className="text-3xl font-serif text-gradient font-semibold">{s.n}</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">Treatments crafted for <span className="font-script text-gradient text-shine cursor-default">you</span></h2>
          <p className="mt-5 text-muted-foreground">A curated menu of clinically proven aesthetic and dermatology treatments.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover-lift">
              <div className="aspect-square img-zoom relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-grow">
                  Book Now <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 gradient-soft">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Why Choose Us</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">The Florence <span className="font-script text-gradient text-shine cursor-default">difference</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((w) => (
            <div key={w.title} className="bg-card p-8 rounded-3xl text-center shadow-soft hover-lift group">
              <div className="size-16 mx-auto rounded-2xl gradient-luxe flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <w.icon className="size-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section id="reviews" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center mb-14">
        <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Client Love</p>
        <h2 className="text-4xl lg:text-5xl font-semibold">Loved by <span className="font-script text-gradient text-shine cursor-default">hundreds</span></h2>
        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-primary text-primary" />)}</div>
          <p className="text-muted-foreground"><strong className="text-foreground">4.8</strong> on Google · 24+ reviews</p>
        </div>
      </div>

      <div className="marquee-wrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="marquee">
          {doubled.map((r, i) => (
            <div key={i} className="w-[360px] shrink-0 bg-card rounded-3xl p-7 shadow-soft hover-lift border border-border/50">
              <Quote className="size-7 text-primary/40 mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed">{r.text}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="size-11 rounded-full gradient-luxe flex items-center justify-center text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-primary text-primary" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32 gradient-soft">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">Questions, <span className="font-script text-gradient text-shine cursor-default">answered</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-soft overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`size-5 text-primary transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "HydraFacial", date: "", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Florence Aesthetics! I'd like to book:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0APreferred date: ${form.date}%0A%0A${form.message}`;
    window.open(`https://wa.me/923098589191?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Book Appointment</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">Begin your <span className="font-script text-gradient text-shine cursor-default">glow up</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Reach out and our team will confirm your appointment within the same day. Walk-ins welcome — appointments preferred.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+923098589191" className="flex items-center gap-4 group">
              <div className="size-12 rounded-2xl gradient-luxe flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Call</p>
                <p className="font-semibold group-hover:text-primary transition-colors">0309 8589191</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl gradient-luxe flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="font-semibold">Civic Center, Airport Housing Society<br />Sector 1, Rawalpindi 46222</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl gradient-luxe flex items-center justify-center shrink-0">
                <Clock className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Hours</p>
                <p className="font-semibold">Open daily · 3:00 PM – 10:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/people/Florence-Aesthetics-Clinic/61589344000049/" target="_blank" rel="noreferrer" className="size-12 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110 hover-glow"><Facebook className="size-5" /></a>
              <a href="https://www.instagram.com/florenceaestheticspk/" target="_blank" rel="noreferrer" className="size-12 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110 hover-glow"><Instagram className="size-5" /></a>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-card p-8 lg:p-10 rounded-3xl shadow-luxe space-y-5">
          <h3 className="text-2xl font-semibold mb-2">Request Appointment</h3>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Full Name</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Phone Number</label>
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Service</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Consultation</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Preferred Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Message (optional)</label>
            <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
          </div>

          <button type="submit" className="shine w-full gradient-luxe text-primary-foreground py-4 rounded-xl font-semibold hover-glow inline-flex items-center justify-center gap-2">
            Send via WhatsApp <ArrowRight className="size-4" />
          </button>
          {sent && <p className="text-sm text-primary text-center">Opening WhatsApp… our team will respond shortly.</p>}
          <p className="text-xs text-muted-foreground text-center">Or call directly: <a href="tel:+923098589191" className="text-primary font-semibold">0309 8589191</a></p>
        </form>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Visit Us</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">Find our <span className="font-script text-gradient text-shine cursor-default">clinic</span></h2>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-luxe aspect-[16/8] border border-border">
          <iframe
            title="Florence Aesthetics location"
            src="https://www.google.com/maps?q=Florence+Aesthetics+by+Dr+Kinza+Nasir,+Civic+Center+Airport+Housing+Society+Sector+1,+Rawalpindi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
