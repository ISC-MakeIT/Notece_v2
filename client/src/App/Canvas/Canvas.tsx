import React, { FC, useState, useRef, createRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';

import Circle from './components/Circle';
import Rect from './components/Rect';
import addLine from './components/line';
// import controlerStage from './MenuButton';
// import delLine from './components/eraser';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const initArray: Array<JSON> = [];
    const [rect, setRect] = useState(initArray);
    const [circle, setCircle] = useState(initArray);
    const [text, setText] = useState(initArray);
    const [image, setImage] = useState(initArray);
    const [line, setLine] = useState(initArray);

    // Stage.レイヤーを選択するための値
    const BtnStage: React.RefObject<any> = createRef();
    const BtnLayer: React.RefObject<any> = createRef();

    const ConStage: React.RefObject<any> = createRef();
    const ConLayer: React.RefObject<any> = createRef();

    const stageEl: React.RefObject<any> = createRef();
    const layerEl: React.RefObject<any> = createRef();

    // undo,redo用のState
    const [shape, setShape] = useState(initArray);
    useEffect(() => {
        // undo/redoの処理
    }, [rect, circle, text, image, line]);

    // 図形選択用State
    const [selectedId, selectShape] = React.useState(null);

    // 図形生成用関数（controlerStageの引数）
    const addRect = () => {
        const stage: any = ConStage.current.getStage();
        const layer: any = ConLayer.current;
        stage.off();

        let StartPos: any;
        let isControl: boolean = false;
        let Rect: any;
        stage.on('mousedown touchstart', function(e: Event) {
            StartPos = stage.getPointerPosition();
            isControl = true;
            Rect = new Konva.Rect({
                x: StartPos.x,
                y: StartPos.y,
                width: 100,
                height: 100,
                fill: 'blue',
                opacity: 0.2,
                id: `rect${rect.length + 1}`
            });
            layer.add(Rect);
        });
        stage.on('mousemove touchmove', function() {
            if (!isControl) {
                return;
            }
            const pos = stage.getPointerPosition();
            Rect.width(pos.x - StartPos.x);
            Rect.height(pos.y - StartPos.y);
            layer.batchDraw();
        });

        stage.on('mouseup touchend', function() {
            isControl = false;
            Rect.opacity(1);
            const tmp = rect.concat([Rect.attrs]);
            Rect.destroy();
            layer.batchDraw();
            stage.off();
            setRect(tmp);
        });
    };

    const addCircle = () => {
        const stage = ConStage.current.getStage();
        const layer = ConLayer.current;
        stage.off();

        let StartPos: any;
        let isControl: boolean = false;
        let Circle: any;

        stage.on('mousedown touchstart', function(e: Event) {
            StartPos = stage.getPointerPosition();
            isControl = true;
            Circle = new Konva.Circle({
                x: StartPos.x,
                y: StartPos.y,
                radius: 0,
                fill: 'blue',
                opacity: 0.2,
                id: `circle${circle.length + 1}`
            });
            layer.add(Circle);
        });

        stage.on('mousemove touchmove', function() {
            if (!isControl) {
                return;
            }
            const pos = stage.getPointerPosition();

            if (pos.x - StartPos.x > pos.y - StartPos.y) {
                Circle.radius(Math.abs(pos.x - StartPos.x));
            } else {
                Circle.radius(Math.abs(pos.y - StartPos.y));
            }
            layer.batchDraw();
        });

        stage.on('mouseup touchend', function() {
            isControl = false;
            Circle.opacity(1);
            const tmp = circle.concat([Circle.attrs]);
            Circle.destroy();
            layer.batchDraw();
            setCircle(tmp);
        });
    };

    const addText = () => {};
    const addImage = () => {};
    const drawLine = () => {
        stageEl.current.getStage().off();
        addLine(stageEl.current.getStage(), layerEl.current);
    };

    // const eraser = () => {
    //     stageEl.current.getStage().off();
    //     delLine(stageEl.current.getStage(), layerEl.current);
    // };

    return (
        <>
            {/* ボタン専用Stage */}
            {/* <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={BtnStage}
            >
                <Layer ref={BtnLayer}>
                    <Controler
                        // addRect,addCircleに関しては大きさ指定できるようにする
                        addRect={addRect}
                        addCircle={addCircle}
                        addLine={addLine}
                        addText={addText}
                        addImg={addImage}
                    />
                </Layer>
            </Stage> */}
            {/* 大きさ指定用Stage */}
            {/* <FullScreenWrapper> */}
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={ConStage}
                x={0}
                y={0}
            >
                <Layer ref={ConLayer}></Layer>
            </Stage>
            {/* </FullScreenWrapper> */}
            <button onClick={addRect}>addRect</button>
            <button onClick={addCircle}>addCircle</button>
            {/* 描写用Stage */}
            {/* <FullScreenWrapper> */}
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
                x={0}
                y={0}
            >
                <Layer ref={layerEl}>
                    {rect.map((rects: any, i: number) => {
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
                                    console.log(rect);
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
            </Stage>
            {/* </FullScreenWrapper> */}
        </>
    );
};

// const FullScreenWrapper = styled.div``;
export default Canvas;
