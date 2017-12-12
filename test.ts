basic.forever(() => {
    let p = hx711.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})
