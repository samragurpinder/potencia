'use client'

import { useState } from 'react'

const forumData = {
  categories: [
    { id: 'all', name: 'All Discussions' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'general', name: 'General' }
  ],
  discussions: [
    {
      id: 1,
      title: 'Help with Wave Interference Problems',
      category: 'physics',
      author: 'Rahul S.',
      date: '2024-03-15',
      replies: 5,
      views: 42,
      lastReply: {
        author: 'Mr. Naveen Kumar Dayam',
        date: '2024-03-16'
      }
    },
    {
      id: 2,
      title: 'Organic Chemistry Nomenclature Rules',
      category: 'chemistry',
      author: 'Priya K.',
      date: '2024-03-14',
      replies: 8,
      views: 76,
      lastReply: {
        author: 'Mr. Akhliesh Kashyap',
        date: '2024-03-15'
      }
    },
    {
      id: 3,
      title: 'Integration Techniques Discussion',
      category: 'mathematics',
      author: 'Amit R.',
      date: '2024-03-13',
      replies: 12,
      views: 95,
      lastReply: {
        author: 'Dr. Kumar',
        date: '2024-03-14'
      }
    }
  ]
}

export default function ForumsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showNewTopicModal, setShowNewTopicModal] = useState(false)

  const filteredDiscussions = activeCategory === 'all'
    ? forumData.discussions
    : forumData.discussions.filter(d => d.category === activeCategory)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Discussion Forums</h1>
          <button
            onClick={() => setShowNewTopicModal(true)}
            className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Topic</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {forumData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white hover:text-accent cursor-pointer">
                    {discussion.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-400">
                      Started by {discussion.author}
                    </span>
                    <span className="text-sm text-gray-400">
                      {discussion.date}
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                      {forumData.categories.find(c => c.id === discussion.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-gray-400">Replies</p>
                      <p className="text-lg font-bold text-white">{discussion.replies}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Views</p>
                      <p className="text-lg font-bold text-white">{discussion.views}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    Last reply by {discussion.lastReply.author}
                    <br />
                    {discussion.lastReply.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Topic Modal */}
      {showNewTopicModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Create New Topic</h2>
              <button
                onClick={() => setShowNewTopicModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Category
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white">
                  {forumData.categories.filter(c => c.id !== 'all').map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white"
                  placeholder="Enter topic title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Content
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white h-32"
                  placeholder="Write your message here..."
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewTopicModal(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Create Topic
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 