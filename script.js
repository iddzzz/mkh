const button = document.querySelector('.submit button');
const bgModal = document.querySelector('.bgModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal span');
const nama = document.getElementById('nama');
const nomor = document.getElementById('no');
const pengingatNama = document.getElementsByTagName('p')[0];
const pengingatNomor = document.getElementsByTagName('p')[1];
const check = document.getElementById('check')
const pengingatCheck = document.getElementsByTagName('p')[2];

button.addEventListener('click',function(){
    if (nama.value == ''){
        nama.style.borderColor = 'red';
        pengingatNama.textContent = 'Nama Wajib Diisi';
        pengingatNama.style.color = 'red';
        setTimeout(function(){
            nama.style.borderColor = 'rgb(172, 169, 169)'
            pengingatNama.textContent = '';
        }, 2000)
        return
    } 
    if (nomor.value == ''){
        nomor.style.borderColor = 'red';
        pengingatNomor.textContent = 'Nomor AIMS Wajib Diisi';
        pengingatNomor.style.color = 'red';
        setTimeout(function(){
            nomor.style.borderColor = 'rgb(172, 169, 169)'
            pengingatNomor.textContent = '';
        }, 2000)
        return
    }
    if (!check.checked ){
        pengingatCheck.textContent = 'Mohon centang pernyataan ini';
        pengingatCheck.style.color = 'red';
        setTimeout(function(){
            pengingatCheck.textContent = '';
            pengingatCheck.style.color = 'rgb(172, 169, 169)'
        },2000)
        return
    }
    let data_elements = document.getElementsByClassName("form-data")
    
    let form_data = new FormData()
    for (let index = 0; index < data_elements.length; index++) {
        form_data.append(data_elements[index].name, data_elements[index].value)
    }
    const ajax = new XMLHttpRequest();
    ajax.open('POST', "https://script.google.com/macros/s/AKfycbz0NxLiAcTmoHvFRpKo48aYCNi-v3-PM31YIO14KTCNvJArhXsTf-qDR1h_pgKumgcG/exec")
    ajax.send(form_data)
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            bgModal.classList.add('active');
            modal.style.animation = 'muncul 0.5s';
        } else {
            alert('Periksa Koneksi Anda')
        }
    }



    // ajax.open("POST", url('https://script.google.com/macros/s/AKfycbz0NxLiAcTmoHvFRpKo48aYCNi-v3-PM31YIO14KTCNvJArhXsTf-qDR1h_pgKumgcG/exec'));
    // ajax.send();
});

closeModal.addEventListener('click',function(){
    
    bgModal.classList.remove('active');
    modal.style.animation = '';
    document.querySelector('form').reset();
});
