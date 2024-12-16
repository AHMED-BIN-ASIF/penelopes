import chandelier from "../images/chandelierbelle.jpg";
import chandelierFlanders from "../images/chandelierflanders.jpeg";
import touchOfEleganceFlorist from "../images/floristt.png";
import cabaret4aCure from "../images/cabaret4a.png";
import thunderClapCreative from "../images/thunderclapwebheader.png";
import womansClubBelleville from "../images/women-club.png";
import nutleyAthleticDepartment from "../images/nutley-athletlics.png";
import westMilfordBoosters from "../images/west-milford.jpg";
import nutleyCrew from "../images/nutley-crew.jpg";
import bellevillePolice from "../images/bellpolice.jpeg";
import stBenedictsAthletics from "../images/csbathl.png";
import sportsParadise from "../images/sportsparadise.png";
import ridgewoodAthletics from "../images/ridgewoodath.png";
import passaicRiverRowing from "../images/prra.jpg";
import eCleaning from "../images/e-cleaning.png";
import negliaEngineering from "../images/neglia_engineering_associates_logo.jpeg";
import nutleyRotary from "../images/nutleyrotary.png";
import varsityClubProducts from "../images/varsityclub.png";
import tidyUpAuto from "../images/tidyupauto.png";
import rowNewJersey from "../images/rownj.png";
import smartWayUnlimited from "../images/smartway.png";
import bungalowHomeStagers from "../images/bungalow.png";
import roscommonHouse from "../images/roscommon.jpg";
import jayFund from "../images/jayfund.png";
import sarahsFight from "../images/sarahsfight.jpg";
import jmaVending from "../images/jmavendingllc.jpeg";
import goryebHospital from "../images/goryeb.jpg";
import triviaRevolution from "../images/trivia-rrevolution.jpg";
import salonMistris from "../images/salonmist.png";
import goodHealthPharmacy from "../images/goodhealth.png";
import djmc from "../images/djmc.jpeg";
import sigmaPhiEpsilon from "../images/sigep.png";
import nicholasWhilborgFoundation from "../images/nicholaswihlborg.jpg";
import pinkySwearFoundation from "../images/pinkyswear.png";    

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
  { image: chandelier, name: "The Chandelier", altText: "The Chandelier" },
  { image: chandelierFlanders, name: "The Chandelier at Flanders Valley", altText: "The Chandelier at Flanders Valley" },
  { image: touchOfEleganceFlorist, name: "Touch of Elegance Florist", altText: "Touch of Elegance Florist" },
  { image: cabaret4aCure, name: "Cabaret 4 A Cure", altText: "Cabaret 4 A Cure" },
  { image: thunderClapCreative, name: "Thunder Clap Creative", altText: "Thunder Clap Creative" },
  { image: womansClubBelleville, name: "Woman's Club of Belleville", altText: "Woman's Club of Belleville" },
  { image: nutleyAthleticDepartment, name: "Nutley Athletic Department", altText: "Nutley Athletic Department" },
  { image: westMilfordBoosters, name: "West Milford Football Boosters", altText: "West Milford Football Boosters" },
  { image: nutleyCrew, name: "Nutley Crew", altText: "Nutley Crew" },
  { image: bellevillePolice, name: "Belleville Police Department", altText: "Belleville Police Department" },
  { image: stBenedictsAthletics, name: "St. Benedict's Prep Athletic Department", altText: "St. Benedict's Prep Athletic Department" },
  { image: sportsParadise, name: "Sports Paradise", altText: "Sports Paradise" },
  { image: ridgewoodAthletics, name: "Ridgewood Athletic Department", altText: "Ridgewood Athletic Department" },
  { image: passaicRiverRowing, name: "Passaic River Rowing Association", altText: "Passaic River Rowing Association" },
  { image: eCleaning, name: "E-Cleaning Services", altText: "E-Cleaning Services" },
  { image: negliaEngineering, name: "Neglia Engineering Associates", altText: "Neglia Engineering Associates" },
  { image: nutleyRotary, name: "Nutley Rotary Club", altText: "Nutley Rotary Club" },
  { image: varsityClubProducts, name: "Varsity Club Products", altText: "Varsity Club Products" },
  { image: tidyUpAuto, name: "Tidy Up Auto", altText: "Tidy Up Auto" },
  { image: rowNewJersey, name: "Row New Jersey", altText: "Row New Jersey" },
  { image: smartWayUnlimited, name: "Smart Way Unlimited", altText: "Smart Way Unlimited" },
  { image: bungalowHomeStagers, name: "Bungalow Home Stagers", altText: "Bungalow Home Stagers" },
  { image: roscommonHouse, name: "Michael's Roscommon House", altText: "Michael's Roscommon House" },
  { image: jayFund, name: "Jay Fund Foundation", altText: "Jay Fund Foundation" },
  { image: sarahsFight, name: "Sarah's Fight for Hope Foundation", altText: "Sarah's Fight for Hope Foundation" },
  { image: jmaVending, name: "JMA Vending, LLC", altText: "JMA Vending, LLC" },
  { image: goryebHospital, name: "Goryeb Children's Hospital", altText: "Goryeb Children's Hospital" },
  { image: triviaRevolution, name: "Trivia Revolution", altText: "Trivia Revolution" },
  { image: salonMistris, name: "Salon Mistris", altText: "Salon Mistris" },
  { image: goodHealthPharmacy, name: "Good Health Pharmacy", altText: "Good Health Pharmacy" },
  { image: djmc, name: "DJMC", altText: "DJMC" },
  { image: sigmaPhiEpsilon, name: "Sigma Phi Epsilon, Penn Omega Chapter", altText: "Sigma Phi Epsilon, Penn Omega Chapter" },
  { image: nicholasWhilborgFoundation, name: "The Nicholas Whilborg Foundation", altText: "The Nicholas Whilborg Foundation" },
  { image: pinkySwearFoundation, name: "The Pinky Swear Foundation", altText: "The Pinky Swear Foundation" },
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
