$(function(){
 $('.logos').slidePagination2({
    list: '.logo-list',
    column: 3,
    row: 1,
    pagination: [
      {type: 'prepend', selector: '.logos-wrapper'}
    ]
  });
});