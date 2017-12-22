# Office Barista Hardware
The main components to implement the hardware features for this project are a Raspberry Pi Zero W with a MFRC522 RFID-Reader and the VL53L0X Time of Flight sensor. The scripts are realized in python and the case is designed in Autodesk Fusion 360.

## Hardware Circuit
![](README/hardware_layout.png)

The Time of Flight sensor is used to find out if a coffee mug is placed under the coffee machine and if it is full or empty.
If a user wants to order a coffee directly at the coffee machine and can not order via Google Home or the Office Barista app, then he has to register himself with his company RFID card in order to begin the brewing process.

## Basestation
The basestation is built with the Raspberry Pi Zero W with basic Raspbian installed.

### Used Components:

 - Raspberry PI Zero W
 - Jumper Wire
 - SD-Card with 8GB Space
 - MFRC522-RFID Sensor
 - Vl53l0X Time of Flight Sensor
 - 3x Screw M1x6

### Installation Raspberry PI

1. Download Raspbian ([Raspbian download](https://www.raspberrypi.org/downloads/ "Download Raspbian"))
2. Flash the Raspbian image to an SD-Card (Note: before removing the SD-Card, go to step 3 first)
3. Connecting the Raspberry Pi to Wifi ([Raspberry PI Wifi Setup](https://core-electronics.com.au/tutorials/raspberry-pi-zerow-headless-wifi-setup.html "Raspberry PI Wifi Setup"))
4. Update & Upgrade OS
```
sudo apt-get update && sudo apt-get dist-upgrade -y
```
5. [Installing Vl53l0X API](https://github.com/cassou/VL53L0X_rasp "Installing VL53l0X")
6. [Installing MFRC-522-RFID Reader](https://tutorials-raspberrypi.de/raspberry-pi-rfid-rc522-tueroeffner-nfc "Installing MFRC-522-RFID Reader")
7. Copy the scripts to the home folder
8. Install nodejs and npm
```
sudo apt-get install nodejs npm
```
9.  Install PM2 for autostart and execution management
```
npm install pm2@latest -g

```
10. Detailed instructions on how to use PM2 can be found [here](http://pm2.keymetrics.io/docs/usage/quick-start/#application-declaration "Installing PM2")


### Case Basestation
![](README/ob_case_01.png)

## Time of Flight sensor (VL53l0X)
The Time of Flight sensor is a laser-based sensor that reliably measures distances between 20mm and 2000mm.
The ToF is positioned below the display so as to detect the bottom of a cup that is below the spout.

### Case VL53L0X Time of Flight sensor
![](README/case_tof_04.png)


## 3D Modeling
To model the Cases we used Autodesk Fusion 360. The cases can be printed with every 3D-Printer by using the provided 3D models:

### Cases included:
 - ToF Case
 - BaseStation Case

# Office Barista Hardware Scripts

## OfficeBarista.py

Let's go into detail, on how the main python script for the hardware was developed.

First import all necessary packages:

```
import time
import requests
import json
import VL53L0X
import urlib2
import datetime
```
The VL53L0X package is necessary for the TOF sensor. Getting this specific package to work, does take some additional steps I'm not going to describe here. You can find out more about the installation process in this Git repo [VL53L0X Raspberry Pi Git](https://github.com/cassou/VL53L0X_rasp).

The main thing this script does is sending the measurements from the ToF together with the current timestamp to the cloud application.
Therefore the url for the sensordata endpoint is saved in a dedicated variable.

```
url= 'https://iot-hackathon.herokuapp.com/sensordata'

```
The next code block is all it takes to get the VL53L0X to work. We are initializing the sensor first and then reading the measurements in specified intervalls.

```
tof = VL53L0X.VL53L0X()
# Start ranging
tof.start_ranging(VL53L0X.VL53L0X_BETTER_ACCURACY_MODE)

timing = tof.get_timing()
if (timing < 20000):
    timing = 20000
print ("Timing %d ms" % (timing/1000))

```

Printing out the timing is implemented for debugging purposes only. This is not needed for the production deployment.

The following block is executed continuously for the complete runtime of the script. A distance measurement is read, by executing the `.get_distance()` method. Afterwards the data is sent to the cloud server via http request.

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
The sleep call ensures, that a measurement is sent every second.


### OfficeBarista_RFID.py

The python script for the implementation of the RFID features is described in the following section.

First import all necessary packages again:

```
import RPi.GPIO as GPIO
import time
import MFRC522 #RFID scanner
import requests
import json

import time
import urllib2
```
getting the MFRC522 package to work is described in this [Tutorial](https://tutorials-raspberrypi.de/raspberry-pi-rfid-rc522-tueroeffner-nfc/).
Whenever a RFID card is detected the script sends the identified id to the sensordata endpoint of the API server.

```
url= 'https://iot-hackathon.herokuapp.com/sensordata'

```

The following block is initialize to setup the RFID reader:
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

Next we identify if a RFID tag is on the reader in a continuous loop
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

extract the UID of the RFID tag
```
(status,TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)
			if status == MIFAREReader.MI_OK:
            	# UID holen
            	(status,uid) = MIFAREReader.MFRC522_Anticoll()
           		a=str(uid[0])+' '+str(uid[1])+' '+str(uid[2])+' '+str(uid[3])+' '+str(uid[4])
           		print(a)
```

and send it to the cloud via http.
```
	payload2 ={'rfid' :a}
            	req = urllib2.Request(url)
            	req.add_header('Content-Type', 'application/json')
            	response = urllib2.urlopen(req, json.dumps(payload2))
            	time.sleep(3)
 ```

The reading process restarts every 3 seconds.
