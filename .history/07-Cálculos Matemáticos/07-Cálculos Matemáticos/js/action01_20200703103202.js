$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([-1,2,-3,4]);
	const abs = tensor1.abs()


	
	txt += 'abs:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';	
	txt += 'Depois:\n';
	txt += abs.toString() + '\n\n';

	

	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
