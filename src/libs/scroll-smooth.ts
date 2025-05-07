import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register the gsap scroll smooth once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const setupSmoothScroll = () => {
  if (typeof window !== 'undefined') {

    // Ensure this only runs in browser
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });
  }
};