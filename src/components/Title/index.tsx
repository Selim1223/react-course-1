import React, { useContext, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import storeApi from "../../utils/storeApi";

import "./styles.css";

interface TitleElement{
  title: string;
  listId: number
}

export default function Title({ title, listId }: TitleElement) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <div>
          <input
            type="text"
            className="input-title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={handleOnBlur}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
            autoFocus
          />
        </div>
      ) : (

        <div className="editable-title-container">
          <h2 onClick={() => setOpen(!open)} className="editable-title">
            {title}
          </h2>        
          <button
                  onClick={() => {
                    deleteList(listId);
                  }}
                >
                  <DeleteForeverIcon />
          </button>          
        </div>
      )}
    </>
  );
}
