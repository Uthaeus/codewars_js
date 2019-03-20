

function getStatus(isBusy) {
    this.msg = (isBusy ? "busy" : "available");
    this.status = function() {
        return this.msg 
    }
}


console.log(getStatus(true).status); //, "busy")