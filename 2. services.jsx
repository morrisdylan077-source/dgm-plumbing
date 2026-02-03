import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wrench, Flame, Phone } from "lucide-react";

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Droplets className="mx-auto mb-4 h-10 w-10 text-blue-700" />
            <h3 className="font-semibold text-lg mb-2">Blocked Drains</h3>
            <p>Drain clearing, CCTV inspections, and repairs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Flame className="mx-auto mb-4 h-10 w-10 text-blue-700" />
            <h3 className="font-semibold text-lg mb-2">Hot Water Systems</h3>
            <p>Repairs, replacements, gas & electric systems.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-4 h-10 w-10 text-blue-700" />
            <h3 className="font-semibold text-lg mb-2">General Plumbing</h3>
            <p>Taps, toilets, leaks, maintenance & upgrades.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="mx-auto mb-4 h-10 w-10 text-blue-700" />
            <h3 className="font-semibold text-lg mb-2">Emergency Callouts</h3>
            <p>24/7 emergency plumbing service — fast response, anytime.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
