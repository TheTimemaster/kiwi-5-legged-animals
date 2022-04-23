import {Location} from './location';

export type EventCore = {
    id: string;
    name: string;
    picture: string;
    description: string;
    location: Location;
};

export const DummyEvent = (id: string): EventCore => ({
    description: 'Longer event description',
    id: id,
    location: {
        lat: 5,
        lng: 5,
        nearCity: 'xd',
        name: 'kap[a',
    },
    name: 'Event ' + id,
    picture:
        'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
});
