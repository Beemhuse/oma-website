import React from 'react'
import SubscriptionCard from '../component/card/SubscriptionCard'
const benefitsList = [
    "All benefits listed below",
    "Priority access to events and conferences",
    "Complimentary tickets to exclusive events",
    "Recognition on NGO's website and social media",
  ];
export default function Subscription() {
  return (
    <div>
        <SubscriptionCard price="$100" duration="year" benefits={benefitsList}/>
    </div>
  )
}
