import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About Comer&apos;s BBQ &amp; Catfish</h1>
          <p className="text-xl text-amber-100 text-center max-w-3xl mx-auto">
            Serving authentic Texas barbecue and fresh fried catfish to Carthage and Panola County since days gone by
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                  Comer&apos;s BBQ &amp; Catfish has been a cornerstone of the Carthage dining scene for years, serving up authentic Texas-style barbecue alongside fresh-from-the-gulf catfish in a way that&apos;s truly unique to East Texas.
                </p>
                <p className="mb-6">
                  What started as a simple dream—to bring both great BBQ and quality seafood to one location—has grown into a beloved local institution. Families come together at our tables, hunters share stories over plates of brisket, and visitors discover what makes Comer&apos;s special.
                </p>
                <p className="mb-6">
                  We don&apos;t cut corners. Our brisket is slow-smoked to perfection. Our ribs fall off the bone. And our whole fried catfish? That&apos;s where we really shine. One visitor called it &quot;immaculate&quot;—and we&apos;d like to think they were on to something.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-96 rounded-xl flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-6xl mb-4">🏠🍖</p>
                <p className="text-slate-700 font-semibold text-xl">Family-Owned</p>
                <p className="text-slate-600 mt-2">Proudly Serving Carthage, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Authentic BBQ</h3>
              <p className="text-slate-600 text-center">
                Slow-smoked low and hot, Texas-style. No shortcuts, no compromises. Just real barbecue done right.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🐟</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Fresh Fried Catfish</h3>
              <p className="text-slate-600 text-center">
                Golden crispy batter around tender fillets. The secret side dish that became our signature main course.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Southern Hospitality</h3>
              <p className="text-slate-600 text-center">
                When you dine at Comer&apos;s, you&apos;re family. Warm welcomes, generous portions, and good times guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-800 to-red-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Us Today</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-amber-100">111 N Maple St<br/>Carthage, TX 75633</p>
              </div>

              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-amber-100">(903) 693-7400<br/>For pickup orders</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-amber-100">Mon-Sat: 10:30am - 8:30pm<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Taste the Difference?</h2>
          <p className="text-xl text-slate-600 mb-8">Whether you&apos;re craving ribs, brisket, or that famous fried catfish—we&apos;re here for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold rounded-lg transition"
            >
              View Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-600 text-lg font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
