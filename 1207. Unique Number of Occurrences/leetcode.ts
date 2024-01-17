function uniqueOccurrences(arr: number[]): boolean {
  const occurrenceCount: Map<number, number> = new Map();
  for (const num of arr) {
      occurrenceCount.set(num, (occurrenceCount.get(num) || 0) + 1);
  }
  const uniqueCounts: Set<number> = new Set(occurrenceCount.values());
  return uniqueCounts.size === occurrenceCount.size;
}