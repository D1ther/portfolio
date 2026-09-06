import React from 'react';

/**
 * FreelanceHunt brand icon, minimalist monochrome.
 *
 * The whole mark is drawn in `currentColor`, so the active theme controls
 * the look: pure white in dark mode, black in light mode (set via the
 * `--fh-icon-color` CSS variable). Sized in `em` so it scales like the
 * Material UI icons used elsewhere.
 */
function FreelanceHuntIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      className="fh-icon"
    >
      {/* Right arc of the outer ring */}
      <path
        d="M 355 68.13 A 210 210 0 0 1 250 460"
        fill="none"
        stroke="currentColor"
        strokeWidth="60"
        strokeLinecap="round"
      />

      {/* Main outer ring */}
      <path
        d="M 304.35 452.84 A 210 210 0 1 1 398.49 101.51"
        fill="none"
        stroke="currentColor"
        strokeWidth="60"
        strokeLinecap="round"
      />

      {/* Horizontal left bar */}
      <path
        d="M 11.88 220
           H 165.15
           A 90 90 0 0 0 165.15 280
           H 11.88
           A 240 240 0 0 1 11.88 220
           Z"
        fill="currentColor"
      />

      {/* Top sector */}
      <path
        d="M 186.36 186.36
           L 143.93 143.93
           A 150 150 0 0 1 356.07 143.93
           L 313.64 186.36
           A 90 90 0 0 0 186.36 186.36
           Z"
        fill="currentColor"
      />

      {/* Bottom sector */}
      <path
        d="M 313.64 313.64
           L 356.07 356.07
           A 150 150 0 0 1 143.93 356.07
           L 186.36 313.64
           A 90 90 0 0 0 313.64 313.64
           Z"
        fill="currentColor"
      />

      {/* Center vertical capsule */}
      <rect x="220" y="177.5" width="60" height="145" rx="30" fill="currentColor" />
    </svg>
  );
}

export default FreelanceHuntIcon;