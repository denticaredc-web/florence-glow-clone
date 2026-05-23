import logo from "@/assets/logo.png";
import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Florence Aesthetics" className="h-20 w-auto bg-background rounded-2xl p-3 mb-5" />
          <p className="text-background/70 max-w-md leading-relaxed">
            Premier aesthetic clinic in Rawalpindi offering advanced skin, laser & non-surgical treatments by
            Dr Kinza Nasir — MBBS, FCPS Dermatologist.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/people/Florence-Aesthetics-Clinic/61589344000049/"
              target="_blank" rel="noreferrer"
              className="size-11 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
              aria-label="Facebook"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href="https://www.instagram.com/florenceaestheticspk/"
              target="_blank" rel="noreferrer"
              className="size-11 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="tel:+923098589191"
              className="size-11 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
              aria-label="Call"
            >
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg mb-4 text-background">Visit</h4>
          <p className="text-background/70 text-sm flex gap-2 mb-3">
            <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
            Civic Center, Airport Housing Society Sector 1, Rawalpindi 46222
          </p>
          <p className="text-background/70 text-sm flex gap-2">
            <Phone className="size-4 mt-0.5 shrink-0 text-primary" />
            0309 8589191
          </p>
        </div>

        <div>
          <h4 className="text-lg mb-4 text-background">Hours</h4>
          <p className="text-background/70 text-sm flex gap-2">
            <Clock className="size-4 mt-0.5 shrink-0 text-primary" />
            <span>Saturday – Friday<br />3:00 PM – 10:00 PM</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-14 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
        © {new Date().getFullYear()} Florence Aesthetics by Dr Kinza Nasir. All rights reserved.
      </div>
    </footer>
  );
}
