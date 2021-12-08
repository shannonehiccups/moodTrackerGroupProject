const MoodRange = () => {
    return ( 
<div class="container container-fluid moodFrame">
<h1>How are you feeling today?</h1>
<div class="container grid-container moodsAndSlider">
<section class="form-container">
<label for="customRange3" class="form-label"></label>
<input type="range" class="form-range" min="0" max="100" step="20" id="customRange3"></input>
</section>
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