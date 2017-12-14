# Officebarista
The Hardware for this Project based on a Raspberry Pi Zero W with a MFRC522 RFID-Reader and the VL53L0X Time of Flight sensor. The scripts are realized in python and the Case is designed in Fusion 360.

## Layout from the Hardware settings
![Hardware Layout](https://github.com/gauggelb/Officebarista/blob/master/hardware/images/Aufbau%20Hardware.png)

The Time of Flight Sensor is used to measure the distance and to find out if a cup is under the coffee machine and if it is full.
If a user wants to order a coffee directly at the coffee machine and can not order via Google Home or the app, then he have to hold his RFID card to the reader in order to let a coffee out of the coffee machine.

The Time of FLight Sensor is a laser-based sensor that reliably measures distances between 20mm and 2000mm.
The ToF is positioned below the display so as to detect the bottom of a cup that is below the spout.

##Basestation
The basestation is working with a Raspberry Pi zero W mounted on Raspbian. 

Components:

 - Raspberry PI Zero W
 - Jumper Wire 
 - SD-Card with 8GB Space
 - 

### Case Basestation
![Basestation Case_1](https://github.com/gauggelb/Officebarista/blob/master/hardware/images/Kaffeecase%20rund%201.png)

## Time of Flight sensor (VL53l0X)
The Time of Flight Sensor is an Laser based range sensor, wich 

### Case VL53L0X Time of Flight sensor
![ToF Case_1](https://github.com/gauggelb/Officebarista/blob/master/hardware/images/Case%20ToF%204.png)


## 3D Modelling
To model the Cases we used Fusion 360. The Cases can be printed:

 - ToF Case
 - BaseStation Case