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
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Book Your Free Demo</DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-6 pt-0">
          <iframe 
            src="https://link.agency-vault.com/widget/booking/M2EOi3mDWD4gPBOgu3G6" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', height: '100%' }}
            scrolling="no" 
            id="M2EOi3mDWD4gPBOgu3G6_1752698890874"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};