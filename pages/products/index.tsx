import Head from 'next/head'
import { Container, Content } from '../../theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const Products = () => {
    return(<Container>
        <Header />
        <Content>
            <Section 
                title={{ 
                    text: 'eButler South Africa', 
                    options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                    text: 'Ecommerce', 
                    options:{title: false, light: true} 
                }}
                description={{ text: "eButler is a grocery delivery platform offering savings of up to 25% on popular brands in South Africa. eButler offers next day delivery to customers around Gauteng and 72hr delivery to the rest of the country."}}
                image={{
                    source: '/work/logos/ebutler.svg', 
                    position:'left',
                    styles:{ width: "80%", height: "80%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', link: "https://www.ebutler.co.za", options: {medium: true}}}
                padding="24px"
                primary/>

            <Section
                title={{  text: 'Flemoji', options:{title: true, heavy: true} }}
                subtitle={{ text: 'Music Streaming', options:{title: false, light: true}  }}
                description={{ 
                    text: 'Flemoji is a music distribution and discovery platform for upcoming artists. Flemoji makes it easy for artists to engage their fanbase while also allowing them a one click music distribution to DSPs.', 
                }}
                image={{
                    source: '/work/logos/flemoji.svg', 
                    position:'right', styles:{ width: "80%", height: "80%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', link: "https://www.flemoji.com", options: {medium: true}}}
                padding="24px"
                primary/>
            <Section 
                title={{ 
                text: 'Venture Links', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Cohot Management Platform', 
                options:{title: false, light: true} 
                }}
                description={{ text: "We help organizations with measuring, collecting, analyzing, and reporting of web data based on organizational and user goals."}}
                image={{
                source: '/work/logos/venturelinks.svg', 
                position:'left',
                styles:{ width: "80%", height: "80%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', link: "https://www.venturelinks.co.za", options: {medium: true}}}
                padding="24px"
                primary/>
                
            <Section
                title={{ 
                text: 'Varsity Links', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Education', 
                options:{title: false, light: true} 
                }}
                description={{ 
                text: 'Flemoji is a music distribution and discovery platform for upcoming artists. Flemoji makes it easy for artists to engage their fanbase while also allowing them a one click music distribution to DSPs.', 
                }}
                image={{
                source: '/work/logos/varsitylinks.svg', 
                position:'right', 
                styles:{ width: "80%", height: "80%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', link: "https://www.varsitylinks.co.za", options: {medium: true}}}
                padding="24px"
                primary/>
                
            <Section
                title={{ 
                text: 'Altur', 
                options:{title: true, heavy: true} 
                }}
                subtitle={{ 
                text: 'Chatbot Framework', 
                options:{title: false, light: true} 
                }}
                description={{ 
                text: 'Altur is an omnichannel communication platform that enables businesses to communicate with their customers and potential customer on any instant messaging platform.', 
                }}
                image={{
                source: '/work/logos/altur.svg', 
                position:'left', 
                styles:{ width: "80%", height: "80%" }
                }}
                primaryButton={{text: 'Learn More', position:'right', link: "https://www.altur.io", options: {medium: true}}}
                padding="24px"
                primary/>
        </Content>
        <Footer />
        </Container>)
}

export default Products;