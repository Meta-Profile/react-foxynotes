import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from '../../selectors';

export const SpacePage: FC = () => {
    const { user } = useSelector(getAuth);
    return (
        <div>
            {user?.metaId} + {user?.userId}
        </div>
    );
};
