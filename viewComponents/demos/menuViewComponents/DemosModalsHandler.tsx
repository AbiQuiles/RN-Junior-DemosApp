import {Modal, View} from "react-native";
import MainBackButton from "../../mainViewComponents/MainBackButton";
import React, {useState} from "react";
import TodoInputView from "../todoList/TodoInputView";
import TodoListView from "../todoList/TodoListView";
import {TodoItem} from "../todoList/TodoItemView";
import GuessingGameView from "../guessingGame/GuessingGameView";
import GuessingGameStartView from "../guessingGame/GuessingGameStartView";
import {DemosModalType} from "./DemosModalType";

interface DemosModalHandlerProps {
    type: DemosModalType
    visibility: boolean
    backPressEvent: () => void
}

type DemosModalProps = {
    visibility: boolean
    backPressEvent: () => void
}

export default function DemosModalHandler(props: DemosModalHandlerProps) {
    switch(props.type){
        case DemosModalType.TodoItems:
            return <TodoListModal {...props}/>
        case DemosModalType.GuessingGame:
            return <GuessingGameModal {...props}/>
    }

}

function TodoListModal(props: DemosModalProps) {
    const [text, setChangeText] = useState<string>('')
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const onChangeListener = (newItem: string) => setChangeText(newItem)
    const newItemHandler = () => {
        const itemKey = `${text}-${Math.random()}`

        let newTodoItems: TodoItem = {
            task: text,
            key: itemKey,
            pressEvent: () => setDeleteItemPressEvent(itemKey)
        }

        setTodoItems((currentTodoItems => [
                ...currentTodoItems,
                newTodoItems
            ])
        )
    }
    const setDeleteItemPressEvent = (itemKey: string): void => {
        const itemToRemove = todoItems.findIndex(
            (item) => item.key === itemKey
        )
        setTodoItems(currentTodoItems => {
                return currentTodoItems.filter((item) => {
                    //console.log('Item key:', item.key)
                    //console.log('Delete item:', itemKey)

                    // Check if item exists
                    if (itemToRemove) {
                        console.log("Success Msg: Item Deleted: ", item);
                    } else {
                        console.error("Error MSg: Item not found in the list");
                    }

                    return item.key !== itemKey
                })
            }
        )
    }

    return (
        <View>
            <Modal
                animationType={'slide'}
                visible={props.visibility}>
                <MainBackButton pressEvent={props.backPressEvent}/>
                <TodoInputView
                    onChangeListener={onChangeListener}
                    setNewItem={newItemHandler}/>
                <TodoListView todoItems={todoItems}/>
            </Modal>
        </View>
    )
}

function GuessingGameModal(props: DemosModalProps) {
    return(
        <View>
            <Modal
                animationType={'slide'}
                visible={props.visibility}>
                <MainBackButton pressEvent={props.backPressEvent}/>
                <GuessingGameView/>
                <GuessingGameStartView/>
            </Modal>
        </View>
    )
}

