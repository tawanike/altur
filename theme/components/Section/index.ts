import styled from 'styled-components';
import { COLORS } from '../../variables';

export const SectionContainer = styled.div`
    flex: 1;
    flex-direction: row;
    margin: ${(props:any) => props.margin ?? 0};
    padding: ${(props:any) => props.padding ?? 0};
`;


export const SectionText = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 100px;
`;


export const SectionImage = styled.div`
    flex: 1;
`;

export const SectionButtons = styled.div`
    background-color: ${COLORS.white};
    flex-direction: row;
`;