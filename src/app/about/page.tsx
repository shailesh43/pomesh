import React from 'react'
import TimerComponent from '../components/TimerComponent'

function About() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-5xl font-medium font-[family-name:var(--font-geist-sans)]">
      <div>About<span className='italic font-bold'>Pomesh</span></div>
      {/* <div className="timer">
        <TimerComponent />
      </div> */}
    </main>
    
  )
}

export default About