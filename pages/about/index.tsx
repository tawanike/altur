import Head from 'next/head'
import { Container, Content } from '../../theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
    return(<Container>
        <Header />
        <Content>
            <h1>About Us</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default About;