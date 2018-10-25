$(document).ready(function() {
  $("#formOne").submit(function() {

    var speciesInput = $("input#species").val();
    var verbOneInput = $("input#verbOne").val();
    var nounOneInput= $("input#nounOne").val();
    var planetNameInput = $("input#planetName").val();
    var locationPrefixInput = $("input#locationPrefix").val();
    var locationInput = $("input#location").val();
    var jobTypeInput = $("input#jobType").val();
    var eventOneInput = $("input#eventOne").val();
    var eventTwoInput = $("input#eventTwo").val();
    var emotionInput = $("input#emotion").val();
    var indivNameInput = $("input#indivName").val();
    var actionInput = $("input#action").val();
    var genderRefInput = $("input#genderRef").val();
    var createdSomethingInput = $("input#createdSomething").val();

    $(".species").text(speciesInput);
    $(".verbOne").text(verbOneInput);
    $(".nounOne").text(nounOneInput);
    $(".planetName").text(planetNameInput);
    $(".locationPrefix").text(locationPrefixInput);
    $(".location").text(locationInput);
    $(".jobType").text(jobTypeInput);
    $(".eventOne").text(eventOneInput);
    $(".eventTwo").text(eventTwoInput);
    $(".emotion").text(emotionInput);
    $(".indivName").text(indivNameInput);
    $(".action").text(actionInput);
    $(".genderRef").text(genderRefInput);
    $(".createdSomething").text(createdSomethingInput);

    $("#story").show();

    event.preventDefault();
  });
});
