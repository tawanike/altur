import Head from 'next/head'
import { Container, Content } from '../../../theme/components';
import Header from '../../../components/Accounting/Header';
import Footer from '../../../components/Accounting/Footer';


const Vendors = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Vendors</title>
        </Head>
        <Header />
        <Content>
            <h1>Vendors</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Vendors;