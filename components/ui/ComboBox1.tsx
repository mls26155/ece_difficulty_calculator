"use client"

import React, { useState } from 'react'

import Issac from '@/components/ui/Issac'
import Berry from '@/components/ui/Berry'
import James from '@/components/ui/James'

import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { motion } from 'framer-motion';

const names = [
  { label: "EMPTY", value: "0" },
  { label: "MATH COURSE", value: "3.21" },
  { label: "LIBERAL ARTS COURSE", value: "2.22" },

  { label: "CS 112", value: "4.17" },
  { label: "CS 211", value: "3.18" },
  { label: "CS 471", value: "3.19" },

  { label: "ECE 101", value: "3.01" },

  { label: "ECE 201", value: "3.02" },
  { label: "ECE 231", value: "3.03" },
  { label: "ECE 232", value: "2.04" }, // mod
  { label: "ECE 240", value: "3.05" },
  { label: "ECE 285", value: "3.06" },
  { label: "ECE 286", value: "3.07" },

  { label: "ECE 321", value: "3.08" },
  { label: "ECE 333", value: "3.09" },
  { label: "ECE 334", value: "1.01" },
  { label: "ECE 340", value: "3.12" },
  { label: "ECE 350", value: "3.13" },

  { label: "ECE 445", value: "3.14" },
  { label: "ECE 447", value: "4.15" },
  { label: "ECE 448", value: "4.16" },

] as const

const FormSchema = z.object({
  name1: z.string({
    required_error: "Please select a class.",
  }),
  name2: z.string({
    required_error: "Please select a class.",
  }),
  name3: z.string({
    required_error: "Please select a class.",
  }),
  name4: z.string({
    required_error: "Please select a class.",
  }),
  name5: z.string({
    required_error: "Please select a class.",
  }),
  // Add additional classes here
})

export function ComboboxDemoForm() {

  const [sum, setSum] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const calculatedSum = 
      parseInt(data.name1, 10)
    + parseInt(data.name2, 10)
    + parseInt(data.name3, 10)
    + parseInt(data.name4, 10)
    + parseInt(data.name5, 10);

    console.log(`Calculated sum: ${calculatedSum}`);

    setSum(calculatedSum);
    setSubmissionCount(count => count + 1);
  }

  function renderComponentBasedOnSum() {
    const variants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    };
  
    const key = `component-${submissionCount}`;
  
    if (sum > 0 && sum < 8) {
      return (
        <motion.div
          key={key}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <James />
        </motion.div>
      );
    } else if (sum >= 8 && sum < 16) {
      return (
        <motion.div
          key={key}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <Issac />
        </motion.div>
      );
    } else if (sum >= 16) {
      return (
        <motion.div
          key={key}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <Berry />
        </motion.div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name1"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Class 1</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                          )}
                      >
                        {field.value
                          ? names.find(
                              (name1) => name1.value === field.value
                            )?.label
                          : "Select class"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search class..." />
                      <CommandEmpty>No class found.</CommandEmpty>
                      <CommandGroup>
                        {names.map((name1) => (
                          <CommandItem
                          value={name1.label}
                          key={name1.value}
                          onSelect={() => {
                              form.setValue("name1", name1.value)
                            }}
                            >
                            {name1.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="name2"
          render={({ field }) => (
              <FormItem className="flex flex-col">
              <FormLabel>Class 2</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                        )}
                        >
                      {field.value
                        ? names.find(
                          (name2) => name2.value === field.value
                          )?.label
                          : "Select class"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search class..." />
                    <CommandEmpty>No class found.</CommandEmpty>
                    <CommandGroup>
                      {names.map((name2) => (
                        <CommandItem
                        value={name2.label}
                          key={name2.value}
                          onSelect={() => {
                            form.setValue("name2", name2.value)
                          }}
                          >
                          {name2.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
              </FormItem>
            )}
          />
      {/* Add more classes here */}
      <FormField
          control={form.control}
          name="name3"
          render={({ field }) => (
              <FormItem className="flex flex-col">
              <FormLabel>Class 3</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                        )}
                        >
                      {field.value
                        ? names.find(
                          (name3) => name3.value === field.value
                          )?.label
                          : "Select class"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search class..." />
                    <CommandEmpty>No class found.</CommandEmpty>
                    <CommandGroup>
                      {names.map((name3) => (
                        <CommandItem
                        value={name3.label}
                          key={name3.value}
                          onSelect={() => {
                            form.setValue("name3", name3.value)
                          }}
                          >
                          {name3.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="name4"
          render={({ field }) => (
              <FormItem className="flex flex-col">
              <FormLabel>Class 4</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                        )}
                        >
                      {field.value
                        ? names.find(
                          (name4) => name4.value === field.value
                          )?.label
                          : "Select class"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search class..." />
                    <CommandEmpty>No class found.</CommandEmpty>
                    <CommandGroup>
                      {names.map((name4) => (
                        <CommandItem
                        value={name4.label}
                          key={name4.value}
                          onSelect={() => {
                            form.setValue("name4", name4.value)
                          }}
                          >
                          {name4.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="name5"
          render={({ field }) => (
              <FormItem className="flex flex-col">
              <FormLabel>Class 5</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                        )}
                        >
                      {field.value
                        ? names.find(
                          (name5) => name5.value === field.value
                          )?.label
                          : "Select class"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search class..." />
                    <CommandEmpty>No class found.</CommandEmpty>
                    <CommandGroup>
                      {names.map((name5) => (
                        <CommandItem
                        value={name5.label}
                          key={name5.value}
                          onSelect={() => {
                            form.setValue("name5", name5.value)
                          }}
                          >
                          {name5.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select 'NONE' if you are not taking additional classes.
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
          />
      {/* End */}
      <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className='my-4'>
        {renderComponentBasedOnSum()}
      </div>
    </div>
  )
}

export default ComboboxDemoForm