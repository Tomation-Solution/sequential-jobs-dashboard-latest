import { AiOutlineDelete } from 'react-icons/ai'
import { ApplicantsTableDataType } from '../../types/tables/applicants';

interface ApplicantsTableDropDownProps {
    currentRow:ApplicantsTableDataType;  
    handleOpenModal:(rowData:object,modalName:string)=>void;
  }

const ApplicantsTableDropDown = ({currentRow,handleOpenModal}:ApplicantsTableDropDownProps) => {
  return (
     <div className="absolute right-7 mt-[10px] w-[250px] bg-white border-gray-200 border rounded-lg shadow-lg z-2 ">
    <ul className="divide-y" >
 
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'delete-applicant-account-modal')}
        >
          <AiOutlineDelete  className='w-5 h-5' /> Delete Account
        </div>
      </li>
    </ul>
  </div> 
  )
}

export default ApplicantsTableDropDown