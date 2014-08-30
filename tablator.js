var tq84 = tq84 || {};

tq84.tablator = function () {

  this.table_ = document.createElement('table');
  this.tbody_ = document.createElement('tbody');

  this.table_.appendChild(this.tbody_);

};

tq84.tablator.prototype.addRow = function() {
    var tr = document.createElement('tr');

    for (var a=0; a<arguments.length; a++) {
      var td  = document.createElement('td');
      td.innerHTML = arguments[a];
      tr.appendChild(td);
    }

    this.tbody_.appendChild(tr);
}

tq84.tablator.prototype.toBody = function() {
      document.getElementsByTagName('body')[0].appendChild(this.table_);
}
