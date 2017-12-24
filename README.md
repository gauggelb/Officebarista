<<<<<<< HEAD
# Officebarista general description
The course in the execution of a two-day hackathon should produce, in the context of "Internet of Things", a possibility 
to order coffee from the workplace, over Google Home (speech recognition), as well as the detection of the 
levels of various consumables produce. The challenge was to build an IoT solution from this starting position that 
could capture this data from the coffee machine and use Google Home to add value to the end user.
=======
# Office Barista general description
During the winter semester 2017/2018 at the Reutlingen University we developed a MVP to order Coffee and manage the accounting via Google Home from the Siemens EQ.9 coffee machine.

>>>>>>> 3a4900b78e8c2309563380e508b1ff122bb60401

# Index
* [Backend Overview](https://github.com/gauggelb/Officebarista/tree/master/backend
 "Backend Overview")
 * [Frontend Overview](https://github.com/gauggelb/Officebarista/tree/master/frontend
 "Frontend Overview")
 * [Hardware Overview](https://github.com/gauggelb/Officebarista/tree/master/hardware
 "Hardware Overview")

 
## Architecture diagram

![Architecture diagram](README/architecture_diagram.png)


497/5000
The "Siemens TI909701HC EQ.9 connect s900 coffee machine" is connected to a Raspberry Pi. 
A coffee order is possible over a voice input over Google Home, the use of the app, or over an ordinary manual order.
Above the nozzle hangs a time of flight sensor, which measures whether, first, a cup is placed and second, 
whether the cup is empty, or full. On the Raspberry Pi, a Python script receives the measurements from the ToF and sends them to the backend.
The device API is receiving the data from the sensor. The data is stored in a NoSQL data store.
In addition, the levels of the coffee beans and the milk are queried over Node JS. If one of the 
two reaches a pre-determined level, a reorder will automatically be triggered over Amazon.


## MVP
After a brainstorming, the team agreed to the following requirements in order to provide a minimal overble product:
For the coffee order, the user has three options:
Either he uses the developed app, the RFID card or ordered over Google Home, which must be centrally located in the office.

	* If ordering through Google Home, user identification and billing is done through the speech recognition.
	* If ordering over the app, the identification is done using the saved password.
	* In the third case, the user can order a coffee as usual with his RFID card directly on the device.

In both "remote cases" the user can access all standard coffees of the "Siemens TI909701HC EQ.9 connect s900 coffee machine".

As the consumption of milk and coffee beans is recorded and tracked, automatic reordering of consumables is provided. 
The collection takes place over Wunderlist and the final order is processed over Amazon.


**Components:**

* [Time of Flight (TOF) Sensor Vl53L0X](https://www.amazon.de/Adafruit-Entfernungssensor-VL6180X-Flight-Sensor/dp/B01N9OOSQE/ref=pd_sbs_60_6?_encoding=UTF8&psc=1&refRID=AQ18450P2VPF9M0GNW5W
 "Time of Flight (TOF) Sensor Vl53L0X")

* [Raspberry Pi Zero W](https://www.amazon.de/gp/product/B06XCYGP27/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B06XCYGP27&linkId=f8232bfc1cb044212710ab896692e510
 "Raspberry Pi Zero W")

* [RFID Modul MCFR522](https://www.amazon.de/gp/product/B00QFDRPZY/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B00QFDRPZY&linkId=2a0ebd829ebf6630c376d83f4d594433
 "RFID Modul MCFR522")

* [SMD RGB LED B0157AK0MU](https://www.amazon.de/gp/product/B0157AK0MU/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B0157AK0MU&linkId=bd003decf6ac0da40e9f52439a2b63d7
 "SMD RGB LED B0157AK0MU")
 

**Contributors (and Responsibilities):**

* Max Kolb (Backend, Support for Hardware and Frontend, Documentation)
* Aline Mbekuem (Frontend, Documentation)
* Bastian Gauggel (Hardware/ Sensor,  Python Script, Documentation)
* Mathias Zimmermann (Hardware/ Sensor, Python Script, Documentation)
* Timm Roth (Support for Hardware/ Sensor and Frontend, general Support, Documentation)


