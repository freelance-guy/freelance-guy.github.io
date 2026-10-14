<template>
  <svg
    class="svg-grid-bg"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="term-grid"
        width="48"
        height="48"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 48 0 L 0 0 0 48"
          fill="none"
          stroke="#26313f"
          stroke-width="1"
        />
      </pattern>
      <radialGradient id="term-glow" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#33ff99" stop-opacity="0.14" />
        <stop offset="60%" stop-color="#33ff99" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#term-grid)" />
    <rect width="100%" height="100%" fill="url(#term-glow)" />
    <g stroke="#33ff99" stroke-opacity="0.35" fill="none">
      <path d="M 0 120 H 240 L 300 180 H 640" stroke-width="1.5" />
      <circle cx="240" cy="120" r="4" fill="#33ff99" stroke="none" />
      <circle cx="640" cy="180" r="4" fill="#ffb454" stroke="none" />
    </g>
  </svg>
</template>
