# Pada Permasalahan Mencari Koin Palsu pada kumpulan Koin

1. Cara I: Membandingkan 1 per 1.

Kita bakal menemukan koin yang palsu dengan cara paling lama itu sebanyak kumpulan koin.

Best Case: Ketika koin yang palsu berada pada urutan kedua / pertama pengambilan.

Worst Case: ketika koin yang palsu berada pada urutan terakhir pengambilan.

Linear, misal koin kita ada N maka cara kita juga ada N.

O(n)

2. Cara II: Membagi kelompok koin menjadi 2 bagian yang sama.

Kita bakal menemukan koin lebih cepat dibanding cara II.

Best Case, Worst Case: Tidak ada, karna kita selama pembagian terdapat lebih dari 1 koin sehingga tidak bisa membuat keputusan hingga koin pada satu bagian hanya tersisa 1.

Average Case: Ada, yaitu sebanyak `log base 2 of N`. N adalah banyak koin.

Logaritmic, pertumbuhan jumlah koin lebih cepat dibanding jumlah cara.

O(log n)
