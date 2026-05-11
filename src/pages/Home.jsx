import React from 'react'
import Hero from '../components/Home/Hero'
import FeatureShowcase from '../components/Home/FeatureShowcase'
import { TrustedBy } from '../components/Home/ClientSection'
import CoachScrollReveal from '../components/Home/CoachScrollReveal'
import ProblemSection from '../components/Home/ProblemSection'
export default function Home() {
  return (
    <>
    <Hero/>
    <FeatureShowcase/>
     <TrustedBy/>
     <CoachScrollReveal/>
<ProblemSection/>
    </>
  )
}
