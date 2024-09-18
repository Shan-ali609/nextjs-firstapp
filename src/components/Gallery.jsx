
import React from 'react'
import Image from 'next/image'
import '@/style/gallery.css'

export default function Gallery() {
  const projects = [
    "Project #1",
    "Project #2",
    "Project #3",
    "Project #4",
    "Project #5",
    "Project #6",
    "Project #13",
    "Project #14",
    "Project #17",
    "Project #19",
  ];

  return (
    <div className='gallery-grid'>
      {projects.map((project, index) => (
        <div className='gallery-item' key={index}>
          <Image
            src={`/images/${index + 1}.jpg`}
            height={300}
            width={300}
            alt={`gallery ${index + 1}`}
          />
          <div className='overlay'>{project}</div>
        </div>
      ))}
    </div>
  )
}
