import React from "react";
import { CardWrapper, Description, DescWrapper, Image, ImageWrapper, Time, Title } from "./style";
import 'moment/locale/tr';
import moment from "moment";

const WorkCard = ({ work }) => {
    return(
        <CardWrapper className="flex flex-row shadow-sm shadow-transparent_dark p-5 bg-white">
            <ImageWrapper className="bg-red-400">
                <Image
                    src={work.img}
                    alt={work.title}
                />
            </ImageWrapper>
            <DescWrapper>
                <Title color={work.color}>{work.title}</Title>
                <Description>{work.desc}</Description>
                <Time>
                    {moment(work.started_at).format('d MMMM YYYY')} - {" "}
                    {work.finished_at ? moment(work.finished_at).format('d MMMM YYYY') : "Continues"}
                </Time>
            </DescWrapper>
        </CardWrapper>
    )
}

export default WorkCard;