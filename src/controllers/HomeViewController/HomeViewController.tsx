import { ViewControllerProps } from '../CoreViewController';
import { DefaultViewController } from '../DefaultViewController';
import React, { FC, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import { useNavigator } from '../../hooks/useNavigator';
import { NavigatorConfig } from '../../config/routes';
import { FlexBox, FlexBoxCenter, FlexBoxColumn } from '../../components/FlexBox';
import { useMetaProfilesList } from '../../hooks/useMetaProfilesList';
import { Divider, Text } from '../../components';
import { StandaloneHelper } from '../../helpers/standalone';

const avatars = shuffle([
    'https://img4.goodfon.com/wallpaper/nbig/6/43/krasivaia-devushka-shatenka-plate-poza-figura-pricheska-maki.jpg',
    'https://bipbap.ru/wp-content/uploads/2015/02/71accf_f4a84ee668bc4f819fba68f556df3aa9_mv2_d_1638_2048_s_2.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/2435761738495618000/B1EBA1D5DAE6CAC711F3DFCB7691737796FED9CD/?imw=512&amp;imh=627&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
    'https://mykaleidoscope.ru/uploads/posts/2021-12/1638814452_72-mykaleidoscope-ru-p-obraz-oseni-devushka-krasivo-foto-76.jpg',
    'https://i.pinimg.com/originals/a5/c4/7a/a5c47adb0ba695fdbde83a68fdefae57.jpg',
    'https://i.pinimg.com/originals/75/20/22/75202251f13cfbdc4bcba71542618e5b.jpg',
]);

function shuffle(array: string[]) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const HomeViewController: FC<ViewControllerProps> = (props) => {
    const { children, ...appState } = props;
    const { present, updateNavigatorView } = useNavigator();

    // ===========================================================================
    // Theming
    // ===========================================================================

    const theme = useTheme() as typeof defaultTheme;
    const [list] = useMetaProfilesList();

    useEffect(() => {
        StandaloneHelper.setBodyColor(theme.colors.black95);
        StandaloneHelper.setColor(theme.colors.blackAbsolute);
        updateNavigatorView({
            title: 'Meta Profile',
            backgroundColor: theme.colors.blackAbsolute,
        });
    }, []);

    return (
        <>
            <DefaultViewController {...appState}>
                <FlexBoxCenter column gap width={'100%'}>
                    {list.map((v, i) => {
                        const a = avatars[i % avatars.length];
                        return (
                            <div key={v.mpId} style={{ width: '100%' }}>
                                {i > 0 && <Divider style={{ opacity: 0.1 }} />}
                                <FlexBox
                                    gap
                                    padding
                                    width={'100%'}
                                    onClick={() =>
                                        present(NavigatorConfig.paths.profile, {
                                            mpId: v.mpId,
                                            img: a,
                                        })
                                    }>
                                    <ImageProfile src={a} />
                                    <FlexBoxColumn flex={1} justify={'center'} gap={8}>
                                        <Text color={'whiteAbsolute'} type={'normal'}>
                                            {v.title}
                                        </Text>
                                        <Text color={'black5'}>{v.mpId}</Text>
                                    </FlexBoxColumn>
                                </FlexBox>
                            </div>
                        );
                    })}
                </FlexBoxCenter>
            </DefaultViewController>
        </>
    );
};

export const ImageProfile = styled.div<{ src?: string }>`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: url('${(p) => p.src}');
    background-position: center center;
    background-size: cover;
`;
