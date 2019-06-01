$(document).ready(() => {
  $('#sidebar-button').on('click', () => {
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  });
});