import React from "react";
import { Wrapper, ImageDiv, Image, Lines, TopLineDiv, TopVerticalLine, TopCircle, TopDescDiv, TopDescH1, TopDescP, TopDescTitleLine } from "./style";

export const CardWrapper = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>
}

export const WorkImageWrapper = ({ children, ...rest }) => {
    return <ImageDiv {...rest}>{children}</ImageDiv>
}
export const WorkImage = ({ ...rest })  => {
    return <Image {...rest}/>
}

export const LinesWrapper = ({ children, ...rest })  => {
    return <Lines {...rest}>{children}</Lines>
}

export const TopLineWraper = ({ children, ...rest }) => {
    return <TopLineDiv {...rest}>{children}</TopLineDiv>
}

export const TopDescWrapper = ({ children, ...rest }) => {
    return <TopDescDiv {...rest}>{children}</TopDescDiv>
}

export const TopDescTitle = ({ children, ...rest }) => {
    return <TopDescH1 {...rest}>{children}</TopDescH1>
}

export const TopDescText = ({ children, ...rest }) => {
    return <TopDescP {...rest}>{children}</TopDescP>
}

export { TopVerticalLine, TopCircle }