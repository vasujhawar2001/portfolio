"use client";

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text hover:text-transparent
    sm:text-5xl text-3xl font-extrabold flex h-full items-center justify-center mt-96'>
            <Typewriter
            words={["Coming Soon...", "Stay Tuned!", "<//Work in Progress//>"]}
            loop={true}
            delaySpeed={2000}
          />
    </div>
  )
}

export default page