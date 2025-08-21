import { certificates } from "@/lib/constants";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="header2">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-6">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} Certificate`}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {certificate.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      className="flex-shrink-0"
                      asChild
                    >
                      <Link
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
