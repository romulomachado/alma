import { withAuth } from "@/lib/with-auth";

async function secretGET(request: Request) {
  const leads = [
    { id: 1, name: "Jorge Ruiz", status: "Pending", createdAt: "2023-10-01", country: "Mexico" },
    { id: 2, name: "Maria Garcia", status: "Pending", createdAt: "2023-10-02", country: "Brazil" },
    { id: 3, name: "John Doe", status: "Pending", createdAt: "2023-10-03", country: "South Korea" },
    { id: 4, name: "Jane Smith", status: "Pending", createdAt: "2023-10-04", country: "Russia" },
    { id: 5, name: "Alice Johnson", status: "Pending", createdAt: "2023-10-05", country: "United Kingdom" },
    { id: 6, name: "Bob Brown", status: "Pending", createdAt: "2023-10-06", country: "Canada" },
    { id: 7, name: "Charlie Davis", status: "Pending", createdAt: "2023-10-07", country: "Australia" },
    { id: 8, name: "Diana Evans", status: "Pending", createdAt: "2023-10-08", country: "India" },
    { id: 9, name: "Ethan Foster", status: "Pending", createdAt: "2023-10-09", country: "Germany" },
    { id: 10, name: "Fiona Green", status: "Pending", createdAt: "2023-10-10", country: "France" },
  ]
  return new Response(JSON.stringify(leads), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const GET = withAuth(secretGET);