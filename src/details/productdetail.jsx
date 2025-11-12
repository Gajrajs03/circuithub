import { Component } from "react";

const Product = [
  {
    id: 1,
    name: "Obstacle Avoiding Robot",
    price: "₹1299",
    description:
      "a robot which avoids whatever comes in its path and changes its direction automatically",
    image: "/Content_Image_1.jpeg",
    detail:
      "An autonomous robot that detects and avoids obstacles using ultrasonic sensors. Perfect for learning robotics, automation, and real-time sensor-based navigation.",
    Component: `🛠️ Components:
      • Arduino Uno
      • Ultrasonic Sensor (HC-SR04)
      • L293D Motor Driver Module
      • DC Geared Motors
      • Robot Chassis with Wheels
      • Li-ion Battery & Holder
      • Jumper Wires`,
  },
  {
    id: 2,
    name: "Arduino Car",
    price: "₹1199",
    description:
      "Its a bluetooth controlled car using arduino which can be controlled using mobile.",
    image: "/image2.jpeg",
    detail:
      "A Bluetooth-controlled car project using Arduino. Control the car's movements via a mobile app for a fun and interactive experience.",
    Component: `🛠️ Components:
      • Arduino Uno
      • Bluetooth Module (HC-05)
      • DC Geared Motors
      • Motor Driver Module
      • Chassis
      • Wheels
      • Jumper Wires
      • Li-ion Battery & Holder
      • Smartphone with Bluetooth Control App`,
  },
  {
    id: 3,
    name: "Wireless Charger",
    price: "₹349",
    description: "DIY wireless charger circuit",
    image: "/image3.jpeg",
    detail:
      "A simple DIY wireless charger project that transfers energy using electromagnetic induction between two coils. It demonstrates the working principle behind wireless charging systems.",
    Component: `🛠️ Components:
      •Copper Wire (for transmitter & receiver coils)
      •NPN Transistor (2N2222)
      •Resistor (1kΩ)
      •USB Cable (for charging indication)
      •Small Battery / Power Source (5V–9V)
      •Breadboard / PCB`,
  },
  {
    id: 4,
    name: "Line Follower Robot",
    price: "₹1199",
    description: "Smart robot that follows a line path",
    image: "/image4.jpeg",
    detail:
      "A robot that follows a path or line (usually black tape on a white surface) using IR sensors. The sensors detect the line and guide the motors to keep the robot on track automatically.",
    Component: `🛠️ Components:
      • Arduino Uno R3
      • IR Sensor Module (3pcs)
      • L293D Motor Driver IC
      • DC Motors with Wheels (4pcs)
      • Chassis (robot body)
      • Battery Pack (7.4V or 9V)
      • Jumper Wires`,
  },
  {
    id: 5,
    name: "Clap Switch circuit",
    price: "₹299",
    description: "Control bulb using clap sound",
    image: "/clapswitch.jpg",
    detail:
      "A simple electronics project where appliances can be turned on or off by clapping. The microphone picks up the clap sound, and the CD4017 IC toggles the relay to control the device.",
    Component: `🛠️ Components:
          •CD4017 Decade Counter IC
          •LM741 / LM358 (Op-Amp for sound detection)
          •Electret Microphone
          •Transistor (BC547/BC548)
          •Resistors & Capacitors
          •Relay Module
          •AC Bulb / LED (as load)`,
  },
  {
    id: 6,
    name: "Smart Door Lock",
    price: "₹799",
    description: "IoT-based digital door lock system",
    image: "/image6.jpg",
    detail:
      "A secure and affordable smart door lock system that unlocks with a password. It enhances home security while being simple to build and cost-effective.",
    Component: `🛠️ Components:
              •Arduino UNO
              •4x4 Keypad
              •Servo Motor (to control lock)
              •16x2 LCD Display
              •Buzzer
              •Resistors, Jumper Wires, Breadboard`,
  },
  {
    id: 7,
    name: "Solar Power Bank",
    price: "₹499",
    description: "DIY solar-powered power bank",
    image: "/solarpowerbank.jpg",
    detail:
      "A cost-effective solar-powered power bank that charges during the day and provides backup power for mobile devices. It’s an eco-friendly project for renewable energy learning.",
    Component: `🛠️ Components:
      •Small Solar Panel (5V)
      •Lithium-ion Battery (18650 cell)
      •TP4056 Battery Charging Module
      •DC-DC Boost Converter (5V output)
      •Diode (1N4007)
      •Wires, Switch, USB Port`,
  },
  // {
  //   id: 8,
  //   name: "Gesture Controlled Car",
  //   price: "₹1599",
  //   description: "Arduino based gesture control project",
  //   image: "gesturecar.png",
  // },
  {
    id: 9,
    name: "Smart Irrigation System",
    price: "₹749",
    description: "Automated irrigation using soil moisture sensors",
    image: "/irrigationsystem.jpg",
    detail:
      "An automatic irrigation system that monitors soil moisture and waters plants only when needed. This project helps save water and ensures healthy plant growth with minimal effort.",
    Component: `🛠️ Components:
      • Arduino UNO
      • Soil Moisture Sensor
      • Water Pump + Relay Module
      • 16x2 LCD Display 
      • Jumper Wires, Breadboard
      • Power Supply (9V battery or adapter)`,
  },
  {
    id: 20,
    name: "Clap Based Fan Switching System Using Arduino",
    price: "₹799",
    description:
      "Sound-activated fan control system using microphone and transistor circuit.",
    image: "/Asca.jpg",
    detail:
      "This project allows you to switch ON/OFF a fan by simply clapping. It detects sound signals through a microphone and processes them using a transistor-based circuit.",
    Component: `🛠️ Components:
       • Condenser Microphone
    • BC547 Transistors (2 pcs)
    • Resistors & Capacitors (as per circuit)
    • 5V Relay Module
    • Diode 1N4007
    • LED (Indicator)
    • Small Fan (Load)
      • Power Supply (9V battery or adapter)`,
  },

  {
    id: 10,
    name: "RFID Based Attendance system",
    price: "₹649",
    description: "Secure access using RFID technology",
    image: "/rf.jpg",
    detail:
      "An RFID-based attendance system that automates the process of marking attendance using RFID cards. It enhances accuracy and saves time in attendance management.",
    Component: `🛠️ Components:
      •Arduino UNO
      •RFID Reader (MFRC522)
      •RFID Cards
      •16x2 LCD Display
      •Jumper Wires
      •Breadboard
      •Power Supply (9V battery)`,
  },

  {
    id: 25,
    name: "Clap Based Fan Switching System Using Using 555 Timer IC",
    price: "₹599",
    description: "Automated irrigation using soil moisture sensors",
    image: "/Asct.jpg",
    detail:
      "An automatic irrigation system that monitors soil moisture and waters plants only when needed. This project helps save water and ensures healthy plant growth with minimal effort.",
    Component: `🛠️ Components:
      • NE555 Timer IC
    • Condenser Microphone
    • Cd-4017
    • Resistors & Capacitors (as per circuit)
    • 5V Relay Module
    • Diode 1N4007
    • LED (Indicator)
    • Small Fan (Load)
      • Power Supply (9V battery or adapter)`,
  },
  {
    id: 11,
    name: "DHT11 Humidity and Temperature Sensor",
    price: "₹599",
    description: "Measure humidity and temperature with DHT11 sensor",
    image: "/temperature.jpg",
    detail:
      "The DHT11 sensor is a basic, low-cost digital temperature and humidity sensor. It provides accurate readings and is easy to use with Arduino.",
    Component: `🛠️ Components:
      •DHT11 Sensor
      •Arduino UNO
      •Jumper Wires
      •16x2 LCD Display
      •I2C converter
      •Breadboard 
      •Power Supply (9V battery)`,
  },
  {
    id: 13,
    name: "Motion Detector Alarm",
    price: "₹699",
    description: "Detects motion and triggers an alarm",
    image: "/motiondetectionalarm.jpg",
    detail:
      "A motion detector alarm system that triggers an alarm when motion is detected. It enhances security and can be used in various applications.",
    Component: `🛠️ Components:
      •Arduino UNO
      •PIR Motion Sensor
      •Buzzer
      •16x2 LCD Display (optional)
      •Jumper Wires
      •Power Supply`,
  },
  {
    id: 14,
    name: "Piezzoelectric voltage generator",
    price: "₹199",
    description: "Generates electricity from vibrations.",
    image: "/Piezzoelectric.jpg",
    detail:
      "A simple energy harvesting project that generates small amounts of electricity using a piezoelectric sensor when pressure or vibrations are applied. It demonstrates renewable energy from mechanical stress.",
    Component: `🛠️ Components:
      •Piezoelectric Sensor
      •Diode (1N4007)
      •Capacitor
      •Resistor`,
  },
  {
    id: 15,
    name: "Staircase Home Automation",
    price: "₹499",
    description: "Auto lights for staircases, saves energy & adds safety.",
    image: "/Staircase.webp",
    detail:
      "A smart staircase lighting system where lights automatically turn ON when someone is detected and turn OFF after a set time. This saves energy and adds convenience to home automation.",
    Component: `🛠️ Components:
      •Arduino UNO
      •IR Sensor
      •LED Bulb
      •Jumper Wires
      •Power Supply`,
  },

  {
    id: 17,
    name: "Electronic Voting Machine using  Arduino",
    price: "₹599",
    description:
      "A digital voting system with automatic vote counting and instant result display",
    image: "/evm.jpg",
    detail:
      "An electronic voting system where users cast votes using push buttons and results are displayed on an LCD screen. It ensures a simple, fast, and error-free voting process for small-scale elections.",
    Component: `🛠️ Components:
      •Arduino UNO
      •Push Buttons 
      •16x2 LCD Display
      •Jumper Wires
      •Breadboard
      •Power Supply`,
  },

  {
    id: 18,
    name: "Automatic Toll gate Using Arduino",
    price: "₹499",
    description:
      "An Arduino-based automatic toll gate system uses an IR sensor to detect a vehicle.",
    image: "/Barrier.jpeg",
    detail:
      " a servo motor to lift the gate, and an RFID module to identify the vehicle and debit the toll from a registered account.",
    Component: `🛠️ Components:
      •Arduino UNO
      •Servo Motor 
      •IR Sensor
      •Buzzer
      •Jumper Wires
      •Breadboard
      •Power Supply`,
  },

  {
    id: 19,
    name: "Smart LED Chaser Circuit Using Arduino",
    price: "₹449",
    description:
      "A circuit that controls a series of LEDs to create a moving light effect, with customizable patterns and speeds.",
    image: "/LED_Chaser.jpeg",
    detail:
      "The circuit uses an Arduino microcontroller to digitally control the on and off states of a sequence of LEDs, creating various chase patterns. The speed and pattern can be programmed and modified.",
    Component:
      "🛠️ Components:\n    • Arduino UNO\n    • LEDs (multiple colors recommended)\n    • Resistors (for each LED)\n    • Breadboard\n    • Jumper Wires\n    • Power Supply",
  },

  //   {
  //     "id": 20,
  // "name": "Dry Wet Waste Segregator",
  // "price": "₹599",
  // "description": "An automated system that uses sensors to distinguish between dry and wet waste and sorts it into separate bins.",
  // "image": "/Waste_Segregator.jpeg",
  // "detail": "The project uses a moisture sensor to identify the waste type. An Arduino processes the sensor data and controls a servo motor to open a flap, directing the dry or wet waste into the corresponding collection bin.",
  // "Component": "🛠️ Components:\n    • Arduino UNO\n    • Moisture Sensor\n    • Ultrasonic Sensor\n    • Servo Motor\n    • Breadboard\n    • Jumper Wires\n    • Power Supply"
  //   }

  {
    id: 21,
    name: "RPM Counter Using Arduino",
    price: "₹439",
    description:
      "An RPM counter measures the rotational speed of an object, typically in revolutions per minute. ",
    image: "/rpmcounter.jpeg",
    detail:
      "The system works by detecting each full rotation and using the Arduino to calculate the time taken to complete a certain number of rotations.",
    Component: `🛠️ Components:
      •Arduino UNO
      •16*2 LCD Display
      •IR Sensor
      •Photoresistor
      •Jumper Wires
      •Breadboard
      •Power Supply`,
  },

  {
    id: 22,
    name: "Automatic Solar Tracker",
    price: "₹499",
    description:
      "An automatic solar tracker system uses two Light-Dependent Resistors (LDRs) and a servo motor to track the sun's position.",
    image: "/solartracker.jpeg",
    detail:
      "The Arduino continuously compares the light readings from both sensors. If the east LDR receives more light, the servo motor moves the panel towards the east.",
    Component: `🛠️ Components:
      •Arduino UNO
      •Solar Panel
      •LDR Sensor
      •Servo Motor
      •Jumper Wires
      •Power Supply`,
  },

  {
    id: 23,
    name: "Automatic Water level alarm using Arduino",
    price: "₹499",
    description:
      "Detects water reaching a certain level and triggers an alarm.",
    image: "/wateralarm.webp",
    detail:
      "The system relies on a water level sensor (or multiple sensors) placed inside a water tank. When the water level rises and makes contact with the sensor's probes, the sensor sends an electrical signal to the Arduino board.",
    Component: `🛠️ Components:
      •Arduino UNO
      •LEDs
      •16*2 Display
      •IR Sensor
      •Buzzer
      •Breadboard
      •Power Supply`,
  },

  {
    id: 24,
    name: "Digital Dice Using Arduino",
    price: "₹549",
    description:
      "is a fun and simple project that Simulates a traditional six-sided dice. ",
    image: "/Digital Dice.jpeg",
    detail:
      "A digital dice using Arduino is a fun and simple project that simulates a traditional six-sided dice. When a button is pressed, the Arduino generates a random number from 1 to 6 and displays it on an output device, such as a set of LEDs or a 7-segment display.",
    Component: `🛠️ Components:
      •Arduino UNO
      •Pushbutton
      •seven segment Display
      •Jumper Wires
      •Breadboard
      •Power Supply`,
  },
];
export default Product;
