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
      //price: "R1550",
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
        name: "Dr Colleen Henning",
        photo: "themes/yellow-swan/img/Colleen_Henning.jpg",
        bio: "Colleen began her career in particle physics. While tutoring university students and teaching part-time as a postgraduate, she discovered her talent for teaching and her love of making a difference to others. As a science teacher in South Africa, she works with students from all kinds of backgrounds and makes a point of teaching tolerance in her classes by encouraging group work and discussions. Her students receive awards at international science fairs. One student team won the CERN Beam Line for Schools competition and was invited to conduct experiments on site at CERN. Colleen is very active in online communities and has authored open source text books. She shares her teaching materials and experience. She organised the first South African physics teacher conference in 2015 and is working towards founding an association of science teachers. She has also contributed to textbooks which are distributed free of charge to public schools in South Africa.",
        company: "St Johns College",
        link: {
          href: "http://twitter.com/colleen_henning",
          text: "@colleen_henning"
        },
        presentation: {
          title: "Welcome address",
          description: "Welcome by St John's College.",
          time: "9h15"
        }
      },
      
      {
        name: "Surprise guest speaker",
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
        bio: "Romeel was born in California and grew up mostly in the U.S. with a few early years in India.  He received his bachelor’s in Physics from Berkeley, a Master’s in Physics from Caltech, and a Ph.D. in Astronomy from U.C. Santa Cruz.  He was awarded a Lyman Spitzer postdoctoral fellowship at Princeton, followed by a Hubble Fellowship that he took to the University of Arizona.  After three years he was demoted to faculty at Arizona, where he remained for 9 years until moving to Cape Town in 2013.  He is currently the South African Research Chair in Cosmology with Multi-wavelength Data, which is split between the University of the Western Cape, and the South African Astronomical Observatories, and the African Institute for Mathematical Sciences.  He studies computational galaxy formation and cosmology, which is one of the fastest-growing areas of astrophysics in the world today.  His research aims to answer a fundamental question of our existence: Why does the Universe look the way it does?",
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
        name: "Prof. David Wolfe",
        photo: "themes/yellow-swan/img/David_Wolfe.jpg",
        bio: "David Wolfe earned a PhD in Physics from the University of Pennsylvania in 1966. He has taught
            and done research at the Universities of Chicago, Washington, and New Mexico in the US. His
            research has been in high energy experimental physics, including experiments at Brookhaven
            National Labs and at CERN, amongst others. He was worked at labs in Europe and Russia. Since
            moving to the UK in 2000, he has taught in Britain at various secondary schools. From 2012, he
            has been the UK Institute of Physics Coordinator for a teacher training programme in South Africa,
        where he also teaches part-time at UCT.",
        company: "Institute of Physics",
        link: {
          href: "https://uk.linkedin.com/in/david-wolfe-85128a21",
          text: "LinkedIn"
        },
        presentation: {
          title:"", 
          description: "",
          time: "11h00"
        }
      },
      {
        name: "Tea / Coffee",
        time: "11h30"
      },
      
      {
        name: "Bridget Fleming",
        photo: "themes/yellow-swan/img/Bridget_Flemming.jpg",
        bio: "Bridget Fleming is a passionate advocate for using Geotechnologies in the classroom. She was the IEB geography national examiner, sat on the UMALUSI adult education curriculum advisory board for geography and has authored a number of textbooks and digital classroom resources. She has recently returned to the classroom after a few years of running a start-up GIS company where she was involved in Geospatial education and training. She is Co-chair of Geo4All Africa, is on the National GISSA council (Education) and is the Chair of the Southern African Geography Teachers’ Association (SAGTA). She is presently HOD Geography at St John’s College.",
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
        company: "Southeastern Louisiana University",
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
          title: "Exoplanets - could there be more planets than stars?",
          description: "Exoplanets - planets orbiting stars other than our own - capture our imagination. Since first finding planets outside of our solar system in 1992 our tally of them has been steadily growing, but this year it made a radical jump. On 10th May NASA announced the confirmation of 1284 new planets, shooting the verified exoplanet count up from 1980 to 3264 in one stunning swoop. How do we find these planets? Do these other planetary systems mimic our own? Have we found any planets that humans could live on? And how can you and your students help in the search for more planets?",
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
        bio: "Dr. Carolina Ödman-Govender studied physics engineering at the Swiss Federal Institute of Technology before completing a Ph.D. in astrophysics at the University of Cambridge. After a research post in Italy, she joined Leiden University in the Netherlands to develop Universe Awareness, an award-winning international astronomy education programme. She is one of the co-organisers of the .astronomy (dot-astronomy) workshops exploring the frontiers between technology and astronomy, from education to research. She is currently associate scientist with SKA Africa and works on various science for development projects. She is also Chief Scientist at thumbzup, a South African startup in financial technology and she is a proud mum of two boys.",
        company: "Thumbzup Innovations",
        link: {
          href: "http://twitter.com/carolune",
          text: "@carolune"
        },
        presentation: {
          title: "Once a physicist, always a physicist",
          description: "What careers can a physicist have and what does being a physicist mean in the professional world? What skills do physicists bring? What value does it add to hire someone with a physics degree? I hope to convey the seemingly endless possibilities that are available to those physicists who are willing to reinvent themselves in different contexts.",
          time: "9h30"
        }
      },
      {
        name: "Dr Trisha Salagaram",
        photo: "themes/yellow-swan/img/Trisha_Salagaram.jpg",
        bio: "Trisha Salagaram is a lecturer in the department of Physics at the University of Cape Town. Her current research interest is Computational Physics Education Research. Previous research interests include theoretical and computational studies of liquid-phase sintering of silicon nitride and diamond synthesis. She completed her undergraduate studies (1997-2000) and a Masters degree in Physics (2002) at the University of Natal, and completed a PhD in Physics (2008) from the University of Kwazulu-Natal.",
        company: "University of Pretoria",
        link: {
          href: "https://za.linkedin.com/in/trisha-salagaram-5b48032a",
          text: "LinkedIn"
        },
        presentation: {
          title: "The importance of computational physics, it's key role in research and what this means for teaching physics",
          description: "Computational physics is an established method of conducting physics research where problems are solved on a computer. It allows researchers to study phenomena that are not easily or completely studied by theoretical or experimental means. In addition computational physics is a valuable pedagogical tool which has been shown to enhance students understanding on physics concepts. Computational physics education research is a relatively new field of research. My interest lies in developing computational paradigms to enhance the understanding of physics at undergraduate level at tertiary institutions and at high school level. At the undergraduate level this entails translating current physics research in advanced topics to simplified physics problems that can be solved on the computer in the classroom. At high school level my interest lies in developing simple physics problems relevant to the national physical science curriculum, from which students must create interactive simulations through Easy Java Simulations (Ejs). In this talk I will give an overview of computational physics in South African and its relevance to Science, particularly in the African context. I will also present the results from my research projects in computational physics education.",
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
        name: "Accelerating Africa",
        photo: "themes/yellow-swan/img/Accelerating_Africa.jpg",
        bio: "Report back from the team that won the 2015 CERN Beamline Competition.",
        company: "Siyavula Education",
     //   link: {
     //     href: "http://twitter.com/",
      //    text: "@marknewlyn"
      //  },
        presentation: {
          title: "Lighting the way",
          description:"A team of budding young South African scientists won the CERN Beamline Competition in 2015. A report back from the team on their experience and the science.",
          time: "14h00"
        }
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
          time: "15h00"
        }
      },
      {
        name: "Tea / Coffee-break",
        time: "16h00"
      },
      {
        name: "Adam Reynolds",
        photo: "themes/yellow-swan/img/Adam_Reynolds.jpg",
        bio: "Adam has a BSc (majoring in Physics, Astrophysics, Mathematics & Applied Mathematics) and a PGCE from UCT. In addition to being the Physics lead at Siyavula he teaches matric Physical Sciences part-time at Pinelands High School and is also a senior marker for Physics (NSC).",
        company: "Siyavula Education",
        link: {
            href: "https://za.linkedin.com/in/adam-reynolds-87739916", //"http://twitter.com/educationmonger",
          text: "LinkedIn"
        },
        presentation: {
          title: "Completing the Circuit 2 - Connecting components in the electric circuits teaching-learning cycle",
          description: "This workshop aims to look at some specific learning strategies that can be applied to the learning (and teaching) of electric circuits in Grades 10 to 12 Physical Sciences. Some specific concepts in electric circuits theory (e.g. potential difference; emf and internal resistance; resistance) will be included as discussion points. The purpose of including specific topics is not to teach any content, but rather to discuss how we teach the content. What analogies do we use? How do we sequence the concepts? What are the potential advantages and disadvantages that result from any particular decision we make? This workshop will be very much hands-on and interactive.",
          time: "16h30"
        }
      },
      {
        name: "Mark Horner",
        photo: "themes/yellow-swan/img/Mark_Horner.jpg",
        bio: "Mark has a Ph.D. in Nuclear Physics and is a former Shuttleworth Fellow. He initiated the Free High School Science Texts project way back in 2002. This formed the foundation upon which Siyavula is built today.",
        company: "Siyavula Education",
        link: {
          href: "http://twitter.com/marknewlyn",
          text: "@marknewlyn"
        },
        presentation: {
          title: "Wrap up and plans for 2017",
          description:"Dates, interests, expansion, and ideas.",
          time: "17h30"
        }
      },
      {
        name: "Departure ... till 2017",
        time: "18h15"
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
