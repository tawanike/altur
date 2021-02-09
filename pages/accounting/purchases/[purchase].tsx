import Head from 'next/head'
import { Container, Content } from '../../../theme/components';
import Header from '../../../components/Accounting/Header';
import Footer from '../../../components/Accounting/Footer';

const Purchases = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Purchases</title>
        </Head>
        <Header />
        <Content>
            <h1>Purchases</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Purchases;