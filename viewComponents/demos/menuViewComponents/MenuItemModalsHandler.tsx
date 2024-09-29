import {Modal, View} from "react-native";
import MainBackButton from "../../mainViewComponents/MainBackButton";
import React, {useState} from "react";
import TodoInputView from "../todoList/TodoInputView";
import TodoListView from "../todoList/TodoListView";
import {TodoItem} from "../todoList/TodoItemView";
import GuessingGameStartView from "../guessingGame/GuessingGameViews/GuessingGameStartView";
import {DemosType} from "./DemosType";
import PlaygroundView from "../playground/PlaygroundView";

interface DemosModalHandlerProps {
    type: DemosType
    visibility: boolean
    backPressEvent: () => void
}

interface DemosModalProps {
    visibility: boolean
    backPressEvent: () => void
}

export default function DemosModalViewHandler(props: DemosModalHandlerProps) {
    switch(props.type){
        case DemosType.TodoItems:
            return <TodoListModal {...props}/>
        case DemosType.GuessingGame:
            return <GuessingGameModal {...props}/>
        case DemosType.Playground:
            return <PlaygroundModal {...props}/>
    }

}

function TodoListModal({visibility, backPressEvent}: DemosModalProps) {
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
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <TodoInputView
                    onChangeListener={onChangeListener}
                    setNewItem={newItemHandler}/>
                <TodoListView todoItems={todoItems}/>
            </Modal>
        </View>
    )
}

function GuessingGameModal({visibility, backPressEvent}: DemosModalProps) {
    return(
        <View>
            <Modal
                animationType={'slide'}
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <GuessingGameStartView/>
            </Modal>
        </View>
    )
}

function PlaygroundModal({visibility, backPressEvent}: DemosModalProps) {
    return(
        <View>
            <Modal
                animationType={'slide'}
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <PlaygroundView/>
            </Modal>
        </View>
    )
}
