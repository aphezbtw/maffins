let onlynums = document.querySelector('#onlynums');
let reg = /[A-Za-zА-Яа-яЁё]/g;
onlynums.oninput = function() {
    this.value = this.value.replace(reg, '');
}
