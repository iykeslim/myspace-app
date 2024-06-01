import React from "react"

const TableComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-1">
      <div className="p-4 bg-gray-300 my-4 border border-gray-400 rounded-xl">
        <div className="flex align-middle justify-between">
          <h2 className="text-lg font-semibold leading-tight text-gray-800">
            Affiliate Professionals
          </h2>
          <a className="text-lg font-semibold leading-tight text-gray-800">
            View all
          </a>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                    Date Added
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="/jite.png"
                          alt="Jite Img"
                        />
                      </div>
                      <div className="ml-3 py-2">
                        <p className="text-gray-900">Jite Brown</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 28, 2019
                    </p>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <span className="text-gray-600">Member</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="/jite.png"
                          alt="Jite Img"
                        />
                      </div>
                      <div className="ml-3 py-2">
                        <p className="text-gray-900">Jite Brown</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 25, 2019
                    </p>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <span className="text-gray-600">Member</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="/jite.png"
                          alt="Jite Img"
                        />
                      </div>
                      <div className="ml-3 py-2">
                        <p className="text-gray-900">Jite Brown</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 14, 2019
                    </p>
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    <span className="text-gray-600">Member</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-2 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="/jite.png"
                          alt="Jite Img"
                        />
                      </div>
                      <div className="ml-3 py-2">
                        <p className="text-gray-900">Jite Brown</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-2 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 6, 2019
                    </p>
                  </td>
                  <td className="px-5 py-2 bg-white text-sm">
                    <span className="text-gray-600">Member</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
