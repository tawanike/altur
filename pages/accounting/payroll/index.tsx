import Head from 'next/head'
import { Container, Content } from '../../../theme/components';
import Header from '../../../components/Accounting/Header';
import Footer from '../../../components/Accounting/Footer';

const Payroll = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting Payroll | Home</title>
        </Head>
        <Header />
        <Content>
            <h1>Payroll Home</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Payroll;