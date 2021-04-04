import { Shapes } from './enum';
export interface ShapesInterface {
  id: number;
  shape: string;
}

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  title: string;
}

export interface TextProps {
  children?: string;
  color?: string;
  size?: string;
  type: 'heading' | 'paragraph' | 'default' | 'sub-heading';
  weight?: number;
}

export interface InputProps {
  type: 'text' | 'number';
  id: string | undefined;
  name: string | undefined;
  placeholder?: string | undefined;
  value?: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface InputBlockProps extends InputProps {
  label?: string;
}

export interface RadioProps {
  type: string;
  name: string; 
  value?: string | number | readonly string[];
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface RadioButtonBlockProps extends RadioProps {
  label?: string;
}

export interface CardProps {
  border?: string;
  children?: string;
}


export interface ImageProps {
  src: string;
  alt: string;
}

export interface rectangleType {
  length: number;
  breadth: number;
}

export interface circleType {
  diameter: number;
}

export interface squareType {
  length: number;
}

export interface ellipseType {
  axisA: number;
  axisB: number;
}
export interface inputsType {
  rectangle: rectangleType;
  circle: circleType;
  square: squareType;
  ellipse: ellipseType;
}

export interface initialValueType {
  shape: Shapes | undefined;
  inputs: inputsType;
}
