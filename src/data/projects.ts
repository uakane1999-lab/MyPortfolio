export interface Project {
  title: string;
  tags: string[];
  href?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Task Management App',
    tags: ['React', 'TypeScript', 'Firebase'],
    imageUrl: '/projects/task-management.png',
  },
  {
    title: 'Architecture Studio Site',
    tags: ['Next.js', 'WordPress', 'SCSS'],
    imageUrl: '/projects/architecture-studio.png',
  },
  {
    title: 'Study Record App',
    tags: ['Vue', 'Express', 'MongoDB'],
    imageUrl: '/projects/study-record.png',
  },
];