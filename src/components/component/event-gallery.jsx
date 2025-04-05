"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
// import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "./ui/dialog";
import Button from "../reusables/Button";
// import { Dialog, DialogContent } from "@/components/ui/dialog"

export function EventsGallery({ event, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{event.title} - Gallery</h2>
        <Button
          label={
            <>
              <X className="h-5 w-5" />
              <span className="sr-only">Close gallery</span>
            </>
          }
          variant="ghost"
          size="icon"
          onClick={onClose}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {event?.galleryImages?.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image?.image || "/placeholder.svg"}
              alt={`${event.title} gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent title={selectedImage?.title} className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative aspect-video w-full">
            {selectedImage && (
              <>
                <Image
                  src={selectedImage?.image || "/placeholder.svg"}
                  alt={selectedImage?.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm px-4 py-3">
                  <p className="text-white text-sm md:text-base font-medium text-center">
                    {selectedImage?.title}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
