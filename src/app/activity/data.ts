import { Activity } from './activity.interface';

export const activityData: Activity[] = [
  {
    date: new Date('2022-01-01'),
    activityType: 'Call',
    participants: ['John Doe', 'Jane Doe'],
    subject: 'Business Discussion',
    note: 'Important call regarding future plans',
    documents: ['agenda.pdf'],
  },
  {
    date: new Date('2022-02-01'),
    activityType: 'Meeting',
    participants: ['John Doe', 'Jane Doe', 'Jim Smith'],
    subject: 'Project Review',
    note: 'Discussing progress on current project',
    documents: ['project_review.ppt'],
  },
  {
    date: new Date('2023-03-15'),
    activityType: 'Meeting',
    participants: ['Mariem Ben Amor', 'Sami Bouzidi', 'Fatma Cherif'],
    subject: 'Project Review',
    note: 'Discuss progress and make decisions on next steps',
    documents: ['project_report.pdf', 'presentation.pptx'],
  },
  {
    date: new Date('2023-04-05'),
    activityType: 'Training',
    participants: ['Mohamed Ali', 'Safa Ben Youssef'],
    subject: 'Agile Methodologies',
    note: 'Introduction to Agile and Scrum Frameworks',
    documents: ['training_materials.pdf', 'examples.zip'],
  }
  
];