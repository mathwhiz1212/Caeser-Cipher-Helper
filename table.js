'use strict';
//Copyright AJ Oneal and Joshua Mudge.
// Licensed under the MPLv2 license.

function printTables(tables) {
tables.forEach(function (table) {
console.log(table.header);
table.rows.forEach(function (row) {

};
}

//printTables(require('./data.json').tables;)

//length of strings in columns. go through ever row. Figure out which cell is the longest.

var longest = [];

Complete:

'use strict';

/*
{
  "tables": [
    { "header": [ "First", "Last", "Age", "Bio" ]
    , "rows": [
        [ "AJ", "ONeal", "29", "Awesome. JavaScript." ]
      , [ "Joshua", "Mudge", "15", "Kid. Genius." ]
      ]
    }
  , { "header": [ "Title", "Author", "Rating", "Comment" ]
    , "rows": [
        [ "Copying & Pasting", "O'RLY", "10", "This is the best book evaaaaar!!! It learned me everything I need to know!" ]
      , [ "Beauty & The Beast", "Disney", "7.5", "Great love story." ]
      ]
    }
  ]
}
*/

function printTables(tables) {
  var longest = [];

  tables.forEach(function (table, i) {
    console.log(table.header);
    table.rows.forEach(function (row, j) {
      longest[j] = row.length;
      console.log(row);
    });
  });
}

printTables(require('./data.json').tables);

