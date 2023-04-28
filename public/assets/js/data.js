$(document).ready(function() {
	const config = {

		apiKey: "AIzaSyA7Zdl941vO5STGC-zwdNZhFmnQmBM7A1w",
		authDomain: "sistemlampu.firebaseapp.com",
		databaseURL: "https://sistemlampu-default-rtdb.firebaseio.com",
		projectId: "sistemlampu",
		storageBucket: "sistemlampu.appspot.com",
		messagingSenderId: "815493702041",
		appId: "1:815493702041:web:146ed004ce45ec49067308"
};    
firebase.initializeApp(config);

var filaEliminada;

const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

const NoTable= 'A';

var db = firebase.database();
var coleccionProductos = db.ref().child("Data");
var dataSet = [];//array para guardar los valores de los campos inputs del form
var table = $('#tablaProductos').DataTable({
			pageLength : 8,
			lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Semua']],
			data: dataSet,
			columnDefs: [
				{
					targets: [0],
					data: null,
				
					render: (data, type, row, meta) => meta.row + 1

				},
				{
					targets: -1,        
					defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnBorrar btn btn-danger' data-toggle='tooltip' title='Borrar'>"+iconoBorrar+"</button></div></div>"
				}
			]
		});

coleccionProductos.on("child_added", datos => {        
	dataSet = [datos.key,datos.child("Tanggal").val(),
	datos.child("Waktu").val(),
	 datos.child("teras").val(),
   datos.child("ruangTamu").val(),
	datos.child("kamarUtama").val(),
	datos.child("kamarKedua").val(),
	datos.child("dapur").val(),
	datos.child("toilet").val(),
];
  
table.rows.add([dataSet]).draw();

});
coleccionProductos.on("child_removed", function() {
	table.row(filaEliminada.parents('tr')).remove().draw();                     
});

//Botones

$("#tablaProductos").on("click", ".btnBorrar", function() {   
	filaEliminada = $(this);
	Swal.fire({
	title: 'Apakah Anda yakin ingin menghapus data ini?',
	text: "Data yang sudah dihapus tidak dapat dikembalikan!",
	icon: 'warning',
	showCancelButton: true,
	confirmButtonColor: '#d33',
	cancelButtonColor: '#3085d6',
	confirmButtonText: 'Yes'
	}).then((result) => {
	if (result.value) {
		let fila = $('#tablaProductos').dataTable().fnGetData($(this).closest('tr'));            
		let id = fila[0];            
		db.ref(`Data/${id}`).remove()
		Swal.fire('Sukses', 'Data telah berhasil dihapus.','success')
	}
	})        
});  

});