import { FC } from 'react';
import { FlexBox } from '../../components/FlexBox';
import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';
import { dict, Icon } from '../../components/Icon';
import { Button } from '../../components/Button';

export const UIPage: FC = () => {
    return (
        <FlexBox column margin gap>
            <FlexBox column gap>
                <Text type={'nano'}>Nano</Text>
                <Text type={'small'}>Small</Text>
                <Text type={'normal'}>Normal</Text>
                <Text type={'section'}>Section</Text>
                <Text type={'title'}>Title</Text>
                <Text type={'title-medium'}>Title medium</Text>
                <Text type={'title-big'}>Title big</Text>
            </FlexBox>
            <Divider />
            <FlexBox gap>
                {Object.keys(dict).map((v, i) => (
                    <Icon type={v as any} key={i} color={'primary'} />
                ))}
            </FlexBox>
            <Divider />
            <FlexBox gap>
                <Button type={'primary'}>Кнопка</Button>
                <Button type={'secondary'}>Кнопка</Button>
                <Button type={'grey'}>Кнопка</Button>
                <Button type={'black'}>Кнопка</Button>
            </FlexBox>
            <Divider />
            <FlexBox gap>
                <Button type={'primary'} icon={'add'}>
                    Кнопка с иконкой
                </Button>
                <Button type={'secondary'} icon={'edit'}>
                    Кнопка с иконкой
                </Button>
                <Button type={'grey'} icon={'meta'}>
                    Кнопка с иконкой
                </Button>
                <Button type={'black'} icon={'search'}>
                    Кнопка с иконкой
                </Button>
            </FlexBox>
            <Divider />
            <FlexBox gap>
                <Button type={'primary'} icon={'add'} />
                <Button type={'secondary'} icon={'edit'} />
                <Button type={'grey'} icon={'meta'} />
                <Button type={'black'} icon={'search'} />
            </FlexBox>
        </FlexBox>
    );
};
