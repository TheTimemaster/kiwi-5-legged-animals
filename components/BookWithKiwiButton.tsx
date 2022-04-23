import styled from 'styled-components';
import {FunctionComponent} from 'react';
import {H2} from '../styles/TextTypes';

type BookWithKiwiButtonProps = {
    onClick: () => void;
};

const ButtonWrapper = styled.button`
    height: 80px;
    width: 300px;
    border: 0;
    padding: 10;
    border-radius: 40px;
    background-color: ${(p) => p.theme.colors.primary._100.toString()};
`;
const BookWithKiwiButton: FunctionComponent<BookWithKiwiButtonProps> = () => {
    return (
        <ButtonWrapper>
            <H2>Book with KIWI</H2>{' '}
        </ButtonWrapper>
    );
};

export default BookWithKiwiButton;
