import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components';
import WithShadow from './with-shadow/WithShadow';
import {EventCore} from '../types/event';
import {redirect} from "next/dist/server/api-utils";
import {AXIOS} from "../api/client";

const Wrapper = styled.article`
    max-width: 800px;
    margin: 30px;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    flex: 1;
    justify-content: center;
    background-color: #0070f3;
    display: flex;
    overflow: hidden;

    &:focus,
    &:hover {
        outline: ${(p) => p.theme.colors.primary._80.toString()} solid 5px;
    }
`;

const StyledInput = styled.input`
    width: 100%;

    padding-left: 20px;
    outline: none !important;
    border: 0;
`;

const SearchButton = styled.button`
    background-color: ${(p) => p.theme.colors.primary._100.toString()};
    color: ${(p) => p.theme.colors.white._100.toString()};
    border: 0;
`;

const ShadowWrapper = WithShadow(Wrapper);

type SearchbarProps = {
    initialContent: string;
    onChange: (content: string) => void;
};

const Searchbar: FunctionComponent<SearchbarProps> = (props) => {
    const [content, setContent] = useState(props.initialContent);
    useEffect(() => {
        //redirect('https://pornhub.com');

    }, [content]);

    return (
        <ShadowWrapper>
            <StyledInput
                value={content}
                onChange={(val) => setContent(val.target.value)}
            />
            <SearchButton onClick={() => {
                AXIOS.post('/api/dbsearch', {'search_data': content}).then((result) => {
                    //TODO: somehow need to return result
                }).catch((error) => {
                });
            }}>
                Search
            </SearchButton>
        </ShadowWrapper>
    );
};

export default Searchbar;
