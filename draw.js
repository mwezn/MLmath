function f(x) {
    return x * 1.2 + 50;
}

function XYPlotter(id) {

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.xMin = 0;
    this.yMin = 0;
    this.canvas.width=1000;
    this.canvas.height=500;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;
    this.drawing= true;
    
    // Plot Line Function
    this.plotLine = function(x0, y0, x, y, color) {
      this.ctx.moveTo(x0, y0);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }

    this.startLine= function(x0,y0){
        this.ctx.moveTo(x0,y0)
    }

    this.drawLine = function(x0, y0, x, y, color) {
        if (this.drawing){
           this.ctx.moveTo(x0, y0);
           this.ctx.lineTo(x, y);
           this.ctx.strokeStyle = color;
           this.ctx.stroke();
        }
        else {
           this.ctx.moveTo(x0, y0);
           this.ctx.lineTo(x, y);
           this.ctx.strokeStyle = 'white';
           this.ctx.stroke()
        }
        
    }
    
    // Transform XY Function
    this.transformXY = function() {
      this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height)
    }
    
    
    
    this.plotLine(0,0,this.canvas.width,this.canvas.height,'black')
    this.plotLine(0,f(0),this.canvas.width,f(this.canvas.width),'blue')
    //this.transformXY()
    } // End Plotter Object 
    let myPlotter = new XYPlotter("grid");
    
    
    console.log(myPlotter)
    let visits=[]
    let handleMousemove = (event) => {
        let n =visits.length;
        
        console.log(myPlotter)
        visits.push({'x':event.x,'y':event.y})
        
        if (n<1){
            myPlotter.startLine(event.x,event.y)
        }
        else {
            myPlotter.drawLine(visits[n-1].x,visits[n-1].y,event.x,event.y,'black')
        }
        console.log(n)
        console.log(`mouse position: ${event.x}:${event.y}`);
        console.log(visits[n-1])
        console.log(visits)
        
    };
    
    document.addEventListener('mousemove',(e)=> handleMousemove(e));
    /*document.addEventListener('mousedown',()=>{
        myPlotter.drawing=!myPlotter.drawing
    })*/
    
