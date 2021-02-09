import styled from 'styled-components';
import { COLORS } from '../variables';

export const Container = styled.div`
    flex: 1;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    flex: 1;
    flex-direction: column;
`;

export const Text = styled.p`
    flex: 1;
    color: ${(props:any) => props.color ?? `${COLORS.black}`};
    margin: ${(props:any) => props.margin ?? 0};
    padding: ${(props:any) => props.padding ?? 0};
    
    ${({title, large, medium, small, tiny}: any) =>{
        switch(true) {
            case title:
                return `font-size: 32px;font-family: 'Montserrat', sans-serif;`;

            case large:
                return `font-size: 24px;`;

            case medium:
                return `font-size: 16px;`;
                
            case small:
                return `font-size: 14px;`;
            
            case tiny:
                return `font-size: 11px;`;
                
            default:
                return `font-size: 14px;`;
        }
    }}

    ${({light, semi, bold, heavy}: any) =>{
        switch(true) {
            case light:
                return `font-weight: 200;`;

            case semi:
                return `font-weight: 300;`;

            case bold:
                return `font-weight: 600;`;
                
            case heavy:
                return `font-weight: 700;`;

            default:
                return `font-weight: 400;`;
        }
    }}

    ${({center, right}: any) =>{
        switch(true) {
            case center:
                return `text-align: center;`;

            case right:
                return `text-align: right;`;

            default:
                return `text-align: left;`;
        }
    }}
`;

export const Image = styled.img`
    width: ${props => props.width+'px' || '20%'};
    height: ${props => props.height};
`;

export const Button = styled.button`
    display: inline-block;
    color: ${(props:any) => props.color ?? `${COLORS.black}`};
    background-color: ${(props:any) => props.backgroundColor ?? `${COLORS.primary}`};
    margin: ${(props:any) => props.margin ?? 0};
    padding: 12px 24px;
    text-transform: uppercase;

    ${({ block, large, medium, small, tiny}: any) =>{
        switch(true) {
            case block:
                return `
                    width: 100%;
                `;

            case large:
                return `
                    width: 75%;
                `;

            case medium:
                return `
                    width: 35%;
                    font-size: 12px;
                    background-color: ${COLORS.white};
                    color: ${COLORS.primary};
                    border-radius: 4px;
                `;
                
            case small:
                return `
                    width: 25%;
                `;
            
            case tiny:
                return `
                    width: 10%;
                `;
                
            default:
                return `
                    width: 25%;
                `;
        }
    }}

    ${({ primary, secondary, error, success, warning, link}: any) =>{
        switch(true) {
            case primary:
                return `
                    border: 1px solid ${COLORS.primary};
                    background-color: ${COLORS.primary};
                    color: ${COLORS.white};
                `;

            case secondary:
                return `
                    border: 1px solid ${COLORS.secondary};
                    background-color: ${COLORS.secondary};
                    color: ${COLORS.white};
                `;

            case error:
                return `
                    width: 35%;
                `;
                
            case success:
                return `
                    width: 25%;
                `;
            
            case warning:
                return `
                    width: 10%;
                `;

            case link:
                return `
                    width: 10%;
                `;
                
            default:
                return `
                    width: 25%;
                `;
        }
    }}

    ${({primaryOutline, secondaryOutline}: any) =>{
        switch(true) {
            case primaryOutline:
                return `
                    border: 1px solid ${COLORS.primary};
                    background-color: ${COLORS.white};
                    color: ${COLORS.primary};
                    
                `;

            case secondaryOutline:
                return `
                    border: 1px solid ${COLORS.secondary};
                    background-color: ${COLORS.white};
                    color: ${COLORS.secondary};
                `;
            default:
                return `
                    border: 1px solid ${COLORS.primary};
                    background-color: ${COLORS.primary};
                    color: ${COLORS.white}
                `;
        }
    }}

    

`;

export const Section = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export * from './Header';
export * from './Footer';