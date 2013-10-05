(function (callback) {
  if (typeof define === 'function' && define.amd) {
    define(['core/AbstractTextWidget'], callback);
  }
  else {
    callback();
  }
}(function () {

(function ($) {

AjaxSolr.TextWidget = AjaxSolr.AbstractTextWidget.extend({
  init: function () {
    var self = this;
    $(this.target).find('input').bind('keydown', function(e) {
      if (e.which == 13) {
        var value = $(this).val();

          // show the search
          $('#current-search').text("Current Search :" +value);
          

        if (value && self.set("content:\"" + value + "\""  )) {
          self.doRequest();
        }
      }
    });
  },


  afterRequest: function () {
    $(this.target).find('input').val('');
  }
});

})(jQuery);

}));
