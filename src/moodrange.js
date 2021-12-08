const MoodRange = () => {
    return ( 
<div class="container container-fluid">
<h1>How are you feeling today?</h1>
<section class="row">
<label for="customRange3" class="form-label"></label>
<input type="range" class="form-range" min="0" max="100" step="20" id="customRange3"></input>
</section>
<section class="row"> 
<p>Euphoric</p>
<p>Happy</p>
<p>Content</p>
<p>Ennui</p>
<p>Depressed</p>
<p>Upset/Angry</p>
</section>
</div>
     );
}
 
export default MoodRange;