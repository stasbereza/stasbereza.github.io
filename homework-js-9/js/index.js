"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const stopWatch = document.querySelector('.stopwatch');
  const laps = document.querySelector('.js-laps');

  stopWatch.innerHTML = createWatch();

  function createWatch() {
    const watch = `                                                                                                                                                                       
      <p class="time js-time">00:00.0</p>
      <button class="btn js-start">Start</button>
      <button class="btn js-take-lap">Lap</button>
      <button class="btn js-reset">Reset</button>
    `;
  
      return watch;
  }

  const timer = document.querySelector('.js-time');
  const btnStart = document.querySelector('.js-start');
  const btnReset = document.querySelector('.js-reset');
  const btnLap = document.querySelector('.js-take-lap'); 

  class Stopwatch {
    constructor({ 
      onTick = () => null, 
      onLap = () => null,
      onPush = () => null, 
    }) 
    {
      this.startTime = null;
      this.deltaTime = null;
      this.pauseTime = null;
      this.id = null;
      this.isActive = false;
      this.onTick = onTick;
      this.onPush = onPush;
      this.onLap = onLap;
      this.laps = [];
    }
    
    start() {
      if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now() - this.pauseTime;
      this.id = setInterval(() => {
        let currentTime = Date.now();

        this.deltaTime = currentTime - this.startTime;

        const time = new Date(this.deltaTime);

        this.onTick(time);
      }, 100);
      btnStart.textContent = 'Pause';
      btnReset.classList.remove('active'); 
      btnLap.classList.remove('active');
      btnStart.classList.add('active');    
      } else {
        this.isActive = false;
        clearInterval(this.id);
        this.pauseTime = this.deltaTime;
        btnStart.textContent = 'Continue';
        btnReset.classList.remove('active'); 
        btnLap.classList.remove('active');
        btnStart.classList.add('active');
      }
    }

    reset() {
      this.isActive = false;
      clearInterval(this.id);
      this.id = null;
      this.startTime = null;
      this.deltaTime = null;
      this.pauseTime = null;
      this.onTick(this.startTime);
      this.laps = [];
      laps.textContent = null;
      btnStart.textContent = 'Start';
      btnStart.classList.remove('active');
      btnLap.classList.remove('active');
      btnReset.classList.add('active'); 
    }

    lap() {
      const lapTime = this.onPush(this.deltaTime);
      this.laps.push(lapTime);
      console.log(this.laps);
      this.onLap(lapTime);
      btnStart.classList.remove('active');
      btnReset.classList.remove('active');
      btnLap.classList.add('active'); 
    }
  }
  
  const stopwatch = new Stopwatch({
    onTick: updateTime,
    onPush: getFormattedTime,
    onLap: updateLaps,
  });

  btnStart.addEventListener('click', stopwatch.start.bind(stopwatch));
  btnReset.addEventListener('click', stopwatch.reset.bind(stopwatch));
  btnLap.addEventListener('click', stopwatch.lap.bind(stopwatch));

  function updateTime(time) {
    timer.textContent = getFormattedTime(time);
  }

  function getFormattedTime(time) {
    time = new Date(time);
    
    let minutes = time.getMinutes(); 
    let seconds = time.getSeconds();
    let milliseconds = Number.parseInt(time.getMilliseconds() / 100);
    
    minutes = minutes < 10 ? '0' + time.getMinutes() : minutes;
    seconds = seconds < 10 ? '0' + time.getSeconds() : seconds;
    
    return `${minutes}:${seconds}.${milliseconds}`;
  }

  function createLap(time) {
    const lap = `                                                                                                                                                                       
    <li class="lap js-lap">"${time}",</li>
    `;
  
      return lap;
  }

  function updateLaps(time) {
    laps.innerHTML += createLap(time);
  } 
});