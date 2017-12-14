#!/usr/bin/env python
# -*- coding: utf8 -*-

import RPi.GPIO as GPIO #Pin ansteuerung
import MFRC522 #RFID scanner
import time #Zeit




#RFID Scanner deklariren
MIFAREReader = MFRC522.MFRC522()



#Start des Programms
try:
    print ("Scan for cards")

    while True:
        # Scan fÃ¼r Kards
        (status,TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)


        # Karte gefunden
        if status == MIFAREReader.MI_OK:
            # UID holen

            (status,uid) = MIFAREReader.MFRC522_Anticoll()
            #UID wird ausgegeben
            print("uid: ")
            print(uid)
            #UID an API Senden
            print("UID wird an API gesendet")
            #Send to API
            
            #Antwort von API abwarten
            response= true
            
            #hier die Variable für den USER ID einfügen
            if response==true:
            
                #ausgabe des Users
                print ("User XY darf Kaffee holen")
                print ("Kaffee wird gebrüht")
               
             

               

            else:
                #NFC Chip nicht erkannt
                print ("nicht bekannt")
               
except KeyboardInterrupt:
#Abbruch des Programms
    print("Abbruch")
    GPIO.cleanup()
