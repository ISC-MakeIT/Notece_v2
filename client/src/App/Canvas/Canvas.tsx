import React, { FC, useState, useRef, createRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Circle from './components/Circle';
import Rect from './components/Rect';
// import controlerStage from './MenuButton';
import addLine from './components/line';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const initArray: Array<JSON> = [];
    const [rect, setRect] = useState(initArray);
    const [circle, setCircle] = useState(initArray);
    const [text, setText] = useState(initArray);
    const [image, setImage] = useState(initArray);
    const [line, setLine] = useState(initArray);

    const stageEl: React.RefObject<any> = createRef();
    const layerEl: React.RefObject<any> = createRef();
    // const stageEl: any = createRef();
    // const layerEl: any = createRef();

    // undo,redo用のState
    const [shape, setShape] = useState(initArray);

    // 図形選択用State
    const [selectedId, selectShape] = React.useState(null);

    // 図形生成用関数（controlerStageの引数）
    const addRect = () => {
        const newRect: any = {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            fill: 'red',
            id: `rect${rect.length + 1}`
        };
        const tmp = rect.concat([newRect]);
        setRect(tmp);
    };

    const addCircle = () => {
        const newCircle: any = {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            fill: 'red',
            id: `circle${circle.length + 1}`
        };
        const tmp = circle.concat([newCircle]);
        setCircle(tmp);
    };

    const addText = () => {};
    const addImage = () => {};
    const drawLine = () => {
        addLine(stageEl.current.getStage(), layerEl.current, 'brush');
    };

    return (
        <>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={stageEl}
                onMouseDown={e => {
                    // deselect when clicked on empty area
                    const clickedOnEmpty = e.target === e.target.getStage();
                    if (clickedOnEmpty) {
                        selectShape(null);
                    }
                }}
            >
                <Layer ref={layerEl}>
                    {rect.map((rects: any, i: any) => {
                        return (
                            <Rect
                                key={i}
                                shapeProps={rects}
                                isSelected={rects.id === selectedId}
                                onSelect={() => {
                                    selectShape(rects.id);
                                }}
                                onChange={(newAttrs: any) => {
                                    const tmp = rect.slice();
                                    tmp[i] = newAttrs;
                                    setRect(tmp);
                                }}
                            />
                        );
                    })}
                    {circle.map((circles: any, i: number) => {
                        return (
                            <Circle
                                key={i}
                                shapeProps={circles}
                                isSelected={circles.id === selectedId}
                                onSelect={() => {
                                    selectShape(circles.id);
                                }}
                                onChange={(newAttrs: any) => {
                                    const tmp = circle.slice();
                                    tmp[i] = newAttrs;
                                    setCircle(tmp);
                                }}
                            />
                        );
                    })}
                </Layer>
                <button onClick={addCircle}>Circle</button>
                <button onClick={addRect}>Rect</button>
            </Stage>
        </>
    );
};

export default Canvas;
