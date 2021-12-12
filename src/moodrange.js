import React from 'react';
import SuperSimple from "./react-range";


class MoodRange extends React.Component{
     constructor(props) {
        super(props);
        this.mood = -1;
        this.MoodPicked = this.MoodPicked.bind(this);
        this.MoodConfirmed = this.MoodConfirmed.bind(this);
    }
    
    MoodPicked = (moodValue) =>{
        console.log('Your mood is: ' + moodValue);
        this.mood = moodValue;
    }

    MoodConfirmed = () => {
        this.props.setPickedMood(this.mood);
    }

    render()
    {   
        return ( 
            <div class="container container-fluid moodFrame">
            <h1>How are you feeling today?</h1>
            <div class="container grid-container moodsAndSlider">
            <SuperSimple MoodPicked = {this.MoodPicked} />
            <div class="moodList">
            <p class="mood mood-0">Optimistic</p>
            <p class="mood mood-1">Happy</p>
            <p class="mood mood-2">Content</p>
            <p class="mood mood-3">Discouraged</p>
            <p class="mood mood-4">Upset</p>
            <p class="mood mood-5">Depressed</p>
            <button onClick={this.MoodConfirmed}>Select</button>
            </div>
            </div>
            </div>
        );
    }
}
 
export default MoodRange;