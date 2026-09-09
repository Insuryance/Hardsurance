export const useCases = {
  robotics: {
    label: 'Robotics',
    title: 'Coverage that understands autonomy.',
    description: 'Map deployed fleets, software updates, human oversight and product liability into one insurance view.',
    film: '/films/robot-chess.mp4',
    risks: ['Products and completed operations', 'Remote software updates', 'Human override and supervision', 'Field testing and leased equipment'],
  },
  drones: {
    label: 'Drones',
    title: 'From flight envelope to policy boundary.',
    description: 'Test BVLOS operations, payloads, territory, pilot requirements and third-party liability against actual missions.',
    film: '/films/industrial-site.mp4',
    risks: ['BVLOS and territorial restrictions', 'Payload and sensor values', 'Cyber takeover and navigation failure', 'Ground equipment and transit'],
  },
  'data-centers': {
    label: 'Data centers',
    title: 'Find the dependency behind the downtime.',
    description: 'Connect cooling, power, vendors and customer workloads before a single failure becomes a portfolio event.',
    film: '/films/data-center.mp4',
    risks: ['Dependent business interruption', 'Equipment breakdown', 'Utility service interruption', 'Declared values and replacement cost'],
  },
  space: {
    label: 'Space systems',
    title: 'One view from integration to orbit.',
    description: 'Trace transit, testing, integration, launch attachment and mission phases through the policy stack.',
    film: '/films/orbital.mp4',
    risks: ['Pre-launch testing', 'Transit and integration', 'Launch attachment', 'Payload and mission failure'],
  },
};

export const articles = {
  'bvlos-policy-boundaries': {
    category: 'Drones',
    title: 'BVLOS approval is not the same as insurance permission',
    dek: 'A practical way to test operational approval, territorial language and pilot requirements before a mission leaves the visual line of sight.',
    source: 'Federal Aviation Administration',
    sourceUrl: 'https://www.faa.gov/uas/advanced_operations/beyond_visual_line_of_sight',
    sections: [
      ['Start with the operation', 'A policy review should begin with what the aircraft is actually doing: where it flies, who supervises it, what it carries and how control transfers. Regulatory approval answers a different question from insurance coverage.'],
      ['Trace the policy boundary', 'The agent maps the mission against territory, approved use, pilot requirements, cyber events and third-party liability. Any mismatch becomes a specific question for the carrier rather than a vague concern.'],
      ['Preserve the evidence', 'Flight logs, maintenance records, software versions and operator approvals should be tied to the same scenario. That evidence matters at renewal and again if a claim occurs.'],
    ],
  },
  'critical-infrastructure-dependencies': {
    category: 'Data centers',
    title: 'The cooling loop is part of the insurance perimeter',
    dek: 'Why dependency mapping matters when facilities, utilities and customer workloads share the same failure path.',
    source: 'Cybersecurity and Infrastructure Security Agency',
    sourceUrl: 'https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors',
    sections: [
      ['The asset list is not the system', 'A server schedule can show declared value without showing the dependencies that keep the facility operating. Cooling, power, network and specialist vendors belong in the same risk model.'],
      ['Interruption is a graph problem', 'A component can be inexpensive while the workload it supports is material. Hardsurance traces the failure path and checks how equipment breakdown, utility interruption and dependent business interruption respond.'],
      ['Use the model at renewal', 'The result is a defensible schedule of assets, dependencies, owners and evidence. Finance, engineering and the broker can review the same operating truth.'],
    ],
  },
  'prelaunch-coverage': {
    category: 'Space',
    title: 'Coverage before launch attachment deserves its own map',
    dek: 'Transit, integration and pre-launch testing can sit across different contracts and different policy phases.',
    source: 'NASA Small Spacecraft Systems Virtual Institute',
    sourceUrl: 'https://www.nasa.gov/smallsat-institute/space-mission-design-tools/',
    sections: [
      ['Separate the phases', 'Hardware changes custody, location and operating state before it reaches orbit. Each transition can affect responsibility, values and the policy intended to respond.'],
      ['Model the loss event', 'Instead of asking whether the mission is insured in general, test a specific event during transit, integration or functional testing. Then trace the relevant form, exclusion and endorsement.'],
      ['Close the handoff gap', 'A shared timeline makes it clear when one policy ends, another begins and evidence changes hands. That is where ambiguous coverage often becomes visible.'],
    ],
  },
};

export type UseCaseSlug = keyof typeof useCases;
export type ArticleSlug = keyof typeof articles;
