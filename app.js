$('form').on('submit', function (e) {
  e.preventDefault();

  addEntry($('#movie-title').val(), $('#rating').val());

  $('#movie-title').val('');
  $('#rating').val('');
});

const addEntry = (titleInput, ratingInput) => {
  let newEntry = $('<tr>');
  newEntry.append(`<td>${titleInput}</td>`);
  newEntry.append(`<td>${ratingInput}</td>`);
  newEntry.append('<td><button class="removeRowBtn">Remove</button></td>');
  newEntry.appendTo('tbody')
}

$('tbody').on('click', '.removeRowBtn', function () {
  $(this).closest('tr').remove();
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
  'flex': 'space-between',
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
