<template>
  <ClientOnly>
    <div class="svg-container">
      <button style="display: none" id="start" ref="startRef">重新开始动画</button>
      <svg
        width="100%"
        viewBox="0 0 400 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        ref="svgRef"
        class="svg"
      >
        <defs>
          <path
            id="name-path-middle"
            d="M115.836,97.124c0,0,2.36-6.941,1.33-8.957
		c-8.542-16.708-44.338-20.881-63.5-1.333C12.25,129.083-0.917,190.999,21.75,212.083c12.771,11.879,30.75,27.5,78-17.5
		c23.729-22.599,88-108,82.5-165c-21.083,12.25-82,196.75-82,196.75s23.531-51.411,39.5-47.5c8.75,5-5.18,30.446,16.663,37.813
		c23.94,8.074,55.854-57.44,37.188-71.777c-11.488-8.823-21.964,9.519-23.601,25.127c-2.5,23.837,43.779,3.538,62-28.663
		c4.251-7.513,2.707,15.035-5.5,36.5c-3.25,8.5,18.25-54.25,41.25-41.5c8.09,4.484-10,52.5,35.923,32.8
		c16.468-7.064,30.827-45.05,19.327-47.05c-8.842-1.538-10.329,5.302-13,11.25c-2.071,4.611-3.797,11.039-4.999,20.996
		c-3.501,29.004,33.901,59.221,25.749,86.254c-4.75,15.75-45.466,22.056-55.416,19.411c-12.834-3.411,6.98-31.146,27.855-52.771
		c20.749-21.494,95.144-82.559,95.144-82.559"
            fill="none"
            stroke="#f00"
            stroke-width="2"
            ref="namePathMiddleRef"
          />
        </defs>
        <mask id="mask-shape" x="0" y="0">
          <path
            d="M121.422,96.496c0,0,3.743-9.729,0.912-12.324
		C113.562,76.131,87.522,60.908,64,72.667c-15.333,7.666-39.713,32.201-49.667,61.336C6.25,157.668-10.388,214.969,34,229.668
		c38.447,12.73,122.397-77.797,149.667-168.667c7.002-23.332,3.667-44.001-1.333-41.084
		c-18.457,10.769-84.18,187.854-86.863,206.749c-0.334,2.354,0.599,11.998,8.53,4.203c0,0,7.573-19.166,11.333-24.871
		c4.09-6.207,19.071-21.482,21.667-22c3,76.998,56.333,18.666,63-1c5.793-17.09,4.332-34.504-3.667-44
		C191,132.664,173,140.664,168.667,159.33c-3.933,16.941,0.333,25.668,6.667,25.668c27.667,0,55-33.334,55-33.334
		s-8.396,20.59-7.334,27.666c1,6.668,5.602,4.26,6,2.668c2.667-10.666,18.556-47.486,32-44.668
		c8.875,1.861,1.77,23.916,10.667,34.668c8,9.668,35.762,10.369,52.526-22.24c9.473-18.426,9.314-24.911,4.474-31.093
		c-6.001-7.666-40.251,2.527-20,72.666c2.166,7.502,11.493,15.643,13.666,21.668c2.548,7.061,5.757,23.934,1.334,30
		c-4.833,6.627-22.503,10.877-30.667,11.666c-4.396,0.426-15.027,3.541-17.667,0c-1.958-2.625,1.652-9.855,3.334-12.666
		c26.332-44,116-109.667,116-109.667l3.666-7.668l-5.083-0.496c-92.323,78.538-90.519,76.295-105.75,93.5
		c-6.118,6.91-16.243,22.773-19.25,31.5c-1.221,3.541-1.412,12.205,2.238,14.816c9.545,6.824,37.09-1.027,48.012-5.316
		c4.771-1.875,10.75-7,14.5-14.5c4.077-8.156-1.134-27.596-4-36.25c-3.673-11.092-17.917-30.605-20.5-42
		c-2.239-9.879,0.25-30.252,9-39.5c1.489-1.574,7.25-2,7.25,4.75c0,4.25-3.429,12.44-5.75,16c-5.843,8.961-12.5,26.25-37,21.5
		c-14.279-2.77-4.789-33.313-14-36.75c-16.75-6.25-31.25,18-31.25,18s4.62-18.27,0-18.5c-5-0.25-18.638,20.356-25,27
		c-7.059,7.371-33.356,26.783-37,17.25c-2.674-6.996,0-24.5,12.5-29.75c1.427-0.6,3.699,3.053,4.25,4.5c4.7,12.34-1.25,43-13.75,51
		c-47.235,30.23-25-27.5-34.544-30.369c-9.58-2.879-27.956,21.869-27.956,21.869l62-151.737c0,0,1,25.986-25.75,77.236
		c-65.234,124.981-127.5,112-133.5,68c-2.104-15.426-3.75-43.265,35.145-90.789c9.035-11.039,37.522-26.045,57.98-6.462
		c1.271,1.217-2.875,5.086-1.5,6.875c1.542,2.008,11.537,0.65,11.537,0.65L121.422,96.496z"
            fill="white"
            stroke="#000"
            stroke-width="0"
          />
          <path
            d="M109.817,181.587c0,0,16.808-20.129,22.111-29.488
		c6.277-11.076,19.262-47.142,19.262-47.142s-9.58-5.794-10.715-3.237C124.5,137.708,109.817,181.587,109.817,181.587z"
            fill="white"
            stroke="#000"
            stroke-width="0"
          >
            <set
              attributeName="fill"
              begin="0;start.click"
              to="black"
              :dur="`${0.36 * duration}`"
            />
          </path>
        </mask>
        <g mask="url(#mask-shape)">
          <circle
            v-for="(circle, index) in circles"
            :key="index"
            cx="0"
            cy="0"
            :r="radius"
            :style="`fill: ${circle.color}`"
          >
            <animateMotion
              begin="0;start.click"
              :dur="`${duration}s`"
              repeatCount="1"
              fill="freeze"
              keyTimes="0;1"
              :keyPoints="`0;${circle.keyPoint}`"
            >
              <mpath xlink:href="#name-path-middle" />
            </animateMotion>
            <animate
              begin="0;start.click"
              attributeType="XML"
              attributeName="r"
              :keyTimes="circle.rKeyTimes"
              :values="circle.rKeyValues"
              fill="freeze"
              :dur="`${duration}s`"
              repeatCount="1"
            />
          </circle>
        </g>
        <path
          d="M121.422,96.496c0,0,3.743-9.729,0.912-12.324
		C113.562,76.131,87.522,60.908,64,72.667c-15.333,7.666-39.713,32.201-49.667,61.336C6.25,157.668-10.388,214.969,34,229.668
		c38.447,12.73,122.397-77.797,149.667-168.667c7.002-23.332,3.667-44.001-1.333-41.084
		c-18.457,10.769-84.18,187.854-86.863,206.749c-0.334,2.354,0.599,11.998,8.53,4.203c0,0,7.573-19.166,11.333-24.871
		c4.09-6.207,19.071-21.482,21.667-22c3,76.998,56.333,18.666,63-1c5.793-17.09,4.332-34.504-3.667-44
		C191,132.664,173,140.664,168.667,159.33c-3.933,16.941,0.333,25.668,6.667,25.668c27.667,0,55-33.334,55-33.334
		s-8.396,20.59-7.334,27.666c1,6.668,5.602,4.26,6,2.668c2.667-10.666,18.556-47.486,32-44.668
		c8.875,1.861,1.77,23.916,10.667,34.668c8,9.668,35.762,10.369,52.526-22.24c9.473-18.426,9.314-24.911,4.474-31.093
		c-6.001-7.666-40.251,2.527-20,72.666c2.166,7.502,11.493,15.643,13.666,21.668c2.548,7.061,5.757,23.934,1.334,30
		c-4.833,6.627-22.503,10.877-30.667,11.666c-4.396,0.426-15.027,3.541-17.667,0c-1.958-2.625,1.652-9.855,3.334-12.666
		c26.332-44,116-109.667,116-109.667l3.666-7.668l-5.083-0.496c-92.323,78.538-90.519,76.295-105.75,93.5
		c-6.118,6.91-16.243,22.773-19.25,31.5c-1.221,3.541-1.412,12.205,2.238,14.816c9.545,6.824,37.09-1.027,48.012-5.316
		c4.771-1.875,10.75-7,14.5-14.5c4.077-8.156-1.134-27.596-4-36.25c-3.673-11.092-17.917-30.605-20.5-42
		c-2.239-9.879,0.25-30.252,9-39.5c1.489-1.574,7.25-2,7.25,4.75c0,4.25-3.429,12.44-5.75,16c-5.843,8.961-12.5,26.25-37,21.5
		c-14.279-2.77-4.789-33.313-14-36.75c-16.75-6.25-31.25,18-31.25,18s4.62-18.27,0-18.5c-5-0.25-18.638,20.356-25,27
		c-7.059,7.371-33.356,26.783-37,17.25c-2.674-6.996,0-24.5,12.5-29.75c1.427-0.6,3.699,3.053,4.25,4.5c4.7,12.34-1.25,43-13.75,51
		c-47.235,30.23-25-27.5-34.544-30.369c-9.58-2.879-27.956,21.869-27.956,21.869l62-151.737c0,0,1,25.986-25.75,77.236
		c-65.234,124.981-127.5,112-133.5,68c-2.104-15.426-3.75-43.265,35.145-90.789c9.035-11.039,37.522-26.045,57.98-6.462
		c1.271,1.217-2.875,5.086-1.5,6.875c1.542,2.008,11.537,0.65,11.537,0.65L121.422,96.496z"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          pathLength="100"
          stroke-dasharray="102"
          id="name-path"
          :color="color"
        >
          <animate
            begin="0;start.click"
            onbegin="document.getElementById('name-path').style.fill='none'"
            onend="document.getElementById('name-path').style.fill='currentColor'"
            attributeType="XML"
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            :dur="duration"
            repeatCount="1"
          />
        </path>
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
interface CircleInfo {
  keyPoint: number;
  color?: string;
  rKeyTimes: string;
  rKeyValues: string;
}
const namePathMiddleRef = ref<SVGPathElement>();
const svgRef = ref<SVGPathElement>();
const radius = ref(10);
// const distance = ref(radius.value * 0.5);
const circles = ref<CircleInfo[]>([]);
// const circleCount = ref(0);
const duration = ref(4);
const startRef = ref<HTMLElement>();
const color = ref<string>('#333');
// const circleKeyPointInfo = [
//   {
//     start: 0.182,
//     end: 0.25,
//     r: 5
//   },
//   {
//     start: 0.37,
//     end: 0.425,
//     r: 7
//   },
//   {
//     start: 0.522,
//     end: 0.546,
//     r: 6
//   },
//   {
//     start: 0.588,
//     end: 0.612,
//     r: 5
//   },
//   {
//     start: 0.727,
//     end: 0.745,
//     r: 4
//   },
//   {
//     start: 0.79,
//     end: 0.808,
//     r: 4
//   },
//   {
//     start: 0.809,
//     end: 0.825,
//     r: 7
//   },
//   {
//     start: 0.926,
//     end: 0.945,
//     r: 4.5
//   }
// ];

onMounted(() => {
  nextTick(() => {
    // const totalLength = namePathMiddleRef.value?.getTotalLength();
    // if (totalLength) {
    //   circleCount.value = Math.ceil(totalLength / distance.value) + 1;
    //   for (let i = 0; i < circleCount.value; i++) {
    //     let keyPoint = (i * distance.value) / totalLength;
    //     if (keyPoint > 1) {
    //       keyPoint = 1;
    //     }
    //     let rKeyTimes = `0;`;
    //     let rKeyValues = `${radius.value};`;
    //     const circleKeyPoints = circleKeyPointInfo.filter((circleKeyPoint) => {
    //       return keyPoint > circleKeyPoint.start;
    //     });
    //     circleKeyPoints.forEach((circleKeyPoint, index) => {
    //       rKeyTimes += `${circleKeyPoint.start / keyPoint};${circleKeyPoint.start / keyPoint};`;
    //       rKeyValues += `${radius.value};${circleKeyPoint.r};`;
    //       if (circleKeyPoint.end > keyPoint) {
    //         rKeyTimes += `1`;
    //         rKeyValues += `${circleKeyPoint.r}`;
    //       } else {
    //         rKeyTimes += `${circleKeyPoint.end / keyPoint};${circleKeyPoint.end / keyPoint};`;
    //         rKeyValues += `${circleKeyPoint.r};${radius.value};`;
    //         if (index === circleKeyPoints.length - 1) {
    //           rKeyTimes += `1`;
    //           rKeyValues += `${radius.value}`;
    //         }
    //       }
    //     });
    //     if (circleKeyPoints.length === 0) {
    //       rKeyTimes += '1';
    //       rKeyValues += `${radius.value}`;
    //     }
    //     circles.value.push({
    //       keyPoint: keyPoint,
    //       rKeyTimes,
    //       rKeyValues
    //     });
    //   }
    // }
    useDark({
      onChanged(isDark) {
        startRef.value?.click();
        // let colors: string[] = [];
        if (isDark) {
          // colors = extendColors(['#eeeeee', '#000000'], circleCount.value);
          color.value = '#eee';
        } else {
          // colors = extendColors(
          //   ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#800080'],
          //   circleCount.value
          // );
          color.value = '#333';
        }
        //   circles.value.forEach((circle, index) => {
        //     circle.color = colors[index];
        //   });
      }
    });
  });
});
</script>

<style scoped>
.svg-container {
  min-height: calc(100vh - var(--navigation-bar-height) - var(--safe-bottom-area) - 10em);
  display: flex;
}
.svg {
  max-width: 800px;
  margin: auto;
}
</style>
