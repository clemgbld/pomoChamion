import React, { Suspense, lazy } from "react";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

export const AnimatedDiv = (props) => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);

const MotionP = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.p }))
);

export const AnimatedP = (props) => (
  <Suspense fallback={<p className={props.className}>{props.children}</p>}>
    <MotionP {...props} />
  </Suspense>
);

const MotionH2 = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.h2 }))
);

export const AnimatedH2 = (props) => (
  <Suspense fallback={<h2 className={props.className}>{props.children}</h2>}>
    <MotionH2 {...props} />
  </Suspense>
);

const MotionPath = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.path }))
);

export const AnimatedPath = (props) => (
  <Suspense fallback={<path className={props.className}></path>}>
    <MotionPath {...props} />
  </Suspense>
);

const MotionButton = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.button }))
);

export const AnimatedButton = (props) => (
  <Suspense
    fallback={
      <button disabled={props.disabled} className={props.className}>
        {props.children}
      </button>
    }
  >
    <MotionButton {...props} />
  </Suspense>
);
