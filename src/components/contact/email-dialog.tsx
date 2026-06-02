"use client";

import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

interface EmailDialogProps {
  triggerLabel?: string;
  triggerClassName?: string;
}

export function EmailDialog({
  triggerLabel = "Email",
  triggerClassName = "inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted",
}: EmailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>
        <Mail className="h-4 w-4" />
        {triggerLabel}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Send me a message</DialogTitle>
          <DialogDescription>
            Drop the details below. Hits my inbox directly, I reply within
            hours.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
