import { useDispatch, useSelector } from 'react-redux';
import { getApp } from '../selectors';
import { updateLoader } from '../slices/app';

export function useApp() {
    const { loading } = useSelector(getApp);
    const dispatch = useDispatch();

    const setLoading = (flag?: string | boolean) => dispatch(updateLoader(flag));

    return { loading, setLoading };
}
