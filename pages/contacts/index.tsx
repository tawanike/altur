import Head from 'next/head'
import { Container, Content } from '../../theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contacts = () => {
    return(<Container>
        <Header />
        <Content>
        <h1>Get in touch</h1>
        </Content>
            
        <Footer />
        </Container>)
}

export default Contacts;