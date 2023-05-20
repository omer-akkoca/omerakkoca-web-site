import React from "react";
import { CardWrapper, Description, DescWrapper, Image, TopWrapper, Time, Title } from "./style";

const WorkCard = ({ work }) => {
    return(
        <CardWrapper>
            <TopWrapper>
                <Image
                    src={work.img}
                    alt={work.title}
                />
                <Title color={work.color}>{work.title}</Title>
            </TopWrapper>
            <DescWrapper>
                <Description>{work.desc}</Description>
                <Time>
                    {work.started_at} - {" "}
                    {work.finished_at}
                </Time>
            </DescWrapper>
        </CardWrapper>
    )
}

export default WorkCard;