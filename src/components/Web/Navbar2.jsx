import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Check, ChevronsUpDown } from "lucide-react"
 
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Navbar2 = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const frameworks = [
        {
          value: "next.js",
          label: "Next.js",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
        {
          value: "remix",
          label: "Remix",
        },
        {
          value: "astro",
          label: "Astro",
        },
      ]
  
  return (
    <>

    <div className="absolute top-20 left-0 w-full h-[7vh] flex flex-row items-center pr-10 opacity-80">
   <div className="flex justify-start pr-40 items-center flex-row">
  <ul className="pl-60 list-none flex gap-8 text-black text-lg font-bold">
    <li>Fruits</li>
    <li>Vegetables</li>
    <li>Fresh meat</li>
    <li>Milk Products</li>
    <li>Grocery</li>
  </ul>
</div>
     
      <div className="search-bar ml-4">
        <input
          type="text"
          placeholder="Search..."
          className="search-input pl-2 h-8 w-60 border border-gray-300 rounded-l text-black"
          />
        <button className="search-button h-8 w-16 text-white bg-black rounded-r">Search</button>
      </div>

    </div>
    <div>
  
 

    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  
    </div>
          </>
  );
}

export default Navbar2;
