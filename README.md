# Officebarista general description
During the Wintersemester 2017/2018 at the Reutlingen University we developed a MVP to order Coffee and manage the accounting via Google Home from the Siemens EQ.9 coffee machine.



The idea behind the development is that a coffee order from the workplace is possible. For this, the user has three options:
Either he uses the app developed for this, or he orders via Google Home, which must be centrally located in the office.
Should he order via Google Home, user identification and billing will be done via the language. If he orders via the app, 
the identification is done via the stored password. In the third case, he can order coffee as usual with his RFID card directly on the device.
In both cases I can access all the standard coffees of the "Siemens TI909701HC EQ.9 connect s900 coffee machine". The forwarding of the commands takes place via IFTTT.
Since the consumption of milk and coffee beans is recorded and tracked, an automatic reordering of consumables is provided. The collection takes place via Wunderlist 
and the final order is processed via Amazon.

## Architecture diagram

Die Siemens TI909701HC EQ.9 connect s900 wird über einen Raspberry Pi Zero W und daran angeschlossene Sensoren, überwacht.

Der TOF Sensor wird dazu verwendet zu erkennen ob eine Tasse unter der Kaffeemaschine steht und ob diese bereits voll ist.
Mit dem RFID Modul kann sich via Smartphone oder RFID Tag authentifiziert werden, um eine berechtigte Kaffeeentnahme zu gewährleisten
Die Status-LED zeigt ob die Eingabe erfolgreich war.

Zur Erkennung ob eine Tasse unter dem Kaffeeautomaten steht und um zu erkennen, ob die Tasse gefüllt oder leer ist, wurde ein Tof-Sensor (Vl53L0X) gewählt. Für die sichere Unterbringung der technischen Komponenten, wurde dafür extra dafür ein 3D-Gehäuse modelliert und gedruckt.

**Verwendete Bauteile:**

..*( https://www.amazon.de/gp/product/B06XT1H1L7/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B06XT1H1L7&linkId=a4c61988dde5a204874bb208ab6c2cb5
 "Time of Flight (TOF) Sensor Vl53L0X")

 https://www.amazon.de/gp/product/B06XT1H1L7/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B06XT1H1L7&linkId=a4c61988dde5a204874bb208ab6c2cb5
..*Raspberry Pi Zero W https://www.amazon.de/gp/product/B06XCYGP27/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B06XCYGP27&linkId=f8232bfc1cb044212710ab896692e510
..*RFID Modul MCFR522 https://www.amazon.de/gp/product/B00QFDRPZY/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B00QFDRPZY&linkId=2a0ebd829ebf6630c376d83f4d594433
..*SMD RGB LED B0157AK0MU https://www.amazon.de/gp/product/B0157AK0MU/ref=as_li_tl?ie=UTF8&tag=stapptory04-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B0157AK0MU&linkId=bd003decf6ac0da40e9f52439a2b63d7





![Architecture diagram](https://github.com/gauggelb/Officebarista/blob/master/hardware/images/Modell.png)