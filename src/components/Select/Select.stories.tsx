import React, {useState} from 'react';
import {Select, SelectPropsType} from './Select';
import {Story} from '@storybook/react';


export default {
    title: 'Select',
    component: Select
}


const Template: Story<SelectPropsType> = (args) => {
    const [title, setTitle] = useState('')

    return <Select {...args}
                   title={title}
                   onChange={setTitle}
    />
}

export const ModeChanging = Template.bind({})
ModeChanging.args = {
    items: [
        {title: 'Misha', value: 1},
        {title: 'Pasha', value: 2},
        {title: 'Lesha', value: 3}
    ]
}
