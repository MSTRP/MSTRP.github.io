Qualtrics.SurveyEngine.addOnload(function()
{
	//-----------Buttons:
    nextbuttonDefault('Next: 2. Progress')
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	//--------clear trailing spaces on blur:	
	cleanForm(this);
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});