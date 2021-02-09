import styled from 'styled-components';
import { COLORS } from '../../variables';


export const HeaderContainer = styled.div`
    height: 80px;
    width: 100vw;
    padding: 8px 32px ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${COLORS.offWhite}
`;

export const NavBar = styled.div`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const Logo = styled.div`
    height: 128px;
    width: 128px;
    padding: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 32px;
    margin-top: -32px;
`;

export const HeadLinksContainer = styled.div`
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLink = styled.a`
    padding: 16px 64px;
    font-weigh: 200;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.secondary}
`;
