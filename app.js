$('form').on('submit', function (e) {
  e.preventDefault();
  addEntry($('#movie-title').val(), $('#rating').val());
  $('#movie-title').val('');
  $('#rating').val('');
});

function addEntry(title, rating) {
  let newEntry = $('<tr>');
  newEntry.append(`<td>${title}</td>`);
  newEntry.append(`<td>${rating}</td>`);
  newEntry.append('<td><button class="removeRowBtn">Remove</button></td>');
  newEntry.appendTo('tbody')
}

$('tbody').on('click', '.removeRowBtn', function () {
  $(this).closest('tr').remove();
});

/**
 * 
 * @param {HTMLTableElement} table to sort 
 * @param {number} index of column to sort 
 * @param {boolean} asc true if asc and false for dsc 
 */
function sortTableByColumn(column, asc = true) {
  console.log('sorting...');
  const dirToggle = asc ? 1 : -1;
  const rows = $('tbody tr').toArray();

  //sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = $(a).find('td').eq(column).text().toLowerCase().trim();
    const bColText = $(b).find('td').eq(column).text().toLowerCase().trim();
    return aColText > bColText ? (1 * dirToggle) : (-1 * dirToggle);
  });

  //remove existing rows
  $('tbody').html('');

  //re-add the newly sorted rows
  $('tbody').append(...sortedRows);

  $('th').removeClass('th-sort-asc th-sort-dsc');

  $('th').eq(column).addClass(asc ? 'th-sort-asc' : ' th-sort-dsc');
}

// Movie column
$('th').eq(0).closest('th').on('click', function () {
  const currentSort = $(this).hasClass('th-sort-asc');
  sortTableByColumn(0, !currentSort);
});

// Rating column
$('th').eq(1).closest('th').on('click', function () {
  const currentSort = $(this).hasClass('th-sort-asc');
  sortTableByColumn(1, !currentSort);
});


$('table').css({
  'background-color': 'lightgray',
  'border': 'solid 0.5px black',
  'width': '600px',
  'margin': '10px',
  'text-align': 'center'
});

$('th, td').css({
  'border': 'solid 1px black',
  'width': '33%',
  'padding': '10px'
});

$('form').css({
  'width': '600px',
  'display': 'flex',
  'gap': '10px',
  'margin': '10px'
});

$('label').css({
  'font-weight': 'bold',
})

$('h1').css({
  'margin': '10px'
})

$('body').css({
  'background-color': 'darkgrey',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center'
})
