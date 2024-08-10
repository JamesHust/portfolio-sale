"use client";

import { TypewriterEffectSmooth } from "@/components/base/typewriter-effect";
import React, { useMemo, useRef } from "react";
import { FormCard } from "@/components/base/form-card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DatePicker } from "@/components/base/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";
import MagicButton from "@/components/base/magic-button";
import BookingSuccess, { IBookingSuccessRef } from "@/components/dialog/booking-success";

export function Contact() {
  const words = [
    {
      text: "Book",
    },
    {
      text: "meeting",
    },
    {
      text: "now!",
      className: "text-purple",
    },
  ];

  const defaultData = useMemo(() => {
    return {
      name: "",
      company: "",
      email: "",
      product: "",
      meetingTime: new Date(),
    };
  }, []);
  const bookingSuccessRef = useRef<IBookingSuccessRef | null>(null);

  const objSchema = z.object({
    name: z
      .string()
      .transform((value) => value.trim())
      .pipe(z.string().min(1, "The name is required")),
    company: z
      .string()
      .transform((value) => value.trim())
      .pipe(z.string().min(1, "The company is required")),
    email: z
      .string()
      .transform((value) => value.trim())
      .pipe(
        z.string().min(1, "The email is required").email({
          message: "The email is invalid format",
        })
      ),
    product: z
      .string()
      .transform((value) => value.trim())
      .pipe(z.string().min(1, "The product of interest is required")),
    meetingTime: z.date(),
  });

  type FormValues = z.infer<typeof objSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(objSchema),
    defaultValues: defaultData,
    mode: "all",
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    bookingSuccessRef.current?.show();
    form.reset(defaultData);
  };

  return (
    <section
      className="flex flex-col items-center justify-center pb-10 pr-2 md:pr-0"
      id="contact"
    >
      <div className="pt-32">
        <TypewriterEffectSmooth words={words} />
      </div>

      <div className="flex flex-col items-center justify-center mt-8 md:mt-10">
        <FormCard className="p-4 md:p-6 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6 my-4 px-0.5"
            >
              <div className="flex-1 w-full md:w-[500px] lg:w-[750px]">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 w-full">
                <div className="flex-1 min-w-full md:min-w-[220px] lg:min-w-[320px]">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your company</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1 min-w-full md:min-w-[220px] lg:min-w-[320px]">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1 min-w-full md:min-w-[220px] lg:min-w-[320px]">
                  <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product of interest</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a product" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="FPT.AI TOVA">FPT.AI TOVA</SelectItem>
                              <SelectItem value="FPT.AI Enhance">FPT.AI Enhance</SelectItem>
                              <SelectItem value="FPT Data Streaming Engine">FPT Data Streaming Engine</SelectItem>
                              <SelectItem value="FPT Search Engine Databases">FPT Search Engine Databases</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1 min-w-full md:min-w-[220px] lg:min-w-[320px]">
                  <FormField
                    control={form.control}
                    name="meetingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meeting time</FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-6 mt-2">
                <span className="text-slate-700 text-sm">We will contact you soon. Thank you!</span>
                <MagicButton
                  title="Book meeting"
                  icon={<Mail className="w-4 h-4" />}
                  position="right"
                  className="min-w-full max-w-full lg:min-w-[150px] lg:max-w-[250px] mt-0 md:mt-0"
                />
              </div>
            </form>
          </Form>
        </FormCard>
      </div>

      <BookingSuccess ref={bookingSuccessRef} />
    </section>
  );
}
