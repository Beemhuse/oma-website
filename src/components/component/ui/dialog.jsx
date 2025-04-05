"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export const DialogPortal = ({ className, children, ...props }) => (
  <DialogPrimitive.Portal {...props}>
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}>
      {children}
    </div>
  </DialogPrimitive.Portal>
)

export const DialogOverlay = React.forwardRef(({ className = "", ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${className}`}
    {...props}
  />
))
DialogOverlay.displayName = "DialogOverlay"

export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description

export const DialogContent = React.forwardRef(
  ({ className = "", children, title = "Dialog", ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`relative z-50 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg outline-none ${className}`}
        {...props}
      >
        {/* Accessible but visually hidden title */}
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>

        {children}

        <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none">
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
)
DialogContent.displayName = "DialogContent"
