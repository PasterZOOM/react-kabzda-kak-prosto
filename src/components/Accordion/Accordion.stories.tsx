import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('accordion change event fired')
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClick: callBack
}

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  onChange={callBack}
                                                  collapsed={true}
                                                  items={[]}
                                                  onClick={onClickCallBack}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                     onChange={callBack}
                                                     collapsed={false}
                                                     items={[{title: 'Misha', value: 1}, {title: 'Pasha', value: 2}, {title: 'Lesha', value: 3}]}
                                                     onClick={onClickCallBack}/>

export const ModeChanging = () => {
    let [value, setVallue] = useState<boolean>(true)
    return (
        <Accordion titleValue={'Menu'}
                   onChange={() => setVallue(!value)}
                   collapsed={value}
                   items={[
                       {title: 'Misha', value: 1},
                       {title: 'Pasha', value: 2},
                       {title: 'Lesha', value: 3}
                   ]}
                   onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}
        />)
}