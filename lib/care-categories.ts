export const careCategories = {
  Robotics: {
    slug:'robotics', film:'robot-chess', model:'Flower AMR', serial:'FLW-001',
    headline:'Robot arms and inspection fleets',
    description:'These are our first insurance markets. We review the work the robot will do, the people and equipment around it, and the site’s safety and security procedures.',
    benefits:[['breakdown','Motor and actuator faults','Assessment of mechanical and electrical failures in robotic assemblies.'],['accidental','Sensor and equipment damage','Assessment of accidental damage to sensors and robotic hardware.'],['repair','Specialist repair coordination','Coordinate robotic-system diagnosis, parts and service.'],['replacement','Module replacement assessment','Review repairability and eligible replacement of affected modules.']],
    issues:['Motor or actuator fault','Sensor or navigation hardware damage','Unexpected equipment shutdown','Something else'],
  },
  'Field hardware': {
    slug:'drones', film:'industrial-site', model:'Field Scout', serial:'FLD-001',
    headline:'Robots working on customer sites',
    description:'An inspection route can take a robot past workers, machinery and restricted areas. We want to understand that route and the customer’s insurance requirements before discussing cover.',
    benefits:[['breakdown','Sensor and power faults','Review unexpected sensor, battery-system and electrical failures.'],['accidental','Deployment damage','Assess physical damage during eligible field operations.'],['repair','Recovery and service coordination','Plan collection, diagnosis and specialist service for remote equipment.'],['replacement','Device replacement assessment','Review repairability and eligible device replacement.']],
    issues:['Impact or physical damage','Sensor or power-system fault','Environmental exposure','Remote equipment recovery'],
  },
  'AI infrastructure': {
    slug:'data-centers', film:'data-center', model:'Compute Station', serial:'CMP-001',
    headline:'Robots in data centers',
    description:'An inspection robot may work near servers, cooling equipment and power systems. We review its route, access and supervision. General infrastructure insurance and business interruption would need a separate discussion.',
    benefits:[['breakdown','Compute and cooling faults','Review mechanical and electrical failures across listed infrastructure.'],['accidental','Equipment damage assessment','Assess damage to registered compute and supporting equipment.'],['repair','Vendor service coordination','Coordinate dependent inspections across compute, cooling and power systems.'],['replacement','Component replacement assessment','Review repairability and eligible affected-component replacement.']],
    issues:['Cooling-system failure','Compute node shutdown','Power-related equipment damage','Component or rack fault'],
  },
  'Frontier systems': {
    slug:'space', film:'orbital', model:'Research Platform', serial:'RES-001',
    headline:'Specialist systems',
    description:'We are researching insurance and service requirements for specialist systems. These are outside our initial robot-arm and inspection markets, and no product is currently available for purchase.',
    benefits:[['breakdown','Specialist component assessment','Evaluate unexpected failures against the system specification.'],['accidental','Test-environment damage review','Review incident evidence from the agreed operating or test environment.'],['repair','Specialist service planning','Identify service capabilities and technical handoff requirements.'],['replacement','Component recovery assessment','Evaluate repair, recovery and replacement feasibility.']],
    issues:['Specialist component fault','Test-environment incident','System diagnostics required','Service capability review'],
  },
  'Silicon & AI chips': {
    slug:'ai-chips', film:'ai-chips', model:'Edge Accelerator', serial:'ACC-001',
    headline:'Compute components',
    description:'Boards, accelerators and embedded modules are a possible future part of Hardsurance Care. We are still working out which equipment and repair arrangements a program could support.',
    benefits:[['breakdown','Accelerator and board faults','Assess unexpected electrical faults in registered compute components.'],['accidental','Module damage assessment','Review physical damage to boards and embedded modules.'],['repair','Manufacturer diagnostics coordination','Coordinate diagnostic evidence and existing warranty checks.'],['replacement','Board or module replacement review','Evaluate component-level repair and eligible replacement.']],
    issues:['Accelerator or board failure','Thermal damage','Power-related component fault','Embedded module diagnostics'],
  },
  'Autonomous hardware': {
    slug:'autonomous', film:'autonomous-hardware', model:'Autonomous Platform', serial:'AUT-001',
    headline:'Other autonomous platforms',
    description:'Other mobile and autonomous platforms are on our longer-term roadmap. The operating area, supervision and nearby people and equipment would need to be reviewed before any cover could be offered.',
    benefits:[['breakdown','Drive and onboard compute faults','Assess hardware failures across autonomous-platform components.'],['accidental','Navigation hardware damage','Review accidental damage to sensing and navigation hardware.'],['repair','Platform service coordination','Coordinate recovery and specialist diagnostics across system dependencies.'],['replacement','Sensor or module replacement review','Evaluate eligible repair or replacement of affected platform hardware.']],
    issues:['Drive-system failure','Navigation sensor damage','Onboard compute fault','Platform recovery required'],
  },
} as const;
export type HardwareCategory = keyof typeof careCategories;
