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
      price: "R1400",
      venue: "St John's College",
      address: "St Johns College, Saint David Road, Johannesburg",
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
        link: {
          href: "http://twitter.com/ddd",
          text: "@dfdslajfasdofjas"
        },
        presentation: {
          title: "TBC",
          description: "dddddd",
          time: "9h00"
        }
      },

      {
        name: "Professor Romeel Davé",
        photo: "themes/yellow-swan/img/Romeel_Dave.jpg",
        bio: "Prof. Davé obtained his A.B. in Physics from the University of California, Berkeley, his M.S. in Physics from California Institute of Technology, and his Ph.D. in Astronomy & Astrophysics from the University of California, Santa Cruz in 1998.  After that, he was awarded a Lyman J. Spitzer Postdoctoral Fellowship at Princeton, and in 2000 received a Hubble Fellowship, which he took to the University of Arizona.  In 2003, he was hired as an Assistant Professor at Arizona, and obtained tenure in 2009.  He took up the SARChI Chair at UWC in January 2013.  Currently, Prof. Davé has over 100 publications, 7000 citations, and in addition to leading a high-profile research group, he is involved in numerous major international observational and theoretical projects using Hubble, MeerKAT, and others telescopes.",
        company: "University of the Western Cape",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Simulations of Galaxy Evolution",
          description: "dddddd",
          time: "10h00"
        }
      },
      
      {
        name: "Bridget Fleming",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "to get from Colleen",
        company: "St John's College",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Geography Teachers' Association",
          description: "dfdfdafasf",
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
          description: "dddd",
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
          description: "dddd",
          time: "16h30"
        }
      },
      {
        name: "Kosma von Maltitz",
        photo: "themes/yellow-swan/img/Kosma_von_Maltitz.jpg",
        bio: "",
        company: "Siyavula Education",
        link: {
          href: "http://twitter.com/rjallain",
          text: "@rjallain"
        },
        presentation: {
          title: "dfdfdfd",
          description: "dddd",
          time: "17h30"
        }
      },
      {
        name: "Spit braai",
        time: "19h00"
      },
      {
        name: "Observing",
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
          title: "yyyy",
          description: "dfdaf",
          time: "9h30"
        }
      },
      {
        name: "Dr Trisha Salagaram (TBC)",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "------",
        company: "University of Pretoria",
        link: {
          href: "http://twitter.com/iasdf",
          text: "@asdf"
        },
        presentation: {
          title: "asdf",
          description: "asdf",
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
        bio: "",
        company: "University of Cape Town",
        link: {
          href: "http://github.com/ddd",
          text: "@billy95"
        },
        presentation: {
          title: "An update on PER",
          description: "dfdfdafasf",
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
        bio: "asdf",
        company: "Siyavula Education",
        link: {
          href: "http://twitter.com/meganbeckett2",
          text: "@meganbeckett2"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "dddd",
          time: "14h00"
        }
      },
      {
        name: "Adam Reynolds",
        photo: "themes/yellow-swan/img/Adam_Reynolds.jpg",
        bio: "asdf",
        company: "Siyavula Education",
        link: {
          href: "http://github.com/educationmonger",
          text: "@educationmonger"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h00"
        }
      },
      {
        name: "Coffee-break",
        time: "16h00"
      },
      {
        name: "Dr Spencer Wheaton",
        photo: "themes/yellow-swan/img/Spencer_Wheaton.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/spencer_wheaton",
          text: "@spencer_wheaton"
        },
        presentation: {
          title: "Simulations in Physics, teaching, researhc etc.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h30"
        }
      },
      {
        name: "Mark Horner",
        photo: "themes/yellow-swan/img/Mark_Horner.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/marknewlyn",
          text: "@marknewlyn"
        },
        presentation: {
          title: "Wrap up and plans for 2017",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h30"
        }
      },
      {
        name: "Departure ... till 2017",
        time: "18h00"
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
