import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC, lazy } from 'react';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/profile';

// const ProfilePage = lazy(() => import('../pages/profile'));

export const Router: FC = (props) => {
    const { children } = props;
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
};
