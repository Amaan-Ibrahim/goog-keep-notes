import React from "react";
import "../App.css";
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/UndoOutlined';
import RedoIcon from '@mui/icons-material/RedoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddIcon from '@mui/icons-material/Add';



const CreateNote=({titleValue, textAreaValue, addNotesValue, getValueTitle, gettexTAreaValue})=>{
    return(
        <>
           {/* <div className='main_reminder_div'>
           <div className='filedsbox'>
           <input type="text" placeholder='title' name='title' value={titleValue} className='inputfieldfornote' onChange={getValueTitle} />
           <textarea className='textareacreatenorte' value={textAreaValue} id="create-note" name="descriptionNote" rows="4" cols="50" placeholder='create a note' onChange={gettexTAreaValue}>
</textarea> 
<div>

  <AddIcon fontSize='large' className='add_item' onClick={addNotesValue} />

</div>


           </div>
      </div> */}
      <div className='main_div'>
        <div>
          <input type="text" name='text'value={titleValue} className='input_feild' placeholder='Type Your Title' onChange={getValueTitle}/>
          <PushPinOutlinedIcon style={{ float: "right", paddingRight: "10px", paddingTop: "10px" }} />
        </div>
        <textarea name="textarea" value={textAreaValue} className='Text_area' cols="30" rows="10" onChange={gettexTAreaValue}></textarea>
        <div className='icons'>
          <div className='icons_div'>
            <span>
              <AddAlertIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <PersonAddAltIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <ColorLensIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <AddPhotoAlternateIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <ArchiveIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <MoreVertIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <UndoIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </span>
            <span>
              <RedoIcon style={{ fontSize: "18px" }} />
            </span>


          </div>
          <div className='colseButton'>

            <button className='add_button_style'>
              <AddIcon style={{fontSize :"35px"}}  onClick={addNotesValue} />

            </button>
          </div>
        </div>
      </div>



        </>
    )
}
export default CreateNote