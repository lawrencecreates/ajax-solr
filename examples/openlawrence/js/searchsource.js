var Manager;

require.config({
  paths: {
    core: '../../../core',
    managers: '../../../managers',
    widgets: '../../../widgets',
    searchsource: '../widgets'
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

    Manager.init();
    Manager.store.addByValue('q', 'content:*');
    Manager.store.addByValue('json.nl', 'map');
    Manager.doRequest();
  });

});

})(jQuery);
