export const careCategories = {
  Robotics: {
    slug:'robotics', film:'robot-chess', model:'Flower AMR', serial:'FLW-001',
    headline:'Financial protection for robotic equipment failures.',
    description:'A motor fails, a sensor is damaged or a robotic system stops operating. We are developing protection for eligible repair and replacement costs, with coordinated service under agreed plan terms.',
    benefits:[['breakdown','Motor and actuator faults','Assessment of mechanical and electrical failures in robotic assemblies.'],['accidental','Sensor and equipment damage','Assessment of accidental damage to sensors and robotic hardware.'],['repair','Specialist repair coordination','Coordinate robotic-system diagnosis, parts and service.'],['replacement','Module replacement assessment','Review repairability and eligible replacement of affected modules.']],
    issues:['Motor or actuator fault','Sensor or navigation hardware damage','Unexpected equipment shutdown','Something else'],
  },
  'Field hardware': {
    slug:'drones', film:'industrial-site', model:'Field Scout', serial:'FLD-001',
    headline:'Financial protection for hardware deployed in the field.',
    description:'A field device sustains impact damage, a sensor fails or equipment needs recovery from a remote site. Explore proposed equipment protection and coordinated service for eligible incidents.',
    benefits:[['breakdown','Sensor and power faults','Review unexpected sensor, battery-system and electrical failures.'],['accidental','Deployment damage','Assess physical damage during eligible field operations.'],['repair','Recovery and service coordination','Plan collection, diagnosis and specialist service for remote equipment.'],['replacement','Device replacement assessment','Review repairability and eligible device replacement.']],
    issues:['Impact or physical damage','Sensor or power-system fault','Environmental exposure','Remote equipment recovery'],
  },
  'AI infrastructure': {
    slug:'data-centers', film:'data-center', model:'Compute Station', serial:'CMP-001',
    headline:'Financial protection for the hardware behind AI.',
    description:'A cooling unit fails, a power event damages equipment or a compute node shuts down. Our proposed care approach focuses on eligible hardware repair and replacement, with a clear record of each service dependency.',
    benefits:[['breakdown','Compute and cooling faults','Review mechanical and electrical failures across listed infrastructure.'],['accidental','Equipment damage assessment','Assess damage to registered compute and supporting equipment.'],['repair','Vendor service coordination','Coordinate dependent inspections across compute, cooling and power systems.'],['replacement','Component replacement assessment','Review repairability and eligible affected-component replacement.']],
    issues:['Cooling-system failure','Compute node shutdown','Power-related equipment damage','Component or rack fault'],
  },
  'Frontier systems': {
    slug:'space', film:'orbital', model:'Research Platform', serial:'RES-001',
    headline:'Protection planning for specialist hardware.',
    description:'A specialist component fails or an advanced system needs technical assessment. We are evaluating equipment-specific protection and service requirements with builders; eligibility for these systems is not yet established.',
    benefits:[['breakdown','Specialist component assessment','Evaluate unexpected failures against the system specification.'],['accidental','Test-environment damage review','Review incident evidence from the agreed operating or test environment.'],['repair','Specialist service planning','Identify service capabilities and technical handoff requirements.'],['replacement','Component recovery assessment','Evaluate repair, recovery and replacement feasibility.']],
    issues:['Specialist component fault','Test-environment incident','System diagnostics required','Service capability review'],
  },
  'Silicon & AI chips': {
    slug:'ai-chips', film:'ai-chips', model:'Edge Accelerator', serial:'ACC-001',
    headline:'Financial protection for compute component failures.',
    description:'An accelerator fails, a board is damaged or a thermal event affects a compute module. Explore a proposed route to component diagnosis and eligible repair or replacement under the agreed plan.',
    benefits:[['breakdown','Accelerator and board faults','Assess unexpected electrical faults in registered compute components.'],['accidental','Module damage assessment','Review physical damage to boards and embedded modules.'],['repair','Manufacturer diagnostics coordination','Coordinate diagnostic evidence and existing warranty checks.'],['replacement','Board or module replacement review','Evaluate component-level repair and eligible replacement.']],
    issues:['Accelerator or board failure','Thermal damage','Power-related component fault','Embedded module diagnostics'],
  },
  'Autonomous hardware': {
    slug:'autonomous', film:'autonomous-hardware', model:'Autonomous Platform', serial:'AUT-001',
    headline:'Financial protection for autonomous hardware failures.',
    description:'A navigation sensor fails, an onboard computer is damaged or a mobile platform stops operating. We are developing a care approach that connects the equipment, incident evidence and eligible service options.',
    benefits:[['breakdown','Drive and onboard compute faults','Assess hardware failures across autonomous-platform components.'],['accidental','Navigation hardware damage','Review accidental damage to sensing and navigation hardware.'],['repair','Platform service coordination','Coordinate recovery and specialist diagnostics across system dependencies.'],['replacement','Sensor or module replacement review','Evaluate eligible repair or replacement of affected platform hardware.']],
    issues:['Drive-system failure','Navigation sensor damage','Onboard compute fault','Platform recovery required'],
  },
} as const;
export type HardwareCategory = keyof typeof careCategories;
