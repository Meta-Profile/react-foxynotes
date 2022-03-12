import { LoginViewController } from '../../controllers/LoginViewController';
import { NavigatorConfig } from '../../config/routes';
import { AddViewController } from '../../controllers/AddViewController';
import { HomeViewController } from '../../controllers/HomeViewController';
import { ProfileViewController } from '../../controllers/ProfileViewController';
import { UserViewController } from '../../controllers/UserViewController';
import React, { FC, useEffect, useState } from 'react';
import { useNavigator } from '../../hooks/useNavigator';
import { CompositorContainerWrapper, CompositorFun } from './styles';
import { useSpring, animated } from 'react-spring';
import { useSelector } from 'react-redux';
import { getAuth } from '../../selectors';

export const BasePaths = {
    error: { component: () => null, private: false },
    private: { component: LoginViewController, private: false },
    [NavigatorConfig.paths.add]: { component: AddViewController, private: false },
    [NavigatorConfig.paths.home]: { component: HomeViewController, private: true },
    [NavigatorConfig.paths.profile]: { component: ProfileViewController, private: true },
    [NavigatorConfig.paths.user]: { component: UserViewController, private: true },
};

function GetController(path: string | undefined, user: unknown): FC<{ args: any }> | null {
    // Проверка на пустоту
    if (!path) return null;

    // Проверка на 404
    if (!(path in BasePaths)) {
        return BasePaths['error'].component;
    }

    // Sunny days
    const Controller = BasePaths[path];

    if (Controller.private && !user) return BasePaths['private'].component;
    return Controller.component as any;
}

export interface CompositorContainerProps {
    path: string;
    active: boolean;
    t: number;
    i: number;
    args: any;
}
export const CompositorContainer: FC<CompositorContainerProps> = (props) => {
    const { path, active, t, i, args } = props;
    const { back } = useNavigator();
    const { user } = useSelector(getAuth);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const [state, setState] = useState(false);
    const Controller = GetController(path, user);

    const [styles, api] = useSpring(() => ({
        x: offsetLeft,
        delay: 0,
        config: {
            duration: 100,
        },
    }));

    // useEffect(() => {
    //     animate({ translateX: 50 });
    // }, []);
    useEffect(() => {
        if (!active) return;
        let dx = 0;
        let dy = 0;
        let d = '';
        let sx = 0;
        let sy = 0;
        let anim: any = null;
        const reset = () => {
            dx = 0;
            dy = 0;
            d = '';
            sx = 0;
            sy = 0;
            document.body.style.position = '';
        };
        const resetAnimation = () => {
            if (anim) clearInterval(anim);
            anim = null;
        };
        const onTouchStart = (event: TouchEvent) => {
            reset();
            const touch = event.touches[0];
            sx = touch.pageX;
            sy = touch.pageY;
        };
        const onTouchMove = (event: TouchEvent) => {
            const touch = event.touches[0];

            dy = touch.pageY - sy;
            dx = touch.pageX - sx >= 0 ? touch.pageX - sx : 0;

            if (d == 'x') {
                document.body.style.position = 'fixed';
                if (dx < 0) return;
                setOffsetLeft(dx);
                return;
            }

            if (d == 'y') return;

            const angleDeg = (Math.atan(dy / dx) * 180) / Math.PI;
            d = angleDeg > -45 && angleDeg < 45 ? 'x' : 'y';
        };
        const onTouchEnd = (event: TouchEvent) => {
            document.body.style.position = '';
            const width = window.innerWidth;
            const k = dx / width >= 0.2 ? width : 0;
            setState(true);
            api.start({
                x: k,
                from: { x: dx },
                onRest: () => {
                    setOffsetLeft(k);
                    setState(false);
                    reset();
                    if (k === width) {
                        back();
                    }
                },
            });
            // back();
        };

        window.addEventListener('touchstart', onTouchStart);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        return () => {
            resetAnimation();
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [active]);

    if (!Controller) return null;

    return (
        <CompositorContainerWrapper
            style={{
                transform: state
                    ? styles.x.interpolate((x) => `translateX(${x}px)`)
                    : `translateX(${offsetLeft}px)`,
                zIndex: i * 21,
            }}>
            <Controller args={{ ...args, t }} />
        </CompositorContainerWrapper>
    );
};

export const Compositor: FC = () => {
    const { history } = useNavigator();

    return (
        <CompositorFun>
            {history.map((v, i) => {
                // Осуществляем движение
                const len = history.length;
                const shouldMoveLeft = i > 0 && i === len - 1;
                return (
                    <CompositorContainer
                        key={v.path + i}
                        path={v.path}
                        t={history.length}
                        i={i}
                        args={v.args}
                        active={shouldMoveLeft}
                    />
                );
            })}
        </CompositorFun>
    );
};
