import React, { useState } from 'react';

import styles from './Steps.module.scss';
import data from '../../../data';
import {
  ShapesInterface,
  initialValueType,
} from '../../../EnumAndInterface/interface';
import { DifferentSteps, Shapes } from '../../../EnumAndInterface/enum';
import Button from '../../atoms/Button/index';
import Text from '../../atoms/Text';
import InputBlock from '../../molecules/InputBlock';
import RadioButton from '../../atoms/RadioButton';

const Steps = () => {
  const initialValue = {
    shape: undefined,
    inputs: {
      rectangle: { length: 0, breadth: 0 },
      circle: { diameter: 0 },
      square: { length: 0 },
      ellipse: { axisA: 0, axisB: 0 },
    },
  };

  const [shapes, setShapes] = useState<ShapesInterface[]>(data);
  const [steps, setSteps] = useState<number>(1);
  const [selectedShape, setSelectedShape] = useState<initialValueType>(
    initialValue
  );

  function Type(shape: string): Shapes {
    if (shape === Shapes.CIRCLE) return Shapes.CIRCLE;
    if (shape === Shapes.SQUARE) return Shapes.SQUARE;
    if (shape === Shapes.ELLIPSE) return Shapes.ELLIPSE;
    return Shapes.RECTANGLE;
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput: string = e.target.value;
    setSelectedShape({ ...selectedShape, shape: Type(userInput) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const shape = selectedShape.shape;
    const inputs = selectedShape.inputs;
    if (shape !== undefined) {
      setSelectedShape({
        ...selectedShape,
        inputs: {
          ...inputs,
          [shape]: { ...inputs[shape], [e.target.name]: inputValue },
        },
      });
    }
  };

  const startOver = () => {
    setSteps(1);
    setSelectedShape({ ...initialValue, shape: undefined });
  };

  const result = () => {
    switch (selectedShape.shape) {
      case Shapes.RECTANGLE:
        return (
          selectedShape.inputs['rectangle'].length *
          selectedShape.inputs.rectangle.breadth
        ).toFixed(3);
      case Shapes.CIRCLE:
        return (
          Math.PI *
          (selectedShape.inputs['circle'].diameter / 2) *
          (selectedShape.inputs['circle'].diameter / 2)
        ).toFixed(3);
      case Shapes.SQUARE:
        return (
          selectedShape.inputs['square'].length *
          selectedShape.inputs['square'].length
        ).toFixed(3);
      case Shapes.ELLIPSE:
        return (
          Math.PI *
          selectedShape.inputs['ellipse'].axisA *
          selectedShape.inputs['ellipse'].axisB
        ).toFixed(3);
      default:
        return 0;
    }
  };

  const getKeyAndValue = () => {
    const para = selectedShape.inputs;
    const params = Object.entries(para);
    const selected = params.find((ele) => ele[0] === selectedShape.shape);
    return selected;
  };

  const displayMessage = () => {
    const selected = getKeyAndValue();
    if (selected) {
      const val = Object.keys(selected[1]);
      const val1 = selected[1][val[0]];
      const val2 = selected[1][val[1]];
      const paramsLength = Object.keys(selected[1]).length;
      console.log(selected, 'selected');
      return (
        <div className={styles.message}>
          You have calculated the area of a{' '}
          <strong>{selectedShape.shape}</strong> with a{' '}
          {paramsLength > 1
            ? `${val[0]} of ${val1} and ${val[1]} of ${val2}`
            : `${val[0]} of ${val1}`}
          . Below is your result.
        </div>
      );
    }
  };

  const checkCondition = () => {
    const selected = getKeyAndValue();
    if (selected) {
      const val = Object.keys(selected[1]);
      const val1 = selected[1][val[0]];
      const val2 = selected[1][val[1]];
      const paramsLength = Object.keys(selected[1]).length;
      return (
        <>
          {paramsLength > 1
            ? val1 > 0 && val2 > 0
              ? setSteps(3)
              : setSteps(2)
            : val1 > 0
            ? setSteps(3)
            : setSteps(2)}
        </>
      );
    }
  };

  return (
    <div className={styles.Step1}>
      {steps === DifferentSteps.Step1 && (
        <div>
          <div className={styles.mainHeading}>
            {' '}
            <Text type="heading">Step 1 : Select your shape</Text>
          </div>
          <div className={styles.body}>
            <div className={styles.description}>
              <Text type="paragraph" size={'17px'}>
                Please select the shape that you would like to calculate the
                area of and press the button "Go to step 2"
              </Text>
            </div>
            {shapes.map((items) => {
              const { id, shape } = items;
              console.log(shape);
              return (
                <div key={id} className={styles.container}>
                  <RadioButton
                    type="radio"
                    name="Radio"
                    value={shape}
                    checked={selectedShape.shape === shape}
                    onChange={(e) => handleRadioChange(e)}
                    label={shape}
                    id={selectedShape.shape}></RadioButton>
                </div>
              );
            })}
            <div className={styles.button}>
              <Button
                type="button"
                title="Go to step 2"
                onClick={() =>
                  selectedShape.shape ? setSteps(2) : setSteps(1)
                }
              />
              <p className={styles.or}>or</p>
              <p className={styles.cancel} onClick={startOver}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}
      {steps === DifferentSteps.Step2 && (
        <div>
          <div className={styles.mainHeading}>
            {' '}
            <Text type="heading">Step 2 : Insert your values</Text>
          </div>

          <div className={styles.body}>
            <p className={styles.description}>
              You have selected a{' '}
              <span className={styles.bold}>{selectedShape.shape}</span>, please
              input the required variables.
            </p>
            {selectedShape.shape === Shapes.RECTANGLE && (
              <div className={styles.field}>
                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="length"
                    placeholder="text"
                    value={selectedShape.inputs['rectangle'].length}
                    onChange={handleChange}
                    label="Length: "></InputBlock>
                </div>

                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="breadth"
                    placeholder="text"
                    value={selectedShape.inputs['rectangle'].breadth}
                    onChange={handleChange}
                    label="Width: "></InputBlock>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.CIRCLE && (
              <div className={styles.field}>
                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="diameter"
                    placeholder="text"
                    value={selectedShape.inputs['circle'].diameter}
                    onChange={handleChange}
                    label="Diameter: "></InputBlock>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.SQUARE && (
              <div className={styles.field}>
                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="length"
                    placeholder="text"
                    value={selectedShape.inputs['square'].length}
                    onChange={handleChange}
                    label="Side: "></InputBlock>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.ELLIPSE && (
              <div className={styles.field}>
                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="axisA"
                    placeholder="text"
                    value={selectedShape.inputs['ellipse'].axisA}
                    onChange={handleChange}
                    label="a Axis: "></InputBlock>
                </div>
                <div className={styles.inputContainer}>
                  <InputBlock
                    type="number"
                    id="fname"
                    name="axisB"
                    placeholder="text"
                    value={selectedShape.inputs['ellipse'].axisB}
                    onChange={handleChange}
                    label="b Axis:"></InputBlock>
                </div>
              </div>
            )}
            <div className={styles.button}>
              <Button
                type="button"
                title="Go to step 3"
                onClick={checkCondition}
              />
              <p className={styles.or}>or</p>
              <p className={styles.cancel} onClick={startOver}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}

      {steps === DifferentSteps.Step3 && (
        <div>
          <div className={styles.mainHeading}>
            {' '}
            <Text type="heading">Step 3 : Your results</Text>
          </div>
          <div className={styles.body}>
            {displayMessage()}
            <div className={styles.score}>
              <h1>The Area is {result()}</h1>
            </div>
            <div className={styles.startOver}>
              <Button type="button" title="Start Over" onClick={startOver} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
