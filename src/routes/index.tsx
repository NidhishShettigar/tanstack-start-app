import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { CoreValues } from "@/components/site/CoreValues";
import { InfoCardGrid } from "@/components/site/InfoCardGrid";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

import whySupply from "@/assets/why-supply.jpg";
import whyPrice from "@/assets/why-price.jpg";
import whyDelivery from "@/assets/why-delivery.jpg";
import whyQuality from "@/assets/why-quality.jpg";
import prodImported from "@/assets/prod-imported.jpg";
import prodIndian from "@/assets/prod-indian.jpg";
import prodCharcoal from "@/assets/prod-charcoal.jpg";
import prodBio from "@/assets/prod-bio.jpg";
import srvProcure from "@/assets/srv-procure.jpg";
import srvLogistics from "@/assets/srv-logistics.jpg";
import srvAnalysis from "@/assets/srv-analysis.jpg";
import srvCustom from "@/assets/srv-custom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MS Ventures — Coal, Charcoal & Bio-Briquettes Trading" },
      { name: "description", content: "MS Ventures supplies premium coal, charcoal & bio-briquettes to industries across India. Trusted partner in global fuel trade since 2015." },
      { property: "og:title", content: "MS Ventures — Partner in Global Trade" },
      { property: "og:description", content: "Premium coal, charcoal & bio-briquettes for cement, steel, pharma & food industries." },
    ],
  }),
  component: Index,
});

const whyChoose = [
  {
    img: whySupply,
    title: "Reliable Supply",
    intro: "You can count on us, every time. Steady and dependable supply without interruptions.",
    bullets: [
      "Trusted Mines and Global Suppliers",
      "Steady Supply, Even in Tight Markets",
      "No Delays, No Shortages",
      "Backup Sources for Every Product",
    ],
  },
  {
    img: whyPrice,
    title: "Competitive Pricing",
    intro: "Fair prices that make sense for you. Great value without compromising on quality.",
    bullets: [
      "Direct Supplier Deals",
      "Transparent Quotes",
      "Volume Discounts Available",
      "Best Value for Your Budget",
    ],
  },
  {
    img: whyDelivery,
    title: "Timely Delivery",
    intro: "On time, as promised. We ensure your orders reach you without delays.",
    bullets: [
      "Tracked Shipments End-to-End",
      "Coordinated Port and Road Logistics",
      "Fast Last-Mile Delivery",
      "Clear Delivery Timelines",
    ],
  },
  {
    img: whyQuality,
    title: "Quality Assurance",
    intro: "Checked and verified at every step. Delivering products you can trust every time.",
    bullets: [
      "Calorific Value Tested",
      "Low Ash and Moisture",
      "Consistent Grading",
      "Quality Reports on Request",
    ],
  },
];

const products = [
  {
    img: prodImported,
    title: "Imported Coal",
    intro: "High-quality coal from international sources. Reliable for strong and high performance.",
    bullets: [
      "Indonesian Coal — High GCV, Medium GCV, Low GCV",
      "South African Coal — RB1, RB2, RB3",
      "Australian Coal",
      "Screened Coal",  
      "Metcoke",
    ],
  },
  {
    img: prodIndian,
    title: "Indian Coal",
    intro: "Affordable coal from local sources. Suitable for everyday industrial use.",
    bullets: [
      "Bituminous Coal",
      "Lignite Coal",
      "Anthracite Coal",
      "Sub-bituminous Coal",
      "Peat Coal",
    ],
  },
  {
    img: prodCharcoal,
    title: "Charcoal",
    intro: "Clean-burning fuel with less ash. Good for high-heat and special uses.",
    bullets: [
      "Hardwood / Lump Charcoal",
      "Industrial Charcoal",
      "Coconut Shell Charcoal",
      "Hookah / Shisha Charcoal",
      "Activated Charcoal",
    ],
  },
  {
    img: prodBio,
    title: "Bio-Briquettes",
    intro: "Eco-friendly fuel made from natural waste. A better choice for clean energy.",
    bullets: [
      "Sawdust Briquettes",
      "Agro-Waste Briquettes",
      "Cashew Shell Briquettes",
      "Charcoal Briquettes",
      "Peat Briquettes",
    ],
  },
];

const services = [
  {
    img: srvProcure,
    title: "Procurement & Sourcing",
    intro: "We buy directly from trusted mines and suppliers. This helps you get the right quality at a fair price.",
    bullets: [
      "Trusted Suppliers",
      "Checked Quality and Grade",
      "Fair Pricing",
      "On-Time Supply",
    ],
  },
  {
    img: srvLogistics,
    title: "Logistics & Distribution",
    intro: "We take care of moving the material from port to your place. Safe and smooth delivery without trouble.",
    bullets: [
      "Port Handling Support",
      "Road and Rail Transport",
      "On-Time Delivery",
      "Simple Tracking",
    ],
  },
  {
    img: srvAnalysis,
    title: "Quality Analysis",
    intro: "We check every shipment before delivery. You get clear details about the quality.",
    bullets: [
      "Heat Value Testing",
      "Ash and Moisture Check",
      "Clear Reports",
      "Lab-Tested",
    ],
  },
  {
    img: srvCustom,
    title: "Coal Screening Service",
    intro: "We ensure coal is properly screened and graded to meet specific size and quality requirements for efficient industrial use.",
    bullets: [
      "Custom size and type",
      "Scheduled delivery",
      "Flexible quantity",
      "Budget-friendly options",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <InfoCardGrid
          eyebrow="Why Choose Us"
          title="We Deliver with Trust and Consistency"
          items={whyChoose}
          bg="default"
        />
        <InfoCardGrid
          id="products"
          eyebrow="Products"
          title="Products You Can Trust, Carefully Sourced and Graded for Industry"
          items={products}
          bg="muted"
        />
        <InfoCardGrid
          eyebrow="Services"
          title="We Handle It from Source to Delivery"
          items={services}
          bg="default"
        />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
