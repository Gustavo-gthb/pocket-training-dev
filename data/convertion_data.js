const fs = require('fs');

const jsonData = require('../bbbbbbb.json');

const newJsonData = jsonData.map((item) => ({
	target: item.target,
	bodyPart: item.bodyPart,
	name: item.name,
	equipment: item.equipment,
	gifUrl: item.gifUrl
}));

function jsonToCsv(jsonObj) {
	const keys = Object.keys(jsonObj[0]);
	let result = keys.join(',') + '\n';

	jsonObj.forEach((item) => {
		let row = keys.map((key) => item[key]).join(',');
		result += row + '\n';
	});

	return result;
}

const csvData = jsonToCsv(newJsonData);

fs.writeFile('arquivo.csv', csvData, (err) => {
	if (err) throw err;
	console.log('Arquivo CSV foi criado.');
});
