import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold text-navy shadow-gold flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" aria-hidden />
    </a>
  );
}
