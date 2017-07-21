
$(function () {                                   
      var counterForWell = 0;
      var counterForAdd = 0;

  $(document).ready(function () {

//  var arr = { name: "testtest" };
// $.ajax({
//     url: 'http://localhost:8080/users',
//     async: true,
//     type: 'POST',
//     data: { "name" : "testtest" },
//     contentType: 'application/json;charset=utf-8",',
//     dataType: 'json',
//     success: function(msg) {
//         alert(msg);
//     }
// });





//  var txt = "razraz";
//     $.post("http://localhost:8080/surveys", {"title": "ankieta5567999"}  , function(result){
//         alert(result);
//     } );

//     $.get("http://localhost:8080/surveys", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//     });

    var txt = "razraz";
    $.post("http://localhost:8080/questions", {  "questionDesc" : "razraz" }  , function(result){
        alert(result);
    } );
    $.get("http://localhost:8080/questions", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });



    $('#add').click(function () {

      var titleText = $('#inputSurveyName').val();
      var survey = $('#survey');

      var formGroup = document.createElement("form_group");

      var well = document.createElement("div");
      well.className = "well";
      well.id = "well"+counterForWell;
      counterForWell = counterForWell + 1;

      var inputQuestionLabel = document.createElement("label");
      inputQuestionLabel.className = "control-label";
      inputQuestionLabel.textContent = "Tresc Pytania:"

      var inputQuestion = document.createElement("input");
      inputQuestion.className = "form-control ";
      inputQuestion.id = "answer";

      var radio = document.createElement("radio");
      radio.className = "radio";


      var inputRadioLabel = document.createElement("input");
      inputRadioLabel.id = "inputRadioLabel";
      //inputQuestionLabel.setAttribute("for", inputRadio);



      var inputRadio = document.createElement("input");
      inputRadio.type = "radio";
      inputRadio.id = "inputRadio";
     // $("#inputRadio").attr("disabled", true);
     inputRadio.name= "optradio";


      var addRadioButton = document.createElement("button");
      addRadioButton.type = "button";
      addRadioButton.className = "btn btn-primary radioButton";
      addRadioButton.textContent = "+";
      addRadioButton.id = "addRadioButton"+counterForAdd;
      counterForAdd = counterForAdd +1;

      var divForButton = document.createElement("div");



      var divRadioForClone = document.createElement("div");
      divRadioForClone.id = "divRadioForClonee";
      divRadioForClone.append(inputRadio);
      divRadioForClone.append(inputRadioLabel);

      var pRadioInput = document.createElement("p");
      pRadioInput.id ="pRadioInput";

      survey.append(formGroup);
      formGroup.append(well);
      well.append(inputQuestionLabel);
      well.append(inputQuestion);

      well.append(pRadioInput);

      

      pRadioInput.append(radio);
      pRadioInput.append(inputRadio);
      pRadioInput.append(inputRadioLabel);
      well.append(divForButton);
      divForButton.appendChild(addRadioButton);

 $(addRadioButton).click(function (e) {
  
   var wellGood = $(e.target).parent().parent().attr('id');

   parentElement = document.getElementById(wellGood);

   var pClone = document.createElement("p");

   parentElement.append(pClone);


    $("#radio").clone().appendTo(pRadioInput);
    $("#inputRadio").clone().appendTo(pClone);
    $("#inputRadioLabel").clone().appendTo(pClone);

    $( pClone ).insertBefore(addRadioButton );

    });


    });


  

  });



 




});


