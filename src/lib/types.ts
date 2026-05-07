import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  price: number;
  packNote: string;
  highlights: string[];
};

export type TrustBadge = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AudienceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  serviceArea: string;
};

export type OrderPayload = {
  productId: string;
  productName: string;
  customerName: string;
  phone: string;
  address: string;
  quantity: number;
  notes?: string;
  estimatedTotal: number;
};

export type EnquiryPayload = {
  name: string;
  phone: string;
  message: string;
};
