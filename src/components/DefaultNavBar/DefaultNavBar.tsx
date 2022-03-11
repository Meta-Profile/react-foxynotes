import { FC } from 'react';
import {
    DefaultNavBarButton,
    DefaultNavBarContainer,
    DefaultNavBarItem,
    DefaultNavBarWrapper,
} from './styles';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { useNavigator } from '../../hooks/useNavigator';

export interface DefaultNavBarProps {
    backgroundColor?: string;
    foreColor?: string;
    back?: boolean;
    title?: string;
    onAction?: (action: string) => void;
}

export const DefaultNavBar: FC<DefaultNavBarProps> = (props) => {
    const { title, back, backgroundColor, foreColor, onAction } = props;
    const { history, back: backView, args } = useNavigator();
    return (
        <DefaultNavBarWrapper backgroundColor={backgroundColor} foreColor={foreColor}>
            <DefaultNavBarContainer>
                <DefaultNavBarItem>
                    {history.length > 1 && back && (
                        <DefaultNavBarButton onClick={backView}>
                            <Icon type={'back'} size={'m'} />
                        </DefaultNavBarButton>
                    )}
                </DefaultNavBarItem>
                <DefaultNavBarItem>
                    <Text type={'title'}>{title}</Text>
                </DefaultNavBarItem>
                <DefaultNavBarItem>
                    {/*<DefaultNavBarButton></DefaultNavBarButton>*/}
                </DefaultNavBarItem>
            </DefaultNavBarContainer>
        </DefaultNavBarWrapper>
    );
};
