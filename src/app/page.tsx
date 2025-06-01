'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentStory, setCurrentStory] = useState(0)
  const [activeTab, setActiveTab] = useState('all')

  // Login buttons section
  const loginButtons = [
    {
      title: 'Parent Login',
      href: '/parent/login',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Faculty Login',
      href: '/faculty/login',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  const successStories = [
    {
      year: "JEE Advanced 2022",
      name: "Maninder Singh",
      achievement: "AIR 48",
      college: "IIT MADRAS",
      program: "Classroom Program (2-Year)"
    },
    {
      year: "NEET 2022",
      name: "Aabhas Katia",
      achievement: "2nd Rank in Punjab",
      college: "VMMC NEW DELHI",
      program: "Foundation to Success"
    },
    {
      year: "JEE Advanced 2022",
      name: "Aryan Garg",
      achievement: "99.63 %ile",
      college: "IIT MANDI",
      program: "Classroom Program"
    },
    {
      year: "NEET 2022",
      name: "Khushdeep Kaur",
      achievement: "NEET Score: 666",
      college: "AIIMS DELHI",
      program: "Classroom Program"
    },
    {
      year: "NEET 2022",
      name: "Kiran",
      achievement: "Selected",
      college: "AIIMS RISHIKESH",
      program: "Medical Program"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 3000) // Change story every 3 seconds

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { value: '1000+', label: 'Students Enrolled' },
    { value: '2', label: 'Branches in Punjab' },
    { value: '50+', label: 'Expert Faculty' },
    { value: '95%', label: 'Success Rate' },
  ]

  const whyChooseUs = [
    {
      title: 'Best Results',
      description: 'Highest percentage of selections in JEE and NEET for 6 consecutive years.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Expert Faculty',
      description: 'Full time faculties mostly comprising of IITians & NITians with extensive teaching experience.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Student Care',
      description: 'Ultimate student care & regular motivational counselling with excellent student to teacher ratio.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Regular Testing',
      description: 'Continuous performance tests of various formats & difficulties with detailed analysis.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ]

  const facilities = [
    {
      title: 'Transport Service',
      description: 'Safe and affordable transport facility for day scholars.',
      icon: '🚌'
    },
    {
      title: 'Hostel Facility',
      description: 'Excellent accommodation with 24-hour Internet, washing machines, and reading rooms.',
      icon: '🏠'
    },
    {
      title: 'Parents Meeting',
      description: 'Bi-monthly meetings to discuss student progress and provide guidance.',
      icon: '👥'
    },
    {
      title: 'Regular Counselling',
      description: 'Motivational sessions and performance analysis for better preparation.',
      icon: '🎯'
    }
  ]

  const faqs = [
    {
      question: 'How do I enroll in Potencia Academy?',
      answer: 'Enrollment is simple! Visit your nearest Potencia Academy center or register online through our website. Our admissions team will guide you through the process and help you choose the right program.'
    },
    {
      question: 'What is the duration of your programs?',
      answer: 'Program durations vary based on the course and level. Most programs range from 3 months to 4 years. We also offer intensive short-term courses and long-term comprehensive programs.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'No, we offer only offline learning mode. However, our digital platform provides access to online testing for practice and study materials.'
    }
  ]

  const programs = [
    {
      title: 'JEE (Main & Advanced)',
      description: 'Comprehensive preparation for IIT-JEE with expert guidance and regular mock tests.',
      features: [
        'Complete syllabus coverage',
        'Regular doubt clearing sessions',
        'Weekly mock tests',
        'Performance analysis',
        'Study material by IITians'
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'NEET',
      description: 'Expert coaching for NEET with focus on Biology, Physics, and Chemistry for medical aspirants.',
      features: [
        'Specialized Biology faculty',
        'Regular practical sessions',
        'NCERT-focused preparation',
        'Previous year analysis',
        'Medical terminology training'
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Foundation (Class 6-10)',
      description: 'Strong foundation courses for building conceptual understanding and competitive exam preparation.',
      features: [
        'Basic to advanced concepts',
        'Olympiad preparation',
        'Mental ability training',
        'Regular assessments',
        'Parent-teacher meetings'
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Droppers Program',
      description: 'Specialized programs for students taking a drop year for better preparation.',
      features: [
        'Intensive revision',
        'Focused weak point improvement',
        'Daily practice tests',
        'One-on-one mentoring',
        'Success strategy planning'
      ],
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const achievements = [
    {
      title: 'JEE Advanced',
      stats: [
        { value: '500+', label: 'IIT Selections' },
        { value: '1000+', label: 'NIT Selections' },
        { value: '72%', label: 'Success Rate' }
      ]
    },
    {
      title: 'NEET',
      stats: [
        { value: '1000+', label: 'Medical College Selections' },
        { value: '95%', label: 'Success Rate' },
        { value: '100+', label: 'AIIMS/JIPMER Selections' }
      ]
    }
  ]

  const teachingMethodology = [
    {
      title: 'Competitive Environment',
      description: 'Formation of Diamond and Gold batches based on performance with regular shuffling.',
      icon: '🏆'
    },
    {
      title: 'Regular Doubt Sessions',
      description: 'Individual attention in booklet discussion and doubt solving sessions.',
      icon: '❓'
    },
    {
      title: 'Student Satisfaction Survey',
      description: 'Regular feedback and quick resolution of student concerns.',
      icon: '📊'
    },
    {
      title: 'Board Expertise',
      description: 'Dedicated board faculties working as senior moderators.',
      icon: '📚'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Get up to <span className="text-accent">90% scholarship</span> on Potencia Academy Courses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join Bathinda's premier coaching institute for IIT-JEE, NEET, CUET, and Foundation courses
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/register"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Register for Scholarship
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-accent/50 hover:border-accent text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Login Options */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Already a member? Choose your login option:</p>
                <div className="flex flex-wrap gap-4">
                  {loginButtons.map((button) => (
                    <Link
                      key={button.title}
                      href={button.href}
                      className="inline-flex items-center space-x-2 bg-white/10 hover:bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium border-2 border-accent/20 hover:border-accent shadow-lg shadow-accent/10 transition-all w-full sm:w-auto justify-center"
                    >
                      {button.icon}
                      <span>{button.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Success Stories Carousel */}
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <div className="bg-accent/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">{successStories[currentStory].year}</h3>
                <p className="text-gray-300 mb-4">Our results speak for us...</p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-[100px] h-[100px] bg-accent/30 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{successStories[currentStory].name}</h4>
                    <p className="text-accent">{successStories[currentStory].achievement}</p>
                    <p className="text-white/90 text-sm">{successStories[currentStory].college}</p>
                    <p className="text-sm text-gray-300">{successStories[currentStory].program}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStory ? 'bg-accent' : 'bg-accent/30'
                      }`}
                      aria-label={`View success story ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Potencia Academy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Comprehensive Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all">
                <div className="mb-6">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{achievement.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {achievement.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethodology.map((method, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300">{method.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Centers</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bathinda Center</h3>
                  <p className="text-gray-300 mb-2">40 Feet Rd, Model Town, Phase-3, Model Town, Bathinda, Punjab 151001</p>
                  <p className="text-accent">+91 92395-00001</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Moga Center</h3>
                  <p className="text-gray-300 mb-2">Samsung care center, Friends Colony, Moga, Punjab 142001</p>
                  <p className="text-accent">+91 98726-50200</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-6">Ready to start your journey towards excellence? Contact us today!</p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@potencia.in
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9239500001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Discover the perfect course for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JEE Card */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <h3 className="text-2xl font-bold mb-4">JEE</h3>
              <div className="h-40 relative mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <Link 
                href="/courses/iit-jee"
                className="text-accent group-hover:text-white flex items-center gap-2"
              >
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* NEET Card */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <h3 className="text-2xl font-bold mb-4">NEET</h3>
              <div className="h-40 relative mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <Link 
                href="/courses/neet"
                className="text-accent group-hover:text-white flex items-center gap-2"
              >
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Foundation Card */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <h3 className="text-2xl font-bold mb-4">Class 6-10</h3>
              <div className="h-40 relative mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            <Link 
                href="/courses/foundation"
                className="text-accent group-hover:text-white flex items-center gap-2"
            >
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators dedicated to your success.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Courses',
    description: 'Structured curriculum designed for maximum learning effectiveness.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    description: 'Consistent success with outstanding student achievements.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
] 