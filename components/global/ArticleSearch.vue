<template>
  <div class="article-search-wrapper">
    <el-autocomplete
      v-model="content"
      :fetch-suggestions="querySearch"
      clearable
      class="search"
      placeholder="搜索"
      @focus="emits('focus')"
      @blur="emits('blur')"
      popper-class="article-search"
      ref="autocompleteRef"
    >
      <template #prefix>
        <IconsSearch class="search-icon" width="1em" height="1em"></IconsSearch>
      </template>
      <template #default="{ item }">
        <NuxtLink
          :title="item.title"
          @click="autocompleteRef?.blur()"
          v-if="item.path"
          :to="item.path"
          >{{ item.title }}</NuxtLink
        >
        <div @click="autocompleteRef?.blur()" class="empty" v-else>{{ item.title }}</div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';
import {
  AutocompleteData,
  AutocompleteFetchSuggestionsCallback,
  AutocompleteInstance
} from 'element-plus';

const content = ref('');
const autocompleteRef = ref<AutocompleteInstance>();
const { data: navigation } = useAsyncData('search-navigation', () => {
  return fetchContentNavigation();
});

const emits = defineEmits<{
  (eventName: 'focus'): void;
  (eventName: 'blur'): void;
}>();

function getResults(
  navigation: NavItem[],
  query: string,
  path = '',
  shouldMatchTitle: boolean = true
) {
  let results: AutocompleteData = [];
  for (const navItem of navigation) {
    const newPath = `${path}/${navItem.title}`;
    if (!shouldMatchTitle || navItem.title.indexOf(query) > -1) {
      if (navItem.children && navItem.children.length > 0) {
        results = results.concat(getResults(navItem.children, query, newPath, false));
      } else {
        results.push({
          path: navItem._path,
          title: newPath,
          value: navItem.title
        });
      }
    } else if (navItem.children && navItem.children.length > 0) {
      results = results.concat(getResults(navItem.children, query, newPath, shouldMatchTitle));
    }
  }
  return results;
}

function querySearch(query: string, callback: AutocompleteFetchSuggestionsCallback) {
  let results: AutocompleteData = [];
  if (query === '') {
    if (navigation.value) {
      results = getResults(navigation.value, query, '', false);
    }
  } else {
    if (navigation.value) {
      results = getResults(navigation.value, query);
    }
  }
  if (results.length > 0) {
    callback(results);
  } else {
    callback([
      {
        title: '暂时搜不到任何内容',
        value: ''
      }
    ]);
  }
}
</script>

<style lang="scss">
.article-search-wrapper {
  .el-input {
    --el-input-focus-border-color: var(--blog-brand-light);
  }

  .el-input__wrapper {
    padding: 0;
    border-radius: 0px;
    background-color: transparent;
    box-shadow: 0px 1px 0 0px transparent;
  }

  .el-input__wrapper.is-focus {
    box-shadow: 0px 1px 0 0px var(--el-input-focus-border-color);
  }
  .el-input__suffix .el-input__icon {
    color: var(--blog-brand-light);
  }
  .el-input__suffix .el-input__icon:hover {
    color: var(--blog-brand-dark);
  }
}

.article-search {
  .el-autocomplete-suggestion {
    max-width: 500px;
  }
  .empty {
    font-size: 12px;
  }
  a {
    position: relative;
    text-decoration: none;
    vertical-align: baseline;
    line-height: 1.6;
    padding: 0 0.2em;
    padding-bottom: 0.2em;
    color: var(--blog-brand-light);
  }
  a:visited {
    color: var(--blog-brand-light);
  }
  a:hover {
    color: var(--blog-brand-highlight);
  }

  a:active {
    color: var(--blog-brand-light);
  }
}

.article-search-wrapper {
  padding: 0 1em;
}

@media screen and (max-width: $viewport-width-xs) {
  .article-search {
    .el-autocomplete-suggestion {
      max-width: 300px;
      li {
        white-space: normal;
      }
    }
  }
}
</style>
