import Subscription from '@/components/pages/Subscription'
import React from 'react'

export default function page() {
  return (
    <div>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center xl:text-4xl text-xl">
          Subscription
        </h1>
      </section>
        <Subscription />
    </div>
  )
}
