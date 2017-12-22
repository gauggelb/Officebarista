# Officebarista
The Hardware for this project is based on a Raspberry Pi Zero W with a MFRC522 RFID-Reader and the VL53L0X Time of Flight sensor. The scripts are realized in python and the Case is designed in Fusion 360.

## Layout from the Hardware settings
![](README/hardware_layout.png)

The Time of Flight Sensor is used to measure the distance and to find out if a cup is under the coffee machine and if it is full.
If a user wants to order a coffee directly at the coffee machine and can not order via Google Home or the app, then he have to hold his RFID card to the reader in order to let a coffee out of the coffee machine.

## Basestation
The basestation is working with a Raspberry Pi zero W mounted on Raspbian.

### Used Components:

 - Raspberry PI Zero W
 - Jumper Wire
 - SD-Card with 8GB Space
 - MFRC522-RFID Sensor
 - Vl53l0X Time of Flight Sensor
 - 3x Screw M1x6

### Installation Raspberry PI

1. Download Raspbian ([Raspbian download](https://www.raspberrypi.org/downloads/ "Download Raspbian"))
2.  Flash the Raspbian to SD-Card (Note: bevor removing the SD-Card please make Step 3)
3. Connecting the Raspberry PI to Wifi ([Raspberry PI Wifi Setup](https://core-electronics.com.au/tutorials/raspberry-pi-zerow-headless-wifi-setup.html "Raspberry PI Wifi Setup"))
4. Update & Upgrade the Raspbian
```
sudo apt-get update && sudo apt-get dist-upgrade -y
```
5. [Installing Vl53l0X API](https://github.com/cassou/VL53L0X_rasp "Installing VL53l0X")
6. [Installing MFRC-522-RFID Reader](https://tutorials-raspberrypi.de/raspberry-pi-rfid-rc522-tueroeffner-nfc "Installing MFRC-522-RFID Reader")
7. Copying the Scripts to the Home Folder
8. Install npm and  nodejs
```
sudo apt-get install nodejs npm
```
9.  install PM2 to Autostart the Script after rebooting
```
npm install pm2@latest -g

```
10. Description how to use PM2 can find [here](http://pm2.keymetrics.io/docs/usage/quick-start/#application-declaration "Installing PM2")


### Case Basestation
![](README/ob_case_01.png)

## Time of Flight sensor (VL53l0X)
The Time of FLight Sensor is a laser-based sensor that reliably measures distances between 20mm and 2000mm.
The ToF is positioned below the display so as to detect the bottom of a cup that is below the spout.

### Case VL53L0X Time of Flight sensor
![](README/case_tof_04.png)


## 3D Modelling
To model the Cases we used Fusion 360. The Cases can be printed with every 3D-Printer by using the 3D Models:

### Cases included:
 - ToF Case
 - BaseStation Case


## OfficeBarista.py

this is a manual to write the OfficeBarista python script.

First you must do all necessary imports

```
import time
import requests
import json
import VL53L0X
import urlib2
import datetime
```
the import for VL53L0X is necessary for the TOF sensor. How you get this import is quite difficult. How you get this import to run, you will find out on this [GitHub](https://github.com/cassou/VL53L0X_rasp)
The script sends only the data of the TOF and a timestep via HTTP call to the backend.
For this you must deposit the URL.

```
url= 'https://iot-hackathon.herokuapp.com/sensordata'

```
After that the next thing you must do is make the VL53L0X work.

```
tof = VL53L0X.VL53L0X()
# Start ranging
tof.start_ranging(VL53L0X.VL53L0X_BETTER_ACCURACY_MODE)

timing = tof.get_timing()
if (timing < 20000):
    timing = 20000
print ("Timing %d ms" % (timing/1000))

```

For quality testing we print the distance. This step can be left out.

Now we´ve got the current distance and send it with a current timestamp to the backend.

```
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

```

Abstand equals the current distance and millis is the current timestamp.
With payload we define the data which will be posted to the URL.
After we definition we send the data.

Than the hole process goes to sleep for 1 second and repeat itself.


###OfficeBarista_RFID.py

this is a manual to write the OfficeBarista_RFID pyhton script. 

First you have to do all necessary imports
```
import RPi.GPIO as GPIO
import time
import MFRC522 #RFID scanner
import requests
import json

import time
import urllib2
```
the import for MFRC522 is neccessary for the RFID reader. How you get this import to run, you will find out on this [Tutorial](https://tutorials-raspberrypi.de/raspberry-pi-rfid-rc522-tueroeffner-nfc/)
The script sends only the data of the RFID and send it to the Backend 

```
url= 'https://iot-hackathon.herokuapp.com/sensordata'

```

After that the next thing you have to is make the RFID work.
```
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
```

```
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
 ```
We read if there is a RFID tack on the reader, if so we will get the RFID code and print it.

```
(status,TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)
			if status == MIFAREReader.MI_OK:
            	# UID holen
            	(status,uid) = MIFAREReader.MFRC522_Anticoll()
           		a=str(uid[0])+' '+str(uid[1])+' '+str(uid[2])+' '+str(uid[3])+' '+str(uid[4])
           		print(a)
```
After that we will load the code in the payload an send it to the backend
```
	payload2 ={'rfid' :a}
            	req = urllib2.Request(url)
            	req.add_header('Content-Type', 'application/json')
            	response = urllib2.urlopen(req, json.dumps(payload2))
            	time.sleep(3)
 ```

Than the hole process goes to sleep for 3 second and repeat it self. 