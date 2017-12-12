basic.forever(() => {
    let p = hx711.sensor(DigitalPin.P0, DigitalPin.P1, SensorUnit.grams);
    led.plotBarGraph(p,0);
})

