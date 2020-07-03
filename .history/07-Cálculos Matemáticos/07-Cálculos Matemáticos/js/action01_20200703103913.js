$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([-1,2,-3,4]);
	const abs = tensor1.abs(); //valor positivo

	const tensor2 = tf.tensor([1,-1]);
	const acos = tensor2.acos();

	const tensor3 = tf.tensor([1,2.5]);
	const acosh = tensor3.acosh();


	
	txt += 'abs:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';	
	txt += 'Depois:\n';
	txt += abs.toString() + '\n\n';

	txt += 'acos:\n\n';
	txt += 'Antes:\n';
	txt += tensor2.toString() + '\n\n';	
	txt += 'Depois:\n';
	txt += acos.toString() + '\n\n';

	txt += 'acosh:\n\n';
	txt += 'Antes:\n';
	txt += tensor3.toString() + '\n\n';	
	txt += 'Depois:\n';
	txt += acosh.toString() + '\n\n';

	

	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
