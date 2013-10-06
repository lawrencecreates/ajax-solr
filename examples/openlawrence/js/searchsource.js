var Manager;

require.config({
  paths: {
    core: '../../../core',
    managers: '../../../managers',
    widgets: '../../../widgets',
    searchsource: '../local_widgets'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

(function ($) {

define([
  'managers/Manager.jquery',
  'core/ParameterStore',
  'searchsource/ResultWidget',
  'searchsource/TextWidget',
  'searchsource/CurrentSearchWidget.9',
  'widgets/jquery/PagerWidget',
], function () {

  $(function () {

      Manager = new AjaxSolr.Manager({
          solrUrl: 'http://www.openlawrence.com:8983/solr/collection1/'
      });

      Manager.addWidget(new AjaxSolr.TextWidget({
          id: 'content',
          target: '#search'
      }));

      Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
          id: 'currentsearch',
          target: '#selection',
      }));

      Manager.addWidget(new AjaxSolr.ResultWidget({
          id: 'result',
          target: '#docs'
      }));

      Manager.addWidget(new AjaxSolr.PagerWidget({
          id: 'pager',
          target: '#pager',
          prevLabel: '&lt;',
          nextLabel: '&gt;',
          innerWindow: 1,
          renderHeader: function (perPage, offset, total) {
              $('#pager-header').html($('<span></span>').text('displaying ' + Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
          }
      }));

      Manager.init();
      Manager.store.addByValue('q', 'content:*');
      Manager.store.addByValue('json.nl', 'map');
      $('#current-search').text("NO SEARCH");
      Manager.doRequest();
  });

});

})(jQuery);
