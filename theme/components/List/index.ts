import styled from 'styled-components';
import { COLORS } from '../../variables';


export const ListContainer = styled.div`
    flex: 1;
    flex-direction: column;
`;

export const ListHeader = styled.div`
    flex: 1;
    flex-direction: column;
`;

export const ListItems = styled.div`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0 16px 0;
`;

export const ListItem = styled.div`
    flex: 1;
    padding: 12px;
    flex-direction: column;
    
`;

export const ListItemImage = styled.img`
    flex: 1;
    width: 100%;
`;
