import Link from 'next/link';
import Image from 'next/image'
import { HeaderContainer, NavBar, Logo, HeadLinksContainer, HeaderLink } from '../../../theme/components/Header';

const Header = () => {
    return (
    <HeaderContainer>
        <NavBar>
            <Logo>
                <Link href="/">
                    <a>
                        <Image src='/logo.jpeg' alt="Mmogo Media Logo" width="256" height="256"/>
                    </a>
                </Link>
            </Logo>
            <HeadLinksContainer>
                <Link href="/accounting/customers">
                    <a>
                        <HeaderLink>Customers</HeaderLink>
                    </a>
                </Link>

                <Link href="/accounting/estimates">
                    <a>
                        <HeaderLink>Estimates</HeaderLink>
                    </a>
                </Link>

                <Link href="/accounting/invoices">
                    <a>
                        <HeaderLink>Invoices</HeaderLink>
                    </a>
                </Link>

                <Link href="/accounting/purchases">
                    <a>
                        <HeaderLink>Purchases</HeaderLink>
                    </a>
                </Link>
                <Link href="/accounting/vendors">
                    <a>
                        <HeaderLink>Vendors</HeaderLink>
                    </a>
                </Link>
                <Link href="/accounting/payroll">
                    <a>
                        <HeaderLink>Payroll</HeaderLink>
                    </a>
                </Link>
            </HeadLinksContainer>
        </NavBar>
    </HeaderContainer>)
};

export default Header;