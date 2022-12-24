import React from "react";
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../App.css";


const ShowContent=({dataOfNotes, deleteNotes})=>{
    return(
        <>
     <div className="main_div_all">



{dataOfNotes.map((notes, index)=>{
 return(
   <>
    

   
    <div className="second_main_div">
        <div className="first_div">
          <div className='dived2'>
            <h2>{notes.title}</h2>
            <p className='parafooter'>{notes.description}</p>
          </div>
          <div className='dived1'>
            <PushPinOutlinedIcon />
          </div>  
        </div>

        <div className='icons_div'>
          <span>
            <AddAlertIcon style={{ fontSize: "18px", cursor: "pointer"  }} />
          </span>
          <span>
            <PersonAddAltIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          <span>
            <AddPhotoAlternateIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          <span>
            <ArchiveIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          <span className='Deletebtn'>
            <DeleteOutlineIcon style={{ fontSize: "18px", cursor: "pointer" }} onClick={()=>deleteNotes(notes.id)}/>
          </span>
        </div>
      </div>
      {/* </div> */}
   </>
 )
})}

 

   </div>
        </>
    )
}
export default ShowContent