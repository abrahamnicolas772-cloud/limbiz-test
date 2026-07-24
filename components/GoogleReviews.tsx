'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Sarah Johnson',
    text: 'LIMBIZ made my LLC formation incredibly smooth. Best decision I made for my business!',
    rating: 5,
    location: 'New York, NY',
  },
  {
    name: 'Marcus Chen',
    text: 'Outstanding support and lightning-fast processing. Highly recommended!',
    rating: 5,
    location: 'Austin, TX',
  },
  {
    name: 'Emily Rodriguez',
    text: 'Professional service from start to finish. They truly care about their clients.',
    rating: 5,
    location: 'Miami, FL',
  },
]

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-white">Google</span>
            <span className="text-yellow-400 text-4xl">★★★★★</span>
          </div>
          <p className="text-gray-400 text-lg">What our clients say about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            >
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(review.rating)}
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{review.name}</span>
                <span className="text-gray-500 text-sm">📍 {review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
