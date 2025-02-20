import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
// import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
// import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

// import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Qion Qor"
        title="Experience top-tier AI-powered products from QionQor"
      >
        Discover a world of cutting-edge AI-powered products designed to enhance
        productivity, creativity, and efficiency. Our advanced technology
        seamlessly integrates intelligence and innovation to deliver smart
        solutions tailored to your needs. Experience the future of AI with
        products that simplify tasks, boost performance, and redefine
        possibilities.
      </SectionTitle>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      {/* <Testimonials /> */}

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq />
      <Cta /> */}
    </Container>
  );
}
