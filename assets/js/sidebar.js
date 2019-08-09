$(document).ready(() => {
  $('#sidebar-open-button').on('click', () => {
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  });
  $('#sidebar-close-button').on('click', () => {
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  });
});