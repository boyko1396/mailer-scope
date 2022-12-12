$(document).ready(function() {
  sameHeight();
  tabsAccount();
  recommendationCardCollapse();

  // same height elements
  function sameHeight() {
    if ($('.js-header-min-height').length > 0) {
      $('.js-header-min-height').matchHeight({
        property: 'height'
      });
    }
  }

  // tabs pager
  function tabsAccount() {
    $('.js-tabs-nav-layout').click(function() {
      if($(this).hasClass('is-active')) {
        event.preventDefault();
      }
      else {
        $('.js-tabs-nav-layout').removeClass('is-active');
        $(this).addClass('is-active');
        $('.js-tabs-content-layout > div').removeClass('is-show');
        var activeTab = $(this).attr('href');
        $(activeTab).addClass('is-show');
        event.preventDefault();
      }
    });
  }

  // recommendation card collapse
  function recommendationCardCollapse() {
    $('.js-recommendation-card-collapse').click(function() {
      $(this).parents().toggleClass('is-collapse');
      $(this).toggleClass('is-collapse');
      $(this).next().slideToggle(350);
      event.preventDefault();
    });
  }
});