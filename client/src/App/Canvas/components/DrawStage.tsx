import React, { FC } from 'react';
// import konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';

// anyで仮置
interface DrawStageProps {
    rects: any;
    circles: any;
    texts: any;
    images: any;
    lines: any;
}

const DrawStage: FC<DrawStageProps> = ({
    rects,
    circles,
    texts,
    images,
    lines
}) => {
    // resizeしたときのイベント

    // zoomするためのイベント

    // zoom outするためのイベント

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {/* {rects.map((rect, i) => {
                    return;
                })}
                {circles.map((circle, i) => {
                    return;
                })}
                {texts.map((text, i) => {
                    return;
                })}
                {images.map((image, i) => {
                    return;
                })}
                {lines.map((line, i) => {
                    return;
                })} */}
            </Layer>
        </Stage>
    );
};

export default DrawStage;
