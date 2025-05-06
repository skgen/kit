export function isClient(): boolean {
  return window !== undefined;
}

export * from '@/definition';
export * from '@/pick';
export * from '@/transform';
