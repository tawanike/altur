import Head from 'next/head'
import { Container, Content } from '../../../../theme/components';
import Header from '../../../../components/Accounting/Header';
import Footer from '../../../../components/Accounting/Footer';

const EditCustomer = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting | Edit Customer Profile</title>
        </Head>
        <Header />
        <Content>
            <h1>Edit Customer</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default EditCustomer;