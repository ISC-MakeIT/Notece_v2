import React, { FC, useState } from 'react';
// import konva from 'konva';
import { Stage, Layer } from 'react-konva';
import Circle from './Circle';

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

    const [selectedId, selectShape] = useState();

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
                {circles.map((circle: any, i: number) => {
                    return (
                        <Circle
                            key={i}
                            shapeProps={circle}
                            isSelected={circle.id === selectedId}
                            onSelect={() => {
                                selectShape(circle.id);
                            }}
                            onChange={0}
                            // onChange={newAttrs => {
                            //     const rects = rectangles.slice();
                            //     rects[i] = newAttrs;
                            //     setRectangles(rects);
                            // }}
                        />
                    );
                })}
            </Layer>
        </Stage>
    );
};

export default DrawStage;
