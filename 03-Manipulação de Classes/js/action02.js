$('#result').text('');

function executar() {
	let txt = '';

	const tensor1 = tf.tensor([[1, 2], [3, 4]]);

	const tensor2 = tf.tensor([true, false, true, false]);
	const toFloat = tensor2.toFloat();

	const tensor3 = tf.tensor([1.2, 2.5, 3.7, 4.8]);
	const toInt = tensor3.toInt();

	const tensor4 = tf.tensor([1,0,1,0]);
	const toBool = tensor4.toBool();

	const tensor5 = tf.tensor([1,2,3,4]);
	const reshape = tensor5.reshape([2,2]);

	const tensor6 = tf.tensor([[1,2],[3,4]]);
	const tensor7 = tf.tensor([5,2,3,4]);
	const reshapeAs = tensor6.reshapeAs(tensor7)



	txt += 'Dispose:\n\n';
	txt += 'Antes:\n';
	txt += tensor1.toString() + '\n\n';
	tensor1.dispose();
	// tensor1.print();
	txt += 'Depois:\n';
	txt += 'memória liberada\n\n';

	txt += 'toFloat:\n\n';
	txt += 'Antes:\n';
	txt += tensor2.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += toFloat.toString() + '\n\n';

	
	txt += 'toInt:\n\n';
	txt += 'Antes:\n';
	txt += tensor3.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += toInt.toString() + '\n\n';


	txt += 'toBoll:\n\n';
	txt += 'Antes:\n';
	txt += tensor4.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += toBool.toString() + '\n\n';

	txt += 'reshape:\n\n';
	txt += 'Antes:\n';
	txt += tensor5.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += reshape.toString() + '\n\n';

	txt += 'reshapeAs:\n\n';
	txt += 'Antes:\n';
	txt += tensor6.toString() + '\n\n';
	txt += 'Depois:\n';
	txt += reshapeAs.toString() + '\n\n';






	exibir(txt);
}

function exibir(str = '') {
	$('#result').text(str);
}
