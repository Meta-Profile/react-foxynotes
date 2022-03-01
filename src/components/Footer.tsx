import { FC, useCallback, useEffect } from 'react';
import { FlexBox } from './ui/FlexBox';
import styled from 'styled-components';
import { Space } from './ui/Box';
import { Text } from './ui/Text';
import { Divider } from './ui/Divider';
import { useTranslation } from 'react-i18next';
import { setLocalstorageLang } from '../common/language';

const FooterWrapper = styled(FlexBox)`
    width: 100%;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterContainer = styled(FlexBox)`
    height: 252px;
    width: 1152px;
`;

const MayBeBold: FC<{ bold: boolean }> = (props) => {
    const { bold, children } = props;
    return bold ? <b>{children}</b> : <>{children}</>;
};

export const Footer: FC = () => {
    const { t, i18n } = useTranslation();
    const changeLang = useCallback(
        (lng: string) => {
            i18n.changeLanguage(setLocalstorageLang(lng)).then();
        },
        [i18n.changeLanguage]
    );
    return (
        <FooterWrapper color={'black40'} backgroundColor={'black5'} justify={'center'}>
            <FooterContainer column justify={'center'} gap>
                <FlexBox gap={Space.small}>
                    <Text type="small" onClick={() => changeLang('ru')}>
                        <MayBeBold bold={i18n.language === 'ru'}>Русский</MayBeBold>
                    </Text>
                    <Text type="small" onClick={() => changeLang('en')}>
                        <MayBeBold bold={i18n.language === 'en'}>English</MayBeBold>
                    </Text>
                </FlexBox>
                <Divider />
                <FlexBox gap={Space.small}>
                    <Text type="small">
                        Политика конфиденциальности • Условия использования • Файлы cookie
                        •&nbsp;Помощь
                    </Text>
                </FlexBox>
                <FlexBox gap={Space.small}>
                    <Text type="small"> {t('title')} &COPY; 2022 </Text>
                </FlexBox>
            </FooterContainer>
        </FooterWrapper>
    );
};
