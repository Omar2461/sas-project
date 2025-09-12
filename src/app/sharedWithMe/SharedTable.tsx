import Breadcrumb from "../documentDetails/Breadcrumb";

export default function SharedTable() {
  return (
    <div className="p-10 mx-20">
      <Breadcrumb />
      <h2 className="text-2xl font-bold my-5">Shared with me</h2>
      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Owner
              </th>
              <th scope="col" className="px-6 py-3">
                Last Modified
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
              <td className="px-6 py-4">Ryan Harris</td>
              <td className="px-6 py-4">15-08-2023</td>
              <td className="px-6 py-4">2 MB</td>
              <td className="px-6 py-4">Shared</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Project Proposal
              </th>
              <td className="px-6 py-4">Ryan Harris</td>
              <td className="px-6 py-4">15-08-2023</td>
              <td className="px-6 py-4">2 MB</td>
              <td className="px-6 py-4">Shared</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Project Proposal
              </th>
              <td className="px-6 py-4">Ryan Harris</td>
              <td className="px-6 py-4">15-08-2023</td>
              <td className="px-6 py-4">2 MB</td>
              <td className="px-6 py-4">Shared</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Project Proposal
              </th>
              <td className="px-6 py-4">Ryan Harris</td>
              <td className="px-6 py-4">15-08-2023</td>
              <td className="px-6 py-4">2 MB</td>
              <td className="px-6 py-4">Shared</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Project Proposal
              </th>
              <td className="px-6 py-4">Ryan Harris</td>
              <td className="px-6 py-4">15-08-2023</td>
              <td className="px-6 py-4">2 MB</td>
              <td className="px-6 py-4">Shared</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
