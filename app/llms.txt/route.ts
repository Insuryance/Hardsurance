 export const dynamic = 'force-static';

export function GET() {
  const content = `# Hardsurance

> Insurance intelligence for robotics, drones, data centers and space systems.

Hardsurance maps how physical systems operate, structures insurance policy language, tests policy language against real operating scenarios, surfaces potential gaps and prepares evidence-backed actions for founders, operators, finance teams and brokers.

Hardsurance is a decision-support platform. Its outputs are not binding coverage determinations and do not replace a licensed broker, insurer, adjuster or legal adviser.

## Primary pages

- [Product](https://www.hardsurance.com/product)
- [Interactive demo](https://www.hardsurance.com/demo)
- [Knowledge index](https://www.hardsurance.com/knowledge)
- [Robotics](https://www.hardsurance.com/use-cases/robotics)
- [Drones](https://www.hardsurance.com/use-cases/drones)
- [Data centers](https://www.hardsurance.com/use-cases/data-centers)
- [Space systems](https://www.hardsurance.com/use-cases/space)
- [Research and field notes](https://www.hardsurance.com/insights)

## Core workflow

1. Map assets, software, vendors, contracts, operators and locations.
2. Structure policy forms, schedules, endorsements, limits and exclusions.
3. Compare the policy model with specific operating and loss scenarios.
4. Surface potential gaps, preserve evidence and prepare actions.

## Contact

- Email: contact@hardsurance.com
- Website: https://www.hardsurance.com
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
