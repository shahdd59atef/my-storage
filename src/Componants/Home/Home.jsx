import React from 'react';
import ServicesSlider from '../ServicesSlider/ServicesSlider';
import Stats from '../Stats/Stats';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <ServicesSlider />
      <Stats />
      <WhyChooseUs />
      <WhatsAppButton />
    </>
  );
}


