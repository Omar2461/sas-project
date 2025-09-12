import Panel from "@/components/shared/Panel";
import { t } from "i18next";

interface FileData {
  name: string;
  owner: string;
  date: string;
  size: string;
}

interface TableProps {
  data: FileData[];
}

function Table({ data }: TableProps) {
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

export default Table;
