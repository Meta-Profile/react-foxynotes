import { useDispatch, useSelector } from 'react-redux';
import { getNavigator } from '../selectors';
import { useCallback } from 'react';
import { presentView } from '../slices/navigator';

export const useNavigator = () => {
    const { args, current } = useSelector(getNavigator);
    const dispatch = useDispatch();
    const present = useCallback(
        (path: string, args: any = {}) => dispatch(presentView({ path, args })),
        [dispatch]
    );
    return { args, current, present };
};
