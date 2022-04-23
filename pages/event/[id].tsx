import {FunctionComponent, useEffect} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useGetEndpoint} from '../../api/hooks/useGetEndpoint';

const App = styled.div`
    margin-top: 70px;
`;

const Event: FunctionComponent = () => {
    const router = useRouter();
    const {id} = router.query;

    const [eventData, eventErr, getEvent] = useGetEndpoint<Event>(
        '/api/event/' + id,
    );

    useEffect(() => {
        getEvent();
    }, []);

    if (eventErr) {
        return <div>Not found</div>;
    }

    return <div>{JSON.stringify(eventData)}</div>;
};

export default Event;
