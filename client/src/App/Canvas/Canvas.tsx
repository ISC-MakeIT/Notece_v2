import React, { FC, useState } from 'react';
import DrawStage from './components/DrawStage';
// import controlerStage from './MenuButton';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const [rect, setRect] = useState([]);
    const [circle, setcircle] = useState([]);
    const [text, setText] = useState([]);
    const [image, setImage] = useState([]);
    const [line, setLine] = useState([]);

    // undo,redo用のState
    const [shape, setShape] = useState([]);

    // 図形生成用関数（controlerStageの引数）
    const addRect = () => {};
    const addCircle = () => {};
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
