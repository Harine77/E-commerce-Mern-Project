import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32 py-16 text-gray-900 bg-white min-h-screen flex flex-col justify-center">
      
      {/* Elegant Page Title */}
      <div className="mb-5 text-2xl">
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      {/* Poetic Brand Story & Hero Section */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extralight leading-tight tracking-wide mb-6">
            Where <span className="font-semibold">simplicity</span> becomes <br /> 
            <span className="font-semibold">timeless elegance</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed text-gray-700 mb-4">
            At <span className="font-semibold">YourStore</span>, minimalism is more than an aesthetic—it’s a philosophy.  
            Each piece we offer is carefully chosen to speak volumes through its quiet confidence. 
            We honor craftsmanship and authenticity, weaving stories into every thread.
          </p>
          <p className="text-lg max-w-xl leading-relaxed text-gray-700">
            Founded in 2025 with a spark of inspiration and a love for fashion,
            we’ve grown into a thriving community of style lovers and trendsetters.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={assets.about_img}
            alt="Fashion styles and lifestyle"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Founder’s Philosophy with subtle vertical line accent */}
      <section className="flex items-center max-w-4xl border-l-2 border-gray-900 pl-8 mb-24">
        <blockquote className="italic text-xl text-gray-800">
          “True style is not loud. It whispers with conviction, drawing you closer and inviting you to discover its depth.”
          <footer className="mt-4 font-semibold">— Ariana Blake, Founder</footer>
        </blockquote>
      </section>

      {/* Minimal icon grid highlighting values */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center max-w-5xl mx-auto text-gray-900 mb-24">
        <div>
          <svg
            className="mx-auto mb-4 w-12 h-12 stroke-current"
            fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
          <h3 className="font-semibold text-xl mb-2">Quality Above All</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            Every item passes rigorous curation and quality assurance, ensuring unmatched craftsmanship.
          </p>
        </div>
        <div>
          <svg
            className="mx-auto mb-4 w-12 h-12 stroke-current"
            fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M10 9l3 3-3 3" />
          </svg>
          <h3 className="font-semibold text-xl mb-2">Sustainably Minded</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            We champion responsible sourcing and eco-conscious practices to nurture our planet.
          </p>
        </div>
        <div>
          <svg
            className="mx-auto mb-4 w-12 h-12 stroke-current"
            fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <h3 className="font-semibold text-xl mb-2">Timeless Style</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            Designs that transcend fleeting trends, cultivating a wardrobe to cherish forever.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto mb-24">
        <h3 className="text-2xl font-semibold mb-6">Meet the Team Behind YourStore</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: 'Ariana Blake',
              role: 'Founder & CEO',
              image: 'https://randomuser.me/api/portraits/women/68.jpg',
              bio: 'Visionary entrepreneur passionate about empowering individuals to express themselves through fashion.',
            },
            {
              name: 'Marcus Lee',
              role: 'Head of Design',
              image: 'https://randomuser.me/api/portraits/men/65.jpg',
              bio: 'Creative mastermind behind every trendsetting collection that defines our brand’s aesthetic.',
            },
            {
              name: 'Sofia Patel',
              role: 'Customer Experience Manager',
              image: 'https://randomuser.me/api/portraits/women/43.jpg',
              bio: 'Dedicated to ensuring a seamless and joyful customer journey, every step of the way.',
            },
            {
              name: 'James Chen',
              role: 'Sustainability Lead',
              image: 'https://randomuser.me/api/portraits/men/29.jpg',
              bio: 'Championing eco-friendly initiatives to make fashion responsible and sustainable.',
            },
          ].map(({ name, role, image, bio }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg text-gray-900">{name}</h4>
              <p className="text-gray-700 font-medium">{role}</p>
              <p className="mt-2 text-sm text-gray-600">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-10">
        <p className="text-gray-800 mb-6 max-w-xl mx-auto text-lg">
          Explore the curated collections that celebrate minimalist elegance.  
          Find the piece that speaks to your soul.
        </p>
        <button className="border border-black px-12 py-3 font-medium hover:bg-black hover:text-white transition">
          Shop Now
        </button>
      </section>
      <NewsletterBox/>
    </div>
  );
};

export default About;

