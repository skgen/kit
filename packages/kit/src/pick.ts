import type { IsDefined } from '@/definition';

import { isValue } from '@/definition';

export type Last<T extends readonly unknown[]> = T extends readonly [...infer _, infer TLast]
  ? TLast
  : T extends readonly (infer TGeneric)[]
    ? TGeneric extends any
      ? TGeneric | undefined
      : never
    : never;

export type First<T extends readonly unknown[]> = T extends readonly [infer TFirst, ...infer _]
  ? TFirst
  : T extends readonly (infer TGeneric)[]
    ? TGeneric extends any
      ? TGeneric | undefined
      : never
    : never;

export function lastOrNull<T extends readonly unknown[]>(
  collection?: T | null,
): IsDefined<Last<T>> | null {
  if (isValue(collection) && isValue(collection[collection.length - 1])) {
    return collection[collection.length - 1] as IsDefined<Last<T>>;
  }
  return null;
}

export function firstOrNull<T extends readonly unknown[]>(
  collection?: T | null,
): IsDefined<First<T>> | null {
  if (isValue(collection) && isValue(collection[0])) {
    return collection[0] as IsDefined<First<T>>;
  }
  return null;
}

export function filterNull<T>(collection: T[]): NonNullable<T>[] {
  return collection.filter((item): item is NonNullable<T> => item !== null);
}
