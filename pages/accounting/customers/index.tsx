import Head from 'next/head'
import { Container, Content } from '../../../theme/components';
import Header from '../../../components/Accounting/Header';
import Footer from '../../../components/Accounting/Footer';

const Customers = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Customers</title>
        </Head>
        <Header />
        <Content>
            <h1>Customers</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Customers;