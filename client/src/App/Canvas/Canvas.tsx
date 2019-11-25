import React, { FC, useState, useRef, createRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';

import Circle from './components/Circle';
import Rect from './components/Rect';
import addLine from './components/line';
import styled from 'styled-components';
import addText from './components/text';
// import controlerStage from './MenuButton';
// import delLine from './components/eraser';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const initArray: Array<any> = [];
    const [rect, setRect] = useState(initArray);
    const [circle, setCircle] = useState(initArray);
    const [text, setText] = useState(initArray);
    const [image, setImage] = useState(initArray);
    const [line, setLine] = useState(initArray);
    const [log, setLog] = useState(initArray);
    const [logCount, setLogCount] = useState(0);

    // Stage.レイヤーを選択するための値
    const BtnStage: React.RefObject<any> = createRef();
    const BtnLayer: React.RefObject<any> = createRef();

    const ConStage: React.RefObject<any> = createRef();
    const ConLayer: React.RefObject<any> = createRef();

    const stageEl: React.RefObject<any> = createRef();
    const layerEl: React.RefObject<any> = createRef();

    // undo,redo用のState
    useEffect(() => {
        // undo/redoの処理
    }, [rect, circle, text, image, line]);

    // 図形選択用State
    const [selectedId, selectShape] = React.useState(null);

    // 図形生成用関数（controlerStageの引数）
    const addRect = () => {
        const stage: any = stageEl.current.getStage();
        const layer: any = layerEl.current;
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
            const LOG: any = {
                cmd: 'CREATE',
                data: null,
                type: 'rect',
                index: rect.length
            };
            const logTmp = log.concat(LOG);
            setLog(logTmp);
        });
    };

    const addCircle = () => {
        const stage = stageEl.current.getStage();
        const layer = layerEl.current;
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
            stage.off();
            setCircle(tmp);
            const LOG: any = {
                cmd: 'CREATE',
                data: null,
                type: 'circle',
                index: rect.length
            };
            const logTmp = log.concat(LOG);
            setLog(logTmp);
        });
    };

    const addTextArea = () => {
        stageEl.current.getStage().off();
        addText(stageEl.current.getStage(), layerEl.current);
    };
    const addImage = () => {};
    const drawLine = () => {
        stageEl.current.getStage().off();
        addLine(stageEl.current.getStage(), layerEl.current);
    };

    const redo = () => {
        console.log('logCount:', logCount);
        const empty: any = [];
        const Log = empty.concat(log);
        const target = Log.splice(logCount - 1, 1);
        switch (target[0].type) {
            case 'rect':
                const RECT = rect.slice();
                if (target[0].cmd === 'CREATE') {
                    RECT.splice(target[0].index, 1);
                } else {
                    RECT[target[0].index] = target[0].data;
                }
                setRect(RECT);
                break;
            case 'circle':
                const CIRCLE = rect.slice();
                if (target[0].cmd === 'CREATE') {
                    CIRCLE.splice(target[0].index, 1);
                } else {
                    CIRCLE[target[0].index] = target[0].data;
                }
                setCircle(CIRCLE);
                break;
        }
        setLogCount(now => now - 1);
    };

    const undo = () => {
        const empty: any = [];
        const Log = empty.concat(log);
        const target = Log.splice(logCount + 1, 1);
        switch (target[0].type) {
            case 'rect':
                const RECT = rect.slice();
                if (target[0].cmd === 'CREATE') {
                    RECT.splice(target[0].index, 1);
                } else {
                    RECT[target[0].index] = target[0].data;
                }
                setRect(RECT);
                break;
            case 'circle':
                const CIRCLE = rect.slice();
                if (target[0].cmd === 'CREATE') {
                    CIRCLE.splice(target[0].index, 1);
                } else {
                    CIRCLE[target[0].index] = target[0].data;
                }
                setCircle(CIRCLE);
                break;
        }
        setLogCount(now => now + 1);
    };

    return (
        <>
            {/* ボタン専用Stage */}

            {/* <FullScreenWrapper>
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    ref={BtnStage}
                >
                    <Layer ref={BtnLayer}> */}
            {/* <Controler
                        // addRect,addCircleに関しては大きさ指定できるようにする
                        addRect={addRect}
                        addCircle={addCircle}
                        addLine={addLine}
                        addText={addText}
                        addImg={addImage}
                    /> */}
            {/* </Layer>
                </Stage>
            </FullScreenWrapper> */}

            {/* 描写用Stage */}
            <FullScreenWrapper>
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
                                        const LOG: any = {
                                            cmd: 'CHANGE',
                                            data: tmp[i],
                                            type: 'rect',
                                            index: i
                                        };
                                        const logTmp = log.concat(LOG);
                                        setLog(logTmp);
                                        // undo/redo用の変数を更新
                                        tmp[i] = newAttrs;
                                        setRect(tmp);
                                        // json.push(
                                        //     stageEl.current.getStage().toJSON()
                                        // );
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
                                        const LOG: any = {
                                            cmd: 'CHANGE',
                                            data: tmp[i],
                                            type: 'circle',
                                            index: i
                                        };
                                        const logTmp = log.concat(LOG);
                                        setLog(logTmp);
                                        tmp[i] = newAttrs;
                                        setCircle(tmp);
                                        // json.push(
                                        //     stageEl.current.getStage().toJSON()
                                        // );
                                        console.log(circle);
                                    }}
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </FullScreenWrapper>
            <button onClick={addRect}>addRect</button>
            <button onClick={addCircle}>addCircle</button>
            <button onClick={drawLine}>addCircle</button>
            <button onClick={redo}>redo</button>
            <button onClick={undo}>undo</button>
        </>
    );
};

const FullScreenWrapper = styled.div`
    position: absolute;
    top: 100px;
    right: 0;
`;

export default Canvas;
