// Portfolio Data - Common and Specific Information

const portfolioData = {
  common: {
    name: "Yogesh Pruthi",
    tagline: "Electronics & Computer Engineering Student | Tech Enthusiast",
    phone: "+91 9253624784",
    email: "pruthiyogesh3@gmail.com",
    linkedin: "https://www.linkedin.com/in/yogesh-pruthi-a76375274",
    
    about: `B.Tech student in Electronics & Computer Engineering with a strong foundation in programming, 
    embedded systems, and hardware-software integration. Passionate about developing real-world solutions 
    and eager to learn from industry experts while contributing meaningfully to innovative systems.`,
    
    education: [
      {
        degree: "B.Tech in Electronics and Computer Science",
        institution: "Dronacharya College of Engineering, Khentawas (Gurugram)",
        duration: "2022 – 2026",
        details: "Currently pursuing"
      },
      {
        degree: "Senior Secondary (Class 12th)",
        institution: "DAV Centenary Public School (Bahadurgarh)",
        duration: "2022",
        details: "Percentage: 63%"
      },
      {
        degree: "Secondary Education (Class 10th)",
        institution: "SD. Sr. Sec School (Bahadurgarh)",
        duration: "2020",
        details: "Percentage: 74%"
      }
    ],
    
    achievements: [
      {
        title: "Kotlin in Web Development",
        description: "Certification in Kotlin for web development applications"
      },
      {
        title: "Virtual Labs Workshop",
        description: "Attended workshop on 'Virtual Labs: IIT DELHI' held on November 21st, 2022"
      }
    ]
  },
  
  software: {
    objective: `B.Tech student in Electronics & Computer Engineering with a strong foundation in Java, 
    Data Structures, Embedded Systems, and PCB Design. Passionate about developing real-world solutions 
    through hardware-software integration. Eager to begin my professional journey with innovative companies 
    where I can apply my technical skills and contribute to smart automation systems.`,
    
    skills: [
      {
        category: "Programming",
        items: ["C", "Java", "Data Structures & Algorithms"]
      },
      {
        category: "Web Development",
        items: ["HTML", "CSS", "Responsive Front-end Design"]
      },
      {
        category: "Platforms & Tools",
        items: ["Arduino IDE", "Git", "Version Control"]
      },
      {
        category: "PCB Design",
        items: ["EasyEDA", "KiCAD (Basic)"]
      },
      {
        category: "Electronics",
        items: ["Analog Electronics", "Digital Electronics", "Soldering", "Multimeter", "Sensor Handling"]
      }
    ],
    
    projects: [
      {
        title: "Line Follower Robot",
        description: "Developed an Arduino-based robot using IR sensors for autonomous line following",
        highlights: [
          "Implemented basic PID logic for line correction",
          "Designed and etched the PCB layout for compact integration",
          "Integrated multiple sensors for accurate path detection"
        ],
        tech: ["Arduino", "IR Sensors", "PCB Design", "PID Control"]
      },
      {
        title: "Automatic Vacuum Cleaner",
        description: "Created an autonomous vacuum cleaner that navigates rooms and provides user instructions",
        highlights: [
          "Implemented obstacle detection using ultrasonic sensors",
          "Integrated servo motors for precise movement control",
          "Added user interaction features for instructions"
        ],
        tech: ["Arduino", "Servo Motors", "Ultrasonic Sensors", "Motor Wheels"]
      },
      {
        title: "Automatic Street Light System",
        description: "Built an automatic street light on/off system using Light Dependent Resistor (LDR)",
        highlights: [
          "Implemented light sensing mechanism",
          "Energy-efficient solution for street lighting",
          "Automatic switching based on ambient light levels"
        ],
        tech: ["LDR", "Arduino", "Relay Module", "Power Management"]
      },
      {
        title: "Number Guessing Game",
        description: "Created a simple command-line number guessing game using core Java",
        highlights: [
          "Implemented game logic and user interaction",
          "Random number generation and validation",
          "Score tracking and difficulty levels"
        ],
        tech: ["Java", "Command Line Interface", "Algorithm Design"]
      }
    ],
    
    experience: [
      {
        title: "Information & Technology Intern",
        company: "Airport Authority of India (AAI)",
        duration: "June 2024 – July 2024",
        description: [
          "Contributed to the development of AAI's official website",
          "Focused on user experience and accessibility for diverse stakeholders",
          "Worked on responsive design for passengers and staff interfaces"
        ]
      }
    ],
    
    resumeFile: "software-resume.pdf"
  },
  
  networking: {
    objective: `B.Tech student in Electronics & Computer Engineering with a strong foundation in 
    Data Structures, Embedded Systems, and Networking. Passionate about developing real-world solutions 
    through hardware-software integration. Eager to begin my professional journey in network engineering 
    where I can apply my technical skills and contribute to innovative network solutions.`,
    
    skills: [
      {
        category: "Programming",
        items: ["C", "Data Structures & Algorithms"]
      },
      {
        category: "Web Development",
        items: ["HTML", "CSS", "Responsive Front-end Design"]
      },
      {
        category: "Networking Fundamentals",
        items: ["OSI Model", "TCP/IP Model", "IPv4/IPv6 Addressing", "Subnetting", "NAT", "DNS"]
      },
      {
        category: "Routing & Switching",
        items: ["VLANs", "STP", "EtherChannel", "OSPF", "EIGRP", "BGP", "IS-IS"]
      },
      {
        category: "WAN & VPN",
        items: ["MPLS", "GRE", "IPSec VPN", "SD-WAN"]
      },
      {
        category: "Tools & Platforms",
        items: ["Arduino IDE", "Git", "Network Monitoring Tools"]
      }
    ],
    
    projects: [
      {
        title: "Line Follower Robot",
        description: "Developed an Arduino-based robot using IR sensors for autonomous line following",
        highlights: [
          "Implemented basic PID logic for line correction",
          "Designed and etched the PCB layout for compact integration",
          "Integrated multiple sensors for accurate path detection"
        ],
        tech: ["Arduino", "IR Sensors", "PCB Design", "PID Control"]
      },
      {
        title: "Automatic Vacuum Cleaner",
        description: "Created an autonomous vacuum cleaner that navigates rooms and provides user instructions",
        highlights: [
          "Implemented obstacle detection using ultrasonic sensors",
          "Integrated servo motors for precise movement control",
          "Added user interaction features for instructions"
        ],
        tech: ["Arduino", "Servo Motors", "Ultrasonic Sensors", "Motor Wheels"]
      },
      {
        title: "Automatic Street Light System",
        description: "Built an automatic street light on/off system using Light Dependent Resistor (LDR)",
        highlights: [
          "Implemented light sensing mechanism",
          "Energy-efficient solution for street lighting",
          "Automatic switching based on ambient light levels"
        ],
        tech: ["LDR", "Arduino", "Relay Module", "Power Management"]
      },
      {
        title: "Number Guessing Game",
        description: "Created a simple command-line number guessing game using core Java",
        highlights: [
          "Implemented game logic and user interaction",
          "Random number generation and validation",
          "Score tracking and difficulty levels"
        ],
        tech: ["Java", "Command Line Interface", "Algorithm Design"]
      }
    ],
    
    experience: [
      {
        title: "Information & Technology Intern",
        company: "Airport Authority of India (AAI)",
        duration: "June 2024 – July 2024",
        description: [
          "Contributed to the development of AAI's official website",
          "Focused on user experience and accessibility for diverse stakeholders",
          "Worked on responsive design for passengers and staff interfaces"
        ]
      },
      {
        title: "Network Intern",
        company: "STCS (System/Network Intern)",
        duration: "2025 – Present",
        description: [
          "Assisted in network troubleshooting and performance monitoring",
          "Supported in IP addressing, router configuration, and auditing tasks",
          "Learned network optimization techniques by shadowing senior engineers",
          "Documented technical issues and solutions, ensuring process standardization",
          "Gained exposure to shift-based NOC operations and SLA adherence"
        ]
      }
    ],
    
    resumeFile: "networking-resume.pdf"
  }
};

export default portfolioData;