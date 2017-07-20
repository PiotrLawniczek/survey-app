
$(function () {                                   
      var counterForWell = 0;
      var counterForAdd = 0;

  $(document).ready(function () {
    $('#add').click(function () {

      var titleText = $('#inputSurveyName').val();
      var survey = $('#survey');

      var formGroup = document.createElement("form_group");

      var well = document.createElement("div");
      well.className = "well";
      well.id = "well"+counterForWell;
      counterForWell = counterForWell + 1;

      var surveyTitle = document.createElement("h3");
      surveyTitle.textContent = titleText;

      var inputQuestionLabel = document.createElement("label");
      inputQuestionLabel.className = "control-label";
      inputQuestionLabel.textContent = "Tresc Pytania:"

      var inputQuestion = document.createElement("input");
      inputQuestion.className = "form-control ";
      inputQuestion.id = "answer";

      var radio = document.createElement("radio");
      radio.className = "radio";


      var inputRadioLabel = document.createElement("input");
      //inputQuestionLabel.setAttribute("for", inputRadio);
      inputRadioLabel.textContent = "asdasd";



      var inputRadio = document.createElement("input");
      inputRadio.type = "radio";
      inputRadio.id = "inputRadio";


      var addRadioButton = document.createElement("button");
      addRadioButton.type = "button";
      addRadioButton.className = "btn btn-primary radioButton";
      addRadioButton.textContent = "+";
      addRadioButton.id = "addRadioButton"+counterForAdd;
      counterForAdd = counterForAdd +1;

      var divForButton = document.createElement("div");

      survey.append(formGroup);
      formGroup.append(well);
      well.append(surveyTitle);
      well.append(inputQuestionLabel);
      well.append(inputQuestion);
      well.append(radio);
      well.append(inputRadio);
      well.append(inputRadioLabel);
      well.append(divForButton);
      divForButton.appendChild(addRadioButton);

 $(addRadioButton).click(function (e) {
  
   var wellGood = $(e.target).parent().parent().attr('id');

   element = document.getElementById(wellGood);

   $("#inputRadio").clone().appendTo(element);


    });


    });


  

  });



 




});


