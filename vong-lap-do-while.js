let value = null;
do {
    value = prompt('mhap so tu 1 den 10');
} while (value < 0 || value > 10);
alert('so ban vua nhap là ' + value)