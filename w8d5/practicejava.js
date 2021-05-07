

class Clock { 
    constructor() {
        
        // 1. Create a Date object.
        const dateObj = new Date()  
        
        // 2. Store the hours, minutes, and seconds.
        this.hours = dateObj.getHours();
        this.minutes = dateObj.getMinutes();
        this.seconds = dateObj.getSeconds();
        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick, 1000)
        
    }

    printTime() {
        // Format the time in HH:MM:SS

        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        this._incSec();
        
        // 2. Call printTime.
        this.printTime();
    }

    _incSec() {
       this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incMin();
        }
    }

    _incMin() {
        this.minutes++;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incHour();
        }
    }

    _incHour() {
        this.hours++;
        if (this.hours === 24) {
            this.hours = 0;
        }
    }
    // Clock.prototype._tick <-- cb
}

const clock = new Clock();