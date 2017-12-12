basic.forever(() => {
    let p = hx711.ping(DigitalPin.P1, DigitalPin.P2, SensorUnit.Inches);
    led.plotBarGraph(p, 0);
})
