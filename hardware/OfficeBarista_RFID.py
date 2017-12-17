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
 


if __name__ == '__main__':

	try:
		while True:
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
