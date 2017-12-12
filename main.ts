enum SensorUnit{
    Killograms,
    grams,
    milligrams,
}

namespace hx711{
    
    export function sensor(sck: DigitalPin, dt: DigitalPin, Unit: SensorUnit): number{
        pins.digitalWritePin(sck, 1);
        control.waitMicros(1000);
        pins.digitalWrite(dt, 1);

        const val = 500;

        switch (Unit) {
            case SensorUnit.Killograms: return val / 1000;
            case SensorUnit.grams: return val;
            case SensorUnit.milligrams: return val * 1000;
            default: return val;    
        }
    }
}