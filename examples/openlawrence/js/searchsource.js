var Manager;

require.config({
  paths: {
    core: '../../../core',
    managers: '../../../managers',
    widgets: '../../../widgets',
    reuters: '../widgets'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

(function ($) {

define([
  'managers/Manager.jquery',
  'core/ParameterStore',
  'reuters/ResultWidget',
  'reuters/CurrentSearchWidget.9',
  'widgets/jquery/PagerWidget'
], function () {
  $(function () {
      Manager = new AjaxSolr.Manager({
          solrUrl: 'http://www.openlawrence.com:8983/solr/collection1/'
      });

      Manager.addWidget(new AjaxSolr.ResultWidget({
          id: 'result',
          target: '#docs'
      }));


    Manager.init();
    Manager.store.addByValue('q', '*:*');
    Manager.doRequest();
  });

});

})(jQuery);
