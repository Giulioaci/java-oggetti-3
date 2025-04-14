let bowling = {
    giocatori: [
        { name: `Giulio`, scores: []},
        { name: `Carlo`, scores: []},
        { name: `Guido`, scores: []},
    ],

    CreaPunteggio: function(){
      this.giocatori.forEach(giocatore => {
        for (let i = 1; i <=10; i++) {
           giocatore.scores.push(Math.floor(Math.random()*(10 - 1 + 1) + 1))
        }
        
        
      })
    },

    NuovoGiocatore: function(nome){
       let newplayer = {name: nome, scores: []}
       for (let i = 1; i <=10; i++) {
        newplayer.scores.push(Math.floor(Math.random()*(10 - 1 + 1) + 1))
       }
       this.giocatori.push(newplayer)
       
       
    },

    PunteggioFinale: function(){
        this.giocatori.forEach(giocatore =>{
            let tot =giocatore.scores.reduce((acc,num)=> acc + num)
            giocatore.totale = tot
            
            
        })
        this.giocatori.sort((a,b)=> b.totale - a.totale)
    },

    Vincitore: function(){
        let winner = this.giocatori[0]
            console.log(`il vincitore è ${winner.name} con punti ${winner.totale}`);
            
        
    },

    Classifica: function(){
        console.log(`classifica finale:`);
        this.giocatori.forEach(giocatore => {
            console.log(`${giocatore.name} con punti ${giocatore.totale}`);
            
        })
        
    }



}

bowling.CreaPunteggio()
bowling.NuovoGiocatore(`Marco`)
bowling.PunteggioFinale()
bowling.Vincitore()
bowling.Classifica()