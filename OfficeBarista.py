#Bibliotheken einbinden
import RPi.GPIO as GPIO
import time
import MFRC522 #RFID scanner
import requests
import json

import time
import urllib2
import datetime




#GPIO Modus (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
 
#RFID Scanner deklariren
MIFAREReader = MFRC522.MFRC522()

url = 'https://iot-hackathon.herokuapp.com/sensordata'



#GPIO Pins zuweisen
GPIO_TRIGGER = 17
GPIO_ECHO = 27
 
#Richtung der GPIO-Pins festlegen (IN / OUT)
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
 
def distanz():
    # setze Trigger auf HIGH
    GPIO.output(GPIO_TRIGGER, True)
 
    # setze Trigger nach 0.01ms aus LOW
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER, False)
 
    StartZeit = time.time()
    StopZeit = time.time()
 
    # speichere Startzeit
    while GPIO.input(GPIO_ECHO) == 0:
        StartZeit = time.time()
 
    # speichere Ankunftszeit
    while GPIO.input(GPIO_ECHO) == 1:
        StopZeit = time.time()
 
    # Zeit Differenz zwischen Start und Ankunft
    TimeElapsed = StopZeit - StartZeit
    # mit der Schallgeschwindigkeit (34300 cm/s) multiplizieren
    # und durch 2 teilen, da hin und zurueck
    distanz = (TimeElapsed * 34300) / 2
 
    return distanz


if __name__ == '__main__':

    try:
        while True:
            abstand = distanz()
           
           
            millis = int(round(time.time() * 1000))
            print (millis)
            
    
            payload = {'measurement': abstand,'date': millis}
            req = urllib2.Request(url)
            req.add_header('Content-Type', 'application/json')
            response = urllib2.urlopen(req, json.dumps(payload))
        
           
            print('gesendet')
            
           
            (status,TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)
            if status == MIFAREReader.MI_OK:
            # UID holen
 
                (status,uid) = MIFAREReader.MFRC522_Anticoll()
               
            
                a=str(uid[0])+' '+str(uid[1])+' '+str(uid[2])+' '+str(uid[3])+' '+str(uid[4])
                print(a)
                payload2 ={'rfid' :a}
               
                req = urllib2.Request(url)
                req.add_header('Content-Type', 'application/json')
                response = urllib2.urlopen(req, json.dumps(payload2))
                
           
            
            time.sleep(3)
 
        # Beim Abbruch durch STRG+C resetten
    except KeyboardInterrupt:
        print("Messung vom User gestoppt")
        GPIO.cleanup()
