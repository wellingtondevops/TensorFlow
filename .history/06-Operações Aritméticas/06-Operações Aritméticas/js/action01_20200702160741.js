$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([1,2,3,4]);
	const tensor2 = tf.tensor([10,20,30]);
	const add = tensor1.add(tensor2)


	txt += 'add:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';
	txt += tensor2.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += add.toString() + '\n\n';


	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
