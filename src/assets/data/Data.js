import goodhealth from "../images/goodhealth.png";
import negliaEngineering from "../images/neglia_engineering_associates_logo.jpeg";
import nutleyCrew from "../images/nutley-crew.jpg";
import goryeb from "../images/goryeb.jpg";
import jayfund from "../images/jayfund.png";
import morristown from "../images/morristown.png";
import nutley1 from "../images/nutley1.png";
import nutley2 from "../images/nutley2.png";
import nutleyRotary from "../images/nutleyrotary.png";
import pinkyswear from "../images/pinkyswear.png";
import ridgewood from "../images/ridgewood.png";
import roscommon from "../images/roscommon.jpg";
import rownj from "../images/rownj.png";
import sarahsfight from "../images/sarahsfight.jpg";
import salon from "../images/salon.jpeg";
import salonmist from "../images/salonmist.png";
import sportsparadise from "../images/sportsparadise.png";
import sigep from "../images/sigep.png";
import triviaRevolution from "../images/trivia-rrevolution.jpg";
import varsityclub from "../images/varsityclub.PNG";
import bellPolice from "../images/bellpolice.jpeg";
import cabaret4a from "../images/cabaret4a.png";
import eCleaningLogo from "../images/e-cleaning-logo.png";
import florists from "../images/floristt.png";
import prra from "../images/prra.jpg";
import thunderclapWebheader from "../images/thunderclap-webheader.PNG";
import tidyupAuto from "../images/tidyupauto.PNG";
import bungalow from "../images/bungalow.png";
import westMilford from "../images/west-milford.jpg";
import womansClub from "../images/womans-club.png";
// Blogss Import starts here 
import blogImg1 from "../images/blog-1.webp";
import blogImg2 from "../images/bolg-img.png";
import blogImg3 from "../images/program-img.jpg";
// eventimages import 
import pastEvent1 from "../images/cancer.jpg";
import pastEvent2 from "../images/event-img.jpg";
import pastEvent3 from "../images/event-img-3.webp";
// comming events imports 
import CommingEvent1 from "../images/event-banner.webp";
import CommingEvent2 from "../images/event-pic.jpg";
import CommingEvent3 from "../images/carwash.jpg";


// Sponsors data array
export const sponsorsData = [
  { image: goodhealth, name: "Good Health Pharmacy", altText: "Good Health Pharmacy" },
  { image: negliaEngineering, name: "Neglia Engineering Associates", altText: "Neglia Engineering Associates Logo" },
  { image: nutleyCrew, name: "Nutley Crew", altText: "Nutley Crew" },
  { image: goryeb, name: "Goryeb Children's Hospital", altText: "Goryeb" },
  { image: jayfund, name: "Jay Fund Foundation", altText: "Jay Fund" },
  { image: morristown, name: "Morristown Medical Center", altText: "Morristown Medical Center" },
  { image: nutley1, name: "Nutley High School", altText: "Nutley 1" },
  { image: nutley2, name: "Nutley 2", altText: "Nutley 2" },
  { image: nutleyRotary, name: "Nutley Rotary Club", altText: "Nutley Rotary" },
  { image: pinkyswear, name: "Pinky Swear Foundation", altText: "Pinkyswear Foundation" },
  { image: ridgewood, name: "Ridgewood Savings Bank", altText: "Ridgewood" },
  { image: roscommon, name: "Roscommon Golf Course", altText: "Roscommon" },
  { image: rownj, name: "Row NJ", altText: "Row NJ" },
  { image: sarahsfight, name: "Sarah's Fight for Hope Foundation", altText: "Sarah's Fight" },
  { image: salon, name: "Salon Bliss", altText: "Salon" },
  { image: salonmist, name: "Salon Mist", altText: "Salon Mist" },
  { image: sportsparadise, name: "Sports Paradise", altText: "Sports Paradise" },
  { image: sigep, name: "Sigma Phi Epsilon Fraternity", altText: "SigEp" },
  { image: triviaRevolution, name: "Trivia Revolution", altText: "Trivia Revolution" },
  { image: varsityclub, name: "Varsity Club", altText: "Varsity Club" },
  { image: bellPolice, name: "Bell Police Department", altText: "Bell Police" },
  { image: cabaret4a, name: "Cabaret 4A", altText: "Cabaret 4A" },
  { image: eCleaningLogo, name: "E-Cleaning Services", altText: "E-Cleaning Logo" },
  { image: florists, name: "Nutley Florists", altText: "Florist" },
  { image: prra, name: "Passaic River Rowing Association (PRRA)", altText: "PRRA" },
  { image: thunderclapWebheader, name: "Thunderclap Productions", altText: "Thunderclap Webheader" },
  { image: tidyupAuto, name: "Tidy Up Auto Spa", altText: "Tidy Up Auto" },
  { image: bungalow, name: "Bungalow Restaurant", altText: "Bungalow" },
  { image: westMilford, name: "West Milford Rotary Club", altText: "West Milford" },
  { image: womansClub, name: "Nutley Woman's Club", altText: "Woman's Club" },
];
// Events data 
export const eventsData = [
  {
    id: 1,
    title: "Annual Leukemia Walkathon",
    date: "March 25, 2024",
    location: "Central Park, NYC",
    description:
      "Join us for a walkathon to raise funds and awareness for childhood leukemia. Be a part of our mission to save lives!",
    buttonUrl: "/",
    buttonText: "Register Now",
    img: CommingEvent1,
  },
  {
    id: 2,
    title: "Penelope's Car Wash for a Cause",
    date: "April 15, 2024", // Adjust the date if needed
    location: "Main Street Parking Lot, Los Angeles",
    description:
    "$20 includes a car wash, free snacks, drinks, and 5 minutes in a bouncy castle. All proceeds support Penelope's fight against leukemia.",
    buttonUrl: "/donate-now",
    buttonText: "Donate & Join",
    img: CommingEvent2, // Replace with the correct image path
  },
  
  {
    id: 3,
    title: "Charity Gala Night",
    date: "April 15, 2024",
    location: "The Grand Hall, Los Angeles",
    description:
      "A night to remember with dinner, entertainment, and charity auctions. All proceeds go to supporting leukemia patients.",
    buttonUrl: "/",
    buttonText: "Buy Tickets",
    img: CommingEvent3,
  },
];

export const pastEventsData = [
  {
    id: 1,
    title: "2023 Awareness Run",
    date: "October 10, 2023",
    location: "Boston, MA",
    description:
      "Hundreds came together to raise awareness and funds for leukemia research. Thank you to everyone who participated!",
    img: pastEvent1,
  },
  {
    id: 2,
    title: "2023 Charity Auction",
    date: "December 15, 2023",
    location: "San Francisco, CA",
    description:
      "An evening of philanthropy and fun. Over $50,000 was raised for leukemia support programs.",
    img: pastEvent2,
  },
  {
    id: 3,
    title: "2023 Charity Auction",
    date: "December 15, 2023",
    location: "San Francisco, CA",
    description:
      "An evening of philanthropy and fun. Over $50,000 was raised for leukemia support programs.",
    img: pastEvent3,
  },
];

export const blogsData = [
  {
    id: 1,
    title: "10 Ways to Support Cancer Patients",
    date: "January 5, 2024",
    description:
      "Learn practical ways to support cancer patients and their families during challenging times.",
    buttonUrl: "/blog/10-ways-to-support",
    buttonText: "Read More",
    img: blogImg1,
  },
  {
    id: 2,
    title: "The Impact of Fundraising Events",
    date: "February 10, 2024",
    description:
      "Discover how your participation in our events makes a lasting impact on leukemia research and patient care.",
    buttonUrl: "/blog/impact-of-fundraising",
    buttonText: "Learn More",
    img: blogImg2,
  },
  {
    id: 3,
    title: "The Impact of Fundraising Events",
    date: "February 10, 2024",
    description:
      "Discover how your participation in our events makes a lasting impact on leukemia research and patient care.",
    buttonUrl: "/blog/impact-of-fundraising",
    buttonText: "Learn More",
    img: blogImg3,
  },
];
