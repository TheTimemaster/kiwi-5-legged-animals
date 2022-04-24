import {FunctionComponent} from 'react';
import styled from 'styled-components';
import Center from './central/Center';

const FooterWrapper = styled.footer`
    background-color: ${(p) => p.theme.colors.black._80.toString()};
    height: 100px;
    color: ${(p) => p.theme.colors.white._100.toString()};
    display: flex;
`;

const StyledCenter = styled(Center)`
    align-items: flex-end;
    justify-content: flex-end;
`;

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            <StyledCenter>
                <p>KIWI.com All rights reserved.</p>
            </StyledCenter>
        </FooterWrapper>
    );
};

export default Footer;
