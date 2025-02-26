"use client"

import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [file, setFile] = useState<File | null>(null)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Create", "Convert", "Sign"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    multiple: false,
  })

  return (
    <section className="gradient-bg py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Unified Platform;
            <br />
            <div className="flex items-center justify-center">
              <div className="relative">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-0 text-[#3B82F6] transition-all duration-300 
                      ${index === currentWord 
                        ? "top-0 opacity-100 transform-none" 
                        : "-top-8 opacity-0 transform"}`}
                  >
                    {word}
                  </span>
                ))}
                <span className="invisible">{words.reduce((a, b) => a.length > b.length ? a : b)}</span>
              </div>
              <span className="ml-4">Effortlessly</span>
            </div>
          </h1>

          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">NITA Approved</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">eIDAS Certified</span>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[600px]">
            <div
              {...getRootProps()}
              className={`
                rounded-lg border-2 border-dashed p-8 transition-colors
                ${isDragActive ? "border-primary bg-primary/5" : "border-gray-200"}
              `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center gap-4">
                <div className="flex w-full max-w-sm items-center gap-2">
                  <Input 
                    placeholder="Drop your file here" 
                    value={file?.name || ""} 
                    readOnly 
                    className="bg-white"
                  />
                  <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 gap-2">
                    <Upload className="h-4 w-4" />
                    Upload File
                  </Button>
                </div>
                <Button variant="secondary" className="gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Generate with AI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}