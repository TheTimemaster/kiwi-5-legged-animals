import Head from 'next/head';
import Image from 'next/image';
import {FunctionComponent} from 'react';
import EventsListing from '../components/EventsListing';
import EventDisplayer from '../components/EventDisplayer';
import Header from '../components/Header';
import styled from 'styled-components';
import Center from '../components/central/Center';
import Searchbar from '../components/Searchbar';

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
            <Header />
            <OuterCenter>
                <Searchbar initialContent={'xd'} onChange={() => {}} />
                <EventsListing events={events} />
            </OuterCenter>
        </App>
    );
};

export default Home;
