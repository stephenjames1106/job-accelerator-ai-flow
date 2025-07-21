"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load the form embed script when modal opens
      const script = document.createElement('script');
      script.src = 'https://link.agency-vault.com/js/form_embed.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl scroll-none h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Book Your Free Demo</DialogTitle>
        </DialogHeader>
        <div className="px-4 py-2 pt-0 overflow-y-auto h-[70vh] scroll-none rounded-lg">
          <iframe 
            src="https://link.agency-vault.com/widget/booking/M2EOi3mDWD4gPBOgu3G6" 
            className="size-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; scroll-top; scroll-bottom"
            allowFullScreen
            id="M2EOi3mDWD4gPBOgu3G6_1752698890874"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};