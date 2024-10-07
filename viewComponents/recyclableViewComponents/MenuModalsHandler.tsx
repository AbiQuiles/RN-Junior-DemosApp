import {View} from "react-native";
import React from "react";

/* History of Code:
    This was the main way to navigate the menus at the initialization of the app.
    I like the logic based here and want to save it for if in the future is needed.
    ---------------------- ----------------------- -------------------- -----------
    Variables to set the visibility of the modal from another function file:

    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const modalVisibilityHandler = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }
*/

export enum DemosType {
    TodoItems= 'TodoItems',
    GuessingGame = 'GuessingGame',
    Playground = 'Playground',
}

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
    return (
        <View>
            {/*<Modal
                animationType={'slide'}
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <TodoView/>
            </Modal>*/}
        </View>
    )
}

function GuessingGameModal({visibility, backPressEvent}: DemosModalProps) {
    return(
        <View>
            {/*<Modal
                animationType={'slide'}
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <GuessingGameStartView/>
            </Modal>*/}
        </View>
    )
}

function PlaygroundModal({visibility, backPressEvent}: DemosModalProps) {
    return(
        <View>
            {/*<Modal
                animationType={'slide'}
                visible={visibility}>
                <MainBackButton pressEvent={backPressEvent}/>
                <PlaygroundView/>
            </Modal>*/}
        </View>
    )
}
