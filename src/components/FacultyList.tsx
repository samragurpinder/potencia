'use client'

import Image from 'next/image'

export const facultyData = [
  {
    id: "FACULTY001",
    name: "Mr. Naveen Kumar Dayam",
    designation: "CEO, HOD Physics",
    subject: "Physics",
    expertise: "JEE Advanced Physics",
    photo: "/faculty/naveen.jpg" // Add actual photo path when available
  },
  {
    id: "FACULTY002",
    name: "Mr. Akhilesh Kashyap",
    designation: "Senior Faculty Chemistry",
    subject: "Chemistry",
    expertise: "JEE Chemistry",
    photo: "/faculty/akhilesh.jpg" // Add actual photo path when available
  },
  {
    id: "FACULTY003",
    name: "Ms. Radhika",
    designation: "Senior Faculty Chemistry",
    subject: "Chemistry",
    expertise: "NEET Chemistry",
    photo: "/faculty/radhika.jpg" // Add actual photo path when available
  },
  {
    id: "FACULTY004",
    name: "Mr. Jayant Kumar",
    designation: "HOD Mathematics",
    subject: "Mathematics",
    expertise: "JEE Mathematics",
    photo: "/faculty/jayant.jpg" // Add actual photo path when available
  },
  {
    id: "FACULTY005",
    name: "Mr. Gurkirat Singh",
    designation: "HOD Botany",
    subject: "Botany",
    expertise: "NEET Botany",
    photo: "/faculty/gurkirat.jpg" // Add actual photo path when available
  }
]

export default function FacultyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {facultyData.map((faculty) => (
        <div key={faculty.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
              {faculty.photo ? (
                <Image
                  src={faculty.photo}
                  alt={faculty.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              ) : (
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{faculty.name}</h3>
              <p className="text-gray-400">{faculty.designation}</p>
              <p className="text-accent">{faculty.subject}</p>
              <p className="text-sm text-gray-400">{faculty.expertise}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 