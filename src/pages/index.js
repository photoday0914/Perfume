import React, { useEffect } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Brands from "../components/brands"
import About from "../components/about"
import Testimonial from "../components/testimonial"
import NewsLetter from "../components/newsletter"
import Footer from "../components/footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Home = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const slideLeft = gsap.utils.toArray(".slide-left")
    slideLeft.forEach(element => {
      gsap.from(element, {
        x: "-100%",
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideRight = gsap.utils.toArray(".slide-right")
    slideRight.forEach(element => {
      gsap.from(element, {
        x: "100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })

    const slideUp = gsap.utils.toArray(".slide-up")
    slideUp.forEach(element => {
      gsap.from(element, {
        y: "100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })
    const slideDown = gsap.utils.toArray(".slide-down")
    slideDown.forEach(element => {
      gsap.from(element, {
        y: "-100%",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: element,
        },
      })
    })
    gsap.from(".zoom-in", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".zoom-in",
      },
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Brands />
      <About />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </Layout>
  )
}

export default Home
