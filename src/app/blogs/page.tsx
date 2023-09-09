"use client";

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text hover:text-transparent
    text-5xl font-extrabold flex h-full justify-center mt-96'>
            <Typewriter
            words={["Coming Soon...", "Stay Tuned!", "<///Work in Progress///>"]}
            loop={true}
            delaySpeed={2000}
          />
    </div>
  )
}

export default page