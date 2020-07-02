$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([1,2,3,4]);
	const pad = pad.tensor1.pad([[1,2]]);

	txt += 'Pad:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() +'\n\n';
	txt += 'Depois:\n';
	txt += pad.toString() +'\n\n'

	

	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
