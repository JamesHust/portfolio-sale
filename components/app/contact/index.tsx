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
import BookingSuccess, { IBookingSuccessRef } from "@/components/dialog/booking-success";
import { Button } from "@/components/ui/button";

export function Contact() {
  const words = [
    {
      text: "Đặt",
    },
    {
      text: "lịch",
    },
    {
      text: "tư",
      className: "text-purple",
    },
    {
      text: "vấn!",
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
      className="flex flex-col items-center justify-center pb-10 pr-2 md:pr-0 px-4"
      id="contact"
    >
      <div className="pt-24 md:pt-[30vh]">
        <TypewriterEffectSmooth words={words} />
      </div>

      <div className="flex flex-col items-center justify-center mt-4 md:mt-10 text-slate-900">
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
                      <FormLabel>Họ tên</FormLabel>
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
                        <FormLabel>Tên công ty</FormLabel>
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
                        <FormLabel>Sản phẩm bạn quan tâm</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn sản phẩm" />
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
                        <FormLabel>Thời gian</FormLabel>
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
                <span className="text-white/60 text-sm">Chúng tôi sẽ phản hồi sớm nhất. Cảm ơn!</span>
                <Button
                  type="submit"
                  className="w-full h-10 md:h-12 text-white bg-gradient-to-r from-[#516dff] from-0% via-[#9e7ee1] via-70% to-[#fa92bd] to-100%"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Đặt lịch
                </Button>
              </div>
            </form>
          </Form>
        </FormCard>
      </div>

      <BookingSuccess ref={bookingSuccessRef} />
    </section>
  );
}
