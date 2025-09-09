import Panel from "@/components/shared/Panel";
import { t } from "i18next";

function QuickAccessTable() {
  const data = [
    {
      name: "Project Proposal",
      owner: "Liam Bennett",
      date: "2023-08-15",
      size: "2.5 MB",
    },
    {
      name: "Meeting Notes",
      owner: "Olivia Hayes",
      date: "2023-08-14",
      size: "1.2 MB",
    },
    {
      name: "Client Contract",
      owner: "Ethan Wong",
      date: "2023-08-12",
      size: "3.8 MB",
    },
    {
      name: "Marketing Plan",
      owner: "Sophia Clark",
      date: "2023-08-10",
      size: "4.1 MB",
    },
    {
      name: "Financial Report",
      owner: "Nathan Patel",
      date: "2023-08-08",
      size: "5.3 MB",
    },
  ];
  return (
    <Panel className=" bg-white border border-gray-300 rounded-xl p-3 mt-5">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="pb-2">{t("Name")}</th>
              <th className="pb-2">{t("Owner")}</th>
              <th className="pb-2">{t("Last Modified")}</th>
              <th className="pb-2">{t("Size")}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((file, idx) => (
              <tr
                key={idx}
                className="border-b last:border-0 hover:bg-gray-50 transition"
              >
                <td className="py-2 font-medium text-gray-900">{file.name}</td>
                <td className="py-2 text-gray-600 cursor-pointer hover:underline">
                  {file.owner}
                </td>
                <td className="py-2 text-gray-600">{file.date}</td>
                <td className="py-2 text-gray-600">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export default QuickAccessTable;
