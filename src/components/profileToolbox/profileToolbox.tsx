import { FC } from 'react';
import { ProfileToolboxWrapper } from './profileToolbox.styles';
import { Button } from '../ui/Button';

export interface ProfileToolboxProps {
    isEditable?: boolean;
    isSharable?: boolean;
    isQrcode?: boolean;

    onEditClick?: () => void;
    onQrClick?: () => void;
    onShareClick?: () => void;
}

export const ProfileToolbox: FC<ProfileToolboxProps> = (props) => {
    const { isEditable, isQrcode, isSharable, onEditClick, onShareClick, onQrClick } = props;
    return (
        <ProfileToolboxWrapper>
            {isSharable && <Button onClick={onShareClick} icon={'share'} type={'secondary'} />}
            {isQrcode && <Button onClick={onQrClick} icon={'qr'} type={'secondary'} />}
            {isEditable && <Button onClick={onEditClick} icon={'edit'} type={'secondary'} />}
        </ProfileToolboxWrapper>
    );
};
