function Timer(){
    function getMinutes(seconds){
        const data = new Date(seconds *1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('#timer');
    let seconds = 0;
    let timer;
    
    function StartTimer(){
        timer = setInterval(function(){
            seconds++;
            relogio.innerHTML = getMinutes(seconds)
        },1000);
    }
    
    document.addEventListener('click', function(event){
        let element = event.target;
    
        if(element.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            seconds = 0;
            
        }
    
        if(element.classList.contains('iniciar')){
            clearInterval(timer)
            StartTimer()
        }
    
        if(element.classList.contains('pausar')){
            clearInterval(timer);
        }
    })
    
}

Timer();

