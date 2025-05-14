import { withAuth } from "@/lib/with-auth";
import { fetchLeadsFromDB } from "@/lib/leads";

async function secretGET(request: Request) {
  const leads = await fetchLeadsFromDB();
  return new Response(JSON.stringify(leads), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const GET = withAuth(secretGET);