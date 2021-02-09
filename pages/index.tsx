import Head from 'next/head'
import { Container, Content } from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Section from '../components/Section';
import List from '../components/List';


import React from 'react';

export default function Home() {
  return (<Container>
    <Header />
    <Content>
      <Banner />
      <Section 
        title={{ 
          text: 'Web and Mobile App Development', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'Measure every step and don\'t, no need for guess work', 
          options:{title: false, light: true} 
        }}
        description={{ text: "We help organizations with measuring, collecting, analyzing, and reporting of web data based on organizational and user goals."}}
        image={{
          source: '/development.png', 
          position:'left',
          styles:{ width: "100%", height: "100%" }
        }}
        // primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
        // secondaryButton={{
        //   text: 'Get Started', 
        //   position:'right', 
        //   options: {medium: true, margin: '0 0 0 16px'}
        // }}
        padding="24px"
        // primary
        // secondaryOutline
      />
      <Section
        title={{ 
          text: 'Strategy and Consulting', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'CTO as a service', 
          options:{title: false, light: true} 
        }}
        description={{ 
          text: 'Nowadays, companies need to leverage technology more and more to remain relevant in their respective markets. Our consulting service seeks to help you with this, we want to become your CTO, to help you harness technology to make your business processes much more efficient.', 
        }}
        image={{
          source: '/collaboration.png', 
          position:'right', 
          styles:{ width: "100%", height: "100%" }
        }}
        // primaryButton={{text: 'Primary Button', position:'right', options: {medium: true}}}
        // secondaryButton={{text: 'Secondary Button', position:'right', options: {medium: true, margin: '0 0 0 16px'}}}
        // secondary
        // primaryOutline
        padding="24px" />

      <Section 
        title={{ 
          text: 'Web and data analytics', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'Measure every step and don\'t, no need for guess work', 
          options:{title: false, light: true} 
        }}
        description={{ text: "Big data will offer your company the chance to understand your customers better and to be able customize their experience with your business. By storing and analyzing data about your different customers, you can tailor your service offering to each and every one of them and ensure they get the best service."}}
        image={{
          source: '/analytics.png', 
          position:'left',
          styles:{ width: "80%", height: "80%" }
        }}
        // primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
        // secondaryButton={{
        //   text: 'Get Started', 
        //   position:'right', 
        //   options: {medium: true, margin: '0 0 0 16px'}
        // }}
        padding="24px"
        // primary
        // secondaryOutline
      />

      <Section
        title={{ 
          text: 'E-commerce Development', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'Sell online on any device', 
          options:{title: false, light: true} 
        }}
        description={{ 
          text: 'We build end-to-end ecommerce platforms that enable our clients to reach their customers on any kind of device; mobile app, web and instant messaging platforms like WhatsApp.', 
        }}
        image={{
          source: '/ecommerce.png', 
          position:'left', 
          styles:{ width: "100%", height: "100%" }
        }}
        // primaryButton={{text: 'Primary Button', position:'right', options: {medium: true}}}
        // secondaryButton={{text: 'Secondary Button', position:'right', options: {medium: true, margin: '0 0 0 16px'}}}
        // secondary
        // primaryOutline
        padding="24px" />

      <Section 
        title={{ 
          text: 'Content Management', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'Measure every step and don\'t, no need for guess work', 
          options:{title: false, light: true} 
        }}
        description={{ text: "In our experience, websites fail because of a lack of content. Websites need to be updated regularly to remain useful to your customers. We will set up a content plan for your website, and even write the content for you if you require."}}
        image={{
          source: '/collaboration.png', 
          position:'right',
          styles:{ width: "100%", height: "100%" }
        }}
        // primaryButton={{text: 'Learn More', position:'right', options: {medium: true}}}
        // secondaryButton={{
        //   text: 'Get Started', 
        //   position:'right', 
        //   options: {medium: true, margin: '0 0 0 16px'}
        // }}
        padding="24px"
        primary
        secondaryOutline
      />
      
      {/* <Section
        title={{ 
          text: 'Chatbot development', 
          options:{title: true, heavy: true} 
        }}
        subtitle={{ 
          text: 'This is title text', 
          options:{title: true, heavy: true} 
        }}
        description={{ 
          text: 'This is title text', 
          options:{title: true, heavy: true} 
        }}
        image={{
          source: '/development.png', 
          position:'right', 
          styles:{ width: "100%", height: "100%" }
        }}
        primaryButton={{text: 'Primary Button', position:'right', options: {medium: true}}}
        secondaryButton={{text: 'Secondary Button', position:'right', options: {medium: true, margin: '0 0 0 16px'}}}
        secondary
        primaryOutline
        padding="24px"
      /> */}
      <List 
        title={{ 
          text: 'Our products', 
          options:{title: true, heavy: true, center: true} 
        }}
        subtitle={{ 
          text: '', 
          options:{large: true, light: true, center: true} 
        }}
        description={{ 
          text: '', 
          options:{center: true} 
        }}
        items={[]}
      horizontal/>

    </Content>
    <Footer />
  </Container>)
}
