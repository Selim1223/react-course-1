import React, { useContext, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import storeApi from "../../utils/storeApi";

import "./styles.css";


interface InputCardElement{
  setOpen: any;
  listId: number;
  type: string
}


export default function InputCard({setOpen,listId, type } : InputCardElement) {
  // const [open, setOpen] = useState(false);

  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  const handleOnChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  };


  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    // setOpen(open);
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          onChange={handleOnChange}
          value={title}
          className="input-text"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
      </div>
      <div className="confirm">
        <button className="button-confirm" onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="button-cancel"
          onClick={() => {
            setTitle("");
            // setOpen(open);
            setOpen(false);
          }}
        >
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}
