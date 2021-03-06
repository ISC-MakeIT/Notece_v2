import Konva from 'konva';
import { bool } from 'prop-types';

const addLine = (stage: any, layer: any): void => {
    let isPaint: boolean = false;
    let lastLine: any;
    stage.on('mousedown touchstart', function(e: Event) {
        isPaint = true;
        let pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
            stroke: 'red',
            strokeWidth: 5,
            globalCompositeOperation: 'source-over',
            // globalCompositeOperation: ,
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
