import Link from 'next/link';
import Image from 'next/image'
import { HeaderContainer, NavBar, Logo, HeadLinksContainer, HeaderLink } from '../../theme/components/Header';

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
                <Link href="/products">
                    <a>
                        <HeaderLink>Products</HeaderLink>
                    </a>
                </Link>
{/* 
                <Link href="/approach">
                    <a>
                        <HeaderLink>Approach</HeaderLink>
                    </a>
                </Link> */}

                {/* <Link href="/about">
                    <a>
                        <HeaderLink>About</HeaderLink>
                    </a>
                </Link>

                <Link href="/contacts">
                    <a>
                        <HeaderLink>Contact Us</HeaderLink>
                    </a>
                </Link> */}
            </HeadLinksContainer>
        </NavBar>
    </HeaderContainer>)
};

export default Header;