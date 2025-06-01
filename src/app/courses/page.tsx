'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Courses() {
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
            <h1 className="heading-xl mb-6">Our Courses</h1>
            <p className="text-xl text-gray-300">
              Comprehensive courses designed to help you achieve your academic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="heading-md mb-4">{course.title}</h3>
                  <p className="text-gray-300 mb-6">{course.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="font-medium">Level:</span>
                      <span className="ml-2">{course.level}</span>
                    </div>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="btn-primary mt-6 w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-accent rounded-lg p-8 text-center"
          >
            <h2 className="heading-lg mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join Potencia Academy today and take the first step towards academic excellence.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const courses = [
  {
    title: 'IIT-JEE Preparation',
    description: 'Comprehensive preparation for IIT-JEE with focus on Physics, Chemistry, and Mathematics.',
    duration: '2 Years',
    level: 'Advanced',
    slug: 'iit-jee',
  },
  {
    title: 'NEET Preparation',
    description: 'Complete preparation for NEET covering Physics, Chemistry, and Biology.',
    duration: '2 Years',
    level: 'Advanced',
    slug: 'neet',
  },
  {
    title: 'Foundation Course',
    description: 'Strong foundation building for students in classes 9th and 10th.',
    duration: '1 Year',
    level: 'Intermediate',
    slug: 'foundation',
  },
  {
    title: 'Crash Course',
    description: 'Intensive preparation for upcoming competitive exams.',
    duration: '6 Months',
    level: 'Advanced',
    slug: 'crash-course',
  },
  {
    title: 'Distance Learning',
    description: 'Flexible online learning program with comprehensive study material.',
    duration: 'Flexible',
    level: 'All Levels',
    slug: 'distance-learning',
  },
  {
    title: 'Test Series',
    description: 'Extensive practice with mock tests and detailed analysis.',
    duration: '3 Months',
    level: 'Advanced',
    slug: 'test-series',
  },
] 