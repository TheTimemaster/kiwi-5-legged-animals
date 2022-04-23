import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components';
import WithShadow from './with-shadow/WithShadow';
import {EventCore} from '../types/event';

const Wrapper = styled.article`
    max-width: 100%;
    margin: 10px;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    flex: 1;
    justify-content: center;
    background-color: #0070f3;
    display: flex;
    overflow: hidden;
`;

const StyledInput = styled.input`
    width: 100%;
`;

const SearchButton = styled.button`
    background-color: ${(p) => p.theme.colors.primary._100.toString()};
    color: ${(p) => p.theme.colors.white._100.toString()};
    border: 0;
`;

const ShadowWrapper = WithShadow(Wrapper);

type SearchbarProps = {
    initialContent: string;
    onChange: () => void;
};

const Searchbar: FunctionComponent<SearchbarProps> = (props) => {
    return (
        <ShadowWrapper>
            <StyledInput value={props.initialContent} />
            <SearchButton onClick={props.onChange}>Search</SearchButton>
        </ShadowWrapper>
    );
};

export default Searchbar;
