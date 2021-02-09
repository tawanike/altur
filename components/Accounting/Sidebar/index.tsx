import Link from 'next/link';

import { FooterContainer } from '../../../theme/components/Footer';

const Footer = () => {
    return(<FooterContainer>
        
        <Link href="/contacts">
            <a>Contact Us</a>
        </Link>

    </FooterContainer>);
}

export default Footer;