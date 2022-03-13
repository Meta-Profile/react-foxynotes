import { FC, useRef, useState } from 'react';
import { ImageCropperCircleWrapper, ImageCropperClose } from './styles';
import Cropper from 'react-cropper';
import { Button } from '../Button';

export interface ImageCropperCircleProps {
    onSave?: (url: any) => void;
    onCancel?: () => void;
    sourceImage?: string;
}
export const ImageCropperCircle: FC<ImageCropperCircleProps> = (props) => {
    const cropperRef = useRef<HTMLImageElement>(null);
    const { onCancel, onSave, sourceImage } = props;
    // const onCrop = () => {
    //     const imageElement: any = cropperRef?.current;
    //     const cropper: any = imageElement?.cropper;
    //     setData(cropper.getCroppedCanvas().toDataURL());
    // };
    const onSaveClick = () => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
            if (blob) onSave?.(blob);
        });
    };
    // const src = require('./1.jpeg');
    return (
        <ImageCropperCircleWrapper>
            <Cropper
                src={sourceImage ?? ''}
                style={{ height: 700, width: '100%' }}
                // Cropper.js options
                initialAspectRatio={1}
                aspectRatio={1}
                guides={false}
                // crop={onCrop}
                modal={false}
                cropBoxResizable={false}
                cropBoxMovable={false}
                minCropBoxWidth={window.innerWidth}
                dragMode={'move'}
                background={false}
                ref={cropperRef}
            />
            <ImageCropperClose>
                <Button onClick={onSaveClick}>Сохранить</Button>
                <Button type={'secondary'} onClick={onCancel}>
                    Отмена
                </Button>
            </ImageCropperClose>
        </ImageCropperCircleWrapper>
    );
};
