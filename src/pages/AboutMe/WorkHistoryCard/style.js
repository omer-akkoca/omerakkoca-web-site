import styled, { css } from "styled-components";

const dark_text = "#0d172a"

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 140px 0;

    & > * {
        user-select: none;
    }
`

export const ImageDiv = styled.div`
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    overflow: hidden;
`

export const Lines = styled.div`
    position: relative;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
`

const top_line_height = 42
const top_circle = 10

export const TopLineDiv = styled.span`
    position: absolute;
    ${({top}) => top
        ? css`
            top: ${`${-1*(top_circle+top_line_height-2)}px`};
        `
        : css`
            bottom: ${`${-1*(top_circle+top_line_height-2)}px`};
        `
    };
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({top}) => top ? "column" : "column-reverse"};
`

export const TopVerticalLine = styled.span`
    position: relative;
    height: ${top_line_height + "px"};
    width: 2px;
    background-color: ${({color}) => color ? color : "red"};
`

export const TopCircle = styled.span`
    width: ${top_circle + "px"};;
    height: ${top_circle + "px"};;
    background-color: white;
    border: 2px solid ${({color}) => color ? color : "red"};;
    border-radius: 100%;
`

const top_desc_height = 100;

export const TopDescDiv = styled.div`
    position: absolute;
    ${({top}) => top
        ? css`
            top: -${top_desc_height+5}px;
        `
        : css`
            bottom: -${top_desc_height+5}px;
        `
    };
    left: 50%;
    height: ${`${top_desc_height}px`};
    max-width: ${`${top_desc_height+top_desc_height}px`};
    min-width: ${`${top_desc_height}px`};
    overflow: hidden;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const TopDescH1 = styled.h1`
    border-bottom: 2px solid ${({color}) => color ? color : "red"};;
    text-transform: uppercase;
    font-size: 20px !important;
    margin: 0 !important;
`

export const TopDescP = styled.p`
    margin-top: 5px !important;
    font-size: 14px;
    text-overflow: ellipsis;
    
`