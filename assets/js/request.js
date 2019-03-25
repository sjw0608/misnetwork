;(function($) {
  var config = 'http://122.112.203.124:8088/missuser'

  function apkRequest() {
    $.ajax({
      url: `${config}/api/sys/getLatestVersion`,
      type: 'GET',
      dataType: 'JSONP',
      success: function(res) {
        console.log(res)
        window.location.href = res.data.link
      },
      error: function(err) {
        console.log(err)
      }
    })
  }
  $('#J_android').click(function() {
    apkRequest()
  })
})(jQuery)
