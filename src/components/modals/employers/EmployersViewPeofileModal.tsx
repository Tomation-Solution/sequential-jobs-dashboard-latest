import avatar from "../../../assets/dummy-images/avatar/avatar-1.jpg";
import { IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { AiOutlineClose } from "react-icons/ai";

interface EmployersViewProfileModalProps {
  handleCloseModal: () => void;
  selectedRowData: object | null;
}

const EmployersViewPeofileModal = ({
  handleCloseModal,
  selectedRowData,
}: EmployersViewProfileModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  

  const handleEditClick = () => {
    setIsEditing(!isEditing);

   
  };
  if (selectedRowData){
        
      return (
        <div className="fixed inset-0 flex items-center text-blak justify-center z-50 text-black bg-black bg-opacity-80 font-light w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-5 bg-white rounded-lg h-5/6 w-5/6">
            {/* onClick={() => toggleViewAccountProfileModal(null,false)}  */}
            <section className="col-span-2 border shadow-md px-7 py-4 ">
              {/* Image and title */}
              <div className="grid place-items-center">
                <img src={avatar} className="h-20 w-20 rounded-md" alt="avatar" />
                <h3 className="font-medium">E-metrics Suite</h3>
              </div>
    
              {/* Job Posts &  Number Employed from app */}
              <div className="flex items-center justify-between my-5">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 p-2 rounded-md">
                    <CheckIcon className="w-5 h-5 text-blue-500" />
                  </span>
                  <aside>
                    <h3 className="text-base">100</h3>
                    <p className="text-xs">Employed from the App</p>
                  </aside>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 p-2 rounded-md">
                    <IoStarOutline className="w-5 h-5 text-blue-500" />
                  </span>
                  <aside>
                    <h3 className="text-base">100</h3>
                    <p className="text-xs">Job Posts</p>
                  </aside>
                </div>
              </div>
              <div className="my-6 ">
                <div className="border-b my-4">
                  <h3 className="font-medium w-full">Details</h3>
                </div>
                {isEditing ? (
                  <form className=" mt-4 grid gap-3">
                    <div className="space-x-2 grid grid-cols-3 items-center">
                      <label className="text-sm cols-span-1" htmlFor="Company Name">
                        Company Name
                      </label>
                      <input
                        className="profile-account-input"
                        type="text"
                        value={"AB HBBASAS"}
                      />
                    </div>
                    <div className="space-x-2 grid grid-cols-3">
                      <label className="text-sm cols-span-1" htmlFor="">
                        Industry
                      </label>
                      <input
                        className="profile-account-input"
                        type="text"
                        value={"HR"}
                      />
                    </div>
                    <div className="space-x-2 grid grid-cols-3">
                      <label className="text-sm" htmlFor="">
                        Email
                      </label>
                      <input
                        className="profile-account-input"
                        type="text"
                        value={"timothyinioluwa@gmail.com"}
                      />
                    </div>
                    <div className="space-x-2 grid grid-cols-3">
                      <label className="text-sm" htmlFor="">
                        Contact
                      </label>
                      <input
                        className="profile-account-input"
                        type="text"
                        value={"+234763636363636"}
                      />
                    </div>
    
                    {/* Add more fields for editing other profile information */}
                    <button
                      onClick={handleEditClick}
                      className="mt-4 w-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <div className="grid gap-3 text-sm">
                    <p className="gap-2">
                      <span className="font-medium">Company name: </span>
                      <span>@Onaya </span>
                    </p>
                    <p>
                      <span className="font-medium">Industry: </span>
                      <span>HR Industry</span>
                    </p>
                    <p>
                      <span className="font-medium">Email: </span>
                      <span>Ddaya21@gmail.com</span>
                    </p>
                    <p>
                      <span className="font-medium">Contact: </span>
                      <span>+23400000000</span>
                    </p>
                    <div className="text-center my-2">
                      <button
                        onClick={handleEditClick}
                        className="bg-blue-500 text-white uppercase px-3 py-2 rounded-md"
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
            <section className="col-span-3 px-7 py-4 ">
              <div className="flex items-center justify-between  text-xl">
                <h3 className="text-[#3A3541DE] font-bold text-2xl">
                  Subscription Type: <span className="text-blue-500">Premium</span>
                </h3>
                <AiOutlineClose
                  onClick={() => handleCloseModal()}
                  className="w-5 hover:cursor-pointer h-5 bg-red-500 text-white"
                />
              </div>
    
              <section>
                <h3 className="font-medium text-lg my-3" >Process</h3>
                <table className="min-w-full border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2">
                        Job Description
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Total Applicants
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Employment Process
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        Product designer
                      </td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interview Stage
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        Product designer
                      </td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interview Stage
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        Product designer
                      </td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interview Stage
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        Product designer
                      </td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interview Stage
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">
                        Product designer
                      </td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interview Stage
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>
          </div>
        </div>
      );
  }
};

export default EmployersViewPeofileModal;
