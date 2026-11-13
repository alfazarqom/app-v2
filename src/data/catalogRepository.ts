import { DESTINATIONS, TOURS } from './catalog';
import type { Destination, Tour } from '../types';

export interface CatalogRepository {
  listDestinations(): Destination[];
  listTours(): Tour[];
}

/** Mock-backed provider; replace its implementation when a real API is approved. */
export const mockCatalogRepository: CatalogRepository = {
  listDestinations: () => DESTINATIONS,
  listTours: () => TOURS,
};

export interface Repository<T extends { id: string }> {
  list(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  create(record: T): Promise<T>;
  update(id: string, patch: Partial<T>): Promise<T | undefined>;
  remove(id: string): Promise<boolean>;
}

/** In-memory adapter for prototype/testing only; it is not persistent storage. */
export function createInMemoryRepository<T extends { id: string }>(
  initialRecords: T[] = [],
): Repository<T> {
  let records = [...initialRecords];

  return {
    async list() {
      return [...records];
    },
    async getById(id) {
      return records.find((record) => record.id === id);
    },
    async create(record) {
      records = [...records, record];
      return record;
    },
    async update(id, patch) {
      const index = records.findIndex((record) => record.id === id);
      if (index < 0) return undefined;
      const updated = { ...records[index], ...patch, id };
      records = records.map((record) => (record.id === id ? updated : record));
      return updated;
    },
    async remove(id) {
      const next = records.filter((record) => record.id !== id);
      const removed = next.length !== records.length;
      records = next;
      return removed;
    },
  };
}
