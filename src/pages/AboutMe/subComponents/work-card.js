import React from "react";
import { CardWrapper, Description, DescWrapper, Image, ImageWrapper, Time, Title } from "./style";
import 'moment/locale/tr';

const WorkCard = ({ work }) => {
    return(
        <CardWrapper>
            <ImageWrapper>
                <Image
                    src={work.img}
                    alt={work.title}
                />
            </ImageWrapper>
            <DescWrapper>
                <Title color={work.color}>{work.title}</Title>
                <Description>{work.desc}</Description>
                <Time>
                    {work.started_at} - {" "}
                    {work.finished_at ? work.finished_at : "Devam ediyor"}
                </Time>
            </DescWrapper>
        </CardWrapper>
    )
}

export default WorkCard;