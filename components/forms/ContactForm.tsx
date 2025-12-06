import { cn } from "@/lib/utils";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";

interface ContactFormProps {
  className?: string;
}

/**
 * ContactForm Component
 * 
 * Embeds the Tally consultation form in an iframe.
 */
export function ContactForm({ className }: ContactFormProps) {
  return (
    <div>
      <h3 className="text-h3 text-neutral-white mb-6 font-heading">
        Book Your Free Consultation
      </h3>

      <div className="w-full mb-6">
        <iframe
          src="https://tally.so/r/b5ZZE7"
          title="Book Your Free Consultation"
          className="w-full border-0 rounded-lg"
          style={{ minHeight: "800px" }}
          allow="clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

