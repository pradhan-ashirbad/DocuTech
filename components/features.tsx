export default function Features() {
  return (
    <section id="features" className="container py-20">
      <h2 className="text-center text-3xl font-bold mb-12">Why Choose DocuTech</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="rounded-full border px-6 py-3 hover:border-primary transition-colors">
            <h3 className="font-semibold">Trusted by Thousands</h3>
          </div>
          <div className="rounded-full border px-6 py-3 hover:border-primary transition-colors">
            <h3 className="font-semibold">SOC-2 Certified</h3>
          </div>
          <div className="rounded-full border px-6 py-3 hover:border-primary transition-colors">
            <h3 className="font-semibold">GDPR & HIPAA Compliant</h3>
          </div>
          <div className="rounded-full border px-6 py-3 hover:border-primary transition-colors">
            <h3 className="font-semibold">End-to-end encryption</h3>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl"></div>
      </div>
    </section>
  )
}

