// events -> 

function Emitter(){
    this.events = {}
}


// [cb1 , cb2, cb3]
Emitter.prototype.on = function(type,eventListner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(eventListner);
}

// Emitter.prototype.emit ={}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listner => {
            listner();
        });
    }
}


module.exports = Emitter;