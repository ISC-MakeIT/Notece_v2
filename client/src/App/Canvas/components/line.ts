import Konva from 'konva';

const addLine = (stage: any, layer: any, canDraw: boolean): void => {
    let isPaint: boolean = false;
    let lastLine: any;
    stage.on('mousedown touchstart', function(e: Event) {
        if (!canDraw) {
            // pen以外が選択されたときはここに来るようにする
            return;
        }
        isPaint = true;
        let pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
            stroke: 'red',
            strokeWidth: 5,
            globalCompositeOperation: 'source-over',
            points: [pos.x, pos.y]
        });
        layer.add(lastLine);
    });
    stage.on('mouseup touchend', function() {
        isPaint = false;
    });
    stage.on('mousemove touchmove', function() {
        if (!isPaint) {
            return;
        }
        const pos = stage.getPointerPosition();
        let newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
    });
};

export default addLine;
