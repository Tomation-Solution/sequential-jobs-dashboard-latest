import { BiUserX } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";


interface currentRow {
  id:number;
    image:string;
    name:string;
    email:string;
    numberOfHires:number;
    status:string;
    industry:string;
    subscriptionType:string;
}



interface EmployersTableDropDownProps {
    currentRow:currentRow;  
    handleOpenModal:(rowData:object,modalName:string)=>void;
    // handleCloseModal:()=>void;
    
    
  }


const EmployersTableDropDown = ({currentRow,handleOpenModal}:EmployersTableDropDownProps) => {
  return (
    <div className="absolute right-7 mt-[10px] w-[250px] bg-white border-gray-200 border rounded-lg shadow-lg z-2 ">
    <ul className="divide-y" >
      <li>
        <div
         onClick={() => handleOpenModal(currentRow,'activate-employer-subscription-modal')}
          className="menu-item"
        > <FiUserCheck className='w-5 h-5' /> Activate Subscription
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'deactivate-employer-subscription-modal')}
        >
          <BiUserX  className='w-5 h-5' /> Deactivate Subscription
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'view-employer-profile-modal')}
        >
          <CgProfile  className='w-5 h-5' /> View Profile
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'delete-employer-account-modal')}
        >
          <AiOutlineDelete  className='w-5 h-5' /> Delete Account
        </div>
      </li>
    </ul>
  </div> 
  )
}

export default EmployersTableDropDown