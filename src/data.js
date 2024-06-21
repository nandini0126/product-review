const products = [
    {
        id: "DELL 15INTEL I3-101",
        title: "DELL 15INTEL I3",
        name: "Dell [Smartchoice 15 Thin & Light Laptop, 12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/15.6'(39.62cm) FHD/Win 11 + MSO'21/15 Month McAfee/Spill-Resistant KB/Grey/1.48kg",
        rating: {
            ratingNo: "3.8",
            ratingImg: "https://cdn-icons-png.flaticon.com/128/992/992000.png"
        },
        Img: {
            mainImg: "https://m.media-amazon.com/images/I/71TcPkUibVL._SX569_.jpg",
            secImg: "https://m.media-amazon.com/images/I/71-PdmrSeRL._SX569_.jpg",
            thirdImg: "https://m.media-amazon.com/images/I/71h-SX-ecgL._SX569_.jpg",
            fourthImg: "https://m.media-amazon.com/images/I/71oPMvaBG0L._SX569_.jpg",
            fifthImg: "https://m.media-amazon.com/images/I/710CRXGWuvL._SX569_.jpg"
        },
        price: "₹35,990",
        about: {
            Processor: "Intel Core i3-1215U 12th Generation (up to 4.40 GHz, 10MB 6 Cores)",
            RAM_Storage: "8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 512GB SSD",
            Software: "Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi-Device Security 15-month subscription",
            Graphics_Keyboard: "Integrated Onboard Graphics & Standard Keyboard  Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
            Ports: "2 USB 3.2 Gen 1 ports, 1 USB 2.0 port, 1 Headset jack, 1 HDMI 1.4 port, 1 SD 3.0 card slot, 1 Flip-Down RJ-45 port 10/100/1000 Mbps"
        }
    },
    {
        id: "ACER ASPIRE LITE-102",
        title: "ACER ASPIRE LITE",
        name: "Acer [Smartchoice] Aspire Lite AMD Ryzen 3 5300U Premium Thin and Light Laptop (Windows 11 Home/8 GB RAM/512 GB SSD) AL15-41 with 39.62 cm (15.6') Full HD Display, Metal Body, Steel Gray, 1.6 KG",
        rating: {
            ratingNo: "3.9",
            ratingImg: "https://cdn-icons-png.flaticon.com/128/992/992000.png"
        },
        Img: {
            mainImg: "https://m.media-amazon.com/images/I/61CC9Mx2+aL._SX569_.jpg",
            secImg: "https://m.media-amazon.com/images/I/61DGTh5pVfL._SX522_.jpg",
            thirdImg: "https://m.media-amazon.com/images/I/81aCWSKdz-L._SX569_.jpg",
            fourthImg: "https://m.media-amazon.com/images/I/71xcBBdAX9L._SX569_.jpg",
            fifthImg: "https://m.media-amazon.com/images/I/71T05W0naVL._SX569_.jpg"
        },
        price: " ₹28,990",
        about: {
            Processor: "AMD Ryzen 3 5300U Quad-Core Mobile Processor with AMD Radeon Graphics.Maximum Power Supply Wattage 65 W",
            RAM_Storage: "8 GB of Dual-channel DDR4, 2 SODIMM sockets| 512 GB SSD NVMe solid-state drive storage (expandable up to 1TB) to store your files and",
            Software: "Experience sharp details and crisp colors on the 15.6' Full HD display, 16:9 aspect ratio, ultra-slim design and narrow bezels.",
            Graphics_Keyboard: "100-/101-/104-key keyboard with independent numeric keypad, international language support",
            Ports: "1 x USB 3.2 Gen 1 (Type A), 2 x USB 2.0 (Type A), 1 x USB 3.2 Gen 2 (Type C), 1 x DC-in jack"
        }
    },
    {
        id: "DELL 14 LAPTOP-103",
        title: "DELL 14 LAPTOP",
        name: "Dell 14 Thin & Light Laptop, Intel 12th Gen Core i5-1235U Processor/8GB/512GB SSD/14.0' (35.56cm) FHD Display/Intel UHD Graphics/Spill-Resistant Keyboard/Win 11 + MSO'21/Black/15 Month McAfee, 1.48kg",
        rating: {
            ratingNo: "3.8",
            ratingImg: "https://cdn-icons-png.flaticon.com/128/992/992000.png"
        },
        Img: {
            mainImg: "https://m.media-amazon.com/images/I/71Eu1-dfTmL._SX569_.jpg",
            secImg: "https://m.media-amazon.com/images/I/41fpGJRJ7pL.jpg",
            thirdImg: "https://m.media-amazon.com/images/I/516bhCffjUL.jpg",
            fourthImg: "https://m.media-amazon.com/images/I/71PPCuJeMwL._SX569_.jpg",
            fifthImg: "https://m.media-amazon.com/images/I/71-PdmrSeRL._SX569_.jpg"
        },
        price: "₹46,490",
        about: {
            Processor: "Intel Core i5-1235U 12th Generation (up to 4.40 GHz, 12MB 10 Cores)",
            RAM_Storage: " 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
            Software: "Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi-Device Security 15-month subscription",
            Graphics_Keyboard: "Integrated Onboard Graphics & Standard Keyboard // Display: 14.0' FHD WVA AG Narrow Border 250 units",
            Ports: "1 USB 3.2 Gen 1 Type-C port with DisplayPort 1.4, 1 USB 3.2 Gen 1 port, 1 USB 2.0 port, 1 Headset jack, 1 HDMI 1.4 port*,1 Flip-Down RJ-45 port 10/100/1000 Mbps, 1 SD 3.0 card slot"
        }
    },
    {
        id: "LENOVO IDEAPAD 1-104",
        title: "LENOVO IDEAPAD 1",
        name: "Samsung Galaxy Book3 Core i5 13th Gen 1335U - (16 GB/512 GB SSD/Windows 11 Home) Galaxy Book3 Thin and Light Laptop (15.6 Inch, Silver, 1.58 Kg, with MS Office)",
        colour: "Silver",
        rating: {
            ratingNo: "4.0",
            ratingImg: "https://cdn-icons-png.flaticon.com/128/992/992000.png"
        },
        Img: {
            mainImg: "https://m.media-amazon.com/images/I/81NFEnJDJ6L._SX569_.jpg",
            secImg: "https://m.media-amazon.com/images/I/71xcRjRdqjL._SX569_.jpg",
            thirdImg: "https://m.media-amazon.com/images/I/618NDKgEtZL._SX569_.jpg",
            fourthImg: "https://m.media-amazon.com/images/I/71UNz2vAQRL._SX569_.jpg",
            fifthImg: "https://m.media-amazon.com/images/I/71DJaFMz79L._SX569_.jpg"
        },
        price: "₹61,690",
        about: {
            Processor: "13th Generation Intel Core i5-1335U processor (up to 4.6 GHz 12 MB L3 Cache)",
            RAM_Storage: "16 GB LPDDR4x Memory | 512 GB NVMe SSD, additional slot- expandable upto 1TB | Intel Iris Xe Graphics",
            Software: "MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch, Samsung Pass, Samsung Multi Control",
            Graphics_Keyboard: "Keyboard (Backlit) | FingerPrint Reader //Display: 15.6' (39.6 cm) | 1920 x 1080 resolution| 60Hz ",
            Ports: "2 USB 3.2 Gen 1 ports, 1 USB 2.0 port, 1 Headset jack, 1 HDMI 1.4 port, 1 SD 3.0 card slot, 1 Flip-Down RJ-45 port 10/100/1000 Mbps"
        }
    },
]

export default products