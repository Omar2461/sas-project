export default function TabContent() {
  return (
    <>
      <div id="default-styled-tab-content">
        <div
          className="hidden p-4 rounded-lg"
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h2 className="text-2xl font-bold mb-3">Top results</h2>

          <div className="flex items-center px-1 rounded-lg flex-row md:max-w-md hover:bg-gray-50 dark:hover:bg-gray-200">
            <div className="w-15 p-4 bg-gray-200 rounded-lg">
              <img
                className="object-cover rounded-t-lg h-full w-full md:rounded-none md:rounded-s-lg"
                src="./file.svg"
                alt=""
              />
            </div>
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./file.svg" alt=""/> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900">
                Project Proposal.pdf
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Shared with 2 people
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold my-3">Files</h2>

          <div className="flex items-center px-1 rounded-lg flex-row md:max-w-md hover:bg-gray-50 dark:hover:bg-gray-200">
            <div className="w-15 p-4 bg-gray-200 rounded-lg">
              <img
                className="object-cover rounded-t-lg h-full w-full md:rounded-none md:rounded-s-lg"
                src="./file.svg"
                alt=""
              />
            </div>
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./file.svg" alt=""/> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900">
                Project Proposal.pdf
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Shared with 2 people
              </p>
            </div>
          </div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
}
