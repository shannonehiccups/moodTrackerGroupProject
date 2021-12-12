import React from 'react';
//import MoodOptimistic from './moodOptimistic';

class MyMood extends React.Component{

    constructor(props) {
        super(props);
        this.mood = -1;
        //this.RenderMood = this.RenderMood.bind(this);
    }

    /*
      RenderMood = () => 
      {
            if( this.props.moodValue == 0 )
                return <MoodOptimistic />
            else if( this.props.moodValue == 1 )
                return </MoodHappy />
            else
                return </NoMoodPicked />
      }
    */

      render()
      {
          return ( 
            <div> 
                <span>{this.props.name} your mood was {this.props.moods[this.props.moodValue]}.</span>
            </div>
        );
      }
  } 
export default MyMood; 