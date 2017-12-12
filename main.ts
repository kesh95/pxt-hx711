enum SensorUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace hx711 {
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param SCK tigger pin
     * @param DT echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="ping trig %trig|echo %echo|unit %unit"
    export function ping(SCK: DigitalPin, DT: DigitalPin, unit: SensorUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(SCK, PinPullMode.PullNone);
        pins.digitalWritePin(SCK, 0);
        control.waitMicros(2);
        pins.digitalWritePin(SCK, 1);
        control.waitMicros(10);
        pins.digitalWritePin(SCK, 0);

        // read pulse
        const d = pins.pulseIn(DT, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case SensorUnit.Centimeters: return d / 58;
            case SensorUnit.Inches: return d / 148;
            default: return d ;
        }
    }
}
