import LeadForm from "../components/LeadForm";

export default function LeadPage() {
  return (
    <main>
      <header className="bg-lime-200 p-10 mb-10 flex items-end">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mx-auto">
          Get An Assessment <br />
          Of Your Immigration Case
        </h1>
      </header>

      <LeadForm />
    </main>
  );
}
