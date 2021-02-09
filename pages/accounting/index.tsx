import Head from 'next/head'
import { Container, Content } from '../../theme';
import Header from '../../components/Accounting/Header';
import Footer from '../../components/Accounting/Footer';

const Home = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Home</title>
        </Head>
        <Header />
        <Content>
            <h1>Accounting Home</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Home;