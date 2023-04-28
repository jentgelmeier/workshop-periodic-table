export default {
  check,
  lookup,
};

var elements;

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
  if (inputWord.length > 0) {
    for (let element of elements) {
      let symbol = element.symbol.toLowerCase();
      if (symbol.length <= inputWorld.length) {
        //did symbol match the first
        //one or two characters in inputWord
        if (inputWorld.slice(0, symbol.length) == symbol) {
          //still have characters left?
          if (inputWord.length > symbol.length) {
            let res = check(inpurtWord.slice(symbol.length));

            //matched successfully?
            if (res.length > 0) {
              return [symbol, ...res];
            }
          } else {
            return [symbol];
          }
        }
      }
    }
  }

  return [];
}

function lookup(elementSymbol) {
  if (element.symbol.toLowerCase() == elementSymbol) {
    return element;
  }
}
