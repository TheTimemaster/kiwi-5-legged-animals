import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import WithShadow from './with-shadow/WithShadow';
import {EventCore} from '../types/event';
import Link from 'next/link';
import {H2} from '../styles/TextTypes';

const Wrapper = styled.article`
    width: 200px;
    max-width: 210px;
    min-width: 190px;
    height: 150px;
    margin: 5px;
    flex: 1;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.black._20.toString()};
`;

const ShadowWrapper = WithShadow(Wrapper);

type EventDisplayerProps = {
    event: EventCore;
};

const EventImage = styled.div<{src: string}>`
    width: 100%;
    height: 110px;
    background-position: center;
    background-size: cover;
    background-image: ${(p) => `url("${p.src}")`};
`;

const EventDisplayer: FunctionComponent<EventDisplayerProps> = (props) => {
    return (
        <Link href={'/event/' + props.event.id}>
            <ShadowWrapper>
                <EventImage src={props.event.picture} />
                <H2>{props.event.name}</H2>
            </ShadowWrapper>
        </Link>
    );
};

export default EventDisplayer;
