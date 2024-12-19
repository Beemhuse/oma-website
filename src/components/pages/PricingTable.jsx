'use client'
import React, { useState } from 'react'
import { Card } from './Card'
import { Button } from './Button'
import { CheckIcon } from './CheckIcon'

const tiers = [
  {
    name: 'Premium Member',
    price: 100,
    benefits: [
      'All benefits listed below',
      'Priority access to events and conferences',
      'Complimentary tickets to exclusive events',
      'Recognition on NGO\'s website and social media',
    ],
  },
  {
    name: 'Silver Member',
    price: 50,
    benefits: [
      'Access to exclusive events and conferences',
      'Discounts on tickets to events and conferences',
      'Access to NGO\'s newsletter and publications',
      'Listing on NGO\'s website',
    ],
  },
  {
    name: 'Diamond Member',
    price: 500,
    benefits: [
      'All benefits listed above',
      'Opportunity to serve on NGO\'s board of directors',
      'Complimentary tickets to exclusive events',
      'Recognition on NGO\'s website and social media',
      'Opportunity to monitor events and conferences',
      'Personalized support from NGO\'s staff',
    ],
  },
  {
    name: 'Gold Member',
    price: 200,
    benefits: [
      'All benefits listed above',
      'Opportunity to serve on NGO\'s advisory board',
      'Complimentary tickets to exclusive events',
      'Recognition on NGO\'s website and social media',
      'Opportunity to sponsor events and conferences',
    ],
    highlighted: true,
  },
]

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="py-12 px-4">
      {/* Billing Toggle */}
      <div className="flex justify-center gap-2 mb-8">
        <div className="inline-flex items-center rounded-full border bg-white p-1 text-sm">
          <button
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-4 py-2 transition-colors ${
              !isAnnual ? 'bg-green-950 text-white' : 'hover:bg-green-50'
            }`}
          >
            Billed Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`rounded-full px-4 py-2 transition-colors ${
              isAnnual ? 'bg-green-950 text-white' : 'hover:bg-green-50'
            }`}
          >
            Billed Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={tier.highlighted ? 'bg-green-950 text-white' : 'bg-white'}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$</span>
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="ml-1 text-sm">/year</span>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-white text-green-950 hover:bg-gray-100'
                    : 'bg-green-950 text-white hover:bg-green-900'
                }`}
              >
                Get started
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

