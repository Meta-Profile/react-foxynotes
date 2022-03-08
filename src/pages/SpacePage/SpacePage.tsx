import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from '../../selectors';
import { FlexBox, FlexBoxColumn } from '../../components/FlexBox';
import { MetaProfile, MetaProfileAPI } from '../../api';
import { Box, Button } from '../../components';
import { useHistory } from 'react-router-dom';
import { RoutesConfig } from '../../config/routes';

export const SpacePage: FC = () => {
    const { user } = useSelector(getAuth);
    const history = useHistory();
    const [profiles, setProfiles] = useState<MetaProfile[]>([]);
    useEffect(() => {
        MetaProfileAPI.list().then((v) => setProfiles(v.response));
    }, []);
    return (
        <FlexBoxColumn gap backgroundColor={'white'}>
            {profiles.map((v) => (
                <FlexBox key={v.mpId} width={'100%'}>
                    <Box padding width={80}>
                        {v.mpId}
                    </Box>
                    <Box padding width={80}>
                        <FlexBox width={48} height={48} style={{ background: v.color }} />
                    </Box>
                    <Box padding width={400}>
                        {v.title}
                    </Box>
                    <Box padding>
                        <Button
                            onClick={() => history.push(RoutesConfig.paths.profileMetaId(v.mpId))}>
                            Открыть
                        </Button>
                    </Box>
                </FlexBox>
            ))}
        </FlexBoxColumn>
    );
};
