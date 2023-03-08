// data
let Devicesdata = [
    {
        type : "device",
        bestOffer : true,
        price: 149.99,
        name: "PinePhone",
        image: ["PinePhone1.png", "PinePhone2.png", "PinePhone3.png"],
        cpu: "x ARM Cortex A53",
        ram: "2/3 GB",
        storage: "16/32 GB",
        battery: "2800mAh",
        gpu: "ARM Mali 400 MP2",
        screen: "1440x720",
        sound: "3.5mm Jack, Microphone",
        usb: "Type C",
        camBack: "5MPx",
        camFront: "2MPx",
        system: ["PostMarket", "Ubuntu"],
        features : [
            ["switches","Hardware kill switches"],
            ["battery","Replaceable battery"],
            ["support","for Ubuntu Touch"],
            ["Modern","modern hardware"]
        ],
        description: "One of the most popular Linux phones is the PinePhone, developed by Pine64. It allows you to install several Linux phone operating systems, including UBports, Sailfish OS, Manjaro, etc."
    },
    {
        type : "device",
        bestOffer : false,
        price: 1299,
        name: "Librem 5",
        image: ["Librem51.png", "Librem52.png", "Librem53.png", "Librem54.png"],
        cpu: "NXP i.MX 8M Quad-core",
        ram: "3 GB",
        storage: "32 GB",
        battery: "4,500mAh",
        gpu: "Vivante GC7000Lite",
        screen: "720x1440",
        sound: "3.5mm Jack, Microphone",
        usb: "Type C",
        camBack: "13.25MPx",
        camFront: "8MPx",
        system: ["PureOS", "Phosh"],
        features : [
            ["switches","Hardware kill switches"],
            ["battery","Replaceable battery"],
            ["support","for Ubuntu Touch"],
            ["Modern","modern hardware"]
        ],
        description: "Librem 5 is another fantastic Linux phone manufactured by Purism. It runs PureOS, a Linux phone operating system developed by Purism. As of 2021, it was the only smartphone recommended by Free Software Foundation (FSF). That is an organization that started in 1985 to support the availability of free software."
    },
    {
        type : "device",
        bestOffer : false,
        price: 829,
        name: "Pro1 X",
        image: ["Pro1X1.png", "Pro1X2.png", "Pro1X3.png", "Pro1X4.png"],
        cpu: "Snapdragon 662",
        ram: "6/8 GB",
        storage: "128 GB",
        battery: "3200mAh",
        gpu: "Qualcomm Adreno 610",
        screen: "2160x1080",
        sound: "3.5mm TRRS headphone Jack",
        usb: "Type C",
        camBack: "12MPx",
        camFront: "8MPx",
        system: [ "Ubuntu", "SailFish", "Lineage"],
        features : [
            ["switches","Hardware kill switches"],
            ["battery","Replaceable battery"],
            ["support","for Ubuntu Touch"],
            ["Modern","modern hardware"]
        ],
        description: "Another Linux phone top on the list is the Pro 1 X - F(x)tec developed by F(x)tec company in London. One unique feature of this phone is the slide-out keyboard present. Therefore, you can opt to use the phone as a full touch screen or slide out the keyboard to use it in landscape mode."
    },
    {
        type : "device",
        bestOffer : true,
        price: 449,
        name: "Volla Phone",
        image: ["vollaPhoneX.png", "vollaPhone.png"],
        cpu: "MediaTek Helio P23",
        ram: "4 GB",
        storage: "64 GB",
        battery: "4700mAh",
        gpu: "ARM Mali-G71",
        screen: "2340x1080",
        sound: "3.5mm TRRS headphone Jack",
        usb: "Type C",
        camBack: "16MPx",
        camFront: "16MPx",
        system: ["VollaOS", "Ubuntu"],
        features : [
            ["switches","Hardware kill switches"],
            ["battery","Replaceable battery"],
            ["support","for Ubuntu Touch"],
            ["Modern","modern hardware"]
        ],

        description: "Volla is another Linux phone developed to give users freedom in the digital space through simplicity and security. It ships with the Volla OS, which features a minimalistic design and unique features not present on most Linux phones' OS. Users have an option to select between Light, Dark and Transparent themes."
    },
    {
        type : "device",
        bestOffer : false,
        price: 649,
        name: "Fairphone",
        image: ["Fairphone1.png", "Fairphone2.png", "Fairphone3.png"],
        cpu: "Octa-core Kryo",
        ram: "6/8 GB",
        storage: "64 GB",
        battery: "3905mAh",
        gpu: "Adreno 619",
        screen: "2340x1080",
        sound: "Loudspeaker",
        usb: "Type C",
        camBack: "48MPx",
        camFront: "25MPx",
        system: ["Fairphone", "postmarket"],
        features : [
            ["switches","Hardware kill switches"],
            ["battery","Replaceable battery"],
            ["support","for Ubuntu Touch"],
            ["Modern","modern hardware"]
        ],

        description: "First, you need to understand that this phone is not necessarily a Linux phone. However, it ships with a modified version of Android (FairPhone OS) and is compatible with most postmarketOS."
    }
];

let gadgetData = [
    {
        type: "gadget",
        name: "Charger",
        image: ["charger.png"],
        review: 184,
        rate: 3.7,
        price: 11.11,
        

        description: "Super Fast Charger for Linux devices + 3FT USB-C Type C Cable Cord Kit"
    },
    {
        type: "gadget",
        name: "OtterBox",
        image: ["otterbox.png"],
        review: 190,
        rate: 4.3,
        price: 49.97,
        

        description: "OtterBox Defender Series Pro Phone Case for Linux devices"
    },
    {
        type: "gadget",
        name: "Vava",
        image: ["vava.png"],
        review: 13,
        rate: 3,
        price: 14.99,
        

        description: "VAVA 8-in-1 USB C Hub with 4K 60Hz HDMI"
    },
    {
        type: "gadget",
        name: "Kipling",
        image: ["kiplin.png"],
        review: 87,
        rate: 3.4,
        price: 39.99,

        description: "Kipling Women's Tally Crossbody Phone Bag Adjustable Strap"
    },
    {
        type: "gadget",
        name: "Insten",
        image: ["insten.png"],
        review: 28,
        rate: 3.9,
        price: 7.99,
        

        description: "Insten USB 3.0 A to USB A Cable, Male to Male, Transfer Cable Cord 6ft"
    },
    {
        type: "gadget",
        name: "WizGear",
        image: ["wizgear.png"],
        review: 64,
        rate: 4.3,
        price: 13.99,
        

        description: "WizGear Universal Air Vent Magnetic Car Mount Holder with Fast Swift-SnapTM"
    },
    {
        type: "gadget",
        name: "Kastar",
        image: ["kastar.png"],
        review: 127,
        rate: 2.7,
        price: 23.99,
        

        description: "kastar intelligent mini travel charger with high speed portable usb charge function for all kind of devices"
    },
    {
        type: "gadget",
        name: "Cshidworld",
        image: ["cshidworld.png"],
        review: 18,
        rate: 4,
        price: 16.99,
        

        description: "Bluetooth Headphones,Earphones IPX5 Waterproof/Sweatproof, w/Mic HD Stereo In-Ear Earbuds"
    }
];
