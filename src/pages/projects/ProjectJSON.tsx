export interface Project {
  readonly title: string;
  readonly paragraph: string;
  readonly appDesc: string;
  readonly path: string;
  readonly abbr: string;
  readonly learnMore: string;
}

export const projects: Project[] = [
  {
    title: "Lucy's Love Bus",
    paragraph: `Lucy’s Love Bus improves quality of life for children with cancer
            or other life-threatening illnesses with integrative therapies like massage, meditation,
            acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s
            pain and anxiety during and after traditional medical treatments.
            The Sajni Center is a space of hope and healing for children with life-threatening illness or chronic
            medical conditions and their families. Here they host events for the children and their families. We created
            the event planning and ticket purchasing system for all the events hosted by Lucy's Love Bus.`,
    appDesc: 'Event Registration System',
    path:
      'https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png',
    abbr: 'LLB',
    learnMore: 'https://www.lovebusprograms.org/',
  },
  {
    title: 'Speak For The Trees',
    paragraph: `Speak for the Trees Boston aims to improve the size and health
            of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods.
            They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees.
            C4C built a block reservation system, allowing SFFT's volunteers to reserve blocks of trees that they will
            be able to inventory and then mark them as complete when they are finished collecting the required data.`,
    appDesc: 'Tree Inventory System',
    path:
      'https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png',
    abbr: 'SFFT',
    learnMore: 'https://treeboston.org/',
  },
  {
    title: 'Hands Across the Sea',
    paragraph: `Hands Across the Sea is a US-based international NGO dedicated to raising children’s literacy through school 
    and community library programs in six different Eastern Caribbean island nations. Hands frontline Program Officers 
    monitor progress of literacy programs at hundreds of primary and secondary schools across the region, and C4C is helping 
    optimize their data collection and visualization systems so that the organization can continue to grow and share the 
    impact of its work. Employees can now easily enter data through a dynamic data-driven form and Hands leadership is able 
    to view and analyze this data, allowing them to leverage it to secure more funding and raise awareness.`,
    appDesc: 'Data Collection and Presentation System',
    path: 'https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/HandsLogo.jpg',
    abbr: 'HATS',
    learnMore: 'https://www.handsacrossthesea.net/',
  },
  {
    title: 'J-PAL',
    paragraph: `The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a global research center working to reduce poverty by ensuring that policy is informed by scientific evidence. J-PAL works with the New York City Department of Youth and Community Development, which runs the country's largest summer youth employment program, to evaluate the impact of recommendation letters on participants’ educational and employment outcomes after the program. C4C is building a system that simplifies the creation, dissemination and completion of surveys that will be used to create unique letters of recommendation for each youth. Each youth will be sent their unique letter(s) of recommendation, which we hope will improve their educational and employment opportunities.`,
    appDesc: 'Letter of Recommendation System',
    path: 'https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/JPAL_logo.svg',
    abbr: 'J-PAL',
    learnMore: 'https://www.povertyactionlab.org/',
  },
  {
    title: 'LBFE',
    paragraph: '',
    appDesc: 'Virtual Senior Center',
    path: 'https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LBFE_logo.png',
    abbr: 'LBFE',
    learnMore: 'https://lbfeboston.org/',
  },
];
