let output = '';

for (let i = 1; i <= 8; i++) {
    if (i % 2 === 1) {

        output += i + ' ';
    } else {

        output += 'x ';
    }
}

console.log(output.trim());
