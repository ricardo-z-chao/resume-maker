import { hasVisited } from '@/const';

/**
 * 检查是否是第一次访问
 * @returns 是/否
 */
export function isFirstVisited(): boolean {
  return !localStorage.getItem(hasVisited.description as string);
}

/**
 * 标记用户已访问
 */
export function markVisited(): void {
  localStorage.setItem(hasVisited.description as string, hasVisited.toString());
}
