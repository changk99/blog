export function getTopDir(path: string) {
  return '/' + path.split(/\//)[1];
}

export function replacePathlastSegment(path: string, segment: string) {
  const segments = path.split(/\//);
  segments[segments.length - 1] = segment;
  return segments.join('/');
}

export function getDirPath(path: string) {
  const segments = path.split(/\//);
  segments.pop();
  return segments.join('/');
}

/**
 * 获取滚动距离
 */
export function getScrollDistance(target: HTMLElement, scrollContainer: HTMLElement) {
  const {
    top: scrollContainerTop,
    height: scrollContainerHeight,
    bottom: scrollContainerBottom
  } = scrollContainer.getBoundingClientRect();
  const { top, bottom } = target.getBoundingClientRect();
  if (top - scrollContainerTop > 50 && scrollContainerBottom - bottom > 50) {
    return scrollContainer.scrollTop;
  }
  const diffY = top - (scrollContainerHeight / 2 + scrollContainerTop);
  return scrollContainer.scrollTop + diffY;
}

type VectorArray = number[];

function v2Clone(point: VectorArray): VectorArray {
  return [point[0], point[1]];
}

function v2Sub<T extends VectorArray>(v: T, v1: T, v2: T) {
  v[0] = v1[0] - v2[0];
  v[1] = v1[1] - v2[1];
  return v;
}

function v2Scale<T extends VectorArray>(v: T, v1: T, s: number) {
  v[0] = v1[0] * s;
  v[1] = v1[1] * s;
  return v;
}

function v2Distance(v1: VectorArray, v2: VectorArray): number {
  return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]));
}

function v2Add<T extends VectorArray>(out: T, v1: VectorArray, v2: VectorArray): T {
  out[0] = v1[0] + v2[0];
  out[1] = v1[1] + v2[1];
  return out;
}

/**
 * 根据点列表获取平滑化需要的控制点坐标
 */
export function getControlPoints(points: VectorArray[], smooth: number) {
  const cps = [];
  const v: VectorArray = [];
  const v1: VectorArray = [];
  const v2: VectorArray = [];
  let prevPoint;
  let nextPoint;
  for (let i = 0, len = points.length; i < len; i++) {
    const point = points[i];
    if (i === 0 || i === len - 1) {
      cps.push(v2Clone(points[i]));
      continue;
    } else {
      prevPoint = points[i - 1];
      nextPoint = points[i + 1];
    }
    v2Sub(v, nextPoint, prevPoint);

    // use degree to scale the handle length
    v2Scale(v, v, smooth);

    let d0 = v2Distance(point, prevPoint);
    let d1 = v2Distance(point, nextPoint);
    const sum = d0 + d1;
    if (sum !== 0) {
      d0 /= sum;
      d1 /= sum;
    }

    v2Scale(v1, v, -d0);
    v2Scale(v2, v, d1);
    const cp0 = v2Add([], point, v1);
    const cp1 = v2Add([], point, v2);
    cps.push(cp0);
    cps.push(cp1);
  }
  return cps;
}

/**
 * 根据点列表和控制点生成平滑曲线
 */
export function smoothBezier(points: VectorArray[], smooth: number) {
  let d = 'M ';
  const controlPoints = getControlPoints(points, smooth);
  d += `${points[0][0]} ${points[0][1]} `;
  const len = points.length;
  for (let i = 0; i < len - 1; i++) {
    const cp1 = controlPoints[i * 2];
    const cp2 = controlPoints[i * 2 + 1];
    const p = points[(i + 1) % len];
    d += `C ${cp1[0]} ${cp1[1]} ${cp2[0]} ${cp2[1]} ${p[0]} ${p[1]} `;
  }
  return d;
}

function getType(target: unknown) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
/**
 * 深度克隆
 */
export function deepClone<T>(target: T): T {
  const type = getType(target);
  if (type === 'Array') {
    // @ts-ignore
    const result = [];
    // @ts-ignore
    target.forEach((value, index) => {
      result[index] = deepClone(value);
    });
    // @ts-ignore
    return result;
  }
  if (type === 'Object') {
    const result = {};
    Object.keys(target).forEach((key) => {
      // @ts-ignore
      result[key] = deepClone(target[key]);
    });
    // @ts-ignore
    return result;
  }
  if (type === 'RegExp') {
    const reFlags = /\w*$/;
    // @ts-ignore
    const result = new target.constructor(target.source, reFlags.exec(target));
    // @ts-ignore
    result.lastIndex = target.lastIndex;
    return result;
  }
  return target;
}

/**
 * 在两个颜色值之间插入对应数量的颜色
 * colors 需要使用 6 位的 # 开头的 hex 颜色字符串
 */
export function interpolateColor(startColor: string, endColor: string, length: number): string[] {
  const startMatch = startColor.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
  const endMatch = endColor.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
  if (startMatch && endMatch) {
    const r1 = parseInt(startMatch[1], 16);
    const g1 = parseInt(startMatch[2], 16);
    const b1 = parseInt(startMatch[3], 16);
    const r2 = parseInt(endMatch[1], 16);
    const g2 = parseInt(endMatch[2], 16);
    const b2 = parseInt(endMatch[3], 16);
    const colors: string[] = [startColor];
    const incrementR = (r2 - r1) / (length + 1);
    const incrementG = (g2 - g1) / (length + 1);
    const incrementB = (b2 - b1) / (length + 1);
    for (let i = 0; i < length; i++) {
      colors.push(
        `#${Math.round(r1 + incrementR * (i + 1))
          .toString(16)
          .padStart(2, '0')}${Math.round(g1 + incrementG * (i + 1))
          .toString(16)
          .padStart(2, '0')}${Math.round(b1 + incrementB * (i + 1))
          .toString(16)
          .padStart(2, '0')}`
      );
    }
    return colors;
  } else {
    return [startColor];
  }
}

/**
 * 扩展颜色列表
 * colors 需要使用 6 位的 # 开头的 hex 颜色字符串                                                                                       ans
 */
export function extendColors(colors: string[], length: number): string[] {
  if (colors.length === 1) {
    return Array.from(
      {
        length: length
      },
      () => {
        return colors[0];
      }
    );
  }
  colors = colors.concat();
  const list: string[] = [];
  const colorLength = colors.length;
  if (length > colorLength) {
    const n = Math.ceil((length - colorLength) / (colorLength - 1));
    colors = colors
      .map((color, index) => {
        if (colors[index + 1]) {
          return interpolateColor(colors[index], colors[index + 1], n);
        } else {
          return [color];
        }
      })
      .join()
      .split(',');
  }
  if (length % 2 === 0) {
    list.push(...colors.slice(0, length / 2), ...colors.slice(-(length / 2)));
  } else {
    list.push(
      ...colors.slice(0, (length - 1) / 2),
      colors[(length - 1) / 2],
      ...colors.slice(-((length - 1) / 2))
    );
  }
  return list;
}
