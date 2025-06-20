import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * HairfitHomePage - Minimal, modern homepage for Hairfit with hero, carousel, CTA, and testimonials.
 */
export default function HairfitHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50 flex flex-col items-stretch font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-3xl w-full bg-white bg-opacity-70 rounded-3xl shadow-md flex flex-col items-center py-14 px-4 md:px-10">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4 text-center tracking-tight">
            Your Hair. <span className="text-teal-500">Your Routine.</span> Perfected.
          </h1>
          <p className="text-lg text-gray-500 mb-8 text-center">
            Discover routines tailored to your unique hair type. Welcome to Hairfit, the modern way to get your best hair ever.
          </p>
          <button
            className="bg-teal-500 hover:bg-blue-400 text-white font-medium rounded-full px-8 py-3 shadow transition duration-150"
          >
            Find Your Hair Type
          </button>
        </div>
      </section>

      {/* Trending Carousel */}
      <section className="w-full flex justify-center py-10 px-4">
        <div className="max-w-5xl w-full">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 pl-2">Trending Hair Routines</h2>
          <TrendingCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full flex justify-center pb-16 pt-2 px-4">
        <div className="max-w-4xl w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 pl-2">What our users say</h3>
          <TestimonialsSection />
        </div>
      </section>
    </div>
  );
}

/**
 * Minimal TrendingCarousel component using soft colors and rounded corners.
 * PUBLIC_INTERFACE
 */
function TrendingCarousel() {
  // Example trending hair routines/hairstyles
  const items = [
    {
      title: "Curly Volume Routine",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
      description: "Bounce and shine for natural curls."
    },
    {
      title: "Shiny Straight Look",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      description: "Sleek hair, no frizz."
    },
    {
      title: "Healthy Scalp Detox",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      description: "Nourish from the roots up."
    },
    {
      title: "Beachy Waves Style",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      description: "Effortless, tousled finish."
    },
  ];

  const [current, setCurrent] = useState(0);

  // PUBLIC_INTERFACE
  function goToPrev() {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }
  // PUBLIC_INTERFACE
  function goToNext() {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="relative flex items-center justify-center w-full">
      <button
        className="absolute left-0 z-10 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-teal-100 transition"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Previous"
        onClick={goToPrev}
      >
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div className="flex-1 flex justify-center">
        <div className="w-72 sm:w-80 bg-white rounded-2xl shadow-md flex flex-col items-center p-6 mx-2 transition-all duration-200">
          <img
            src={items[current].img}
            alt={items[current].title}
            className="w-40 h-40 object-cover rounded-xl mb-4 border-4 border-teal-100"
            loading="lazy"
          />
          <div className="font-medium text-gray-700 text-lg mb-1">{items[current].title}</div>
          <div className="text-gray-400 text-sm text-center">{items[current].description}</div>
        </div>
      </div>
      <button
        className="absolute right-0 z-10 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-teal-100 transition"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Next"
        onClick={goToNext}
      >
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}

/**
 * Minimal TestimonialsSection component.
 * PUBLIC_INTERFACE
 */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alexa M.",
      quote: "Hairfit instantly understood my hair! My routine is finally simple and my hair feels healthier than ever.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David K.",
      quote: "I love the recommendations – they're realistic and my mornings are quicker.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Priya S.",
      quote: "Sleek design, easy to use, and the results speak for themselves. Five stars!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-70 rounded-2xl shadow-sm px-6 py-6 flex flex-col items-center"
        >
          <img
            src={t.avatar}
            alt={t.name}
            className="w-14 h-14 rounded-full border-2 border-teal-200 mb-3"
            loading="lazy"
          />
          <p className="text-gray-700 font-medium text-center mb-2">"{t.quote}"</p>
          <div className="text-teal-500 font-semibold text-sm">{t.name}</div>
        </div>
      ))}
    </div>
  );
}
