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
import varsityClubProducts from "../images/varsity-club.png";
import tidyUpAuto from "../images/tid-yup-auto.png";
import rowNewJersey from "../images/rownj.png";
import smartWayUnlimited from "../images/smartway-logo.png";
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
import blogImg1 from "../images/community.jpg";
import blogImg2 from "../images/research.jpg";
import blogImg3 from "../images/bolg-img.png";
import blogImg4 from "../images/program-img.jpg";
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
    title: "Pediatric Leukemia",
    slug: "pediatric-leukemia",
    date: "January 1, 2025",
    description:
      "Pediatric Leukemia is the term that refers to the cancer of  blood cells in children.",
    content: `
      <h2>What is Pediatric Leukemia?</h2>
      <p>Pediatric Leukemia is the term that refers to the cancer of  blood cells in children. 
      It develops in the bone marrow and it is the most common type of cancer in children. 
      Leukemia starts mostly with the white blood cells but it can also involve other blood 
      cells. The blood cells are formed in the bone marrow where they and mature and then 
      they are pushed into the blood stream. Once entered the blood streams these cells 
      circulate throughout the body. In leukemia, the bone marrow produces  abnormal  blood 
      cells which multiply rapidly and interfere with the production and function of normal 
      blood cells. These leukemia cells can circulate throughout the body and target lymph 
      nodes and Central Nervous System.</p>
      <h2>Types of Leukemia</h2>
      <p>Leukemia is classified into four types.</p>
      <ul>
        <li><strong>Acute Lymphocytic Leukemia (ALL):</strong> Acute lymphocytic leukemia is the most common type of cancer in children. It occurs when the bone marrow produces a large number of lymphocytes, the immature white blood cells. It is fast growing and symptoms get worsen quickly if not treated.</li>
        <li><strong>Acute Myeloid Leukemia (AML):</strong> This type of leukemia starts in myeloid cells (cells that form white blood cells, red blood cells and platelets). The myeloid cells produce too many granulocytes(a type of white blood cells). These immature cells interfere with the production and function of normal cells resulting in conditions like infection, anemia and bleeding etc.</li>
        <li><strong>Chronic Lymphocytic Leukemia (CLL):</strong> Chronic Lymphocytic Leukemia also starts in the lymphocytes but it progresses slowly. It is a rare type of pediatric leukemia.</li>
        <li><strong>Chronic Myeloid Leukemia (CML):</strong> CML is rare in children. This type of leukemia just accounts for approximately 2 percent of all the pediatric leukemias. Like AML, it is also caused by the abnormal production of granulocytes but it is slow growing than AML. It is caused by the translocation or rearrangement of chromosomes leading to uncontrolled cell growth. If left untreated it can grow rapidly and becomes difficult to treat.</li>
      </ul>
      <h2>Pediatric Leukemia Research</h2>
      <p>Researchers have been researching on pediatric leukemia for decades now with compelling advancements in understanding the causes and better treatment options to enhance the outcomes. The Researchers are progressively concentrating on analyzing the specific gene mutations and anomalies that may contribute to the development of leukemia in children. Identifying the mutations can not only help in classifying different types of leukemia in children but also predict how well they will respond to different treatments.</p>
      <p>Along with gene mutations, the scientists are using advanced sequencing technologies to analyze the genomes of both normal cells and leukemic cells of the same patient. This will help in identifying the genetic mutations that are critical for development of leukemia so they can classify the new therapeutic targets.</p>
      <p>According to research, the CAR-T cell therapy is an innovative treatment in which the T-cells of the patient are genetically engineered to better identify and invade cancer cells. This therapy has known to have fewer side effects so researchers are focusing to make it a better treatment option for leukemia in children. For relapsed or refractory leukemia that does not respond to the standard chemotherapy, scientists are researching immunotherapies as a significant treatment option such as monoclonal antibodies. Along with this, certain drugs are also being researched that target distinct proteins which are involved in growth and progression of leukemia cells.</p>
      <p>There is a growing concern that along with improving the survival rates, the treatments can have long term effects such as cognitive impairment, secondary cancers and endocrine problems etc. The pediatric cancer survivors can also go through a number of psychosocial issues and it affects their mental and cognitive health. Therefore, the researchers are also exploring ways to improve their quality of life. </p>
      <p>In addition, new drugs and chemotherapies are being developed along with researching the leukemia origin such as environmental and genetic factors and leukemia stem cells. Clinical trials are conducted on a large scale to test new therapies as well as improve the existing treatment options. Researchers are also working in identifying the biomarkers for early detection of the disease which can help significantly in improvising treatment outcomes. As the research progresses new treatment strategies and improved diagnostic techniques can lead to better outcome in pediatric leukemia patients. </p>
      <h2>Impact of Fundraising in Pediatric Leukemia</h2>
      <p>Fundraising in pediatric leukemia has a comprehensive and significant impact. It aids in scientific research, improvement in treatment options, providing fundamental resources for patients and their families, and enlightening the need for continuous research. All these efforts propel the evolution of new therapies along with the improvement in the quality of life of pediatric leukemia patients during and after treatment.</p>
      <p>Fundraising provides financial support for leukemia research, including the study of new treatment options, genetic insights, and innovative treatments like gene therapy and immunotherapy. Many experimental studies and clinical trials would not be possible without fundraising. Many therapies involve precise multi-step clinical trials to test the safety and efficacy of the drugs. In these situations, fundraising helps to cover the costs of patients, data collection, laboratory testing, etc. In addition to this, many pediatric cancer research institutions are created with the support of fundraising by equipping the laboratories and providing grants for inventive projects.</p>
      <p>Cancer treatments can have significant side effects, including cognitive impairments, secondary cancers, or organ damage. Research is being conducted to develop gentler treatments by minimizing side effects so that, along with increasing survival rates, patients' quality of life can also be improved. These research efforts are also funded by money gathered through fundraising.</p>
      <p>Cancer treatments are very expensive and can put the suffering families through a huge financial strain due to treatment costs, specialized care, missed workdays, etc. Fundraising can help lighten some of this financial burden from the families who are already going through a stressful situation. Some fundraising organizations mainly focus on emotional and psychological support for the patient and their families. This includes an approach to counseling, support groups, etc. Some organizations focus on providing accommodation near treatment centers or covering travel expenses—anything that can lighten the financial burden from the suffering family and help them navigate through this stressful situation.</p>
      <h2>Scholarships for Pediatric Leukemia Survivors and Their Families</h2>
      <p>Having a cancer patient in your family is very challenging emotionally, physically, and financially. For most survivors and their families, a college may be considered a luxury that they cannot afford. However, some organizations are offering college scholarships for cancer survivors and their families. For pediatric leukemia survivors, there are numerous scholarship opportunities that can make a considerable difference in their lives and enable them to pursue their academic and career dreams. Following are some scholarship programs for pediatric leukemia survivors:</p>
      <h3>Cancer for College Scholarship</h3>
      <p>Cancer for College grants scholarships to cancer survivors, including pediatric leukemia, who are looking forward to completing their education. This scholarship program is open for U.S. citizens who have been diagnosed with cancer under the age of 25. It covers between $1,000 to $5,000.</p>
      <h3>The Leukemia and Lymphoma Society Scholarship</h3>
      <p>The Leukemia and Lymphoma Society offers scholarships for blood cancer survivors, covering up to $7,500. It includes tuition fees for many programs like virtual or online schools, two-year, or four-year undergraduate programs.</p>
      <h3>The National Collegiate Cancer Foundation (NCCF) Scholarships</h3>
      <p>This scholarship program is for survivors who are pursuing a higher education degree. If pediatric leukemia survivors have completed their treatment and are planning to attend a college or university, they are eligible for this program. It covers between $1,000-$2,000 per year.</p>
      <h3>The Silver Lining Foundation Scholarship</h3>
      <p>This scholarship program is offered to pediatric cancer survivors, including those with pediatric leukemia, who have completed their treatment and seek to pursue college or post-secondary education programs. It offers between $1,000 and $5,000 as a one-time award.</p>
      <p>In a nutshell, pediatric leukemia patients face many challenges, including treatment, education, and adulthood. Fundraising and scholarship programs help lighten some of the financial burdens from their shoulders.</p>

    `,
    buttonText: "Read More",
    img: blogImg1,
  },
  {
    id: 2,
    title: "Pediatric Leukemia: Research, Fundraising, and Support for Families",
    slug: "research-fundraising",
    date: "January 1, 2025",
    description:
      "Pediatric leukemia is one of the most common childhood cancers, affecting thousands of children each year in the United States. ",
    content: `
      <p>Pediatric leukemia is one of the most common childhood cancers, affecting thousands of children each year in the United States. While advances in treatment have improved survival rates significantly, the journey for affected children and their families remains challenging. In this article, we will explore the current state of pediatric leukemia research, the profound impacts of fundraising efforts, and actionable ways to support families navigating this difficult diagnosis. Additionally, we will highlight scholarship opportunities available for survivors and their families.</p>
      <h2>Understanding Pediatric Leukemia</h2>
      <p>Leukemia is a cancer of the blood and bone marrow, where abnormal white blood cells grow uncontrollably, crowding out healthy cells. In children, the most common forms are acute lymphoblastic leukemia (ALL) and acute myeloid leukemia (AML). While pediatric leukemia accounts for about 28% of all childhood cancers, survival rates for ALL have improved dramatically over the past few decades, now exceeding 85% in many cases.</p>
      <p>Although we have these amazing advancements, some challenges persist. For example, treatments, including chemotherapy, radiation, and bone marrow transplants, can have severe short- and long-term side effects. Moreover, survival outcomes vary based on factors like age, genetic markers, and overall health at the time of diagnosis.</p>
      <h2>Advances in Pediatric Leukemia Research</h2>
      <p>Research has been the cornerstone of improved outcomes for pediatric leukemia patients. Recent studies have focused on:</p>
      <ol>
        <li><strong>Targeted Therapies:</strong> Unlike traditional chemotherapy, targeted therapies aim to attack specific cancer cells without harming healthy ones. Drugs like tyrosine kinase inhibitors (TKIs) have shown promise in treating certain types of leukemia.</li>
        <li><strong>Immunotherapy:</strong> Innovations such as CAR T-cell therapy use a patient’s own immune cells to fight leukemia. This approach has shown remarkable success in cases of relapsed or refractory ALL.</li>
        <li><strong>Genetic Research:</strong> Understanding genetic mutations that drive leukemia is helping researchers develop more personalized treatment plans.</li>
        <li><strong>Reducing Long-Term Effects:</strong> Research also focuses on minimizing the long-term impacts of treatment, such as secondary cancers, heart problems, and cognitive challenges.</li>
      </ol>

      <h2>The Role of Fundraising in Fighting Pediatric Leukemia</h2>
      <p>Fundraising plays a critical role in advancing research and providing support services for families. Organizations like the Leukemia & Lymphoma Society (LLS), Alex’s Lemonade Stand Foundation, and St. Baldrick’s Foundation have been instrumental in raising funds for research and patient support.</p>
      <p><strong>Key Impacts of Fundraising:</strong></p>
      <ul>
        <li><strong>Research Funding:</strong> Grants from nonprofit organizations fund innovative studies that might otherwise lack financial backing.</li>
        <li><strong>Family Support:</strong> Many organizations offer financial aid, transportation assistance, and lodging for families traveling for treatment.</li>
        <li><strong>Awareness Campaigns:</strong> Fundraising events often double as educational platforms, spreading awareness about pediatric leukemia and its challenges.</li>
        <li><strong>Survivorship Programs:</strong> Funds are also directed toward programs that help survivors navigate life after treatment, including education and career support.</li>
      </ul>

      <h2>Supporting Families Affected by Pediatric Leukemia</h2>
      <p>A leukemia diagnosis affects not just the child but the entire family. Offering support—both emotional and practical—is vital.</p>

      <h3>1. Emotional Support:</h3>
      <ul>
        <li><strong>Be Present:</strong> Sometimes, just being there to listen or offer a hug can make a difference.</li>
        <li><strong>Encourage Counseling:</strong> Professional counseling can help both the child and their family members process their emotions.</li>
        <li><strong>Support Groups:</strong> Connect families with local or online support groups where they can share experiences and advice.</li>
      </ul>

      <h3>2. Practical Assistance:</h3>
      <ul>
        <li><strong>Meal Trains:</strong> Organizing meal deliveries can alleviate stress during hospital stays or intensive treatment periods.</li>
        <li><strong>Childcare Assistance:</strong> Helping with siblings can be a lifesaver for parents focused on their sick child.</li>
        <li><strong>Transportation and Lodging:</strong> Offering rides to appointments or covering lodging near treatment centers can ease logistical burdens.</li>
      </ul>

      <h3>3. Financial Support:</h3>
      <ul>
        <li><strong>Crowdfunding Campaigns:</strong> Platforms like GoFundMe allow communities to raise funds for medical and living expenses.</li>
        <li><strong>Nonprofit Aid:</strong> Direct families to organizations that provide financial assistance.</li>
      </ul>

      <h2>Scholarship Opportunities for Survivors and Families</h2>
      <p>Surviving pediatric leukemia often brings financial strain due to ongoing medical expenses or reduced earning capacity of caregivers. Fortunately, several scholarships exist to support survivors and their families:</p>

      <h3>1. For Survivors:</h3>
      <ul>
        <li><strong>Cancer for College:</strong> Provides scholarships to cancer survivors pursuing higher education.</li>
        <li><strong>National Children’s Cancer Society Beyond the Cure Ambassador Scholarship:</strong> Awards scholarships to childhood cancer survivors demonstrating academic achievement and community involvement.</li>
      </ul>

      <h3>2. For Siblings and Children of Patients:</h3>
      <ul>
        <li><strong>The SuperSibs Scholarship:</strong> Offers financial aid to siblings of pediatric cancer patients, recognizing the unique challenges they face.</li>
      </ul>

      <h3>3. General Scholarships:</h3>
      <ul>
        <li><strong>Leukemia & Lymphoma Society’s Scholarship for Blood Cancer Survivors:</strong> Assists young adults affected by blood cancers.</li>
        <li><strong>Patient Advocate Foundation’s Scholarship for Survivors:</strong> Available to survivors of life-threatening illnesses, including leukemia.</li>
      </ul>

      <p>Here are three scholarships available for pediatric cancer survivors and their families:</p>
      <ol>
        <li><strong>Kim Hill Scholarship:</strong> Offered by Eagles Fly for Leukemia, this scholarship awards $4,000 to pediatric cancer survivors or patients currently undergoing treatment. The funds are paid directly to the recipient's college or university.</li>
        <li><strong>Eagles Fly for Leukemia Full-Tuition Scholarships:</strong> In partnership with Drexel University and St. Joseph's University in Pennsylvania, Eagles Fly for Leukemia offers full-tuition scholarships to incoming freshmen who are childhood cancer survivors. Application deadlines vary by institution.</li>
        <li><strong>Cancer for College Scholarship:</strong> This program provides scholarships to cancer survivors pursuing higher education. Eligible undergraduate students must attend school full-time, while graduate students may be part- or full-time. The application period typically runs from November 1st to January 31st each year.</li>
      </ol>
      <p>These scholarships aim to support the educational aspirations of those affected by pediatric cancer. Be sure to review each program's specific eligibility criteria and application deadlines.</p>

      <h2>Moving Forward: Advocacy and Awareness</h2>
      <p>Advocacy and awareness efforts are vital in the fight against pediatric leukemia. Individuals can:</p>
      <ul>
        <li><strong>Participate in Fundraising Events:</strong> Joining walks, runs, or other campaigns raises both funds and awareness.</li>
        <li><strong>Volunteer:</strong> Nonprofits often need volunteers to assist with events, administrative tasks, or family support programs.</li>
        <li><strong>Spread Awareness:</strong> Sharing stories on social media or speaking at community events helps educate others about the realities of pediatric leukemia.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While pediatric leukemia remains a formidable challenge, advancements in research, the generosity of fundraising efforts, and the resilience of affected families continue to drive progress. By supporting research initiatives, offering practical and emotional support to families, and providing educational opportunities for survivors, we can make a tangible difference in the lives of children battling leukemia and their loved ones. Together, through collective efforts, we can work toward a future where every child has the opportunity to live a healthy and fulfilling life.</p>

    `,
    buttonText: "Learn More",
    img: blogImg2,
  },
  {
    id: 3,
    title: "The Impact of Fundraising Events",
    slug: "impact-of-fundraising-events",
    date: "February 10, 2024",
    description:
      "Discover how your participation in our events makes a lasting impact on leukemia research and patient care.",
    content: `
      <h2>How Fundraising Helps</h2>
      <p>Fundraising supports innovative treatments like CAR-T cell therapy...</p>
      <h2>Community Impact</h2>
      <p>Collaborative efforts through fundraising uplift affected families...</p>
    `,
    buttonText: "Learn More",
    img: blogImg3,
  },
  {
    id: 4,
    title: "Scholarships for Cancer Survivors",
    slug: "scholarships-for-cancer-survivors",
    date: "March 15, 2024",
    description:
      "Explore scholarship opportunities that empower pediatric cancer survivors to pursue their dreams.",
    content: `
      <h2>Available Scholarships</h2>
      <p>Programs like Cancer for College and LLS Scholarships offer financial aid...</p>
      <h2>Eligibility Criteria</h2>
      <p>Most scholarships are available for survivors who meet specific conditions...</p>
    `,
    buttonText: "Explore Now",
    img: blogImg4,
  },
];

