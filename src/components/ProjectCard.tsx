import Image from 'next/image';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href ?? '#'} className="group block">
      <div className="relative aspect-[4/3] bg-paper-shade border border-graphite/20 overflow-hidden mb-4">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-graphite label-sm">
            No Image
          </div>
        )}
      </div>
      <h3 className="font-display text-ink text-lg">{project.title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-wrap gap-2 label-sm text-graphite text-[10px]">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <span className="text-ink group-hover:translate-x-1 transition-transform" aria-hidden="true">
          →
        </span>
      </div>
    </a>
  );
}