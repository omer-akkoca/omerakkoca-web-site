import React from "react";
import { CardWrapper, LinesWrapper, TopLineWraper, TopVerticalLine, WorkImage, WorkImageWrapper, TopCircle, TopDescWrapper, TopDescTitle, TopDescText, TopDescTitleLine } from "./components";
import { BiChevronsRight, BiMinus } from "react-icons/bi"

const WorkHistoryCard = ({ data, last, top }) => {
    return(
        <CardWrapper>
            <WorkImageWrapper>
                <WorkImage src={data.img}/>
                <TopLineWraper top={top}>
                    <TopCircle color={data.color}/>
                    <TopVerticalLine color={data.color}/>
                    <TopDescWrapper top={top}>
                        <TopDescTitle color={data.color}>{data.title}</TopDescTitle>
                        <TopDescText>{data.desc}</TopDescText>
                    </TopDescWrapper>
                </TopLineWraper>
            </WorkImageWrapper>
            {
                last ?
                (
                    <LinesWrapper>
                        <BiMinus size={20} />
                        <BiMinus size={20} />
                        <BiChevronsRight size={20} />
                        <BiMinus size={20} />
                        <BiMinus size={20} />
                    </LinesWrapper>
                )
                :   null
            }
        </CardWrapper>
    )
}

export default WorkHistoryCard;