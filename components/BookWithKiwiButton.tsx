import styled from 'styled-components';
import {FunctionComponent} from 'react';
import {H2} from '../styles/TextTypes';

type BookWithKiwiButtonProps = {
    link: string;
};

const ButtonWrapper = styled.button`
    height: 80px;
    width: 300px;
    border: 0;
    padding: 10px;
    border-radius: 40px;
    background-color: ${(p) => p.theme.colors.primary._100.toString()};
`;
const BookWithKiwiButton: FunctionComponent<BookWithKiwiButtonProps> = (
    props,
) => {
    return (
        <a target={'_blank'} href={props.link}>
            <ButtonWrapper>
                <H2>Book with KIWI</H2>
            </ButtonWrapper>
        </a>
    );
};

export default BookWithKiwiButton;
