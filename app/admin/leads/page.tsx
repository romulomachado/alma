import { redirect } from "next/navigation";

import Sidebar from "@/app/components/Sidebar";
import { checkAuth } from "@/app/auth";
import { fetchLeadsFromDB } from "@/lib/leads";
import LeadsTable from "@/app/components/LeadsTable";

export default async function AdminLeadsPage() {
  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  const leads = await fetchLeadsFromDB();

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-xl font-semibold mb-6">Leads</h2>
        <div className="overflow-auto bg-white">
          <LeadsTable leads={leads} />
        </div>
      </main>
    </div>
  );
}
