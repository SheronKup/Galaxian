let des = document.getElementById('des').getContext('2d')

let nav1 = new Nave(400,500,28,29,'./assets/nave-1.png')

let enemy1 = new Disco1(300, 100, 30, 30,'./assets/0.png')
let enemy2 = new Disco1(200, 200, 30, 30,'./assets/0.png')

// let enemy3 = new Disco1(60, 10, 30, 30,'./assets/bixo.png')
// let enemy4 = new Disco1(100, 10, 30, 30,'./assets/bixo.png')
// let enemy5 = new Disco1(140, 10, 30, 30,'./assets/bixo.png')
// let enemy6 = new Disco1(180, 10, 30, 30,'./assets/bixo.png')
// let enemy7 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy8 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy9 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy10 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy11 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy12 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy13 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy14 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy15 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy16 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy17 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy18 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy19 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')
// let enemy20 = new Disco1(10, 10, 50, 50,'./assets/bixo.png')

// let alien1 = new Disco2(110, 10, 50, 50,'./assets/bixo.png')
// let alien2 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien3 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien4 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien5 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien6 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien7 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')
// let alien8 = new Disco2(10, 10, 50, 50,'./assets/bixo.png')

// let hex1 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')
// let hex2 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')
// let hex3 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')
// let hex4 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')
// let hex5 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')
// let hex6 = new Disco3(10, 10, 50, 50,'./assets/bixo.png')

// let quadra1 = new Disco4(10, 10, 50, 50,'./assets/bixo.png')
// let quadra2 = new Disco4(10, 10, 50, 50,'./assets/bixo.png')
// let quadra3 = new Disco4(10, 10, 50, 50,'./assets/bixo.png')
// let quadra4 = new Disco4(10, 10, 50, 50,'./assets/bixo.png')

// let duo1 = new Disco5(10, 10, 50, 50,'./assets/bixo.png')
// let duo2 = new Disco5(10, 10, 50, 50,'./assets/bixo.png')

let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
const som1 = new Audio('assets/nave_som.mp3')
const som2 = new Audio('assets/batida.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7



let grupoTiros = [] 
let tiros = {
    des(){
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })

        
    },
    atual(){
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -10){
                grupoTiros.splice(tiro[0],1)
            }
            grupoDiscos.forEach((disc) => {
            if(tiro.colid(disc)){
                // Check if bullet's right side is greater than or equal to enemy's left side
                // AND bullet's left side is less than or equal to enemy's right side
                const isCollidingX = tiro.x + tiro.w >= 
                                     disc.x && tiro.x <= 
                                     disc.x + disc.w;
                // Check if bullet's bottom side is greater than or equal to enemy's top side
                // AND bullet's top side is less than or equal to enemy's bottom side
                const isCollidingY = tiro.y + tiro.h >= 
                                     disc.y && tiro.y <= 
                                     disc.y + disc.h;
                // Return true if both X and Y conditions are met (collision)
                return isCollidingX && isCollidingY;
                }})
        })
    }
}

document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'a'){
        nav1.isLeftPressed = true
    }else if(ev.key === 'd'){
        nav1.isRightPressed = true
    }else if(ev.key === 'ArrowLeft'){
        nav1.isLeftPressed = true
    }else if(ev.key === 'ArrowRight'){
        nav1.isRightPressed = true
    }   
})
document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'a'){
        nav1.isLeftPressed = false
    }else if(ev.key === 'd'){
        nav1.isRightPressed = false
    }else if(ev.key === 'ArrowLeft'){
        nav1.isLeftPressed = false
    }else if(ev.key === 'ArrowRight'){
        nav1.isRightPressed = false
    }
})

let podeAtirar = true;

document.addEventListener('keypress', (ev) => {
  if (ev.key === ' ' && podeAtirar) {
    podeAtirar = false; // Desabilita o disparo
    grupoTiros.push(new Tiro(nav1.x - 4 + nav1.w / 2, nav1.y, 8, 16, 'red'));
    setTimeout(() => { podeAtirar = true; }, 1000);
  }
});

let grupoDiscos = []
grupoDiscos.push(enemy1)
console.log(grupoDiscos)

let discos = {

    des() {
        grupoDiscos.forEach((disc) => {
            if (typeof disc.des_obj === 'function') {
                disc.des_obj();
            }
        });
    },
    destroiDisco() {
        for (let i = grupoDiscos.length - 1; i >= 0; i--) {
            const disc = grupoDiscos[i];
            for (let j = grupoTiros.length - 1; j >= 0; j--) {
                const tiro = grupoTiros[j];
                if (tiro.colid(disc)) {
                    grupoTiros.splice(j, 1);
                    grupoDiscos.splice(i, 1);
                    nav1.pts += 1;
                }
            }
        }
    },

    atual(){
        this.destroiDisco()
        grupoDiscos.forEach((disc)=>{
            disc.mov()
            if(disc.y >= 710){
                grupoDiscos.splice(grupoDiscos.indexOf(disc),1)
            }
        })
    }
}   

function colisao(){
    grupoDiscos.forEach((disc)=>{
        if(nav1.colid(disc)){
            grupoDiscos.splice(grupoDiscos.indexOf(disc), 1)
            nav1.vida -=1
        }
    })
}

function desenha(){    
    tiros.des();
    discos.des();
    enemy1.des_obj();
    enemy2.des_obj();
//  enemy3.des_obj();
//  enemy4.des_obj();
//  enemy5.des_obj();
//  enemy6.des_obj();
    nav1.des_obj();

  txt_pts.des_text('Pontos:',245,40,'white','26px Times');
  pts.des_text(nav1.pts,277,70,'white','26px Times');
  txt_vidas.des_text('Vidas:',10,600,'white','26px Times');
  n_vidas.des_text(nav1.vida,85,600,'white','26px Times');
}

function atualiza(){
    tiros.atual()
    colisao();
    enemy1.mov();
    enemy2.mov();
    nav1.mov();
    nav1.anim('nave-');
}

function main(){
    des.clearRect(0,0,580,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()