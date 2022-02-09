import React, { useContext, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import { Draggable } from "react-beautiful-dnd";

import storeApi from "../../utils/storeApi";

import "./styles.css";

interface CardElement{
  // card:{ id: | string | undefined;
  // title: | string | undefined;}
  card:  any;
  index: number;
  listId: number
}

export default function Card({ card, index, listId }: CardElement) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, /*completedCard*/updateCardTitle } = useContext(storeApi);

  const handleOnBlur = () => {
    updateCardTitle(newTitle, index, listId);
    setOpen(!open);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                className="input-card-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur();
                  }
                  return;
                }}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="card-title-container"
              >
                <p>{card.title}</p>
               
                <button
                  onClick={() => {
                  card.style.textDecoration="line-through";
                  }}
                >
                  <CheckIcon />  
                </button>

                <button
                  onClick={() => {
                    removeCard(index, listId);
                  }}
                >
                  <DeleteOutlineIcon />  
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
