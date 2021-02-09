import Head from 'next/head'
import { Container, Content } from '../../../../theme/components';
import Header from '../../../../components/Accounting/Header';
import Footer from '../../../../components/Accounting/Footer';
import { Form, Input, Button } from 'antd';

const NewCustomer = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

      const onFinish = (values: any) => {
        console.log(values);
      };

    return(<Container>
        <Head>
            <title>Mmogo Accounting | Ceate Customer Profile</title>
        </Head>
        <Header />
        <div className="container">
        <Content>
            
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <h1>Add a customer</h1>
                    <h3>Contact</h3>
                    <Form.Item label="Customer" name="customer" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Contact" name="contact">
                        <Input />
                    </Form.Item>
                    <h3>Billing</h3>
                    <Form.Item label="Currency" name="currency">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Address line 1" name="address_line_one">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Address line 2" name="address_line_two">
                        <Input />
                    </Form.Item>
                    <Form.Item label="City" name="city">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Postal/Zip code" name="postcode">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Country" name="country">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Province/State" name="province">
                        <Input />
                    </Form.Item>
                    <h3>Shipping</h3>
                    <Form.Item label="Address line 1" name="address_line_one">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Address line 2" name="address_line_two">
                        <Input />
                    </Form.Item>
                    <Form.Item label="City" name="city">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Postal/Zip code" name="postcode">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Country" name="country">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Province/State" name="province">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Delivery instructions" name="delivery_instructions">
                        <Input />
                    </Form.Item>
                    <h3>More</h3>
                    <Form.Item label="Account Number" name="account_number">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Fax" name="fax">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mobile" name="mobile">
                        <Input />
                    </Form.Item>                
                    <Form.Item label="Toll-free" name="toll_free">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Website" name="website">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Internal notes" name="internal_notes">
                        <Input />
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Save</Button>
                </Form>
            
        </Content>
        </div>
        <Footer />
        </Container>)
}

export default NewCustomer;