import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sundaram Granites for granite inquiries, quotes, factory visits, and partnership opportunities. WhatsApp, email, or call us directly.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
