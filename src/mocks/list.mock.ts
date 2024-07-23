import { ListItem } from '../models/list-item.interface';

export const listData: ListItem[] = [
  {
    id: 'f90531ca-3e23-4c1c-9b76-a5aee6496791',

    taskNumber: '5-003-1',

    name: 'Design Website Mockup',

    description:
      "Create an initial design mockup for the client's new website.",

    status: 'TO_DO',

    priority: 'HIGH',

    percentageOfProgress: 85,

    startDate: '2024-06-01',

    endDate: '2024-06-07',

    childTasks: [
      {
        id: 'child-1-1',

        taskNumber: '5-003-1-1',

        name: 'Create Wireframes',

        description: 'Design wireframes for the main pages.',

        status: 'IN_PROGRESS',

        priority: 'NORMAL',

        percentageOfProgress: 50,

        startDate: '2024-06-01',

        endDate: '2024-06-02',

        childTasks: [
          {
            id: 'subchild-1-1-1',

            taskNumber: '5-003-1-1-1',

            name: 'Homepage Wireframe',

            description: 'Create wireframe for the homepage.',

            status: 'TO_DO',

            priority: 'HIGH',

            percentageOfProgress: 0,

            startDate: '2024-06-01',

            endDate: '2024-06-01',

            childTasks: [],
          },
        ],
      },

      {
        id: 'child-1-2',

        taskNumber: '5-003-1-2',

        name: 'Design UI Elements',

        description: 'Design buttons, forms, and other UI elements.',

        status: 'TO_DO',

        priority: 'NORMAL',

        percentageOfProgress: 20,

        startDate: '2024-06-03',

        endDate: '2024-06-05',

        childTasks: [],
      },
    ],
  },

  {
    id: '58fa7b96-53ee-42cd-bd4b-9ad9f775d153',

    taskNumber: '5-003-3',

    name: 'Implement Authentication',

    description:
      'Develop the login and registration functionality for the application.',

    status: 'IN_PROGRESS',

    priority: 'NORMAL',

    percentageOfProgress: 45,

    startDate: '2024-06-02',

    endDate: '2024-06-06',

    childTasks: [
      {
        id: 'child-3-1',

        taskNumber: '5-003-3-1',

        name: 'Login Feature',

        description: 'Implement login functionality.',

        status: 'IN_PROGRESS',

        priority: 'HIGH',

        percentageOfProgress: 60,

        startDate: '2024-06-02',

        endDate: '2024-06-03',

        childTasks: [
          {
            id: 'subchild-3-1-1',

            taskNumber: '5-003-3-1-1',

            name: 'Login Page UI',

            description: 'Design the UI for the login page.',

            status: 'TO_DO',

            priority: 'NORMAL',

            percentageOfProgress: 0,

            startDate: '2024-06-02',

            endDate: '2024-06-02',

            childTasks: [],
          },
        ],
      },
    ],
  },

  {
    id: '4268e52d-707f-4280-9eb2-0cfcc43dddd2',

    taskNumber: '5-003-2',

    name: 'Database Optimization',

    description: 'Optimize the database queries to improve performance.',

    status: 'TO_DO',

    priority: 'HIGH',

    percentageOfProgress: 0,

    startDate: '2024-06-03',

    endDate: '2024-06-04',

    childTasks: [
      {
        id: 'child-2-1',

        taskNumber: '5-003-2-1',

        name: 'Index Tables',

        description: 'Add indexes to the frequently queried tables.',

        status: 'TO_DO',

        priority: 'HIGH',

        percentageOfProgress: 0,

        startDate: '2024-06-03',

        endDate: '2024-06-03',

        childTasks: [],
      },
    ],
  },

  {
    id: '39be7a93-8205-4573-b524-17fe0940fcba',

    taskNumber: '5-003-9',

    name: 'Create Marketing Plan',

    description:
      'Develop a comprehensive marketing plan for the upcoming product launch.',

    status: 'TO_DO',

    priority: 'NORMAL',

    percentageOfProgress: 0,

    startDate: '2024-06-04',

    endDate: '2024-06-10',

    childTasks: [
      {
        id: 'child-9-1',

        taskNumber: '5-003-9-1',

        name: 'Market Research',

        description: 'Conduct market research to identify target audience.',

        status: 'TO_DO',

        priority: 'NORMAL',

        percentageOfProgress: 0,

        startDate: '2024-06-04',

        endDate: '2024-06-05',

        childTasks: [],
      },
    ],
  },

  {
    id: 'adf680d0-1eab-4661-b025-f35faca60433',

    taskNumber: '5-003-5',

    name: 'Setup CI/CD Pipeline',

    description:
      'Set up a continuous integration and deployment pipeline for the project.',

    status: 'IN_PROGRESS',

    priority: 'HIGH',

    percentageOfProgress: 30,

    startDate: '2024-06-05',

    endDate: '2024-06-07',

    childTasks: [
      {
        id: 'child-5-1',

        taskNumber: '5-003-5-1',

        name: 'Configure Jenkins',

        description: 'Set up Jenkins for CI/CD.',

        status: 'IN_PROGRESS',

        priority: 'NORMAL',

        percentageOfProgress: 30,

        startDate: '2024-06-05',

        endDate: '2024-06-05',

        childTasks: [],
      },
    ],
  },

  {
    id: '991194d6-c238-482e-90dc-39d5d5b9442f',

    taskNumber: '5-003-8',

    name: 'Write Unit Tests',

    description:
      'Write unit tests for the existing codebase to ensure reliability.',

    status: 'TO_DO',

    priority: 'LOW',

    percentageOfProgress: 0,

    startDate: '2024-06-06',

    endDate: '2024-06-08',

    childTasks: [
      {
        id: 'child-8-1',

        taskNumber: '5-003-8-1',

        name: 'Test User Module',

        description: 'Write unit tests for the user module.',

        status: 'TO_DO',

        priority: 'NORMAL',

        percentageOfProgress: 0,

        startDate: '2024-06-06',

        endDate: '2024-06-06',

        childTasks: [],
      },
    ],
  },

  {
    id: '3c106cee-c3ae-44d1-8017-cdbca418a7e3',

    taskNumber: '5-003-10',

    name: 'Update Documentation',

    description: 'Update the project documentation to reflect recent changes.',

    status: 'IN_PROGRESS',

    priority: 'NORMAL',

    percentageOfProgress: 50,

    startDate: '2024-06-07',

    endDate: '2024-06-09',

    childTasks: [
      {
        id: 'child-10-1',

        taskNumber: '5-003-10-1',

        name: 'API Documentation',

        description: 'Update API documentation with new endpoints.',

        status: 'IN_PROGRESS',

        priority: 'NORMAL',

        percentageOfProgress: 40,

        startDate: '2024-06-07',

        endDate: '2024-06-07',

        childTasks: [],
      },
    ],
  },

  {
    id: '8583a8c3-a272-4eae-959f-4264f48092b5',

    taskNumber: '5-003-6',

    name: 'User Feedback Analysis',

    description:
      'Analyze user feedback to identify common issues and improvement areas.',

    status: 'TO_DO',

    priority: 'NORMAL',

    percentageOfProgress: 0,

    startDate: '2024-06-08',

    endDate: '2024-06-09',

    childTasks: [
      {
        id: 'child-6-1',

        taskNumber: '5-003-6-1',

        name: 'Compile Feedback',

        description: 'Gather and compile user feedback from various channels.',

        status: 'TO_DO',

        priority: 'NORMAL',

        percentageOfProgress: 0,

        startDate: '2024-06-08',

        endDate: '2024-06-08',

        childTasks: [],
      },
    ],
  },

  {
    id: 'dc6268aa-58d6-4135-b13d-4ee73f58683f',

    taskNumber: '5-003-4',

    name: 'Bug Fixing',

    description: 'Fix the bugs reported in the last sprint.',

    status: 'IN_PROGRESS',

    priority: 'HIGH',

    percentageOfProgress: 70,

    startDate: '2024-06-09',

    endDate: '2024-06-10',

    childTasks: [
      {
        id: 'child-4-1',

        taskNumber: '5-003-4-1',

        name: 'Fix Login Bug',

        description: 'Resolve the login issue reported by users.',

        status: 'IN_PROGRESS',

        priority: 'HIGH',

        percentageOfProgress: 50,

        startDate: '2024-06-09',

        endDate: '2024-06-09',

        childTasks: [],
      },
    ],
  },

  {
    id: '991e8eb1-3ef0-4ef7-8c5b-ff77745f4a56',

    taskNumber: '5-003-7',

    name: 'Client Meeting Preparation',

    description:
      'Prepare the presentation and materials for the upcoming client meeting.',

    status: 'TO_DO',

    priority: 'NORMAL',

    percentageOfProgress: 0,

    startDate: '2024-06-10',

    endDate: '2024-06-11',

    childTasks: [],
  },
];
