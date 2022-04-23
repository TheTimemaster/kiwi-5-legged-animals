import React, {FunctionComponent, useContext, useState} from 'react';
import styled from 'styled-components';
import Center from './central/Center';
import Image from 'next/image';
import HeaderUserSection from './HeaderUserSection';
import {User} from '../context/auth/UserContext';
import Link from 'next/link';

type HeaderProps = {
    setUser: (user: User) => void;
    logOut: () => void;
};

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    padding: 7px;
    z-index: 100;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    width: 100vw;
    background-color: ${(p) => p.theme.colors.white._100.toString()};
`;

const StyledCenter = styled(Center)`
    justify-content: space-between;
`;

const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <HeaderWrapper>
            <StyledCenter>
                <Link href={'/'}>
                    <Image src={'/kiwicom-logo.svg'} height={60} width={60} />
                </Link>
                <HeaderUserSection
                    setUser={props.setUser}
                    logOut={props.logOut}
                />
            </StyledCenter>
        </HeaderWrapper>
    );
};

export default Header;
