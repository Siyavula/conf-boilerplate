module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Physics Teachers' Conference 2016",
      description: "Conference description",
      date: "1st & 2nd July 2016",
      // If your event is free, just comment this line
      price: "R1550",
      venue: "St John's College",
      address: "St Johns College, St David Road, Houghton, 2198",
      city: "Johannesburg"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "http://qkt.io/4zONvZ"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-36803708-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [[
      {
        name: "Tea / Coffee & Registration",
        time: "9h00"
      },
      {
        name: "Paul Edey",
        photo: "themes/yellow-swan/img/StJohnsHeadmaster.jpg",
        bio: "Headmaster",
        company: "St Johns College",
        link: {
          href: "http://twitter.com/stjohns_college",
          text: "@stjohns_college"
        },
        presentation: {
          title: "Welcome address",
          description: "Welcome by St John's College Headmaster.",
          time: "9h15"
        }
      },
      
      {
        name: "???",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "------",
        company: "??",
        //link: {
        //  href: "http://twitter.com/ddd",
        //  text: "@dfdslajfasdofjas"
        //},
        presentation: {
          title: "TBC",
          description:"",
          time: "9h30"
        }
      },

      {
        name: "Professor Romeel Davé",
        photo: "themes/yellow-swan/img/Romeel_Dave.jpg",
        bio: "Prof. Davé obtained his A.B. in Physics from the University of California, Berkeley, his M.S. in Physics from California Institute of Technology, and his Ph.D. in Astronomy & Astrophysics from the University of California, Santa Cruz in 1998.  After that, he was awarded a Lyman J. Spitzer Postdoctoral Fellowship at Princeton, and in 2000 received a Hubble Fellowship, which he took to the University of Arizona.  In 2003, he was hired as an Assistant Professor at Arizona, and obtained tenure in 2009.  He took up the SARChI Chair at UWC in January 2013.  Currently, Prof. Davé has over 100 publications, 7000 citations, and in addition to leading a high-profile research group, he is involved in numerous major international observational and theoretical projects using Hubble, MeerKAT, and others telescopes.",
        company: "University of the Western Cape",
        link: {
            href: "https://za.linkedin.com/in/romeel-dave-885b59",
          text: "LinkedIn"
        },
        presentation: {
          title: "Simulations of Galaxy Evolution",
          description: "",
          time: "10h00"
        }
      },
      
      {
        name: "Bridget Fleming",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "To get from Colleen",
        company: "St John's College",
//        link: {
//          href: "http://github.com/billy95",
//          text: "@billy95"
//        },
        presentation: {
          title: "Geography Teachers' Association",
          description: "In the spirit of - the experience of setting up a Geography Teachers' Association - what worked, what didn't work and what would be done differently if they had to do it over again",
          time: "12h00"
        }
      },
      {
        name: "Lunch",
        time: "13h00"
      },
      {
        name: "Associate Professor Rhett Allain",
        photo: "themes/yellow-swan/img/Rhett_Allain.jpg",
        bio: "Rhett Allain is an associate professor of physics at Southeastern Louisiana University and the author of the Wired magazine science blog Dot Physics. He received his Ph.D. from North Carolina State University in 2001 and works in the field of physics education research. In his blog, Dot Physics, Allain discusses physical concepts, answers questions related to physics and math, and debunks questionable physical claims. Many of his posts are supported by experiments, calculations and models. Recently, he has analyzed the physics behind the Angry Birds Space video game and behind a now-debunked video which purported to show a man flying with home-made wings. He has also criticized television shows, including Fight Science, that perform poorly controlled experiments which are presented as scientific.",
        company: "Southern Louisiana State University",
        link: {
          href: "http://twitter.com/rjallain",
          text: "@rjallain"
        },
        presentation: {
          title: "Computational Physics for High School Teachers",
          description: "In the spirit of - using simple computational physics tools to understand and visualise physics in action.",
          time: "14h00"
        }
      },
      {
        name: "Tea / Coffee",
        time: "16h00"
      },
      {
        photo: "themes/yellow-swan/img/Rhett_Allain.jpg",
        presentation: {
          title: "Computational Physics for High School Teachers, Part 2",
          description: "",
          time: "16h30"
        }
      },
      {
        name: "Kosma von Maltitz",
        photo: "themes/yellow-swan/img/Kosma_von_Maltitz.jpg",
        bio: "Kosma has a MSc in Astrophysics and Space Science. At Siyavula she coordinates the EdTech Production Team and creates Physics content. Kosma also presents shows at the Iziko Planetarium and does Astronomy outreach whenever she gets a chance.",
        company: "Siyavula Education",
        link: {
          href: "http://twitter.com/kosmavm",
          text: "@kosmavm"
        },
        presentation: {
          title: "Exo-planets",
          description: "In the spirit of - exo-planets, recent discoveries",
          time: "17h30"
        }
      },
      {
        name: "Spit braai",
        time: "19h00"
      },
      {
        name: "Observing - bring warm clothing",
        time: "20h00"
      },
    ],
    [
      {
        name: "Tea / Coffee",
        time: "9h00"
      },
      {
        name: "Check-in and feedback",
        time: "9h15"
      },
      {
        name: "Dr Carolina Ödman-Govender",
        photo: "themes/yellow-swan/img/Carolina_Odman-Govender.jpeg",
        bio: "------",
        company: "Thumbzup Innovations",
        link: {
          href: "http://twitter.com/carolune",
          text: "@carolune"
        },
        presentation: {
          title: "Once a physicist, always a physicist and the opportunities outside of academia",
          description: "In the spirit of - once a physicist, always a physicist and the opportunities outside of academia",
          time: "9h30"
        }
      },
      {
        name: "Dr Trisha Salagaram (TBC)",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Bio pending",
        company: "University of Pretoria",
        link: {
          href: "https://za.linkedin.com/in/trisha-salagaram-5b48032a",
          text: "LinkedIn"
        },
        presentation: {
          title: "The importance of computational physics, it's key role in research and what this means for teaching physics",
          description: "In the spirit of - the importance of computational physics, it's key role in research and what this means for teaching physics",
          time: "10h30"
        }
      },
      {
        name: "Tea / Coffee",
        time: "11h30"
      },
      {
        name: "Associate Professor Saalih Allie",
        photo: "themes/yellow-swan/img/Saalih_Allie.jpg",
        bio: "Bio pending",
        company: "University of Cape Town",
        link: {
          href: "http://www.phy.uct.ac.za/phy/people/academic/allie",
          text: "UCT"
        },
        presentation: {
          title: "Physics Education Research (PER)",
          description: "In the spirit of - what research is happening, what should teachers be aware of and where can they contribute",
          time: "12h00"
        }
      },
      {
        name: "Lunch",
        time: "13h00"
      },
      {
        name: "Megan Beckett",
        photo: "themes/yellow-swan/img/Megan_Beckett.jpg",
        bio: "With a MSc in Molecular Biology, Megan followed her goal to make STEM education engaging, relevant and accessible. She leads the research, analytics and pedagogical design for Siyavula's current and future e-learning experiences. She works to advance open education.",
        company: "Siyavula Education",
        link: {
          href: "http://twitter.com/meganbeckett2",
          text: "@meganbeckett2"
        },
        presentation: {
          title: "Completing the Circuit 1 - Connecting components in the electric circuits teaching-learning cycle",
          description: "This workshop aims to look at some specific learning strategies that can be applied to the learning (and teaching) of electric circuits in Grades 10 to 12 Physical Sciences. Some specific concepts in electric circuits theory (e.g. potential difference; emf and internal resistance; resistance) will be included as discussion points. The purpose of including specific topics is not to teach any content, but rather to discuss how we teach the content. What analogies do we use? How do we sequence the concepts? What are the potential advantages and disadvantages that result from any particular decision we make? This workshop will be very much hands-on and interactive.",
          time: "14h00"
        }
      },
      {
        name: "Adam Reynolds",
        photo: "themes/yellow-swan/img/Adam_Reynolds.jpg",
        bio: "Adam has a BSc (majoring in Physics, Astrophysics, Mathematics & Applied Mathematics) and a PGCE from UCT. In addition to being an Educational Technologist he still teaches Physical Sciences part-time and is also a matric marker for Physics.",
        company: "Siyavula Education",
        link: {
          href: "http://github.com/educationmonger",
          text: "@educationmonger"
        },
        presentation: {
          title: "Completing the Circuit 2 - Connecting components in the electric circuits teaching-learning cycle",
          description: "This workshop aims to look at some specific learning strategies that can be applied to the learning (and teaching) of electric circuits in Grades 10 to 12 Physical Sciences. Some specific concepts in electric circuits theory (e.g. potential difference; emf and internal resistance; resistance) will be included as discussion points. The purpose of including specific topics is not to teach any content, but rather to discuss how we teach the content. What analogies do we use? How do we sequence the concepts? What are the potential advantages and disadvantages that result from any particular decision we make? This workshop will be very much hands-on and interactive.",
          time: "15h00"
        }
      },
      {
        name: "Coffee-break",
        time: "16h00"
      },
      {
        name: "Mark Horner",
        photo: "themes/yellow-swan/img/Mark_Horner.jpg",
        bio: "Mark has a Ph.D. in Nuclear Physics and is a former Shuttleworth Fellow. He initiated the Free High School Science Texts project way back in 2002. This formed the foundation upon which Siyavula is built today.",
        company: "Facebook",
        link: {
          href: "http://twitter.com/marknewlyn",
          text: "@marknewlyn"
        },
        presentation: {
          title: "Wrap up and plans for 2017",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h30"
        }
      },
      {
        name: "Departure ... till 2017",
        time: "17h15"
      },
    ]
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Siyavula Education",
        logo: "themes/yellow-swan/img/SiyavulaLogo.png",
        url: "http://www.siyavula.com"
      },
      {
        name: "St John's College",
        logo: "themes/yellow-swan/img/StJohnsLogo.png",
        url: "http://www.stjohnscollege.co.za"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
