function square(x){
	square.cache = square.cache || {};
	if (!square.cache[x]) {
		square.cache[x] = x*x;
	}
	return square.cache[x]
}

square(3);
square(9);
square(-11);

console.log(square.cache);