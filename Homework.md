<!-- Double linked list -->

დავალება: მუსიკალური პლეილისტის მენეჯერი

პრობლემის აღწერა:
თქვენ უნდა შექმნათ მუსიკალური პლეილისტის მენეჯერი, რომელიც იყენებს ორმაგად ბმულ სიას (Doubly Linked List) იმისთვის, რომ დაიმახსოვროს სიმღერები და მათი თანმიმდევრობა. პლეილისტის მენეჯერმა უნდა მოახერხოს შემდეგი ფუნქციონალის რეალიზება:
სიმღერის დამატება (Add Song): დაამატეთ ახალი სიმღერა პლეილისტში;
სიმღერის წაშლა (Remove Song): წაშალეთ სიმღერა პლეილისტიდან მისი სახელის მიხედვით;
წინა სიმღერაზე გადასვლა (Previous Song): გადადით წინა სიმღერაზე პლეილისტში;
შემდეგ სიმღერაზე გადასვლა (Next Song): გადადით შემდეგ სიმღერაზე პლეილისტში;
პლეილისტის დაბეჭდვა (Print Playlist): დაბეჭდეთ მთელი პლეილისტი თანმიმდევრობით;
პლეილისტის შებრუნება (Reverse Playlist): შეცვალეთ პლეილისტის თანმიმდევრობა საპირისპიროდ.

მოთხოვნები:
შექმენით კლასი Node, რომელიც წარმოადგენს ერთ სიმღერას პლეილისტში. თითოეულ Node-ს უნდა ჰქონდეს data (სიმღერის სახელი), prev (წინა სიმღერა) და next (შემდეგი სიმღერა);
შექმენით კლასი Playlist, რომელიც იყენებს Node-ებს ორმაგად ბმული სიის შესაქმნელად.

მეთოდები:
addSong(song): დაამატეთ ახალი სიმღერა პლეილისტის ბოლოში;
removeSong(song): წაშალეთ სიმღერა პლეილისტიდან მისი სახელის მიხედვით;
previousSong(): გადადით წინა სიმღერაზე პლეილისტში;
nextSong(): გადადით შემდეგ სიმღერაზე პლეილისტში;
printPlaylist(): დაბეჭდეთ მთელი პლეილისტი თანმიმდევრობით;
reversePlaylist(): შეცვალეთ პლეილისტის თანმიმდევრობა საპირისპიროდ.

კომპლექსურობა:
დარწმუნდით, რომ ყველა მეთოდი მუშაობს O(1) ან O(n) დროში, სადაც n არის პლეილისტის სიგრძე.
გაითვალისწინეთ კიდეების შემთხვევები, როგორიცაა ცარიელი პლეილისტი, პირველი ან ბოლო სიმღერაზე მისვლა და ა.შ.

მაგალითი:
const playlist = new Playlist();
playlist.addSong("Song 1");
playlist.addSong("Song 2");
playlist.addSong("Song 3");
playlist.printPlaylist(); <!-- "Song 1 -> Song 2 -> Song 3" -->
playlist.nextSong(); <!-- გადადის "Song 2"-ზე -->
playlist.nextSong(); <!-- გადადის "Song 3"-ზე -->
playlist.previousSong(); <!-- დაბრუნდება "Song 2"-ზე -->
playlist.removeSong("Song 2");
playlist.printPlaylist(); <!-- "Song 1 -> Song 3" -->
playlist.reversePlaylist();
playlist.printPlaylist(); <!-- "Song 3 -> Song 1" -->
