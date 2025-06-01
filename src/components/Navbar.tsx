'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const handleTabClick = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab(null)
    } else {
      setActiveTab(tab)
    }
  }

  // Close tab panel when clicking outside
  const handleClickOutside = () => {
    setActiveTab(null)
  }

  return (
    <>
      {/* Backdrop for clicking outside */}
      {activeTab && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleClickOutside}
        />
      )}
      
      <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50 border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 pl-2"
            >
              <Link href="/" className="flex items-center">
                <div className="flex items-center border-2 border-accent/50 rounded-lg px-3 py-1 hover:border-accent transition-colors">
                  <span className="text-3xl font-bold text-white tracking-wide mr-3">POTENCIA</span>
                  <span className="text-lg font-bold text-accent">Academy । Bathinda</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="ml-10 flex items-center space-x-6"
              >
                {navLinks.map((link) => (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() => handleTabClick(link.label)}
                      className={`text-gray-300 hover:text-white hover:bg-accent/10 px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                        activeTab === link.label ? 'text-white bg-accent/10' : ''
                      }`}
                    >
                      {link.label}
                    </button>

                    {/* Tab Panels for all courses */}
                    <AnimatePresence>
                      {activeTab === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-md border border-accent/20 rounded-lg shadow-xl p-8 z-50"
                        >
                          {link.label === 'IIT JEE' && (
                            <div className="grid grid-cols-3 gap-8">
                              {/* Courses Section */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Our Courses</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/iit-jee/two-year" className="text-gray-300 hover:text-white block">
                                      Two Year Program (Class XI-XII)
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Comprehensive preparation starting from class XI</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/one-year" className="text-gray-300 hover:text-white block">
                                      One Year Program (Class XII)
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Intensive preparation for class XII students</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/target" className="text-gray-300 hover:text-white block">
                                      Target Program (Droppers)
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Focused preparation for droppers</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/crash" className="text-gray-300 hover:text-white block">
                                      Crash Course
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Last-minute preparation and revision</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Study Resources */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Study Resources</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/iit-jee/study-material" className="text-gray-300 hover:text-white block">
                                      Study Material
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Comprehensive study notes and materials</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/sample-papers" className="text-gray-300 hover:text-white block">
                                      Sample Papers
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Practice with previous year papers</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/mock-tests" className="text-gray-300 hover:text-white block">
                                      Mock Tests
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Online and offline test series</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/doubt-solving" className="text-gray-300 hover:text-white block">
                                      Doubt Solving
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">One-on-one doubt clearing sessions</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Features & Success */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Why Choose Us</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/iit-jee/faculty" className="text-gray-300 hover:text-white block">
                                      Expert Faculty
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Learn from experienced IITians</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/results" className="text-gray-300 hover:text-white block">
                                      Success Stories
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Our students in top IITs</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/iit-jee/features" className="text-gray-300 hover:text-white block">
                                      Special Features
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Regular tests and performance tracking</p>
                                  </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-accent/20">
                                  <Link 
                                    href="/contact" 
                                    className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Contact Us"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}

                          {link.label === 'NEET' && (
                            <div className="grid grid-cols-3 gap-8">
                              {/* Courses Section */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">NEET Courses</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/neet/two-year" className="text-gray-300 hover:text-white block">
                                      Two Year Program (XI-XII)
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Complete NEET preparation from class XI</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/one-year" className="text-gray-300 hover:text-white block">
                                      One Year Program (XII)
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Intensive XII grade preparation</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/repeater" className="text-gray-300 hover:text-white block">
                                      Repeater Batch
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Specialized program for repeating students</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/crash-course" className="text-gray-300 hover:text-white block">
                                      Crash Course
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Last-minute preparation & revision</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Study Material */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Learning Resources</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/neet/study-material" className="text-gray-300 hover:text-white block">
                                      Study Material
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">NCERT-focused study materials</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/test-series" className="text-gray-300 hover:text-white block">
                                      Test Series
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Chapter & full-length tests</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/previous-papers" className="text-gray-300 hover:text-white block">
                                      Previous Papers
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Solved NEET papers with solutions</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/biology-focus" className="text-gray-300 hover:text-white block">
                                      Biology Focus
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Special focus on Biology section</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Features */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Program Features</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/neet/faculty" className="text-gray-300 hover:text-white block">
                                      Expert Faculty
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Experienced medical professionals</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/results" className="text-gray-300 hover:text-white block">
                                      Success Stories
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Our students in top medical colleges</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/neet/features" className="text-gray-300 hover:text-white block">
                                      Special Features
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Daily practice & doubt sessions</p>
                                  </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-accent/20">
                                  <Link 
                                    href="/contact" 
                                    className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Contact Us"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}

                          {link.label === 'CUET' && (
                            <div className="grid grid-cols-3 gap-8">
                              {/* Courses Section */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">CUET Programs</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/cuet/comprehensive" className="text-gray-300 hover:text-white block">
                                      Comprehensive Course
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Complete CUET preparation</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/domain" className="text-gray-300 hover:text-white block">
                                      Domain Specific
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Focus on specific subjects</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/language" className="text-gray-300 hover:text-white block">
                                      Language Course
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Language section preparation</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/aptitude" className="text-gray-300 hover:text-white block">
                                      General Test
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Aptitude & reasoning preparation</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Resources */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Study Resources</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/cuet/materials" className="text-gray-300 hover:text-white block">
                                      Study Material
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Subject-wise study materials</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/mock-tests" className="text-gray-300 hover:text-white block">
                                      Mock Tests
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Online practice tests</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/previous-papers" className="text-gray-300 hover:text-white block">
                                      Previous Papers
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Solved previous year papers</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Features */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Our Features</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/cuet/faculty" className="text-gray-300 hover:text-white block">
                                      Expert Teachers
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Experienced subject experts</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/results" className="text-gray-300 hover:text-white block">
                                      Success Stories
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Students in top central universities</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/cuet/counselling" className="text-gray-300 hover:text-white block">
                                      Career Counselling
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">University & course selection guidance</p>
                                  </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-accent/20">
                                  <Link 
                                    href="/contact" 
                                    className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Contact Us"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}

                          {link.label === 'Foundation' && (
                            <div className="grid grid-cols-3 gap-8">
                              {/* Programs */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Foundation Programs</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/foundation/class-6" className="text-gray-300 hover:text-white block">
                                      Class 6th Program
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Early start for better future</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/class-7" className="text-gray-300 hover:text-white block">
                                      Class 7th Program
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Building strong basics</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/class-8" className="text-gray-300 hover:text-white block">
                                      Class 8th Program
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Preparation for advanced concepts</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/class-9" className="text-gray-300 hover:text-white block">
                                      Class 9th Program
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Pre-foundation for competitive exams</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/class-10" className="text-gray-300 hover:text-white block">
                                      Class 10th Program
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Board exam preparation</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Features */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Program Features</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/foundation/curriculum" className="text-gray-300 hover:text-white block">
                                      Integrated Curriculum
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">School & competitive exam syllabus</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/methodology" className="text-gray-300 hover:text-white block">
                                      Teaching Methodology
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Activity-based learning</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/assessment" className="text-gray-300 hover:text-white block">
                                      Regular Assessment
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Periodic tests & feedback</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/olympiad" className="text-gray-300 hover:text-white block">
                                      Olympiad Training
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Special preparation for Olympiads</p>
                                  </li>
                                </ul>
                              </div>

                              {/* Support */}
                              <div>
                                <h3 className="text-lg font-bold text-white mb-4 border-b border-accent/20 pb-2">Student Support</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/courses/foundation/mentoring" className="text-gray-300 hover:text-white block">
                                      Personal Mentoring
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">One-on-one guidance</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/parents" className="text-gray-300 hover:text-white block">
                                      Parent Support
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Regular parent-teacher meetings</p>
                                  </li>
                                  <li>
                                    <Link href="/courses/foundation/tracking" className="text-gray-300 hover:text-white block">
                                      Progress Tracking
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">Detailed performance analysis</p>
                                  </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-accent/20">
                                  <Link 
                                    href="/contact" 
                                    className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Contact Us"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  title="Contact Us"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
                <Link
                  href="/student/login"
                  className="border border-accent hover:bg-accent/10 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ml-2"
                >
                  Student Login
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-accent/10 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-accent/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-accent/10 block px-3 py-1.5 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 mt-2">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setIsOpen(false)}
                title="Contact Us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
              <Link
                href="/student/login"
                className="border border-accent hover:bg-accent/10 text-white px-3 py-1.5 rounded-md text-xs font-medium flex-1 text-center"
                onClick={() => setIsOpen(false)}
              >
                Student Login
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  )
}

const navLinks = [
  { href: '/courses/iit-jee', label: 'IIT JEE' },
  { href: '/courses/neet', label: 'NEET' },
  { href: '/courses/cuet', label: 'CUET' },
  { href: '/courses/foundation', label: 'Foundation' },
  { href: '/study-material', label: 'Study Material' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About Us' },
] 