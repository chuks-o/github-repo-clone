<template>
  <svg width="155" height="30">
    <defs>
      <linearGradient id="gradient-273900248" x1="0" x2="0" y1="1" y2="0">
        <stop offset="10%" stop-color="#9be9a8"></stop>
        <stop offset="33%" stop-color="#40c463"></stop>
        <stop offset="66%" stop-color="#30a14e"></stop>
        <stop offset="90%" stop-color="#216e39"></stop>
      </linearGradient>
      <mask id="sparkline-273900248" x="0" y="0" width="155" height="28">
        <polyline
          transform="translate(0, 28) scale(1,-1)"
          points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,2 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,5 81,4 84,2 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,1 129,1 132,1 135,1 138,1 141,1 144,1 147,1 150,1 153,3 "
          fill="transparent"
          stroke="#8cc665"
          stroke-width="2"
        ></polyline>
      </mask>
    </defs>

    <g transform="translate(0, -10)">
      <rect
        x="0"
        y="-2"
        width="155"
        height="30"
        style="stroke: none; fill: url(#gradient-273900248); mask: url(#sparkline-273900248)"
      ></rect>
    </g>
  </svg>
</template>

<script>
export default {
  name: "RepositoryGraph"
};
</script>

<style></style>
