  console.log("ASAL")

  function asal(...number) {

      for (let i = 0; i < number.length; i++) {
          let check = 0;
          for (let j = 2; j < number[i]; j++) {
              if (number[i] % j == 0) {
                  check = 1;
                  break;
              }
          }
          if (check == 0) {
              console.log(number[i] + " Asal sayidir")
          } else {
              console.log(number[i] + " Asal sayi degildir")
          }
      }
  }

  asal(2, 5, 9, 8, 10, 3, 12, 31, 111)


  //1 asal sayi degil ama 1 i asal goruyor bunu nasil duzeltecegimi bilmiyorum??