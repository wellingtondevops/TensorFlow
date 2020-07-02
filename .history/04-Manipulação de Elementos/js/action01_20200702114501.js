$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([1,2,3,4]);
	const pad = tensor1.pad([[1,2]]);

	const tensor2 = tf.tensor([1,2]);
	const tensor3 = tf.tensor([3,4]);
	const concat = tensor2.concat(tensor3);

	txt += 'Pad:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() +'\n\n';
	txt += 'Depois:\n';
	txt += pad.toString() +'\n\n'

	txt += 'Concat:\n\n';
	txt += 'Antes:\n';
	txt += '1º Tensor' + tensor2.toString() +'/n' +'2º Tensor' 
	+ tensor3.toString() +'\n\n';
	
	txt += 'Depois:\n';
	txt += concat.toString() +'\n\n'


	

	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
