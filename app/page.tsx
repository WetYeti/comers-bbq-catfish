import Link from 'next/link';
import { ArrowRight, Phone, Clock, MapPin, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Warm BBQ colors */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                <span className="font-semibold">4.2★ on TripAdvisor</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Comer&apos;s BBQ &amp; Catfish</h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Authentic Texas BBQ &amp; Fresh Fried Catfish in Carthage Since Years Past
            </p>
            <p className="text-lg text-amber-200 mb-10">
              Famous for whole fried catfish, fall-off-the-bone ribs, and slow-smoked brisket
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                View Our Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:9036937400"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-900 transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (903) 693-7400
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-amber-100">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                111 N Maple St, Carthage, TX 75633
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Sat: 10:30am - 8:30pm
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Features Bar */}
      <section className="bg-amber-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-bold text-lg">Whole Fried Catfish</p>
              <p className="text-amber-100 text-sm">Famous Local Favorite</p>
            </div>
            <div>
              <p className="font-bold text-lg">Slow-Smoked Brisket</p>
              <p className="text-amber-100 text-sm">Texas Tradition</p>
            </div>
            <div>
              <p className="font-bold text-lg">Tender Ribs</p>
              <p className="text-amber-100 text-sm">Fall Off The Bone</p>
            </div>
            <div>
              <p className="font-bold text-lg">Tuesday Special</p>
              <p className="text-amber-100 text-sm">Pulled Pork Only</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Carthage&apos;s BBQ &amp; Seafood Tradition</h2>
              <p className="text-lg text-slate-600 mb-6">
                For years, families in Panola County have been enjoying Comer&apos;s authentic Texas barbecue and fresh fried catfish. We don&apos;t just serve food—we bring people together around tables filled with good taste and Southern hospitality.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                From our whole fried catfish (rated &quot;immaculate&quot; by visitors) to our slow-smoked brisket that earns rave reviews, every dish is prepared with care using time-tested recipes and the freshest ingredients available.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-600"><strong>Famous Whole Fried Catfish</strong> - Golden crispy batter, fresh fillet</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-600"><strong>Texas-Style BBQ</strong> - Ribs, brisket, sausage, chicken</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-600"><strong>Homemade Sides</strong> - Hush puppies, coleslaw, beans, potato salad</span>
                </li>
              </ul>
              <Link 
                href="/about"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
              >
                Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 rounded-xl flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-4xl mb-2">🍖🐟</p>
                <p className="text-slate-700 font-semibold text-lg">BBQ + Catfish = Comer&apos;s Secret</p>
                <p className="text-slate-600 text-sm mt-2">The only place in town serving both classics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Menu Favorites</h2>
            <p className="text-xl text-slate-600">From the pit and the fryer—authentic East Texas flavor</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">BBQ Plates</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between"><span>Brisket Plate</span><span className="text-amber-600 font-semibold">Best Seller</span></li>
                <li className="flex justify-between"><span>Ribs (Half/Full)</span><span className="text-amber-600 font-semibold">Customer Favorite</span></li>
                <li className="flex justify-between"><span>Sausage Plate</span></li>
                <li className="flex justify-between"><span>Chicken Plate</span></li>
                <li className="flex justify-between"><span>Burger Combo</span></li>
                <li className="italic text-sm mt-4 text-slate-500">*Pulled pork available Tuesdays only</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fresh from the Fryer</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between"><span>Whole Fried Catfish</span><span className="text-orange-600 font-semibold">Signature Dish</span></li>
                <li className="flex justify-between"><span>Catfish Fillet Platter</span></li>
                <li className="flex justify-between"><span>Hush Puppies</span></li>
                <li className="flex justify-between"><span>French Fries</span></li>
                <li className="text-sm mt-4 text-slate-500 italic">&quot;taste was immaculate&quot;<br/>- Tripadvisor Review</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Classic Sides</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Colesslaw</li>
                <li>Bean Salad</li>
                <li>Potato Salad</li>
                <li>Diet Dr Pepper</li>
                <li>White Bread</li>
                <li>Pickles &amp; Onions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-amber-50 rounded-full px-6 py-3">
                <span className="text-3xl mr-3">⭐⭐⭐⭐⭐</span>
                <div className="text-left">
                  <p className="font-bold text-slate-900">4.2 out of 5</p>
                  <p className="text-sm text-slate-600">Based on TripAdvisor & Yelp reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-amber-500 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Excellent Ribs and Brisket. I did have the Whole fried catfish, <strong>taste was immaculate</strong>.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Tripadvisor Reviewer</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-orange-500 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;<strong>Yummy lunch of catfish, coleslaw, hush puppies and french fries.</strong> Great Barbegue Brisket!&quot;
              </p>
              <p className="font-semibold text-slate-900">- Local Foodie</p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-red-500 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Great BBQ in Carthage, keep up the good work!! Always fresh, always delicious.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Regular Customer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Hungry? We&apos;re Open Now!</h2>
          <p className="text-xl mb-8">Visit us at 111 N Maple St or call ahead for pickup</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-800 text-lg font-semibold rounded-lg hover:bg-amber-50 transition shadow-lg"
            >
              See Full Menu
            </a>
            <a 
              href="tel:9036937400"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-800 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (903) 693-7400
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center text-amber-200">
            <Clock className="w-5 h-5 mr-2" />
            Mon-Sat: 10:30am - 8:30pm | Sunday Closed
          </div>
        </div>
      </section>
    </div>
  );
}
