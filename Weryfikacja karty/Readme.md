Projekt praktyczny “Weryfikacja karty”


Wprowadzenie:

Każda karta płatnicza posiada swój unikalny numer. Banki mają bazy danych wszystkich numerów kart,
ale ich odpytywanie jest wyjątkowo czasochłonne. Jednocześnie internet roi się od literówek i oszustów.
Dlatego banki potrzebują Twojego algorytmu, który pozwoli zweryfikować numer karty w przeglądarce.

Numer karty wydanej przez wybranego dostawce zawsze ma określoną długość,:

- Mastercard: 16 cyfr.

- Visa: 13 lub 16 cyfr.

- American Express: 15 cyfr.

Numery te zaczynają się od zdefiniowanej puli liczb:

- Mastercard: 51, 52, 53, 54, 55

- Visa: 4

- American Express: 34, 37

Ponadto, numer karty, niezależnie od dostawcy, należy zweryfikować za pomocą algorytmu Luhna:

1. Zaczynając od przedostatniej liczby, pomnóż przez dwa każdą cyfrę o nieparzystym indeksie. Rozbij
otrzymane liczby na sumę ich cyfr (np. 18 -> 1 + 8), następnie zsumuj wszystkie te cyfry ze sobą.

2. Dodaj otrzymaną sumę do sumy cyfr, których nie pomnożyłeś przez dwa.

3. Jeżeli modulo 10 otrzymanej liczby jest równe 0, numer karty jest prawidłowy.

Przykład:

Algorytm weryfikacji na przykładzie karty Marcina :

1. 1 3 8 1 0 5 1 1 -> 1*2 + 4*2 + 9*2 + 5*2 + 0*2 + 0*2 + 9*2 + 5*2 =

2 + 8 + 18 + 10 + 0 + 0+ 18 + 10 -> 2 + 8 +1 + 8 + 1 + 0 + 0 + 0 + 1 + 8 + 1 + 0 =
2. 1 + 1 + 5 + 0 + 1 + 8 + 3 + 1 = 20 + 30 =
3. 50 % 10 = 0 -> Karta Marcina ma poprawny numer. Wydał ją Mastercard



Projekt praktyczny “Weryfikacja karty”

https://przeprogramowani.pl
Dokument jest częścią kursu “Opanuj JavaScript Premium”.

Opis zadania:

Stwórz moduł eksportujący z pomocą ES6 Modules funkcję checkCardNumber. Jako parametr funkcja
przyjmuje numer karty będący liczbą, a następnie zwraca nazwę dostawcy karty bądź “Nieprawidłowy”.


Wymagania:

Po ukończeniu, funkcja ma spełniać następujące wymagania:

1. Wyjściem funkcji musi być ciąg znaków: “Mastercard”, “Visa”, “American Express” lub
“Nieprawidłowy”.

2. Funkcja zakłada, że inputem jest liczba. Nie bierze pod uwagę myślników bądź spacji w numerze karty.

3. Funkcja zwraca właściwy wynik dla kart z listy Paypala dostępnej pod: przeprogramowani.pl/paypal.


Utknąłeś? Sprawdź wskazówki na kolejnej stronie

Projekt praktyczny “Weryfikacja karty”

https://przeprogramowani.pl
Dokument jest częścią kursu “Opanuj JavaScript Premium”.

Wskazówki:

1. Wypisz wszystkie warunki weryfikacji z “Wprowadzenie” na kartce.

2. Rozbij pierwszy krok algorytmu Luhna na trzy mniejsze kroki.

3. Napisz na początku dwie osobne funkcje: pierwszą weryfikującą dostawcę i drugą poprawność numeru
zgodnie z algorytmem Luhna.