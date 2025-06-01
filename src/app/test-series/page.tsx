'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TestSeries() {
  return (
    <main className="min-h-screen pt-16 bg-primary">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Test Series</h1>
            <p className="text-xl text-gray-300">
              Comprehensive test series designed to evaluate and improve your preparation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Why Choose Our Test Series?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-lg text-center"
              >
                <h3 className="heading-md mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Packages */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Available Test Packages
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="heading-md mb-4">{pkg.title}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <svg
                          className="w-5 h-5 text-accent mt-1 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/test-series/${pkg.slug}`}
                    className="btn-primary w-full text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Detailed Analysis',
    description: 'Get comprehensive performance analysis with detailed solutions and explanations.',
  },
  {
    title: 'Real Exam Pattern',
    description: 'Tests designed according to the latest exam patterns and syllabus.',
  },
  {
    title: 'Performance Tracking',
    description: 'Track your progress with detailed analytics and improvement suggestions.',
  },
]

const packages = [
  {
    title: 'Complete Test Series',
    description: 'Comprehensive test series covering the entire syllabus',
    features: [
      '30 Full-length Tests',
      'Chapter-wise Tests',
      'Previous Year Papers',
      'Detailed Solutions',
      'Performance Analytics',
      'Rank Predictions',
    ],
    slug: 'complete',
  },
  {
    title: 'Topic-wise Tests',
    description: 'Focus on specific topics and strengthen your concepts',
    features: [
      '50 Topic-wise Tests',
      'Concept Clarity',
      'Practice Questions',
      'Instant Solutions',
      'Weakness Analysis',
      'Improvement Tips',
    ],
    slug: 'topic-wise',
  },
  {
    title: 'Mock Test Series',
    description: 'Simulate real exam environment with full-length tests',
    features: [
      '15 Mock Tests',
      'Exam Pattern Based',
      'Timed Practice',
      'Detailed Analysis',
      'All India Ranking',
      'Performance Report',
    ],
    slug: 'mock',
  },
] 