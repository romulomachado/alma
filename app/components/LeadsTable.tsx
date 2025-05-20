"use client";
import { useState, useMemo } from "react";
import { Lead } from "@/app/types/lead";

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Lead;
    direction: "asc" | "desc";
  } | null>({
    key: "createdAt",
    direction: "desc",
  });

  const handleSort = (key: keyof Lead) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedLeads = useMemo(() => {
    if (!leads || !sortConfig) return leads;
    const sorted = [...leads].sort((a, b) => {
      const aVal =
        sortConfig.key === "createdAt"
          ? new Date(a[sortConfig.key])
          : a[sortConfig.key];
      const bVal =
        sortConfig.key === "createdAt"
          ? new Date(b[sortConfig.key])
          : b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [leads, sortConfig]);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
            onClick={() => handleSort("name")}
          >
            Name{" "}
            {sortConfig?.key === "name"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th
            className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
            onClick={() => handleSort("createdAt")}
          >
            Submitted{" "}
            {sortConfig?.key === "createdAt"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th
            className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
            onClick={() => handleSort("status")}
          >
            Status{" "}
            {sortConfig?.key === "status"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
          <th
            className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
            onClick={() => handleSort("country")}
          >
            Country{" "}
            {sortConfig?.key === "country"
              ? sortConfig.direction === "asc"
                ? "▲"
                : "▼"
              : ""}
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedLeads?.map(({ id, name, createdAt, status, country }: Lead) => (
          <tr key={id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {createdAt}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
