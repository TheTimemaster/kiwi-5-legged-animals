import {FunctionComponent, useEffect} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useGetEndpoint} from '../../api/hooks/useGetEndpoint';
import Center from '../../components/central/Center';
import {H0, H1, H2, P} from '../../styles/TextTypes';
import {EventCore} from '../../types/event';
import BookWithKiwiButton from '../../components/BookWithKiwiButton';

const App = styled.div`
    margin-top: 70px;
`;

const XCenter = styled(Center)`
    flex-direction: column;
`;

const PhotoSection = styled.section`
    height: 500px;
    display: flex;
    flex-direction: row;
    background-image: ${(p: any) => `url('${p.url}')`};
    background-size: cover;
    background-position: center;
`;

const TravelSection = styled.section`
    height: 500px;
    display: flex;
    flex-direction: row;
    background-color: ${(p) => p.theme.colors.black._20.toString()};
`;

const Event: FunctionComponent = () => {
    const router = useRouter();
    const {id} = router.query;

    const [eventData, eventErr, getEvent] = useGetEndpoint<EventCore>(
        '/api/event/' + id,
    );

    useEffect(() => {
        getEvent();
    }, []);
    return eventErr ? (
        <div>Error</div>
    ) : (
        <>
            <PhotoSection url={eventData?.picture} />
            <Center>
                <div>
                    <H1>{eventData?.name}</H1>
                    <P>{eventData?.description}</P>
                </div>
            </Center>
            <TravelSection>
                <XCenter>
                    <H0>Travel</H0>
                    <BookWithKiwiButton onClick={() => {}} />
                </XCenter>
            </TravelSection>
        </>
    );
};

export default Event;
