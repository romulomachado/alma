"use client";
import { useState, useMemo } from "react";
import { Lead } from "@/app/types/lead";

const ITEMS_PER_PAGE = 10;

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Lead;
    direction: "asc" | "desc";
  } | null>({
    key: "createdAt",
    direction: "desc",
  });
  const [currentPage, setCurrentPage] = useState(1);

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

  const filteredAndSortedLeads = useMemo(() => {
    let result = [...leads];

    if (filter) {
      result = result.filter((lead) =>
        lead.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (sortConfig) {
      result.sort((a, b) => {
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
    }

    return result;
  }, [leads, filter, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedLeads.length / ITEMS_PER_PAGE);
  const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedLeads.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedLeads, currentPage]);
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  useMemo(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div>
      <div className="pb-4 flex items-center justify-between flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          className="border px-3 py-2 w-full sm:w-64"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="text-sm text-gray-600">
          Showing {paginatedLeads.length} of {filteredAndSortedLeads.length}{" "}
          result
          {filteredAndSortedLeads.length !== 1 ? "s" : ""}
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
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
          {paginatedLeads?.map(
            ({ id, name, createdAt, status, country }: Lead) => (
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
            )
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center py-4 text-sm text-gray-700">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
