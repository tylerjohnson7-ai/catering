import { useState, useEffect, useRef } from 'react';
import { MapPin, Search, Users, Clock, ChevronRight, ExternalLink, ChevronDown, X, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { stores, findClosestStores, type Store } from '@/data/stores';
import './App.css';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [searchResults, setSearchResults] = useState<Store[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [locationsExpanded, setLocationsExpanded] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Load SlickText script when modal opens
  useEffect(() => {
    if (showDiscountModal && formContainerRef.current) {
      // Clear any existing content
      formContainerRef.current.innerHTML = '';
      
      // Create and append the script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://static.slicktext.com/forms/scripts/embed/eyJ1cmwiOiJodHRwczpcL1wvc3Rmb3Jtcy5jb1wvMjRmMjU4MGMwNGJkNmUyMzI4Yzk0ODEzNzRlZGJiZTkifQ';
      formContainerRef.current.appendChild(script);
    }
  }, [showDiscountModal]);

  const handleSearch = () => {
    if (zipCode.length < 5) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate a brief search for UX
    setTimeout(() => {
      const results = findClosestStores(zipCode, 5);
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Scroll to results when search completes
  useEffect(() => {
    if (hasSearched && !isSearching && resultsRef.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const yOffset = -100; // Offset to account for sticky header
        const element = resultsRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hasSearched, isSearching]);

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Navigation - Logo Only */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-24">
            <img 
              src="/images/MOES_2023_SW_Logo_Catering_Diamond.png" 
              alt="Moe's Southwest Grill Catering" 
              className="h-20 w-auto"
              width="200"
              height="80"
            />
          </div>
        </div>
        {/* Discount Banner */}
        <button
          onClick={() => setShowDiscountModal(true)}
          className="w-full bg-gradient-to-r from-[#e97300] to-[#ff8c1a] hover:from-[#d16600] hover:to-[#e97300] text-white py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300"
        >
          <Tag className="w-5 h-5" />
          <span className="font-display font-bold text-sm md:text-base">Click here to get a discount!</span>
        </button>
      </nav>

      {/* Hero Section with Food Background */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/Moes_C2_Catering_05_23_Cat_OverHeadSpread_5090.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e97300] rounded-full px-5 py-2 mb-8">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-sm font-display font-bold text-white tracking-wide">Find Your Closest Location</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            We Cater Your
            <span className="block text-[#e97300]">Next Event!</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-body">
            Fresh, made-to-order Southwest favorites for any occasion. 
            Find your nearest Moe's location and order catering today.
          </p>
          
          {/* ZIP Code Search */}
          <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-lg mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  onKeyPress={handleKeyPress}
                  className="pl-12 h-14 text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#20cbd4] rounded-xl font-body"
                />
              </div>
              <Button
                onClick={handleSearch}
                disabled={zipCode.length < 5 || isSearching}
                className="h-14 px-8 bg-[#e97300] hover:bg-[#d16600] text-white font-display font-bold rounded-xl transition-all disabled:opacity-50 text-lg"
              >
                {isSearching ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                ) : (
                  <span>Find</span>
                )}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 justify-center mt-8">
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span className="font-body">Feeds 10-1000+</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span className="font-body">24hr Advance Notice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {hasSearched && (
        <section ref={resultsRef} id="results-section" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-black text-[#414142] mb-3">
                {searchResults.length > 0 ? 'Locations Near You' : 'No Locations Found'}
              </h2>
              <p className="text-gray-600 font-body">
                {searchResults.length > 0 
                  ? `Showing ${searchResults.length} closest location${searchResults.length !== 1 ? 's' : ''} to ${zipCode}`
                  : `We couldn't find any locations near ${zipCode}. Please try another ZIP code.`}
              </p>
            </div>

            {searchResults.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((store, index) => (
                  <Card key={store.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block bg-[#20cbd4]/10 text-[#20cbd4] text-xs font-display font-bold px-3 py-1 rounded-full mb-2">
                            {index === 0 ? 'Closest' : `${(store.distance || index + 1).toFixed(1)} miles away`}
                          </span>
                          <h3 className="text-xl font-display font-bold text-[#414142]">{store.name}</h3>
                          <p className="text-gray-500 font-body">{store.city}, {store.stateCode}</p>
                        </div>
                        <div className="w-10 h-10 bg-[#e97300]/10 rounded-full flex items-center justify-center group-hover:bg-[#e97300] transition-colors">
                          <MapPin className="w-5 h-5 text-[#e97300] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <a
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#20cbd4] hover:bg-[#1ab3bb] text-white font-display font-bold rounded-xl transition-colors"
                      >
                        <span>Order Catering</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Catering Options Section */}
      <section id="catering" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#e97300]/10 text-[#e97300] text-sm font-display font-bold px-4 py-2 rounded-full mb-4">
              Catering Options
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#414142] mb-4">
              Something for Every Occasion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              From office lunches to graduation parties, we've got the fresh Southwest flavors 
              to make your event a hit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fajita Bar */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src="/images/FajitaBar_GuacNoTomatoes_extbottom_sil.jpg"
                  alt="Fajita Bar"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white mb-1">Fajita Bar</h3>
                  <p className="text-white/80 text-sm font-body">Our most popular option</p>
                </div>
              </div>
              <p className="text-gray-600 font-body">
                Grilled steak, chicken, or both with peppers, onions, and all the fixings. 
                Served with warm tortillas, rice, beans, and our famous queso.
              </p>
            </div>

            {/* Taco Bar */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src="/images/Fajita_Bar_Plated_Q_Angle_Menu_Image_ret.jpg"
                  alt="Taco Bar"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white mb-1">Taco Bar</h3>
                  <p className="text-white/80 text-sm font-body">Build your own tacos</p>
                </div>
              </div>
              <p className="text-gray-600 font-body">
                Choice of proteins with hard and soft shells, lettuce, cheese, pico de gallo, 
                sour cream, and all your favorite toppings.
              </p>
            </div>

            {/* Burrito Box */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src="/images/Moes_CATERING_01_28_2024_PreRolled_Burritos_Original_21724_ret.jpg"
                  alt="Burrito Box"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white mb-1">Burrito Box</h3>
                  <p className="text-white/80 text-sm font-body">Individually wrapped</p>
                </div>
              </div>
              <p className="text-gray-600 font-body">
                Pre-rolled burritos wrapped and ready to go. Perfect for meetings and events 
                where convenience is key. Comes with chips and salsa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Videos Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#20cbd4]/10 text-[#20cbd4] text-sm font-display font-bold px-4 py-2 rounded-full mb-4">
              See What People Are Saying
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#414142] mb-3">
              Real People. Real Moe's.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Video 1 - CodyChows */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl aspect-[9/16] max-w-[280px] mx-auto">
              <video
                src="/images/CodyChows.mov"
                controls
                playsInline
                preload="none"
                className="w-full h-full object-cover"
                poster="/images/CodyChows.png"
                width="280"
                height="498"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 2 - Shhhhimeating */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl aspect-[9/16] max-w-[280px] mx-auto">
              <video
                src="/images/Shhhhimeating.MOV"
                controls
                playsInline
                preload="none"
                className="w-full h-full object-cover"
                poster="/images/Shhhhimeating.png"
                width="280"
                height="498"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Full Spread Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/C2_Catering_Lifestyle_Day2-6_ret.jpg"
                alt="Full Catering Spread"
                className="rounded-3xl shadow-2xl w-full"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#20cbd4]/10 text-[#20cbd4] text-sm font-display font-bold px-4 py-2 rounded-full mb-4">
                Complete Meals
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-[#414142] mb-6">
                Everything You Need,
                <span className="block text-[#e97300]">Nothing You Don't</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-body">
                Our catering packages come complete with all the essentials: plates, napkins, 
                utensils, and serving ware. Just order, pick up or have it delivered, 
                and you're ready to feed the crowd.
              </p>
              
              <div className="space-y-4">
                {[
                  'Free chips & salsa with every order',
                  'Vegetarian and gluten-free options available',
                  'Feeds groups of 10 to 1000+',
                  'Same-day ordering available at select locations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#20cbd4] rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Locations Section - Collapsible */}
      <section id="locations" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setLocationsExpanded(!locationsExpanded)}
            className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-display font-black text-[#414142]">All Locations</h2>
              <p className="text-gray-500 font-body mt-1">
                {locationsExpanded ? 'Click to collapse' : `Browse all ${stores.length} locations across 7 states`}
              </p>
            </div>
            <div className={`w-12 h-12 bg-[#20cbd4] rounded-full flex items-center justify-center transition-transform duration-300 ${locationsExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </button>

          {/* Collapsible Content */}
          <div className={`overflow-hidden transition-all duration-500 ${locationsExpanded ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-6">
              {Object.entries(
                stores.reduce((acc, store) => {
                  if (!acc[store.state]) acc[store.state] = [];
                  acc[store.state].push(store);
                  return acc;
                }, {} as Record<string, Store[]>)
              )
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([state, stateStores]) => (
                  <div key={state} className="bg-white rounded-2xl p-5 shadow-sm">
                    <h3 className="text-lg font-display font-bold text-[#e97300] mb-3 pb-2 border-b border-gray-100">
                      {state}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {stateStores
                        .sort((a, b) => a.city.localeCompare(b.city))
                        .map((store) => (
                          <a
                            key={store.id}
                            href={store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-gray-50 hover:bg-[#20cbd4] rounded-lg transition-all duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-display font-bold text-[#414142] group-hover:text-white transition-colors text-sm">
                                  {store.name}
                                </p>
                                <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors font-body">
                                  {store.city}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                            </div>
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#e97300] to-[#d16600]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Ready to Order Catering?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body">
            Enter your ZIP code above to find your nearest Moe's location and start your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                setHasSearched(false);
                setSearchResults([]);
                setZipCode('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-14 px-8 bg-white text-[#e97300] hover:bg-gray-100 font-display font-bold rounded-xl text-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Find My Location
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#20cbd4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/images/MOES_2023_SW_Logo_Catering_Diamond.png" 
              alt="Moe's Southwest Grill Catering" 
              className="h-24 w-auto mb-4"
              width="240"
              height="96"
              loading="lazy"
            />
            <p className="text-white/80 font-body mb-6 max-w-md">
              Welcome to Moe's! Fresh, made-to-order Southwest favorites for any occasion.
            </p>
            <div className="flex gap-6 mb-6">
              <a 
                href="https://www.moes.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors font-body"
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.moes.com/legal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors font-body"
              >
                Legal
              </a>
            </div>
            <p className="text-white/60 text-sm font-body">
              &copy; 2026 Moe's Southwest Grill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Discount Modal */}
      {showDiscountModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowDiscountModal(false);
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#e97300] to-[#ff8c1a] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag className="w-6 h-6 text-white" />
                <h3 className="text-xl font-display font-bold text-white">Get Your Discount!</h3>
              </div>
              <button
                onClick={() => setShowDiscountModal(false)}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Form Container */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-600 font-body mb-6">
                Sign up below to receive exclusive catering discounts and special offers from Moe's Southwest Grill!
              </p>
              <div ref={formContainerRef} />
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500 font-body">
                By signing up, you agree to receive promotional messages from Moe's Southwest Grill.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
