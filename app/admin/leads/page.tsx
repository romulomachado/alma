import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Sidebar from "@/app/components/Sidebar";
import { Lead } from "@/app/types/lead";
import { checkAuth } from "@/app/auth";

async function getLeads() {
  const cookiesHeader = await cookies();

  const res = await fetch("http://localhost:3000/api/leads", {
    cache: "no-store",
    headers: {
      cookie: cookiesHeader.toString(),
    },
  });
  return res.json();
}

export default async function AdminLeadsPage() {
  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  const leads = await getLeads();

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-xl font-semibold mb-6">Leads</h2>
        <div className="overflow-auto bg-white border border-gray-200 rounded-3xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Country
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads?.map(({ id, name, createdAt, status, country }: Lead) => (
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
        </div>
      </main>
    </div>
  );
}
