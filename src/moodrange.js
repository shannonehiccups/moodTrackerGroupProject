import SuperSimple from "./react-range";

const MoodRange = () => {
    return ( 
<div class="container container-fluid moodFrame">
<h1>How are you feeling today?</h1>
<div class="container grid-container moodsAndSlider">
<SuperSimple />
<div class="moodList">
<p class="">Euphoric</p>
<p class="">Happy</p>
<p class="">Content</p>
<p class="">Ennui</p>
<p class="">Depressed</p>
<p class="">Upset/Angry</p>
</div>
</div>
</div>
     );
}
 
export default MoodRange;