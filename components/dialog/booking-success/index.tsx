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
import MagicButton from "@/components/base/magic-button";
import { useRouter } from "next/navigation";

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
        className="md:w-[500px] w-4/5 bg-slate-950 rounded-xl md:rounded-2xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Lottie options={defaultOptions} />
        <DialogHeader>
          <DialogTitle className="text-center">Booking Success</DialogTitle>
          <DialogDescription className="text-center">Your booking meeting was successful!</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-center sm:justify-center">
          <div
            className="flex items-center justify-center"
            onClick={() => {
              setOpen(false);
              router.push("#about");
            }}
          >
            <MagicButton
              title="OK"
              icon={<></>}
              position="right"
              className="min-w-80px max-w-[150px]"
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export default BookingSuccess;
