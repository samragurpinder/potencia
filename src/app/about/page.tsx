'use client'

import { motion } from 'framer-motion'

export default function About() {
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
            <h1 className="heading-xl mb-6">About Potencia Academy</h1>
            <p className="text-xl text-gray-300">
              Empowering students through innovative education and personalized learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary/50 p-8 rounded-lg"
            >
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-gray-300">
                To provide exceptional educational experiences that inspire academic excellence,
                foster critical thinking, and prepare students for success in their chosen fields.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary/50 p-8 rounded-lg"
            >
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="text-gray-300">
                To be recognized as a leading educational institution that transforms students into
                confident, competent, and responsible individuals ready to make meaningful contributions to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <h3 className="heading-md mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, setting high standards for both our educators and students.',
  },
  {
    title: 'Innovation',
    description: 'We embrace innovative teaching methods and technologies to enhance the learning experience.',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards and foster an environment of trust and respect.',
  },
] 