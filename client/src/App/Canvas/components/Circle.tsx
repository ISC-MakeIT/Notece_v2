import React, { FC, useRef, useEffect } from 'react';
import { Circle, Transformer } from 'react-konva';

interface CircProps {
    shapeProps: any;
    isSelected: any;
    onSelect: any;
    onChange: any;
}

const Circ: FC<CircProps> = ({
    shapeProps,
    isSelected,
    onSelect,
    onChange
}) => {
    const shapeRef = React.useRef();
    const trRef: any = React.useRef();
    React.useEffect(() => {
        if (isSelected) {
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            <Circle
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                onDragEnd={e => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y()
                    });
                }}
                onTransformEnd={e => {
                    // transformer is changing scale
                    const node: any = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * scaleX,
                        height: node.height() * scaleY
                    });
                }}
            />
            {isSelected && <Transformer ref={trRef} />}
        </React.Fragment>
    );
};
export default Circ;
