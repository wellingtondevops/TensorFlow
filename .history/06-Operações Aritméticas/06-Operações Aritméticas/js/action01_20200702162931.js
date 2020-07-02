$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([1,2,3,4]);
	const tensor2 = tf.tensor([10,20,30,40]);
	const add = tensor1.add(tensor2)	
	
	const tensor3 = tf.tensor([10,20,30,40]);
	const tensor4 = tf.tensor([1,2,3,4]);
	const sub = tensor3.sub(tensor4)


	
	const tensor5 = tf.tensor([1,2,3,4]);
	const tensor6 = tf.tensor([1,4,5,4]);
	const mul = tensor5.mul(tensor6)


	
	const tensor7 = tf.tensor([4,8,15,40]);
	const tensor8 = tf.tensor([1,2,3,4]);
	const div = tensor8.div(tensor7)

	txt += 'add:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';
	txt += tensor2.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += add.toString() + '\n\n';

	txt += 'Sub:\n\n';
	txt += 'Antes:\n';
	txt += tensor3.toString() + '\n\n';
	txt += tensor4.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += sub.toString() + '\n\n';

	txt += 'mul:\n\n';
	txt += 'Antes:\n';
	txt += tensor5.toString() + '\n\n';
	txt += tensor6.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += mul.toString() + '\n\n';

	txt += 'div:\n\n';
	txt += 'Antes:\n';
	txt += tensor7.toString() + '\n\n';
	txt += tensor8.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += div.toString() + '\n\n';



	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
