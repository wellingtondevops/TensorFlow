﻿$('#result').text('');

function executar() {
	let txt = '';


	const tensor1 = tf.tensor([1,2,3,4,]);
	const tensor2 = tf.tensor([0,5,1,3]);
	const maximum = tensor1.maximum(tensor2);

	const tensor3 = tf.tensor([1,2,3,4,]);
	const tensor4 = tf.tensor([0,5,1,3]);
	const minimum = tensor3.minimum(tensor4);

	
	const tensor5 = tf.tensor([8,9,7,5]);
	const tensor6 = tf.tensor([2,3,2,2]);
	const mod = tensor5.mod(tensor6);

	txt += 'maximum:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';
	txt += tensor2.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += maximum.toString() + '\n\n';	

	txt += 'minimum:\n\n';
	txt += 'Antes:\n';
	txt += tensor3.toString() + '\n\n';
	txt += tensor4.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += minimum.toString() + '\n\n';	

	txt += 'mod:\n\n';
	txt += 'Antes:\n';
	txt += tensor5.toString() + '\n\n';
	txt += tensor6.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += mod.toString() + '\n\n';	





	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
