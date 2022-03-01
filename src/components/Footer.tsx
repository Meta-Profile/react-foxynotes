import { FC } from 'react';
import { FlexBox } from './ui/FlexBox';
import styled from 'styled-components';
import { Space } from './ui/Box';
import { Text } from './ui/Text';
import { Divider } from './ui/Divider';

const FooterWrapper = styled(FlexBox)`
    width: 100%;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterContainer = styled(FlexBox)`
    height: 252px;
    width: 1152px;
`;

export const Footer: FC = () => {
    return (
        <FooterWrapper color={'black40'} backgroundColor={'black5'} justify={'center'}>
            <FooterContainer column justify={'center'} gap>
                <FlexBox gap={Space.small}>
                    <Text type="small">
                        <b>Русский</b>
                    </Text>
                    <Text type="small">English</Text>
                </FlexBox>
                <Divider />
                <FlexBox gap={Space.small}>
                    <Text type="small">
                        Политика конфиденциальности • Условия использования • Файлы cookie
                        •&nbsp;Помощь
                    </Text>
                </FlexBox>
                <FlexBox gap={Space.small}>
                    <Text type="small"> Foxy Notes &COPY; 2022 </Text>
                </FlexBox>
            </FooterContainer>
        </FooterWrapper>
    );
};
