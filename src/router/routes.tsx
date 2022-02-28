import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {FC} from "react";
import LoginPage from "../pages/LoginPage";

export const Router: FC = (props) => {
    const {children} = props;
    return <BrowserRouter>
        {children}
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
}