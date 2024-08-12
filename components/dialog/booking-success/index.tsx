import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import animationData from "@/data/booking.json";
import Lottie from "react-lottie";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface IBookingSuccessRef {
  show(): void;
}

// eslint-disable-next-line react/display-name
const BookingSuccess = forwardRef<IBookingSuccessRef>((_, ref) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useImperativeHandle(ref, () => ({
    show() {
      setOpen(true);
    },
  }));

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent
        className="md:w-[500px] w-4/5 bg-white rounded-xl md:rounded-2xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Lottie options={defaultOptions} />
        <DialogHeader>
          <DialogTitle className="text-center">Booking Success</DialogTitle>
          <DialogDescription className="text-center">Your booking meeting was successful!</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-center sm:justify-center">
          <div className="flex items-center justify-center">
            <Button
              className="w-full h-10 md:h-12 min-w-28 text-white bg-gradient-to-r from-[#516dff] from-0% via-[#9e7ee1] via-70% to-[#fa92bd] to-100%"
              onClick={() => {
                setOpen(false);
                router.push("#about");
              }}
            >
              OK
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export default BookingSuccess;
