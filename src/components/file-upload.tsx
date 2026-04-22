"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: "courseImage" | "courseAttachment" | "chapterVideo";
}

export default function FileUpload({ onChange, endpoint }: FileUploadProps) {
  return (
    <UploadDropzone
      endpoint={endpoint}
      appearance={{
        container: "bg-slate-100 rounded-md p-4",
        button: "bg-black text-white",
      }}
      onClientUploadComplete={(res) => {
        const url = res?.[0]?.ufsUrl;

        if (url) {
          onChange(url);
        } else {
          onChange(undefined);
        }
      }}
      onUploadError={(error: Error) => {
        console.error(error);
        toast.error(`ERROR! ${error.message}`);
      }}
    />
  );
}
