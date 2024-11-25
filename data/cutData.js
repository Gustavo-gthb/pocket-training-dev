const fs = require('fs');

const jsonData = require('./test.json');

const newJsonData = jsonData.map((item) => ({
	name: item.name,
	gifUrl: item.gifUrl,
	target: item.target,
	bodyPart: item.bodyPart,
	equipment: item.equipment
}));

fs.writeFile('arquivo.json', newJsonData, (err) => {
	if (err) throw err;
	console.log('Arquivo CSV foi criado.');
});
