#include <Ultrasonic.h>

int pinoTrigger = 7;
int pincoEcho = 8;
HC_SR04 sensor1(7,8); // (trigger, echo)

void setup() {
  Serial.begin(9600);
}

void loop() {

  float distancia = sensor1.distance();
  
  if(distancia > 0 && distancia < 10) {
    Serial.println("1");
  } else {
    Serial.println("0");
  } 

  delay(1000);
}
