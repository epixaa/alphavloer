import React, { forwardRef, useEffect, useId, useRef } from "react";
import {
  TinySliderInfo,
  TinySliderInstance,
  TinySliderSettings,
  tns,
} from "tiny-slider/src/tiny-slider";

const events = [
  "indexChanged",
  "transitionStart",
  "transitionEnd",
  "newBreakpointStart",
  "newBreakpointEnd",
  "touchStart",
  "touchMove",
  "touchEnd",
  "dragStart",
  "dragMove",
  "dragEnd",
];

/**
 * @returns {TinySliderInstance| null}
 */

const initialValue = () => null;

/**
 * @typedef {(info: TinySliderInfo) => void} EventCallback
 * @typedef {{children: React.ReactNode; options: TinySliderSettings; onIndexChanged?: EventCallback;onTransitionStart?:EventCallback; onTransitionEnd?:EventCallback; onNewBreakpointStart?:EventCallback; onNewBreakpointEnd?:EventCallback; onTouchStart?:EventCallback; onTouchMove?:EventCallback; onTouchEnd?:EventCallback; onDragStart?:EventCallback; onDragMove?:EventCallback; onDragEnd?:EventCallback; onInit?:(slider: TinySliderInstance) => void}} TinySliderProps
 * @param {TinySliderProps} props
 */

const TinySlider = (
  { children, options = {}, onInit, ...eventsCallbacks },
  ref
) => {
  const sliderRef = useRef(initialValue());
  const id = useId();

  const container = `.slider-${id.split(":").join("")}`;

  useEffect(() => {
    if (!sliderRef.current) {
      const slider = tns({ ...options, container });
      sliderRef.current = slider;
      onInit?.(slider);
      events.forEach((event) => {
        const ending = event.slice(1);
        const start = event[0].toUpperCase();
        const newEvent = `on${start}${ending}`;
        const callback = eventsCallbacks[newEvent];
        if (callback) {
          slider.events.on(event, callback);
        }
      });
    }
  }, [options, onInit, eventsCallbacks, container]);

  return (
    <div ref={ref} className={`${container.split(".")[1]} position-relative`}>
      {children}
    </div>
  );
};

export default forwardRef(TinySlider);

export {};
