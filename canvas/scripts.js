const ctx = document.getElementById('ex1').getContext('2d');    
const centroX = 600;
const centroY = 300;
const orbt_sz = 250;        
const orbl_sz = 34;
const orbl_s = 50; 
const orbl_z = 70;          
const sol_sz = 50;         
const lua_sz = 10; 
const lua_s = 5;
const lua_z = 10;          
const terra_sz = 17;        
const tau = 2 * Math.PI;    
const t_terra = 20;        
const t_lua = 1;            

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();

function init() {
    sol.arc(0,0,sol_sz,0,6.29,false);
    lua.arc(10,0,lua_sz,0,6.29,true);
     lua.arc(10,0,lua_sz,0,6.29,true);
    terra.arc(0,0,terra_sz,0,6.29,false);
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.fillRect(0, 0, 1200, 600);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.save();

        ctx.translate(centroX, centroY);   
        
        const time = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(250, 0);     

        ctx.fillStyle = '#7cf';
        ctx.fill(terra); 

            ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_sz);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
            ctx.restore();

            ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_s);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
            ctx.restore();

            ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_z);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
            ctx.restore();

        ctx.fillStyle = '#0004';
        ctx.fillRect(0, -terra_sz, orbl_sz+lua_sz, terra_sz*2);
        
        ctx.beginPath();
        ctx.arc(0, 0, orbl_sz, 0, tau, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, orbl_s, 0, tau, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, orbl_z, 0, tau, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();

    ctx.restore();  

    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'orange';
        ctx.fill(sol);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fd2';
        ctx.stroke(sol);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();
