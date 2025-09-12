import TrashTable from "./TrashTable";

export default function Page() {
  return (
    <div className="container mx-auto px-10 md:px-28 py-20">
      <h2 className="text-2xl font-bold mb-5">Trash</h2>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Files in your trash will be automatically deleted after 30 days.
      </p>
      <TrashTable />
    </div>
  );
}
