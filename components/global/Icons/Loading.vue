<template>
  <div
    class="wrapper"
    :class="{
      loading: loading
    }"
  >
    <div v-if="type === 'spinner'" class="spinner">
      <svg class="circular" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    </div>
    <div v-if="type === 'snow'" class="snow">
      <svg class="circular" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'snow' | 'spinner';
    loading: boolean;
  }>(),
  {
    type: 'spinner'
  }
);
</script>

<style scoped lang="scss">
.wrapper {
  display: none;
  height: 50px;
  justify-content: center;
  align-items: center;
  &.loading {
    display: flex;
  }
}

.snow {
  width: 24px;
  height: 24px;
  animation: rotating 2s linear infinite;
  color: var(--blog-text-2);
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
}

.spinner .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--blog-text-2);
  stroke-linecap: round;
}

.spinner .circular {
  animation: loading-rotate 2s linear infinite;
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
