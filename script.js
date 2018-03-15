$(document).ready(function() {
  // listen for button click.
  $("#button").click(function() {
    var val = $("#textarea").val();
    if (val == '') {
      alert('please write something in the box')
    };
    // store text in val.
    var start = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
    // store first part of url.
    var end = "&format=json&callback=?";
    // stored seckond part of url.
    $.ajax({
      type: 'GET',
      url: start + val + end,
      dataType: 'json',
      success: function(data) {
        // doing stuff with data.
        for (var i = 0; i < data[1].length; i++) {

          $("#output").append(i + ' : ' + data[1][i] + '<br/>')

        }
        // appended all data[1] values in output.

        $("#info").append(data[2][0])
        // put data 2[0] in info.
      }
    })
    // ajax finish

  });


});
