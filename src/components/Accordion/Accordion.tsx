import React from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: ItemsType[]
    onClick: (value: any) => void
}

export function AccordionSecret(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>)
}
export const Accordion  = React.memo(AccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

export const AccordionTitle = React.memo(AccordionTitleSecret)

export type AccordionBodyPropsType = {

    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClick(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}
export const AccordionBody = React.memo(AccordionBodySecret)
