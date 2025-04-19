'use client';
import React from 'react'

function About() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-5xl font-medium font-[family-name:var(--font-geist-sans)]">
      <div className='italic'>About Pomesh</div>
      
    <section className="max-w-2xl mx-auto px-4 text-white">
      <p className="text-gray-400 text-2xl">
        A simple and focused productivity tool based on the Pomodoro Technique — 45-minute work sessions followed by short breaks.
      </p>

      <h4 className='underline underline-offset-8 text-gray-400 mt-12 mb-4'>Features</h4>
      <ul className="space-y-8">
        <li>
          <p className="text-white text-xl">⏱️ Pomodoro Timer</p>
          <p className="text-gray-400 text-sm">Stay on task with focused intervals and regular breaks.</p>
        </li>
        <li>
          <p className="text-white text-xl">📊 Session Tracker</p>
          <p className="text-gray-400 text-sm">Track your daily Pomodoro count to stay motivated.</p>
        </li>
        <li>
          <p className="text-white text-xl">🎯 Task Management</p>
          <p className="text-gray-400 text-sm">Assign Pomodoros to your tasks and mark progress.</p>
        </li>
        <li>
          <p className="text-white text-xl">🔔 Notifications</p>
          <p className="text-gray-400 text-sm">Be alerted when it’s time to start or take a break.</p>
        </li>
        <li>
          <p className="text-white text-xl">🌙 Dark Mode</p>
          <p className="text-gray-400 text-sm">Comfortable viewing, day or night.</p>
        </li>
      </ul>
    </section>
      

    </main>
    
  )
}

export default About