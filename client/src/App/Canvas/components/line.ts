import Konva from 'konva';

const addLin = (
    stage: any,
    layer: any,
    mode: string,
    canDraw: boolean
): void => {
    let isPaint: boolean = false;
    let lastLine;
    if (canDraw) {
        stage.on('mousedown touchstart', function(e) {
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
    }
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
