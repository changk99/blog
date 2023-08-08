<template>
  <div class="theme-change">
    <button
      class="switch"
      @click="toggleTheme"
      role="switch"
      aria-label="切换暗色主题"
      :aria-checked="isDark"
      :class="{
        k: isDark
      }"
    >
      <div class="switch__action">
        <div class="switch__icon">
          <IconsDark class="dark-icon icon" width="1em" height="1em"></IconsDark>
          <IconsLight class="light-icon icon" width="1em" height="1em"></IconsLight>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark();

function toggleTheme() {
  isDark.value = isDark.value ? false : true;
}
</script>

<style scoped lang="scss">
.theme-change {
  font-size: 0;
  .switch {
    margin: 0;
    font-size: 16px;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--blog-border-color-1);
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--blog-bg-soft);
    cursor: pointer;
    transition: border-color var(--transition-duration), background-color var(--transition-duration) !important;
  }

  .switch:hover {
    border-color: var(--blog-border-color-3);
  }
  .switch__action {
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    background-color: var(--blog-bg);
    transform: translate(0);
    color: var(--blog-text-1);
    transition: border-color var(--transition-duration), background-color var(--transition-duration),
      transform var(--transition-duration) !important;
  }

  .switch__action,
  .switch__icon {
    width: 16px;
    height: 16px;
  }

  .switch__icon {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    transition: color var(--transition-duration), opacity var(--transition-duration) !important;
  }
  .dark-icon {
    opacity: 0;
  }
}
.dark {
  .switch__action {
    transform: translate(20px);
  }
  .dark-icon {
    opacity: 1;
  }
  .light-icon {
    opacity: 0;
  }
}
</style>
