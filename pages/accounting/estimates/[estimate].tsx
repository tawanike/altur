import Head from 'next/head'
import { Container, Content } from '../../../theme/components';
import Header from '../../../components/Accounting/Header';
import Footer from '../../../components/Accounting/Footer';

const Estimates = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Estimates</title>
        </Head>
        <Header />
        <Content>
            <h1>Estimates</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Estimates;