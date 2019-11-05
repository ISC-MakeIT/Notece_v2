import React, { FC, useState } from 'react';
import DrawStage from './components/DrawStage';
// import controlerStage from './MenuButton';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const initArray: Array<JSON> = [];
    const [rect, setRect] = useState(initArray);
    const [circle, setCircle] = useState(initArray);
    const [text, setText] = useState(initArray);
    const [image, setImage] = useState(initArray);
    const [line, setLine] = useState(initArray);

    // undo,redo用のState
    const [shape, setShape] = useState(initArray);

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
            id: `rect${rect.length + 1}`
        };
        const tmp = circle.concat([newCircle]);
        setCircle(tmp);
    };
    const addText = () => {};
    const addImage = () => {};
    const addLine = () => {};

    return (
        <div>
            <DrawStage
                rects={rect}
                circles={circle}
                texts={text}
                images={image}
                lines={line}
            />
            {/* controlerStage */}
        </div>
    );
};

export default Canvas;
