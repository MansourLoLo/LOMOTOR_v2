const products = [
  {
    "Exhaust system upgrades": [
      {
        "title": "Performance exhaust system",
        "name": "Borla S-Type Cat-Back",
        "price": 120.99,
        "reviews": 8,
        "stars": 3
      },
      {
        "title": "Cat-back exhaust system",
        "name": "MagnaFlow Performance",
        "price": 234.99,
        "reviews": 17,
        "stars": 4
      },
      {
        "title": "Axle-back exhaust system",
        "name": "Flowmaster American Thunder",
        "price": 56.99,
        "reviews": 26,
        "stars": 1
      },
      {
        "title": "Headers",
        "name": "BBK Performance Full-Length Headers",
        "price": 87.99,
        "reviews": 2,
        "stars": 4
      },
      {
        "title": "Muffler delete",
        "name": "Straight pipe with custom resonator",
        "price": 102.99,
        "reviews": 43,
        "stars": 3
      }
    ]
  },
  {
    "Intake upgrades": [
      {
        "title": "Cold air intake",
        "name": "K&N Cold Air Intake Kit",
        "price": 199.99,
        "reviews": 12,
        "stars": 4
      },
      {
        "title": "Short ram intake",
        "name": "AEM Short Ram Air Intake System",
        "price": 149.99,
        "reviews": 6,
        "stars": 3
      },
      {
        "title": "Intake manifold",
        "name": "Skunk2 Racing Intake Manifold",
        "price": 299.99,
        "reviews": 4,
        "stars": 5
      }
    ]
  },
  {
    "Engine tuning": [
      {
        "title": "Performance chip/tuner",
        "name": "DiabloSport Trinity T2 EX",
        "price": 349.99,
        "reviews": 10,
        "stars": 4
      },
      {
        "title": "ECU remapping",
        "name": "Hondata FlashPro",
        "price": 499.99,
        "reviews": 8,
        "stars": 4
      },
      {
        "title": "Boost controller",
        "name": "Grimmspeed Manual Boost Controller",
        "price": 99.99,
        "reviews": 5,
        "stars": 4
      }
    ]
  },
  {
    "Suspension upgrades": [
      {
        "title": "Coilover suspension",
        "name": "KW Variant 3 Coilover Kit",
        "price": 1899.99,
        "reviews": 3,
        "stars": 5
      },
      {
        "title": "Lowering springs",
        "name": "Eibach Pro-Kit Lowering Springs",
        "price": 249.99,
        "reviews": 7,
        "stars": 4
      },
      {
        "title": "Sway bars",
        "name": "Whiteline Adjustable Sway Bar Kit",
        "price": 299.99,
        "reviews": 5,
        "stars": 4
      },
      {
        "title": "Strut tower brace",
        "name": "Cusco Front Strut Tower Brace",
        "price": 149.99,
        "reviews": 6,
        "stars": 4
      }
    ]
  },
  {
    "Brake upgrades": [
      {
        "title": "Performance brake pads",
        "name": "Hawk Performance Ceramic Brake Pads",
        "price": 109.99,
        "reviews": 9,
        "stars": 4
      },
      {
        "title": "Upgraded brake rotors",
        "name": "StopTech Slotted Brake Rotors",
        "price": 159.99,
        "reviews": 6,
        "stars": 4
      },
      {
        "title": "Stainless steel brake lines",
        "name": "Goodridge G-Stop Stainless Steel Brake Line Kit",
        "price": 119.99,
        "reviews": 5,
        "stars": 4
      }
    ]
  },
  {
    "Wheels and tires": [
      {
        "title": "Performance tires",
        "name": "Michelin Pilot Sport 4S",
        "price": 259.99,
        "reviews": 11,
        "stars": 5
      },
      {
        "title": "Alloy wheels",
        "name": "Enkei RPF1 Wheels",
        "price": 239.99,
        "reviews": 8,
        "stars": 4
      },
      {
        "title": "Wheel spacers",
        "name": "Eibach Pro-Spacer Wheel Spacers",
        "price": 79.99,
        "reviews": 4,
        "stars": 4
      },
      {
        "title": "Wheel alignment kit",
        "name": "SPC Performance Rear Camber Kit",
        "price": 119.99,
        "reviews": 3,
        "stars": 4
      }
    ]
  },
  {
    "Body modifications": [
      {
        "title": "Front lip spoiler",
        "name": "APR Performance Carbon Fiber Front Lip Spoiler",
        "price": 299.99,
        "reviews": 6,
        "stars": 5
      },
      {
        "title": "Rear spoiler",
        "name": "Voltex Type 1S Carbon Fiber Rear Spoiler",
        "price": 499.99,
        "reviews": 4,
        "stars": 5
      },
      {
        "title": "Side skirts",
        "name": "Seibon Carbon Fiber Side Skirts",
        "price": 399.99,
        "reviews": 5,
        "stars": 4
      },
      {
        "title": "Widebody kit",
        "name": "Rocket Bunny Pandem Widebody Kit",
        "price": 1999.99,
        "reviews": 2,
        "stars": 5
      }
    ]
  },
  {
    "Interior upgrades": [
      {
        "title": "Racing seats",
        "name": "Sparco Evo Racing Seats",
        "price": 799.99,
        "reviews": 3,
        "stars": 5
      },
      {
        "title": "Steering wheel",
        "name": "MOMO Mod 07 Steering Wheel",
        "price": 249.99,
        "reviews": 4,
        "stars": 4
      },
      {
        "title": "Short shifter",
        "name": "B&M Racing Short Shifter",
        "price": 129.99,
        "reviews": 5,
        "stars": 4
      }
    ]
  },
  {
    "Performance accessories": [
      {
        "title": "Turbocharger/supercharger kit",
        "name": "HKS GT Supercharger System",
        "price": 3999.99,
        "reviews": 2,
        "stars": 5
      },
      {
        "title": "Nitrous oxide kit",
        "name": "ZEX Nitrous System Kit",
        "price": 499.99,
        "reviews": 3,
        "stars": 4
      },
      {
        "title": "High-flow fuel injectors",
        "name": "Injector Dynamics ID1050X Fuel Injectors",
        "price": 499.99,
        "reviews": 4,
        "stars": 4
      },
      {
        "title": "Intercooler",
        "name": "ETS Front Mount Intercooler Kit",
        "price": 799.99,
        "reviews": 6,
        "stars": 4
      }
    ]
  },
  {
    "Aerodynamic enhancements": [
      {
        "title": "Front splitter",
        "name": "APR Performance Carbon Fiber Front Splitter",
        "price": 399.99,
        "reviews": 3,
        "stars": 5
      },
      {
        "title": "Rear diffuser",
        "name": "Varis Carbon Fiber Rear Diffuser",
        "price": 599.99,
        "reviews": 2,
        "stars": 5
      },
      {
        "title": "Canards",
        "name": "Voltex Type 5 Carbon Fiber Canards",
        "price": 299.99,
        "reviews": 4,
        "stars": 4
      }
    ]
  },
  {
    "Drivetrain upgrades": [
      {
        "title": "Limited slip differential",
        "name": "OS Giken Super Lock Limited Slip Differential",
        "price": 1499.99,
        "reviews": 3,
        "stars": 5
      },
      {
        "title": "Performance clutch kit",
        "name": "ACT Heavy Duty Performance Clutch Kit",
        "price": 499.99,
        "reviews": 4,
        "stars": 4
      },
      {
        "title": "Lightweight flywheel",
        "name": "Fidanza Aluminum Flywheel",
        "price": 399.99,
        "reviews": 5,
        "stars": 4
      }
    ]
  },
  {
    "Exterior lighting": [
      {
        "title": "LED headlights",
        "name": "Morimoto XB LED Headlights",
        "price": 299.99,
        "reviews": 6,
        "stars": 5
      },
      {
        "title": "Taillight tinting",
        "name": "Lamin-X Tail Light Tint Film",
        "price": 29.99,
        "reviews": 8,
        "stars": 4
      },
      {
        "title": "Fog lights",
        "name": "Diode Dynamics SS3 LED Fog Light Kit",
        "price": 199.99,
        "reviews": 5,
        "stars": 4
      }
    ]
  }
]

export default products