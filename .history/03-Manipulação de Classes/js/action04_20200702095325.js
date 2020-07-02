$('#result').text('');

function executar() {
	let txt = '';

	const tfdata1 = tf.tensor([1,2,3,4]);
	const tfdata2 = tf.tensor([[1,2],[3,4]]);
	const tfdata3 = tf.tensor(2)
	const dataSync1 = tfdata1.dataSync();
	const dataSync2 = tfdata2.dataSync();
	const dataSync3 = tfdata3.dataSync();


	const tfarray1 = tf.tensor([1,2,3,4]);
	const tfarray2 = tf.tensor([[1,2],[3,4]]);
	const tarray3 = tf.tensor(2)
	const dataSync1 = tfarray1.arraySync();
	const dataSync2 = tfarray2.dataSync();
	const dataSync3 = tarray3.dataSync();




	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
