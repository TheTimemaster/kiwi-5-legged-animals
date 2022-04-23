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
    margin: auto;
    flex-wrap: wrap;
    background-color: red;
    justify-content: center;
`;

const EventsListing: FunctionComponent<EventsListingProps> = (props) => {
    return (
        <ListingWrapper>
            {props.events.map((ev, i) => (
                <EventDisplayer key={i} event={ev} />
            ))}
        </ListingWrapper>
    );
};

export default EventsListing;
