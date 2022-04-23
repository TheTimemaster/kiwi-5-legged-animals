import Head from 'next/head';
import Image from 'next/image';
import {FunctionComponent, useEffect} from 'react';
import EventsSection from '../components/EventsSection';
import EventDisplayer from '../components/EventDisplayer';
import Header from '../components/Header';
import styled from 'styled-components';
import Center from '../components/central/Center';
import Searchbar from '../components/Searchbar';
import SearchSection from '../components/SearchSection';
import {useGetEndpoint} from '../api/hooks/useGetEndpoint';
import {EventCore} from '../types/event';

const App = styled.div`
    margin-top: 70px;
`;

const OuterCenter = styled(Center)`
    flex-direction: column;
`;

const Home: FunctionComponent = () => {
    const [eventsData, eventsErr, getEvents] =
        useGetEndpoint<EventCore[]>('api/events');

    useEffect(() => {
        getEvents();
    }, [getEvents()]);

    return (
        <App>
            <SearchSection>
                <Searchbar initialContent={'xd'} onChange={() => {}} />
            </SearchSection>
            <OuterCenter>
                {eventsErr ? (
                    <div>Error</div>
                ) : (
                    <EventsSection events={eventsData ?? []} />
                )}
            </OuterCenter>
        </App>
    );
};

export default Home;
