class Obj {
    constructor(x,y,w,h,at){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.at = at
        this.image = new Image();
        this.image.src = at;
    }

    des_obj(){
            if (!this.image.complete) {
                return
            }
        des.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    colid(objeto) {
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }
    }
}

class Nave extends Obj{
    dir = 0
    pts = 0
    vida = 5

    speed = 6
    isLeftPressed = false
    isRightPressed = false

    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    anim(nome){
        this.time += 1
        if(this.time > 12){
            this.time = 0
            this.frame += 1
        }
        if(this.frame > 4){
            this.frame = 1
        }
        this.a = "assets/" + nome + '-' + this.frame + ".png"
    }

    mov(){
        this.dir = (this.isLeftPressed ? -1 : 0) + (this.isRightPressed ? 1 : 0);
        this.x += this.dir * this.speed;
        
        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 530){
            this.x = 530
        }
    }
    
}

class Disco1 extends Obj{
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    vel = Math.random() * (6 - 3) + 3

    mov(){
        
        this.x += this.vel
        
        if(this.x >= 530){
            this.x = 530
        }
    }

    
}
class Disco2 extends Obj{
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
    // vel = Math.random() * (6 - 3) + 3

    // mov(){
    //     this.y += this.vel
    // }
    
}
class Disco3 extends Obj{
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
    // vel = Math.random() * (6 - 3) + 3

    // mov(){
    //     this.y += this.vel
    // }
    
}
class Disco4 extends Obj{
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
    // vel = Math.random() * (6 - 3) + 3

    // mov(){
    //     this.y += this.vel
    // }
    
}
class Disco5 extends Obj{
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
    // vel = Math.random() * (6 - 3) + 3

    // mov(){
    //     this.y += this.vel
    // }
}

class Tiro extends Obj{
    des_tiro(){
        des.fillStyle = this.at
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    mov() {
        this.y -= 10;
        if (this.y <= -10) {
          this.podeAtirar = true; // Habilita o disparo quando o tiro sai da tela
        }
      }
    }

class BG extends Obj{

    mov(ini,lim){
        this.y +=2
        if(this.y > lim){
            this.y = ini
        }
    }
}

class Texto{
    des_text(texto,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(texto,x,y)
    }
}