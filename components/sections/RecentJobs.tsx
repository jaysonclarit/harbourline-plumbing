import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { recentJobs } from "@/lib/content";
import { revealProps } from "@/lib/reveal";

// Job photo on top, words underneath: nothing sits over the work.
export function RecentJobs() {
  return (
    <Section aria-labelledby="recent-jobs-title">
      <h2 id="recent-jobs-title" className="text-h2" {...revealProps()}>
        {recentJobs.title}
      </h2>

      {/* Same card style as Services: shadowed photo, words underneath. */}
      <ul className="mt-10 grid gap-x-5 gap-y-12 md:grid-cols-3 lg:mt-14 lg:gap-x-6">
        {recentJobs.items.map((job, i) => (
          <li key={job.title} {...revealProps(i)}>
            <article className="flex flex-col">
              <Photo
                src={job.photo}
                alt={job.photoAlt}
                sizes="(min-width: 1200px) 365px, (min-width: 768px) calc((100vw - 7rem) / 3), calc(100vw - 3rem)"
                className="aspect-[4/3] shadow-soft"
                position={"photoPosition" in job ? job.photoPosition : undefined}
              />
              <p className="mt-5 flex items-center gap-1.5 text-small font-semibold text-harbour-600">
                <Icon name="map-pin" className="size-4" />
                {job.suburb}
              </p>
              <h3 className="mt-1 text-h3">{job.title}</h3>
              <p className="mt-2 max-w-prose text-ink-600">{job.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
