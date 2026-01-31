import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type XProps = {
  size?: number;
  color?: string;
  dangerousIgnoreError?: boolean;
  constantStrokeWidth?: boolean;
};

export type CircleXProps = XProps & {
  background?: string;
  multiplier?: number;
};

export type Exclude =
 | "width"
 | "height"
 | "viewBox"
 | "fill"
 | "xmlns"

export type AdditionalProps<T> = T & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children">;

export const X_PADDING = 2;
export const CIRCLE_X_PADDING = 4;
export const CIRCLE_X_MULTIPLIER = 0.8;
export const STROKE_WIDTH = 2;