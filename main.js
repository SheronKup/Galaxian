let des = document.getElementById('des').getContext('2d')

let nav1 = new Nave(400,500,28,29,'./assets/nave-1.png')

let enemy1 = new Disco1(300, 100, 30, 30,'./assets/0.png')
// let enemy2 = new Disco1(20, 10, 30, 30,'./assets/bixo.png')
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
        })
    }
}

const tiro = document.getElementById('tiros');
const inimigo = document.getElementById('enemy1');

function detectarColisao() {
  const posicaoTiro = tiro.getBoundingClientRect();
  const posicaoInimigo = inimigo.getBoundingClientRect();

  if (posicaoTiro.left < posicaoInimigo.right &&
    posicaoTiro.right > posicaoInimigo.left &&
    posicaoTiro.top < posicaoInimigo.bottom &&
    posicaoTiro.bottom > posicaoInimigo.top) {
    inimigo.parentNode.removeChild(inimigo);
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
    setTimeout(() => { podeAtirar = true; }, 1000); // Habilita o disparo após 500ms
  }
});

let grupoDiscos = []
grupoDiscos.push(enemy1)
let discos = {
    time1: 0, 
    time2: 0,
    time3: 0,
    time4: 0,

    

    // criaDisco(){
    //     this.time1 += 1
    //     this.time2 += 1
    //     this.time3 += 1
    //     this.time4 += 1
    //     let pos_x = (Math.random() * (438 - 2 +1)+2)
    //     let pos_x2 = (Math.random() * (438 - 2 +1)+2)
    //     let pos_x3 = (Math.random() * (438 - 2 +1)+2)
    //     let pos_x4 = (Math.random() * (438 - 2 +1)+2)
    //     if(this.time1 >=60){
    //         this.time1 = 0
    //         grupoDiscos.push(new Disco(pos_x,-200,50,50,'assets/disco.png'))
    //         console.log(grupoDiscos)
    //     }
    //     if(this.time2 >=85){
    //         this.time2 = 0
    //         grupoDiscos.push(new Disco(pos_x2,-300,50,50,'assets/disco2.png'))
    //         console.log(grupoDiscos)
    //     }

    //     if(this.time3 >=135){
    //         this.time3 = 0
    //         grupoDiscos.push(new Disco(pos_x3,-400,50,50,'assets/disco3.png'))
    //         console.log(grupoDiscos)
    //     }
    //     if(this.time4 >=135){
    //         this.time = 0
    //         grupoDiscos.push(new Disco(pos_x3,-400,50,50,'assets/disco3.png'))
    //         console.log(grupoDiscos)
    //     }
    // },
    des(){
        grupoDiscos.forEach((disc)=>{
            disc.des_obj()
        })
    },
    destroiDisco(){
        grupoTiros.forEach((tiro)=>{
            grupoDiscos.forEach((disc)=>{
                if(tiro.colid(disc)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoDiscos.splice(grupoDiscos.indexOf(disc), 1)
                    nav1.pts +=1
                }
            })
        })
    },
    atual(){
        this.criaDisco()
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
//  enemy2.des_obj();
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
    enemy1.mov();
    nav1.mov();
    nav1.anim('nave-');
    colisao();
    // detectarColisao();
}

function main(){
    des.clearRect(0,0,580,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()