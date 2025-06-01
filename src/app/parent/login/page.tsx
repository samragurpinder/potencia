'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ParentLogin() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    studentRollNumber: '',
    parentId: '',
    password: '',
    rememberMe: false
  })

  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // For demo purposes, using hardcoded credentials
    // In production, this should be replaced with actual API call
    if (formData.studentRollNumber === '2024/XI/001' && 
        formData.parentId === 'PARENT001' && 
        formData.password === 'parent123') {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Store login state (in production, use proper auth tokens)
      localStorage.setItem('parentLoggedIn', 'true')
      localStorage.setItem('parentData', JSON.stringify({
        studentName: 'Gurpinder Singh',
        studentClass: 'XI',
        studentRollNumber: '2024/XI/001',
        parentName: 'Mr. Singh',
        parentId: 'PARENT001'
      }))

      // Redirect to dashboard
      router.push('/parent/dashboard')
    } else {
      setError('Invalid credentials. Please try Student Roll Number: 2024/XI/001, Parent ID: PARENT001, Password: parent123')
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo and Back Link */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold text-accent">Potencia Academy</h1>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Parent Login</h2>
            <p className="text-gray-400">Monitor your child's academic progress</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="studentRollNumber" className="block text-sm font-medium text-gray-300 mb-2">
                Student Roll Number
              </label>
              <input
                id="studentRollNumber"
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-white"
                placeholder="Enter student's roll number"
                value={formData.studentRollNumber}
                onChange={(e) => setFormData({ ...formData, studentRollNumber: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="parentId" className="block text-sm font-medium text-gray-300 mb-2">
                Parent ID
              </label>
              <input
                id="parentId"
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-white"
                placeholder="Enter your parent ID"
                value={formData.parentId}
                onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-white"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-accent hover:text-accent/80">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Having trouble logging in?{' '}
              <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                Contact Support
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              Demo Credentials:
              <br />
              Student Roll Number: 2024/XI/001
              <br />
              Parent ID: PARENT001
              <br />
              Password: parent123
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Need help?{' '}
            <Link href="/contact" className="text-accent hover:text-accent/80">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
} 