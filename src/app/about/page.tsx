'use client';
import React from 'react'

function About() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-5xl font-medium font-[family-name:var(--font-geist-sans)]">
      <div>About<span className='italic font-bold'> Pomesh</span></div>
      <div className='text-lg grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-light'>The Pomodoro Technique is a time management method designed to improve focus and productivity by breaking work into intervals, traditionally 25 minutes long, separated by short breaks. It helps people manage their time effectively and reduce mental fatigue.</div>
    </main>
    
  )
}

export default About