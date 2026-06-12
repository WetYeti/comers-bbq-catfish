import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-amber-100 text-center max-w-3xl mx-auto">
            Visit us for lunch or dinner, or call ahead for pickup
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                    <p className="text-slate-600">
                      111 N Maple St<br />
                      Carthage, TX 75633
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                    <p className="text-slate-600">(903) 693-7400</p>
                    <p className="text-sm text-slate-500 mt-1">For pickup orders and questions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 10:30am - 8:30pm</p>
                      <p>Saturday: 10:30am - 8:30pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Special Requests</h3>
                    <p className="text-slate-600">Large groups or special dietary needs?<br />Give us a call—we&apos;ll accommodate you!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-amber-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/#menu" className="flex items-center text-amber-600 hover:text-amber-700">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      View Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex items-center text-amber-600 hover:text-amber-700">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Learn Our Story
                    </Link>
                  </li>
                  <li>
                    <a href="tel:9036937400" className="flex items-center text-amber-600 hover:text-amber-700">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Pickup
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tuesday Special Banner */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🍖 Tuesday Special!</h3>
                <p className="text-lg mb-4">
                  We only serve our famous pulled pork on Tuesdays!
                </p>
                <p className="text-purple-100">
                  Don&apos;t miss out—come try it before it&apos;s gone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Placeholder */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="h-96 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <p className="text-slate-700 text-xl font-semibold">111 N Maple St, Carthage, TX 75633</p>
                <p className="text-slate-600 mt-2">Just look for the great aroma of BBQ and fried catfish!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Hungry? We&apos;re Open!</h2>
          <p className="text-xl mb-8">Stop by today or call ahead to skip the wait</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9036937400"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-800 text-lg font-semibold rounded-lg hover:bg-amber-50 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (903) 693-7400
            </a>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-800 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
