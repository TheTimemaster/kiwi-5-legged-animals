import Head from 'next/head';
import Image from 'next/image';
import {FunctionComponent} from 'react';
import EventsSection from '../components/EventsSection';
import EventDisplayer from '../components/EventDisplayer';
import Header from '../components/Header';
import styled from 'styled-components';
import Center from '../components/central/Center';
import Searchbar from '../components/Searchbar';
import SearchSection from '../components/SearchSection';

const App = styled.div`
    margin-top: 70px;
`;

const events = [
    {
        name: 'penis',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
    {
        name: 'wagina',
    },
];

const OuterCenter = styled(Center)`
    flex-direction: column;
`;

const Home: FunctionComponent = () => {
    return (
        <App>
            <SearchSection>
                <Searchbar initialContent={'xd'} onChange={() => {}} />
            </SearchSection>
            <OuterCenter>
                <EventsSection events={events} />
            </OuterCenter>
        </App>
    );
};

export default Home;
