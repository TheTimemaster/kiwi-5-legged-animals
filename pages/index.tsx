import Head from 'next/head';
import Image from 'next/image';
import {FunctionComponent, useEffect, useState} from 'react';
import EventsSection from '../components/EventsSection';
import EventDisplayer from '../components/EventDisplayer';
import Header from '../components/Header';
import styled from 'styled-components';
import Center from '../components/central/Center';
import Searchbar from '../components/Searchbar';
import SearchSection from '../components/SearchSection';
import {useGetEndpoint} from '../api/hooks/useGetEndpoint';
import {EventCore} from '../types/event';

const OuterCenter = styled(Center)`
    flex-direction: column;
`;

const Home: FunctionComponent = () => {
    const [eventsData, eventsErr, getEvents] =
        useGetEndpoint<EventCore[]>('api/events');

    const [search, setSearch] = useState('');

    useEffect(() => {
        getEvents();
    }, [getEvents]);

    return (
        <>
            <SearchSection>
                <Searchbar initialContent={search} onChange={setSearch} />
            </SearchSection>
            <OuterCenter>
                {eventsErr ? (
                    <div>Error</div>
                ) : (
                    <EventsSection
                        events={
                            eventsData?.filter(
                                (e) =>
                                    e.name.includes(search) ||
                                    search.length == 0,
                            ) ?? []
                        }
                    />
                )}
            </OuterCenter>
        </>
    );
};

export default Home;
