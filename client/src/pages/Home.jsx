import React from 'react';
import Banner from '../components/home/Banner';
import BookingForm from '../components/home/BookingForm';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Rooms from '../components/home/Rooms';
import Projects from '../components/home/Projects';
import Amenities from '../components/home/Amenities';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Blog from '../components/home/Blog';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Banner />
      <BookingForm />
      <Features />
      <About />
      <Rooms />
      <Projects />
      <Amenities />
      <Testimonials />
      <CallToAction />
      <Blog />
      <ContactForm />
    </div>
  );
};

export default Home;