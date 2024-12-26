"use client";

import { RepositoryItem } from "@/components/repositories/repository-item";
import { Repository } from "@/types/repository";

interface RepositoryListProps {
  repositories: Repository[];
  maxHeight?: string; // Allow custom max height
}

export function RepositoryList({ repositories, maxHeight}: RepositoryListProps) {
  return (
    <div
      className="divide-y divide-gray-200 overflow-y-auto"
      style={{ maxHeight }}
    >
      {repositories.map((repo) => (
        <RepositoryItem key={repo.name} {...repo} />
      ))}
    </div>
  );
}
