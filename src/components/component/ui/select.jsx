"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export const Select = SelectPrimitive.Root;

export const SelectTrigger = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      <SelectPrimitive.Value />
      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = SelectPrimitive.Value;

export const SelectContent = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        side="bottom"
        className={`z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-sm shadow-lg ${className}`}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={`relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none focus:bg-gold-100 focus:text-gold-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-2 inline-flex items-center">
        <Check className="h-4 w-4 text-gold-600" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = "SelectItem";
