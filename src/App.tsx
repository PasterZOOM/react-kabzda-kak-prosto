import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log('App rendering')

    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [rating, setRating] = useState<RatingValueType>(0)
    const [accordionCollabsed, setAccordionCollabsed] = useState<boolean>(true)

    return (
        <div>
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>

            <OnOff on={switchOn} onClick={setSwitchOn}/>
            <Accordion titleValue={'Menu'} onClick={()=> {setAccordionCollabsed(!accordionCollabsed)}} collapsed={accordionCollabsed}/>
            <Rating onClick={setRating} value={rating}/>

            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={0}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

export default App;
