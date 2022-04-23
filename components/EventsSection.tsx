import React, {FunctionComponent} from 'react';
import {EventCore} from '../types/event';
import EventDisplayer from './EventDisplayer';
import styled from 'styled-components';

type EventsListingProps = {
    events: EventCore[];
};

const ListingWrapper = styled.main`
    display: flex;
    width: 100%;
    margin: 50px auto;
    flex-wrap: wrap;
    justify-content: center;
`;

const EventsSection: FunctionComponent<EventsListingProps> = (props) => {
    return (
        <ListingWrapper>
            {props.events.map((ev, i) => (
                <EventDisplayer key={i} event={ev} />
            ))}
        </ListingWrapper>
    );
};

export default EventsSection;
