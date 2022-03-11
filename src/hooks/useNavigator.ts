import { useDispatch, useSelector } from 'react-redux';
import { getNavigator } from '../selectors';
import { useCallback } from 'react';
import { presentPreviousView, presentView, updateBarView } from '../slices/navigator';

export const useNavigator = () => {
    const { args, current, history, ...states } = useSelector(getNavigator);
    const dispatch = useDispatch();
    const present = useCallback(
        (path: string, args: any = {}) => dispatch(presentView({ path, args })),
        [dispatch]
    );
    const back = useCallback(() => {
        dispatch(presentPreviousView({}));
    }, [dispatch]);
    const updateNavigatorView = useCallback(
        (props: { title?: string; backgroundColor?: string; foreColor?: string }) => {
            dispatch(updateBarView(props));
        },
        [dispatch]
    );
    return { args, current, present, history, back, updateNavigatorView, states };
};
