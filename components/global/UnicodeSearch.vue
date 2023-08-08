<template>
  <div class="info">
    <div class="btn-wrapper">
      <el-button
        v-for="info in unicodeInfos"
        :key="info.name"
        type="primary"
        size="default"
        class="btn"
        @click="showInfo(info)"
        >{{ info.name }}</el-button
      >
    </div>
    <div class="controls">
      <div class="control" v-for="(range, index) in ranges" :key="index">
        <el-input
          class="item"
          size="small"
          :type="range.type === 'decimal' ? 'number' : 'text'"
          v-model="range.value[0]"
          clearable
        ></el-input>
        <span class="separator">~</span>
        <el-input
          class="item"
          size="small"
          :type="range.type === 'decimal' ? 'number' : 'text'"
          v-model="range.value[1]"
          clearable
        ></el-input>
        <el-checkbox
          class="item"
          v-model="range.type"
          true-label="hex"
          false-label="decimal"
          @change="rangChange(range)"
          >16 进制</el-checkbox
        >
        <el-button
          v-if="index === ranges.length - 1"
          class="item"
          type="success"
          size="small"
          @click="getUnicodes(ranges)"
          >搜索</el-button
        >
      </div>
      <div class="control" v-if="ranges.length === 0">
        <el-input
          class="item"
          size="small"
          :type="defaultRange.type === 'decimal' ? 'number' : 'text'"
          v-model="defaultRange.value[0]"
          clearable
        ></el-input>
        <span class="separator">~</span>
        <el-input
          class="item"
          size="small"
          :type="defaultRange.type === 'decimal' ? 'number' : 'text'"
          v-model="defaultRange.value[1]"
          clearable
        ></el-input>
        <el-checkbox
          class="checkbox item"
          v-model="defaultRange.type"
          true-label="hex"
          false-label="decimal"
          @change="rangChange(defaultRange)"
          >16 进制</el-checkbox
        >
        <el-button class="item" type="success" size="small" @click="getUnicodes([defaultRange])"
          >搜索</el-button
        >
      </div>
    </div>
  </div>
  <div class="text-search">
    <el-input
      class="item"
      placeholder="输入搜索文本"
      v-model="searchText"
      size="default"
      clearable
      @input="searchTextChange"
    ></el-input>
  </div>
  <div class="unicodes">
    <div class="unicode" v-for="(code, index) in unicodeChunk" :key="index">
      <div class=""></div>
      <div class="hex">{{ `\\u{${code.toString(16)}\}` }}</div>
      <div class="text">{{ String.fromCodePoint(code) }}</div>
      <div class="code">{{ code }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ranges = ref<Range[]>([]);
const defaultRange = ref<Range>({
  type: 'decimal',
  value: ['', '']
});
const unicodeSet = ref<Set<number>>(new Set());
const unicodes = ref<number[]>([]);
const unicodeChunk = ref<number[]>([]);
const currentChunkIndex = ref<number>(0);
const chunkSize = ref<number>(500);
const searchText = ref<string>('changlishe/tools/unicodesearch');
export type Range = {
  type: 'decimal' | 'hex';
  value: (string | number)[];
};
export type Info = {
  name: string;
  ranges: Range[];
};
const unicodeInfos: Info[] = [
  {
    name: 'ASCII 码',
    ranges: [
      {
        value: [0, 127],
        type: 'decimal'
      }
    ]
  },
  {
    name: '第一平面',
    ranges: [
      {
        value: [0, 65535],
        type: 'decimal'
      }
    ]
  },
  {
    name: 'base64',
    ranges: [
      {
        value: [48, 57],
        type: 'decimal'
      },
      {
        value: [65, 90],
        type: 'decimal'
      },
      {
        value: [97, 122],
        type: 'decimal'
      },
      {
        value: [47, 47],
        type: 'decimal'
      },
      {
        value: [43, 43],
        type: 'decimal'
      },
      {
        value: [61, 61],
        type: 'decimal'
      }
    ]
  },
  {
    name: '希腊字母',
    ranges: [
      {
        value: [913, 937],
        type: 'decimal'
      },
      {
        value: [945, 969],
        type: 'decimal'
      }
    ]
  },
  {
    name: '带圈字符',
    ranges: [
      {
        value: [169, 169],
        type: 'decimal'
      },
      {
        value: [174, 174],
        type: 'decimal'
      },
      {
        value: ['24B6', '24EA'],
        type: 'hex'
      },
      {
        value: ['2460', '2473'],
        type: 'hex'
      },
      {
        value: ['3251', '325F'],
        type: 'hex'
      },
      {
        value: ['32B1', '32BF'],
        type: 'hex'
      },
      {
        value: ['2776', '277F'],
        type: 'hex'
      },
      {
        value: ['24EB', '24F4'],
        type: 'hex'
      }
    ]
  },
  {
    name: '常见中文',
    ranges: [
      {
        value: ['4e00', '9fa5'],
        type: 'hex'
      }
    ]
  },
  {
    name: '常见日文',
    ranges: [
      {
        value: ['3040', '31FF'],
        type: 'hex'
      }
    ]
  },
  {
    name: '常见韩文',
    ranges: [
      {
        value: ['AC00', 'D7AF'],
        type: 'hex'
      }
    ]
  }
];

function showInfo(info: Info) {
  ranges.value = deepClone(info.ranges);
}

function rangChange(range: Range) {
  if (range.type === 'hex') {
    range.value[0] = (+range.value[0]).toString(16);
    range.value[1] = (+range.value[1]).toString(16);
  } else {
    range.value[0] = parseInt(range.value[0] as string, 16);
    range.value[1] = parseInt(range.value[1] as string, 16);
  }
}

function searchTextChange(value: string) {
  if (value === '') {
    return;
  } else {
    unicodes.value = [...value].map((str) => {
      return str.codePointAt(0) as number;
    });
  }
}

function getUnicodes(ranges: Ref<Range[]> | Range[]) {
  unicodeSet.value.clear();
  ranges = isRef(ranges) ? ranges.value : ranges;
  for (const range of ranges) {
    let start: number | string;
    let end: number | string;
    if (range.type === 'hex') {
      start = parseInt(range.value[0] as string, 16);
      end = parseInt(range.value[1] as string, 16);
    } else {
      start = range.value[0];
      end = range.value[1];
    }
    for (let i = +start; i <= +end; i++) {
      unicodeSet.value.add(i);
    }
  }
  unicodes.value = [...unicodeSet.value].sort((a, b) => {
    return a - b;
  });
}

watch(ranges, () => {
  if (ranges.value && ranges.value.length > 0) {
    getUnicodes(ranges);
  }
});

watch(unicodes, () => {
  unicodeChunk.value = [];
  for (let i = 0; i < unicodes.value.length && i < chunkSize.value; i++) {
    unicodeChunk.value.push(unicodes.value[i]);
  }
  currentChunkIndex.value = 1;
});

onMounted(() => {
  searchTextChange(searchText.value);
  const { arrivedState } = useScroll(window, {
    throttle: 100
  });
  watch(arrivedState, () => {
    if (arrivedState.bottom) {
      for (
        let i = currentChunkIndex.value * chunkSize.value;
        i < unicodes.value.length &&
        i < currentChunkIndex.value * chunkSize.value + chunkSize.value;
        i++
      ) {
        unicodeChunk.value.push(unicodes.value[i]);
      }
      currentChunkIndex.value++;
    }
  });
});
</script>
<style scoped lang="scss">
.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  .btn {
    margin-left: 0;
    margin-right: 12px;
    margin-bottom: 0.5em;
  }
}
.controls {
  margin: 1em 8px 0;
  .control {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    margin-right: 1em;
  }
  .item {
    max-width: 120px;
    :deep(.el-input__clear) {
      color: var(--blog-brand-light);
    }
  }
  .checkbox {
    margin-left: 0.5em;
  }
  .item + .separator {
    margin-left: 0.5em;
  }
  .item {
    margin-left: 0.5em;
  }
}

.text-search {
  display: flex;
  .item {
    max-width: 80%;
    :deep(.el-input__clear) {
      color: var(--blog-brand-light);
    }
  }
}

.unicodes {
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  .unicode {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: rgb(128, 255, 0);
    border: 2px solid #000;
    box-sizing: border-box;
    color: #000;
    .text {
      font-size: 28px;
      font-weight: bolder;
    }
    .code,
    .hex {
      position: absolute;
      font-size: 14px;
    }
    .code {
      right: 0.3em;
      bottom: 0;
    }
    .hex {
      left: 0.3em;
      top: 0;
    }
  }
}
</style>
