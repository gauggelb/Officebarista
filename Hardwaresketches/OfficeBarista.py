#Bibliotheken einbinden
import RPi.GPIO as GPIO
import time

import requests
import json
import VL53L0X
import time
import urllib2
import datetime




#GPIO Modus (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
 


url = 'https://iot-hackathon.herokuapp.com/sensordata'


# Create a VL53L0X object
tof = VL53L0X.VL53L0X()
# Start ranging
tof.start_ranging(VL53L0X.VL53L0X_BETTER_ACCURACY_MODE)

timing = tof.get_timing()
if (timing < 20000):
    timing = 20000
print ("Timing %d ms" % (timing/1000))

#GPIO Pins zuweisen
GPIO_TRIGGER = 17
GPIO_ECHO = 27
 
 
#Richtung der GPIO-Pins festlegen (IN / OUT)
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)




if __name__ == '__main__':

	try:
		while True:
			abstand = tof.get_distance()

			millis = int(round(time.time() * 1000))
			print (millis)
			payload = {'measurement': abstand,'date': millis}
			req = urllib2.Request(url)
			req.add_header('Content-Type', 'application/json')
			response = urllib2.urlopen(req, json.dumps(payload))
			print('gesendet')
			
			
                
			time.sleep(1)
 
        # Beim Abbruch durch STRG+C resetten
	except KeyboardInterrupt:
		print("Messung vom User gestoppt")
		GPIO.cleanup()
