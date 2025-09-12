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
  th: string[];
  className?: string;
}

function Table({ data, th, className }: TableProps) {
  return (
    <Panel
      className={`bg-white border border-gray-300 rounded-xl p-3 mt-5 ${className?.includes("pointer-events-none") ? "pointer-events-none" : ""}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              {th.map((el, idx) => (
                <th key={idx} className="pb-2">
                  {t(el)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {data.map((file, idx) => (
              <tr
                key={idx}
                className="border-b last:border-0 hover:bg-gray-50 transition "
              >
                <td className={`py-2 font-medium text-gray-900 ${className}`}>
                  {file.name}
                </td>
                <td className={`py-2 text-gray-600 ${className}`}>
                  {file.owner}
                </td>
                <td className={`py-2 text-gray-600 ${className}`}>
                  {file.date}
                </td>
                <td className={`py-2 text-gray-600 ${className}`}>
                  {file.size}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export default Table;
