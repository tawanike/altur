import Head from 'next/head'
import { Container, Content } from '../../../../theme/components';
import Header from '../../../../components/Accounting/Header';
import Footer from '../../../../components/Accounting/Footer';

const Employees = () => {
    return(<Container>
        <Head>
            <title>Mmogo Accounting Payroll | Employees</title>
        </Head>
        <Header />
        <Content>
            <h1>Employees</h1>
        </Content>
        
        <Footer />
        </Container>)
}

export default Employees;