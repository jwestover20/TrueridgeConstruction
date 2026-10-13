import Link from "next/link";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_COUNTIES } from "@/lib/service-areas";
import { Button } from "@/components/ui/Button";

export function ServiceAreasList() {
  return (
    <div>
      <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-brand-muted">
        We handle kitchen and bathroom remodels, basement finish-outs, and
        fireplace installs throughout {SITE.serviceArea}. If your city is listed
        below — or nearby — we&apos;d love to walk through your home and put
        together a clear, itemized estimate.
      </p>

      <div className="space-y-14">
        {SERVICE_COUNTIES.map((county) => (
          <section key={county.name} aria-labelledby={countySlug(county.name)}>
            <h2
              id={countySlug(county.name)}
              className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {county.name}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-brand-muted">
              {county.description}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
              {county.cities.map((city) => (
                <li
                  key={city}
                  className="border-l-2 border-brand-accent/60 pl-3 text-brand-black"
                >
                  {city}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-brand-black/10 pt-14">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Remodeling services we offer
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-brand-muted">
          From first walkthrough to final walkthrough — quality craftsmanship
          with clear communication.
        </p>
        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          {SERVICES.map((service) => (
            <li key={service.slug} className="text-center">
              <Link
                href={service.href}
                className="inline-flex min-h-11 items-center justify-center text-center font-medium text-brand-accent-text hover:text-brand-accent-text/80"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 text-center">
        <Button href="/contact" size="lg">
          Schedule a Free Consultation
        </Button>
      </div>
    </div>
  );
}

function countySlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
