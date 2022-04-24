import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import WithShadow from './with-shadow/WithShadow';
import {EventCore} from '../types/event';
import Link from 'next/link';
import {H2} from '../styles/TextTypes';

const Wrapper = styled.article`
    width: 300px;
    max-width: 310px;
    min-width: 290px;
    height: 200px;
    margin: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.black._20.toString()};
`;

const ShadowWrapper = WithShadow(Wrapper);

type EventDisplayerProps = {
    event: EventCore;
};

const EventImage = styled.div<{src: string}>`
    width: 100%;
    height: 160px;
    background-position: center;
    background-size: cover;
    background-image: ${(p) => `url("${p.src}")`};
`;

const TextField = styled(H2)`
    margin: auto;
`;

const EventDisplayer: FunctionComponent<EventDisplayerProps> = (props) => {
    return (
        <Link href={'/event/' + props.event.id}>
            <ShadowWrapper>
                <EventImage src={props.event.picture} />
                <TextField>{props.event.name}</TextField>
            </ShadowWrapper>
        </Link>
    );
};

export default EventDisplayer;
