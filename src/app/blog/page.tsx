'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: 'success-story' | 'exam-tips' | 'career-guidance' | 'news'
  author: {
    name: string
    role: string
    image: string
  }
  date: string
  readTime: string
  image: string
  tags: string[]
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'success-story', name: 'Success Stories' },
    { id: 'exam-tips', name: 'Exam Tips' },
    { id: 'career-guidance', name: 'Career Guidance' },
    { id: 'news', name: 'News & Events' }
  ]

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'From Struggle to Success: My Journey to IIT Bombay',
      excerpt: 'Read how Rahul transformed his preparation strategy and secured AIR 235 in JEE Advanced 2023.',
      category: 'success-story',
      author: {
        name: 'Rahul Sharma',
        role: 'IIT Bombay, CSE',
        image: '/authors/rahul.jpg'
      },
      date: '2024-03-15',
      readTime: '8 min read',
      image: '/blog/success-story-1.jpg',
      tags: ['JEE Advanced', 'Success Story', 'Preparation Strategy']
    },
    {
      id: '2',
      title: 'Top 10 Time Management Tips for JEE Preparation',
      excerpt: 'Learn effective time management strategies that can help you balance your preparation across subjects.',
      category: 'exam-tips',
      author: {
        name: 'Dr. Rajesh Singh',
        role: 'HOD Physics',
        image: '/faculty/dr-singh.jpg'
      },
      date: '2024-03-14',
      readTime: '6 min read',
      image: '/blog/time-management.jpg',
      tags: ['Time Management', 'Study Tips', 'JEE Preparation']
    },
    {
      id: '3',
      title: 'Career Opportunities After NEET: Beyond MBBS',
      excerpt: 'Explore various career paths and opportunities available for medical aspirants beyond traditional MBBS.',
      category: 'career-guidance',
      author: {
        name: 'Dr. Priya Kumar',
        role: 'Senior Chemistry Faculty',
        image: '/faculty/dr-kumar.jpg'
      },
      date: '2024-03-13',
      readTime: '10 min read',
      image: '/blog/medical-careers.jpg',
      tags: ['NEET', 'Career Guidance', 'Medical Education']
    },
    {
      id: '4',
      title: 'Upcoming Changes in JEE Main 2025 Pattern',
      excerpt: 'Important updates about the new exam pattern and syllabus changes for JEE Main 2025.',
      category: 'news',
      author: {
        name: 'Academic Team',
        role: 'Potencia Academy',
        image: '/authors/team.jpg'
      },
      date: '2024-03-12',
      readTime: '5 min read',
      image: '/blog/jee-updates.jpg',
      tags: ['JEE Main', 'Exam Updates', 'Preparation']
    }
  ]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const getCategoryColor = (category: BlogPost['category']) => {
    switch (category) {
      case 'success-story':
        return 'bg-green-900/20 text-green-400 border-green-700/50'
      case 'exam-tips':
        return 'bg-blue-900/20 text-blue-400 border-blue-700/50'
      case 'career-guidance':
        return 'bg-purple-900/20 text-purple-400 border-purple-700/50'
      case 'news':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-700/50'
      default:
        return 'bg-white/5 text-white border-white/10'
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-white hover:text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="ml-4 text-xl font-bold text-white">Blog & Updates</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Updates & Resources</h2>
            <p className="mt-4 text-lg text-gray-400">
              Stay informed with the latest educational insights, success stories, and exam updates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white border-accent'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 rounded-lg overflow-hidden">
                {/* Post Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{post.author.name}</p>
                        <p className="text-xs text-gray-400">{post.author.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-6 inline-flex items-center text-accent hover:text-accent/90"
                  >
                    <span className="text-sm">Read More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-white/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter for the latest educational insights and exam updates.
            </p>
            <form className="mt-6 flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 