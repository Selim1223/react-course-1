import { Draggable, Droppable } from "react-beautiful-dnd";

import Title from "../Title";
import Card from "../Card";
import InputContainer from "../InputContainer";

import "./styles.css";
import { Key } from "react";

interface ListElement{
  list: any;
  index: number
}

export default function List({ list, index }: ListElement) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {/* décommenter les prochaines lignes permet de déplacer les lists */}
      {(/*provided */) => (
       <div /*{...provided.draggableProps} ref={provided.innerRef}*/>
       <div className="list-cards" /*{...provided.dragHandleProps}*/>
            <div className="title-list">
              <Title title={list.title} listId={list.id} />
            </div>
            <div className="container-cards">
              <Droppable droppableId={list.id} type="task">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="card-container"
                  >
                    {list.cards.map((card: { id: Key | string | undefined; }, index: number) => (
                      <Card
                        key={card.id}
                        card={card}
                        index={index}
                        listId={list.id}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <InputContainer listId={list.id} type="card" />
          </div>
        </div>
      )}
    </Draggable>
  );
}
