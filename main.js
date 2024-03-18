let des = document.getElementById('des').getContext('2d')

let bg1 = new BG(0,0,500,700,'./assets/background.jpg')
let bg2 = new BG(0,-700,500,700,'./assets/background2.jpg')
let bg3 = new BG(0,-1400,500,700,'./assets/background.jpg')
let bg4 = new BG(0,-2100,500,700,'./assets/background2.jpg')
let nav1 = new Nave(400,500,50,70,'./assets/nave.png')
let enemy1 = new Disco(10, 10, 50, 50)
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
let discos = {
    time1: 0, 
    time2: 0,
    time3: 0,

    criaDisco(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=60){
            this.time1 = 0
            grupoDiscos.push(new Disco(pos_x,-200,50,50,'assets/disco.png'))
            console.log(grupoDiscos)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoDiscos.push(new Disco(pos_x2,-300,50,50,'assets/disco2.png'))
            console.log(grupoDiscos)
        }

        if(this.time3 >=135){
            this.time3 = 0
            grupoDiscos.push(new Disco(pos_x3,-400,50,50,'assets/disco3.png'))
            console.log(grupoDiscos)
        }
    },
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
                    podeAtirar = true
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
//   bg1.des_obj();
//   bg2.des_obj();
//   bg3.des_obj();
//   bg4.des_obj(); 
  tiros.des();
  discos.des();

  nav1.des_obj();  

  txt_pts.des_text('Pontos:',20,40,'white','30px Times');
  pts.des_text(nav1.pts,120,40,'white','30px Times');
  txt_vidas.des_text('Vidas:',380,40,'white','30px Times');
  n_vidas.des_text(nav1.vida,460,40,'white','30px Times');
}

function atualiza(){
    tiros.atual()
    // discos.atual()
    nav1.mov()
    colisao()    
}

function main(){
    des.clearRect(0,0,580,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()