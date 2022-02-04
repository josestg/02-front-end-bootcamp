# Menemukan bilangan terbesar dari kumpulan bilangan

contoh:

numbers : 1 , 5 , 7 , 0 , 3 , 7 , 19 , 1 , 1 , 1 , 1 , 20 , 14 , 15
position: 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 , 10 , 11 , 12

maximum = 20

1. Kunjungi setiap angka dari paling kiri ke paling kanan
2. Anggaplah angka pertama yang ditemukan adalah bilangan maximum.
3. Ketika mengunjungi angka berikutnya banding apakah angka maximum saat ini
   lebih besar dari angka yang kita kunjungi saat ini.
4. Jika tidak, maka ganti angka maximum saat ini dengan yang lebih besar.
5. Jika ya, maka lanjut ke angka berikutnya.
6. Ulangi dari step 3 sampai setiap angka berhasil dikunjungi.
7. Proses selesai, bilangan terbesar ada di 'maximum'.

catatan: integer = bilangan bulat

```bash
BEGIN
DECLARE `numbers` as collection of interger.
DECLARE `current_position` as integer with value `0`.
DECLARE `maximum` as interger without value.

IF `current_position` is equal to `0` DO
    SET `maximum` with `numbers` at position `current_position`

WHILE `current_possition` <= MAX OF `position` of `numbers`
    IF `numbers` at position `current_position` > `maximum` DO
        SET `maximum` with `numbers` at position `current_position`
        ADD `current_possition` by `1`
    ELSE
        ADD `current_possition` by `1`
        CONTINUE NEXT `position`


DISPLAY `maximum`
END
```
