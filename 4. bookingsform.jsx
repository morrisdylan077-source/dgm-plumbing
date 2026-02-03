import { Button } from "@/components/ui/button";

export default function BookingForm() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Book a Plumber</h2>
      <p className="text-center mb-8">Call us or submit an online booking request and we’ll get back to you promptly.</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-2">Call Now</h3>
          <p className="text-xl font-bold">0434 122 225</p>
          <p className="mt-2">Available 24/7 for emergencies</p>
        </div>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Phone" />
          <input className="w-full p-3 border rounded" placeholder="Suburb" />
          <textarea className="w-full p-3 border rounded" placeholder="Brief description of issue" />
          <Button className="w-full">Request Booking</Button>
        </form>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <iframe
          className="w-full h-64 rounded"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=East+Melbourne+VIC&output=embed"
        ></iframe>
      </div>
    </section>
  );
}
