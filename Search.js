      const lyrics ="Tumi bonduhu kala pakhi, bosonto kale bolte pari ni , kaka pakhi ,bosonto."
       const doesExist = lyrics.includes("pakhi")
      //.....console.log(doesExist);

     const serchStering = 'PaKhi';
     const lyricsLowercasee = lyrics.toLowerCase();
     const doesExist1 = lyrics.toLowerCase().includes(serchStering.toLowerCase());

      console.log(doesExist1);

      //...........indexOf....

      console.log(lyrics.indexOf("kala"));
      console.log(lyrics.indexOf("2mi"));

      if (lyrics.indexOf("kaku") !== -1) {
            console.log('kalu Exist');
      }
      else{
            console.log('kalu not Exist');
      }
      //.......Startwith .....

      console.log(lyrics.startsWith('tumi'));
      console.log(lyrics.startsWith('Tumi'));

      //.....endwith.........

      const fileName = "mybiodata.pdf";
      const otherFile = "myNayokPik.png";

      console.log(fileName.endsWith(".png"));
      console.log(otherFile.endsWith("png"));
    
    
