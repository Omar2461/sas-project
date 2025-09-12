export default function TrashTable() {
  return (
    <div className="relative overflow-x-auto rounded-2xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Original Location
            </th>
            <th scope="col" className="px-6 py-3">
              Deleted
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Project Proposal
            </th>
            <td className="px-6 py-4">My Files</td>
            <td className="px-6 py-4">2 days ago</td>
            <td className="px-6 py-4">2 MB</td>
            <td className="px-6 py-4">Recover</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Project Proposal
            </th>
            <td className="px-6 py-4">My Files</td>
            <td className="px-6 py-4">2 days ago</td>
            <td className="px-6 py-4">2 MB</td>
            <td className="px-6 py-4">Recover</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Project Proposal
            </th>
            <td className="px-6 py-4">My Files</td>
            <td className="px-6 py-4">2 days ago</td>
            <td className="px-6 py-4">2 MB</td>
            <td className="px-6 py-4">Recover</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Project Proposal
            </th>
            <td className="px-6 py-4">My Files</td>
            <td className="px-6 py-4">2 days ago</td>
            <td className="px-6 py-4">2 MB</td>
            <td className="px-6 py-4">Recover</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Project Proposal
            </th>
            <td className="px-6 py-4">My Files</td>
            <td className="px-6 py-4">2 days ago</td>
            <td className="px-6 py-4">2 MB</td>
            <td className="px-6 py-4">Recover</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-semibold text-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">3</td>
            <td className="px-6 py-3">21,000</td>
            <td className="px-6 py-3">10 MB</td>
            <td className="px-6 py-3">-</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
