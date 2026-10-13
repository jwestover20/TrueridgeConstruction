import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SERVICE_CITIES, SERVICE_COUNTIES } from "@/lib/service-areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceAreasList } from "@/components/sections/ServiceAreasList";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Areas We Serve | Salt Lake, Utah & Wasatch Counties",
  description: `Kitchen, bathroom, and basement remodels in ${SERVICE_CITIES.slice(0, 6).join(", ")}, and across ${SITE.serviceArea}. Free on-site consultation.`,
  alternates: { canonical: `${SITE.url}/areas-we-serve` },
};

export const dynamic = "force-static";

export default function AreasWeServePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Areas We Serve | ${SITE.name}`,
    description: `Cities and communities where ${SITE.name} provides kitchen, bathroom, basement, and fireplace remodel services.`,
    url: `${SITE.url}/areas-we-serve`,
    mainEntity: {
      "@type": "GeneralContractor",
      name: SITE.name,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      areaServed: [
        ...SERVICE_COUNTIES.map((county) => ({
          "@type": "AdministrativeArea",
          name: `${county.name}, Utah`,
        })),
        ...SERVICE_CITIES.map((city) => ({
          "@type": "City",
          name: `${city}, Utah`,
        })),
      ],
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="pt-24">
        <Container className="py-16">
          <SectionHeading
            title="Areas We Serve"
            subtitle="Local remodelers for homeowners across Salt Lake County, Utah County, and Wasatch County."
          />
          <ServiceAreasList />
        </Container>
      </div>
    </>
  );
}
