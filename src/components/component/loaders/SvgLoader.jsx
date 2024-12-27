import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function SvgPathLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          [".m1", { pathLength: 0.5, pathOffset: 0 }],
          [".m1", { pathLength: 0.005, pathOffset: 0 }],
          [".m2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }]
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );

      animate(
        [
          [".on1", { pathLength: 0.5, pathOffset: 0 }],
          [".on1", { pathLength: 0.005, pathOffset: 0 }],
          [".on2", { pathLength: 0.5, pathOffset: 0.5 }, { at: "<" }]
        ],
        { duration: 2, ease: "linear", repeat: Infinity }
      );

      animate(
        [
          [".innerO", { pathLength: 1.1, pathOffset: 0 }],
          [".innerO", { pathLength: 0, pathOffset: 0 }]
        ],
        { duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }
      );

      animate(
        [
          [".outerO", { pathLength: 1.1, pathOffset: 0 }],
          [".outerO", { pathLength: 0, pathOffset: 0 }]
        ],
        { duration: 2, repeat: Infinity, repeatDelay: 0.6 }
      );
    };
    animateLoader();
  }, [animate]);

  return (
    <svg
    id="svg"
      ref={scope}
      width="94.033241mm"
      height="29.361317mm"
      viewBox="0 0 93.033241 29.361316"
    >
      <motion.path
        className="m1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 1.0913967,27.435857 6.1678497,0.90879279 14.446371,20.084977 23.021669,0.90879279 27.582665,27.435857 H 23.84952 L 21.522164,12.542343 14.38389,28.570437 7.4486773,12.526363 4.8557837,27.435857 Z"
      />
      <motion.path
        className="m2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 1.0913967,27.435857 6.1678497,0.90879279 14.446371,20.084977 23.021669,0.90879279 27.582665,27.435857 H 23.84952 L 21.522164,12.542343 14.38389,28.570437 7.4486773,12.526363 4.8557837,27.435857 Z"
      />
      {/* Add the rest of the SVG paths */}
    </svg>
  );
}
