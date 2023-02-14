import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 1px 1px 9px -5px var(--transparent_dark);
    padding: 4%;
    background-color: white;
    border-radius: 2%;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    margin-right: 3%;
`

export const Image = styled.img`
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 100%;
` 

export const DescWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 1.5em;
    font-family: "Nunito-Black";
    color: ${({color}) => color ? color : "red"};
    text-transform: capitalize;
    padding: 0 0 2.5% 0;
`

export const Description = styled.p`
    font-size: 16px;
    color: var(--dark_text);
    font-family: "Nunito-Medium";
    padding: 0 0 2.5% 0;
`

export const Time = styled.p`
    font-size: 14px;
    color: var(--transparent_dark);
    font-family: "Nunito-Regular";
    text-align: right;
`