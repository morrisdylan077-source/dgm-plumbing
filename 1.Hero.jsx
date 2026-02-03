import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">DGM Plumbing</h1>
      <p className="text-xl mb-6">Reliable • Licensed • Local Plumber</p>
      <p className="max-w-2xl mx-auto mb-8">
        Fast, honest plumbing services for residential and commercial clients across East Melbourne.
        Call now for prompt service, expert solutions, and 24/7 emergency plumbing when you need it most.
      </p>
      <Button size="lg" className="text-lg px-8 py-6">
        <Phone className="mr-2" /> Call 0434 122 225
      </Button>
    </section>
  );
}
