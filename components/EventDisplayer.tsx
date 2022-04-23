import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import WithShadow from './with-shadow/WithShadow';
import {EventCore} from '../types/event';
import Link from 'next/link';

const Wrapper = styled.article`
    width: 200px;
    max-width: 210px;
    min-width: 190px;
    height: 150px;
    margin: 5px;
    flex: 1;
    justify-content: center;
    background-color: #0070f3;
`;

const ShadowWrapper = WithShadow(Wrapper);

type EventDisplayerProps = {
    event: EventCore;
};

const EventDisplayer: FunctionComponent<EventDisplayerProps> = (props) => {
    return (
        <Link href={'/event/' + props.event.id}>
            <ShadowWrapper>{props.event.name}</ShadowWrapper>
        </Link>
    );
};

export default EventDisplayer;
