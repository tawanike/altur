import styled from 'styled-components';
import { COLORS } from '../../variables';

export const FooterContainer = styled.div`
    flex: 1;
    align-self: end;
    flex-direction: row;
    height: 200px;
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    padding: 32px;
    width: 100%;
`;