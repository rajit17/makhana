import {
  BadgeCheck,
  CircleDollarSign,
  HeartPulse,
  Home,
  Leaf,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type {
  AudienceCard,
  ContactInfo,
  FAQ,
  NavLink,
  Product,
  TrustBadge,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Order", href: "#order" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "Plain", label: "clean makhana" },
  { value: "Fresh", label: "local batches" },
  { value: "Family", label: "friendly snack" },
];

export const product: Product = {
  id: "plain-makhana-001",
  name: "Kamal Plain Makhana",
  tagline: "Crunch Without Guilt",
  description:
    "Light, crunchy plain makhana for tea time, tiffin, fasting days, and everyday healthy snacking.",
  size: "100 g pack",
  price: 149,
  packNote: "Packaging and price are placeholders for the base version.",
  highlights: [
    "Plain and simple",
    "Naturally light crunch",
    "Easy snack for all ages",
    "Good for home and office",
  ],
};

export const trustBadges: TrustBadge[] = [
  {
    title: "Plain Makhana",
    description: "A simple product with no confusing options in this first version.",
    icon: PackageCheck,
  },
  {
    title: "Healthy Snack",
    description: "Light, crunchy, and easy to include in daily routines.",
    icon: HeartPulse,
  },
  {
    title: "Local Availability",
    description: "Designed for local ordering and quick customer enquiries.",
    icon: MapPin,
  },
  {
    title: "Fresh and Reliable",
    description: "Clear ordering details help customers feel confident.",
    icon: ShieldCheck,
  },
];

export const brandPoints = [
  {
    title: "Clean Taste",
    description: "A plain snack that works with tea, milk, fruits, or simple home masala.",
    icon: Sparkles,
  },
  {
    title: "Made for Families",
    description: "Easy to keep at home for kids, elders, guests, and fasting days.",
    icon: Home,
  },
  {
    title: "Light Everyday Crunch",
    description: "A snack choice that feels responsible without feeling boring.",
    icon: Leaf,
  },
];

export const audienceCards: AudienceCard[] = [
  {
    title: "Premium Buyers",
    description: "A neat, dependable snack for customers who care about quality.",
    icon: BadgeCheck,
  },
  {
    title: "Households",
    description: "Simple packs that fit regular grocery and family snack needs.",
    icon: UsersRound,
  },
  {
    title: "Budget-Conscious Buyers",
    description: "Clear pricing and plain product choices keep ordering practical.",
    icon: CircleDollarSign,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is Kamal Makhana?",
    answer:
      "Kamal Makhana is a local plain makhana brand focused on clean, crunchy, everyday snacking.",
  },
  {
    question: "Is it plain roasted makhana?",
    answer:
      "This base website presents one plain makhana product. The exact roasting, salt, and pack details can be updated when final product details are ready.",
  },
  {
    question: "How can I order?",
    answer:
      "Use the order form on this page or contact the brand by phone or WhatsApp. The current order form is frontend-only and ready to connect to a backend later.",
  },
  {
    question: "Is it suitable for families and diet-conscious people?",
    answer:
      "Yes. Plain makhana is commonly chosen as a light snack for families, fasting days, and people looking for a cleaner crunch.",
  },
  {
    question: "Can packaging sizes and prices change?",
    answer:
      "Yes. The current size and price are placeholders, kept in local mock data so they can be replaced quickly.",
  },
];

export const contactInfo: ContactInfo = {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "orders@kamalmakhana.example",
  location: "Local service area",
  serviceArea: "Available for nearby local customers. Delivery details can be updated.",
};
