import React from 'react';

/**
 * Full Stack icon — combines frontend (monitor with `</>` code) and
 * backend (server with data rows) in one diagonal composition.
 *
 * Outline style drawn in `currentColor`, so it follows the active theme
 * like the other skill icons. Sized 3em to match the FontAwesome `fa-3x`
 * icons used in the same grid.
 */
function FullStackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="3em"
      height="3em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Frontend: monitor */}
      <rect x="1.6" y="1.8" width="13" height="9.6" rx="1.5" />
      <path d="M8.1 11.4 v2.0" />
      <path d="M5.6 13.4 h5.0" />
      {/* Code on the screen: </> */}
      <path d="M4.9 4.7 L7.0 6.6 L4.9 8.5" />
      <path d="M9.2 4.7 L10.3 8.5" />
      <path d="M11.6 4.7 v3.8" />

      {/* Backend: server */}
      <rect x="11.0" y="12.6" width="10.4" height="8.6" rx="1.8" />
      <path d="M12.7 15.2 h3.0" />
      <path d="M12.7 18.6 h3.0" />
      <circle cx="18.6" cy="15.2" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="18.6" cy="18.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default FullStackIcon;