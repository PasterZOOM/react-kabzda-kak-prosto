import React, {useState, KeyboardEvent, useEffect} from 'react';

export type ItemsType = {
    title: string
    value: number
}

export type SelectPropsType = {
    items: ItemsType[]
    onChange: (title: string) => void
    title: string
}
const component = {
    border: '1px solid black',
    borderRadius: '2px',
    display: 'inline-block',
    minWidth: '40px'
}
const span = {
    display: 'inline-block',
    width: '40px'
}
const HoveredItems = {
    backgroundColor: 'blue',
    color: 'white'
}
const Items = {
}

export function SelectSecret(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(props.title)
    const onClick = () => {
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        setHoveredElementValue(props.title)
    }, [props.title])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
            setCollapsed(false)
        }
        if (e.key === 'Enter') {
            props.onChange(hoveredElementValue)
            setCollapsed(!collapsed)
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.items[i + 1] :
                        props.items[i - 1]
                    if (pretendentElement) {
                        if (pretendentElement) {
                            props.onChange(pretendentElement.title)
                            return
                        }
                    }
                }
                if (props.title === '') {
                    props.onChange(props.items[0].title)
                }
            }

        }
    }

    return (
        <div style={component}
             tabIndex={0}
             onKeyUp={onKeyUp}>
            <div onClick={onClick}>
                <span style={span}>{props.title}</span>
                <span>▾</span>
            </div>
            {collapsed && props.items.map(i => {
                const onClick = () => {
                    props.onChange(i.title)
                    setCollapsed(!collapsed)
                }
                return (
                    <div style={i.title === hoveredElementValue ? HoveredItems : Items }
                         onClick={onClick}
                         onMouseEnter={() => {
                             setHoveredElementValue(i.title)
                         }}
                         key={i.value}>
                        {i.title}
                    </div>)
            })}
        </div>
    )
}
export const Select = React.memo(SelectSecret)