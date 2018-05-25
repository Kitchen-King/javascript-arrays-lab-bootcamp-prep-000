var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(a) {kittens.push(a); return kittens}

function destructivelyPrependKitten(a){kittens.unshift(a); return kittens}

function destructivelyRemoveLastKitten(a){kittens.pop(a); return kittens}

function destructivelyRemoveFirstKitten(a){kittens.shift(a); return kittens}

function addNames(a) {var NewKittens = [...Names,a]; return NewNames}