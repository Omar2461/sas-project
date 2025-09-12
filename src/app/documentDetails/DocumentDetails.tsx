export default function DocumentDetails() {
  return (
    <>
      <h2 className="text-2xl font-bold my-5">Document Details</h2>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 w-64 md:w-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <div className="mt-10">
        <h2 className="text-2xl font-bold my-5">Details</h2>
        <div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />
          <div className="flex">
            <div className="w-34">Type</div>
            <div className="w-34">PDF</div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />
          <div className="flex">
            <div className="w-34">Size</div>
            <div className="w-34">2.5MB</div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />
          <div className="flex">
            <div className="w-34">Last Modified</div>
            <div className="w-34">...</div>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />
          <div className="flex">
            <div className="w-34">Created By</div>
            <div className="w-34">...</div>
          </div>
        </div>
      </div>
    </>
  );
}
