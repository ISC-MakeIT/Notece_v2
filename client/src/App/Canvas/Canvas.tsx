import React, { FC, useState, useRef, createRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import draggable from 'react-draggable';
import { Menu } from '@material-ui/icons';
import { Modal } from '@material-ui/core';

import Img from './components/Image';
import Circle from './components/Circle';
import Rect from './components/Rect';
import addLine from './components/line';
import styled from 'styled-components';
import addText from './components/text';
import Draggable from 'react-draggable';
import { ImageBackground } from 'react-native';
import { borderRadius, maxHeight } from '@material-ui/system';
import zIndex from '@material-ui/core/styles/zIndex';

const uuidv1 = require('uuid/v1');
// import controlerStage from './MenuButton';
// import delLine from './components/eraser';

const Canvas: FC = () => {
    // [図形のデータ（大きさや位置）、更新用]
    const initArray: Array<any> = [];
    const [rect, setRect] = useState(initArray);
    const [circle, setCircle] = useState(initArray);
    const [text, setText] = useState(initArray);
    const [images, setImages] = useState(initArray);
    const [, updateState] = React.useState();
    const [line, setLine] = useState(initArray);
    const [log, setLog] = useState(initArray);
    const [logCount, setLogCount] = useState(-1);
    const [open, setOpen] = React.useState(false);

    // Stage.レイヤーを選択するための値
    const BtnStage: React.RefObject<any> = createRef();
    const BtnLayer: React.RefObject<any> = createRef();

    const ConStage: React.RefObject<any> = createRef();
    const ConLayer: React.RefObject<any> = createRef();

    const stageEl: React.RefObject<any> = createRef();
    const layerEl: React.RefObject<any> = createRef();

    const fileUploadEl: any = React.createRef();

    // 図形選択用State
    const initSelect: any = null;
    const [selectedId, selectShape] = React.useState(initSelect);

    // 図形生成用関数（controlerStageの引数）

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addRect = () => {
        handleClose();
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
            setLogCount(-1);
            const START_LOG: any = {
                cmd: 'CREATE',
                data: null,
                type: 'rect',
                index: circle.length
            };
            let logTmp = log.concat(START_LOG);
            const LOG: any = {
                cmd: 'CHANGE',
                data: Rect.attrs,
                type: 'rect',
                index: circle.length
            };
            logTmp = logTmp.concat(LOG);
            setLog(logTmp);
        });
    };

    const addCircle = () => {
        handleClose();
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
            // 今まであった分のlogを削除
            setLogCount(-1);
            const START_LOG: any = {
                cmd: 'CREATE',
                data: null,
                type: 'circle',
                index: circle.length
            };
            let logTmp = log.concat(START_LOG);
            const LOG: any = {
                cmd: 'CHANGE',
                data: Circle.attrs,
                type: 'circle',
                index: circle.length
            };
            logTmp = logTmp.concat(LOG);
            setLog(logTmp);
            console.log(log);
        });
    };

    const addTextArea = () => {
        handleClose();
        stageEl.current.getStage().off();
        addText(stageEl.current.getStage(), layerEl.current);
    };

    const drawImage = () => {
        handleClose();
        fileUploadEl.current.click();
    };
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const fileChange = (ev: any) => {
        let file = ev.target.files[0];
        let reader = new FileReader();
        reader.addEventListener(
            'load',
            () => {
                const id = uuidv1();
                images.push({
                    content: reader.result,
                    id
                });
                setImages(images);
                fileUploadEl.current.value = null;
                forceUpdate();
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const drawLine = () => {
        handleClose();
        stageEl.current.getStage().off();
        addLine(stageEl.current.getStage(), layerEl.current);
    };

    const redo = () => {
        if (Math.abs(logCount) < log.length) {
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
        }
    };

    const undo = () => {
        if (logCount <= -1) {
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
        }
    };

    return (
        <>
            <DragButton>
                <Draggable
                    defaultPosition={{ x: 0, y: 0 }}
                    grid={[5, 5]}
                    scale={1}
                    handle=".handle"
                >
                    <div className="handle" style={{ zIndex: 1 }}>
                        <Menu
                            style={{
                                width: '50px',
                                height: '50px',
                                background: '#ccc',
                                borderRadius: '5px',
                                zIndex: 1
                            }}
                            onDoubleClick={handleOpen}
                        />
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={open}
                        >
                            <div>
                                <button onClick={addRect}>addRect</button>
                                <button onClick={addCircle}>addCircle</button>
                                <input
                                    // style={{ display: 'none' }}
                                    type="file"
                                    ref={fileUploadEl}
                                    onChange={fileChange}
                                />
                                <button onClick={redo}>redo</button>
                                <button onClick={undo}>undo</button>
                            </div>
                        </Modal>
                    </div>
                </Draggable>
            </DragButton>
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
                                            data: newAttrs,
                                            type: 'rect',
                                            index: i
                                        };
                                        const logTmp = log.concat(LOG);
                                        setLog(logTmp);
                                        // undo/redo用の変数を更新
                                        tmp[i] = newAttrs;
                                        setRect(tmp);
                                        // json.push(stageEl.current.getStage().toJSON()
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
                                            data: newAttrs,
                                            type: 'circle',
                                            index: i
                                        };
                                        const logTmp = log.concat(LOG);
                                        setLog(logTmp);
                                        tmp[i] = newAttrs;
                                        setCircle(tmp);
                                        console.log(
                                            stageEl.current.getStage().toJSON()
                                        );
                                    }}
                                />
                            );
                        })}
                        {images.map((image: any, i: number) => {
                            return (
                                <Img
                                    key={i}
                                    imageUrl={image.content}
                                    shapeProps={images}
                                    isSelected={image.id === selectedId}
                                    onSelect={() => {
                                        selectShape(image.id);
                                    }}
                                    onChange={(newAttrs: any) => {
                                        const imgs = images.slice();
                                        imgs[i] = newAttrs;
                                    }}
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </FullScreenWrapper>
        </>
    );
};

const FullScreenWrapper = styled.div`
    position: absolute;
    top: 100px;
    right: 0;
`;

const DragButton = styled.div`
    z-index: top;
`;

export default Canvas;
