"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof OurFileRouter;
}

export default function FileUpload({ onChange, endpoint }: FileUploadProps) {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res) {
          const url = res[0].ufsUrl;
          onChange(url);
        } else {
          onChange();
        }
      }}
      onUploadError={(error: Error) => {
        toast.error(`ERROR! ${error.message}`);
      }}
    />
  );
}
