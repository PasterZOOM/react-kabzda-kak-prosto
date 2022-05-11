import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionSecret(props: AccordionPropsType) {
    console.log('Accordion rendering')
    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed:true})
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={() => {
                dispatch({type:TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>)
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)


type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.setCollapsed()}>{props.title}</h3>
}
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
const AccordionBody = React.memo(AccordionBodySecret)