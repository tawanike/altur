import styled from 'styled-components';

export const BannerContainer = styled.div`
    flex: 1;
    flex-direction: row;
`;

export const BannerImage = styled.div`
    flex: 1;
`;

export const BannerText = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 100px;

    ${({title}: any) =>{
        switch(true) {
            case title:
                return `
                font-size: 32px;
                font-family: 'Montserrat', sans-serif;
            ` 

            default:
                return `font-size: 32px;font-family: 'Montserrat', sans-serif;`
        }
    }}
`;
